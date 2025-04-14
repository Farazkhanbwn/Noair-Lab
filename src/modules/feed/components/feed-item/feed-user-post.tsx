import React, { FC, useState } from 'react';
import FeedPost from './feed-post';
import PostMedia from './components/post-media/post-media';
import SearchBar from './search-bar';
import Comment from '@/components/dashboard/components/comment/comment';
import { FeedPostItem, UserComment } from '@/types/feed-user';
import LikesModal from '@/modals/like-modal/user-likes';
import CommentModal from '@/modals/comment-modal/comments';
import PostDetailedModal from '@/modals/feed/post-detailed-modal/post-detailed-modal';
import {
  useAddComment,
  useDeleteComment,
  useUpdateComment,
} from '@/service/feed-service/feed-service';
import { handleRequestError } from '@/utils/toast-utils';
import moment from 'moment';
import UserCommentItem from './user-comments';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { useFeedPostActions } from '../../hooks/use-feed-post-actions';
import { updateCommentCount } from '@/store/slices/feed-slice/feed-slice';
import { useAppDispatch } from '@/store/hooks';
import { useFollowing } from '../../feed.hooks';

interface FeedUserPostProps {
  item: FeedPostItem;
}

const FeedUserPost: FC<FeedUserPostProps> = ({ item }) => {
  const {
    getMorePostComments,
    handleLikePost,
    handleUnlikePost,
    handleCommentLike,
    isLoading,
    isCommentClickDisabled,
  } = useFeedPostActions(item.id);
  const { mutateAsync, isPending } = useAddComment();
  // const { mutateAsync: getPostComments } = useGetPostComments();
  const { mutateAsync: deleteComment } = useDeleteComment();
  const { mutateAsync: updateComment } = useUpdateComment();

  const dispatch = useAppDispatch();

  const [likeModal, setLikeModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [isImagePreviewModal, setIsImagePreview] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [newComments, setNewComments] = useState<UserComment[]>([]);
  const [isEditable, setIsEditable] = useState(false);
  const { createFollowing } = useFollowing();

  const handleSend = async () => {
    try {
      const newComment = await mutateAsync({
        postId: item.id,
        content: inputValue,
      });

      setNewComments(prevComments => [newComment, ...prevComments]);
      setInputValue('');
      dispatch(updateCommentCount({ postId: item.id, value: +1 }));
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment({ postId: item.id, commentId });
      setNewComments(prevComments =>
        prevComments.filter(comment => comment.id !== commentId)
      );
      dispatch(updateCommentCount({ postId: item.id, value: -1 }));
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleSaveEditingText = async (content: string, commentId: number) => {
    try {
      // Send the updated content to the server
      await updateComment({ commentId, postId: item.id, content });

      // Update the local state by mapping over the existing comments
      setNewComments(prevComments =>
        prevComments.map(comment =>
          comment.id === commentId ? { ...comment, content } : comment
        )
      );
      setIsEditable(false);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const getImageUrls = () => {
    return item.files
      .filter(file => file.fileType === 'image') // Filter for image files
      .map(imageFile => imageFile.url); // Extract the URL of each image file
  };

  const followUnfollowHandler = ({
    action,
    userId,
  }: {
    action: string;
    userId: string | number;
  }) => {
    if (action == 'follow') {
      createFollowing(userId);
    }
  };

  return (
    <>
      <div key={item.id} className="bg-pure-white rounded-[20px]">
        <FeedPost
          name={item.user.name}
          role={item.user.specialization}
          time={''}
          userFollow={item.user.userFollow}
          userLike={item.userLike}
          content={item.content}
          likes={item.totalLikeCount || 0}
          comments={item.totalCommentCount || 0}
          shares={item.totalShareCount || 0}
          userImage={item.user.profileImageUrl || '/images/feed-profile.png'}
          mediaPost={
            <PostMedia
              files={item.files}
              onImageClick={() => setIsImagePreview(true)}
            />
          }
          followers={item.user.totalFollowersCount}
          mutual={item.user.mutualCount || 0}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => console.log('comment modal open')}
          onOpenSharesModal={() => console.log('share button clicked')}
          onCommentClick={() => console.log('Comment Click')}
          onLikeClick={item.userLike ? handleUnlikePost : handleLikePost}
          onShareClick={() => console.log('Share Click')}
          followUnfollowHandler={followUnfollowHandler}
          userId={item.user.id}
          isLoading={isLoading}
        />

        <SearchBar
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onSend={handleSend}
          isSending={isPending}
        />
        {newComments.length > 0 && (
          <div className="flex flex-col gap-2 mb-2 px-5">
            {newComments.map(comment => (
              <div key={comment.id}>
                <UserCommentItem
                  isEditable={isEditable}
                  onSave={content => handleSaveEditingText(content, comment.id)}
                  onCancal={() => setIsEditable(false)}
                  comment={comment}
                  onLikeClick={() =>
                    handleCommentLike(
                      comment.user.userLiked,
                      item.id,
                      comment.id
                    )
                  }
                  isLiked={comment.user.userLiked}
                  handleDeleteComment={handleDeleteComment}
                  mutualCount={comment.user.mutualCount}
                  totalFollowers={comment.user.totalFollowersCount}
                />
              </div>
            ))}
          </div>
        )}

        {item.comments.length > 0 && (
          <div className="flex flex-col gap-2 mb-2">
            {item.comments.map(comment => (
              <Comment
                key={comment.id}
                name={comment.user.name}
                role={comment.specialization}
                comment={comment.content}
                isLiked={comment.user.userLiked}
                onLikeClick={() =>
                  handleCommentLike(comment.user.userLiked, item.id, comment.id)
                }
                totalLikes={comment.totalLikes}
                time={moment.utc(comment.createdAt).fromNow()}
                followers={comment.user.totalFollowersCount}
                mutual={comment.user.mutualCount}
                isLoading={isCommentClickDisabled}
              />
            ))}
          </div>
        )}

        {item.hasMoreComments && (
          <CustomButton
            onClick={() => getMorePostComments(item.nextCursor)}
            styleType={CustomButtonTypes.TERTIARY}
            className="text-description font-medium text-primary-color underline m-4"
          >
            View more comments
          </CustomButton>
        )}
      </div>

      <LikesModal
        isOpen={likeModal}
        onClose={() => setLikeModal(false)}
        title="Likes"
        postId={item.id}
      />

      <CommentModal
        isOpen={commentModal}
        title="Comments"
        onClose={() => setCommentModal(false)}
      />

      <PostDetailedModal
        open={isImagePreviewModal}
        images={getImageUrls()}
        post={item}
        onCloseModal={() => setIsImagePreview(false)}
      />
    </>
  );
};

export default FeedUserPost;
