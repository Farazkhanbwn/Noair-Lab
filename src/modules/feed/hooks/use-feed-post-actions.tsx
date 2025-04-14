import {
  useAddComment,
  useLikePost,
  useUnLikePost,
} from '@/service/feed-service/feed-service';
import { handleRequestError } from '@/utils/toast-utils';
import { useAppDispatch } from '@/store/hooks';
import {
  toggleLike,
  updateCommentLikeStatus,
} from '@/store/slices/feed-slice/feed-slice';
import { fetchMoreComments } from '@/store/slices/feed-slice/feed-thunks';
import { useState } from 'react';

export const useFeedPostActions = (postId: number) => {
  const dispatch = useAppDispatch();
  useAddComment();
  const { mutateAsync: likePost } = useLikePost();
  const { mutateAsync: unLikePost } = useUnLikePost();
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentClickDisabled, setIsCommentClickDisabled] = useState(false);

  const handleLikePost = async () => {
    setIsLoading(true);
    dispatch(toggleLike({ postId }));
    try {
      await likePost({ postId });
    } catch (err) {
      dispatch(toggleLike({ postId }));
      handleRequestError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlikePost = async () => {
    setIsLoading(true);
    dispatch(toggleLike({ postId }));
    try {
      await unLikePost({ id: postId, type: 'post' });
    } catch (err) {
      dispatch(toggleLike({ postId }));
      handleRequestError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getMorePostComments = async (cursor: string) => {
    dispatch(fetchMoreComments({ postId, cursor }));
  };

  // const addCommentLike = async (itemId: string, commentId: string) => {
  //   try {
  //     await axios.post(`/api/comment/${commentId}/like`, { itemId });
  //     dispatch(addCommentLikeToStore({ itemId, commentId }));
  //   } catch (err) {
  //     console.error('Error liking comment:', err);
  //   }
  // };

  // const removeCommentLike = async (itemId: string, commentId: string) => {
  //   try {
  //     await axios.delete(`/api/comment/${commentId}/like`, {
  //       data: { itemId },
  //     });
  //     dispatch(removeCommentLikeFromStore({ itemId, commentId }));
  //   } catch (err) {
  //     console.error('Error unliking comment:', err);
  //   }
  // };

  const handleCommentLike = async (
    isLike: boolean,
    postId: number,
    commentId: number
  ) => {
    setIsCommentClickDisabled(true);
    dispatch(updateCommentLikeStatus({ postId, commentId, isLiked: !isLike }));
    try {
      if (isLike) {
        await unLikePost({ id: commentId, type: 'comment' });
        dispatch(
          updateCommentLikeStatus({ postId, commentId, isLiked: false })
        );
      } else {
        await likePost({ commentId });
        dispatch(updateCommentLikeStatus({ postId, commentId, isLiked: true }));
      }
    } catch (error) {
      dispatch(updateCommentLikeStatus({ postId, commentId, isLiked: isLike }));
      handleRequestError(error);
    } finally {
      setIsCommentClickDisabled(false);
    }
  };

  return {
    isLoading,
    isCommentClickDisabled,
    handleCommentLike,
    handleLikePost,
    handleUnlikePost,
    getMorePostComments,
  };
};
