/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import Modal from '@/components/common/Modal';
import { DialogProps } from '@/types';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import SearchBar from '@/modules/feed/components/feed-item/search-bar';
import Comment from '@/components/dashboard/components/comment/comment';
import CrossIcon from '@/components/icons/cross-icon';
import CheckIcon from '@/components/icons/user/feed/check-icon';
import PostImageDisplay from './components/post-image-display';
import useWindowDimensions from '@/hooks/use-window-dimenstion';
import { FeedPostItem, UserComment } from '@/types/feed-user';
import { useFeedPostActions } from '@/modules/feed/hooks/use-feed-post-actions';
import PostActionButtons from '@/components/common/post-action-button/post-action-button';
import UserCommentItem from '@/modules/feed/components/feed-item/user-comments';
import { handleRequestError } from '@/utils/toast-utils';
import {
  useAddComment,
  useDeleteComment,
  useUpdateComment,
} from '@/service/feed-service/feed-service';
import { useAppDispatch } from '@/store/hooks';
import { updateCommentCount } from '@/store/slices/feed-slice/feed-slice';
import moment from 'moment';

interface PostDetailedModalProps extends DialogProps {
  classNames?: string;
  images?: string[];
  post: FeedPostItem;
}

const PostDetailedModal: FC<PostDetailedModalProps> = ({
  open,
  onCloseModal,
  classNames,
  post,
  images = ['/images/post-background.png', '/images/post-background.png'],
}) => {
  const { getMorePostComments, handleLikePost, handleUnlikePost } =
    useFeedPostActions(post.id);
  const { mutateAsync, isPending } = useAddComment();
  // const { mutateAsync: getPostComments } = useGetPostComments();
  const { mutateAsync: deleteComment } = useDeleteComment();
  const { mutateAsync: updateComment } = useUpdateComment();

  const dispatch = useAppDispatch();

  const { width, height } = useWindowDimensions();
  const dynamicHeight = height ? height - 150 : 500;
  const [inputValue, setInputValue] = useState('');
  const [newComments, setNewComments] = useState<UserComment[]>([]);
  const [isEditable, setIsEditable] = useState(false);

  const actionButtonStyles =
    'flex-center gap-x-3 py-3 w-full font-medium transition-all hover:bg-gray-100';

  const modalStyles = {
    modal: {
      maxHeight: `${dynamicHeight}px`,
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '1200px',
      width: '100%',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  const handleSend = async () => {
    try {
      const newComment = await mutateAsync({
        postId: post.id,
        content: inputValue,
      });
      setNewComments(prevComments => [newComment, ...prevComments]);
      dispatch(updateCommentCount({ postId: post.id, value: +1 }));
      setInputValue('');
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment({ postId: post.id, commentId });
      setNewComments(prevComments =>
        prevComments.filter(comment => comment.id !== commentId)
      );
      dispatch(updateCommentCount({ postId: post.id, value: -1 }));
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleSaveEditingText = async (content: string, commentId: number) => {
    try {
      // Send the updated content to the server
      await updateComment({ commentId, postId: post.id, content });

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

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className={`bg-pure-white row h-full w-full ${classNames}`}>
        <div
          className={`flex flex-col md:flex-row h-full max-h-[${dynamicHeight}px]`}
        >
          {/* Left side - Image */}
          <PostImageDisplay
            images={images}
            className={`bg-[#1b1f23] !flex-1 max-h-[${dynamicHeight}px] max-w-[100%] md:max-w-[50%] h-full`}
          />

          {/* Right side - Content */}
          <div className="flex flex-col flex-1 h-full">
            <div className="flex justify-between items-start p-3">
              <div className="flex justify-between items-start">
                <UserCard
                  userImage={
                    post.user.profileImageUrl || '/images/feed-profile.png'
                  }
                  name={post.user.name}
                  role={post.user.specialization}
                  mutual={post.user.mutualCount}
                  followers={`${post.user.totalFollowersCount}k`}
                />
              </div>

              <div className="flex-between gap-2">
                <CustomButton
                  styleType={CustomButtonTypes.SECONDARY}
                  className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
                >
                  Follow
                </CustomButton>
                <CustomButton
                  styleType={CustomButtonTypes.TERTIARY}
                  className="hidden md:block p-2.5 hover:bg-light-grey-100 transition-colors cursor-pointer shadow-lg bg-light-grey rounded-full"
                  onClick={onCloseModal}
                >
                  <CrossIcon width={14} height={14} color={'#444'} />
                </CustomButton>
              </div>
            </div>

            <div
              className={`flex-1 bg-pure-white md:max-h-[${dynamicHeight}px] h-full overflow-y-scroll`}
            >
              <div className="heading-tertiary">
                {post.content && <p className="mt-2 ml-2">{post.content}</p>}

                <div className="flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-4 border-b border-stroke-grey mt-4">
                  <CustomButton
                    styleType={CustomButtonTypes.TERTIARY}
                    // onClick={onOpenLikesModal}
                  >
                    {post.totalLikeCount || 0} likes
                  </CustomButton>
                  <div className="flex items-center gap-x-4">
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      //   onClick={onOpenCommentsModal}
                    >
                      {post.totalCommentCount || 0} Comments
                    </CustomButton>
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      //   onClick={onOpenSharesModal}
                    >
                      {post.totalShareCount || 0} Shares
                    </CustomButton>
                  </div>
                </div>
                <div className="px-5">
                  <PostActionButtons
                    classNames="text-sm"
                    userLike={post.userLike}
                    onLikeClick={
                      post.userLike ? handleUnlikePost : handleLikePost
                    }
                    onCommentClick={() => console.log('comment is clicked')}
                    onShareClick={() => console.log('share button is clicked')}
                    actionButtonStyles={actionButtonStyles}
                  />

                  <SearchBar
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onSend={handleSend}
                    isSending={isPending}
                    className="!px-0 mt-2"
                  />
                  {newComments.length > 0 && (
                    <div className="flex flex-col gap-2 mb-2">
                      {newComments.map(comment => (
                        <div key={comment.id}>
                          <UserCommentItem
                            isEditable={isEditable}
                            onSave={content =>
                              handleSaveEditingText(content, comment.id)
                            }
                            totalFollowers={
                              comment.user.totalFollowersCount || 0
                            }
                            mutualCount={comment.user.mutualCount || 0}
                            onCancal={() => setIsEditable(false)}
                            comment={comment}
                            isLiked={false}
                            onLikeClick={() => console.log('like is clicked')}
                            handleDeleteComment={handleDeleteComment}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comments */}

                  {post.comments.length > 0 &&
                    post.comments.map(comment => (
                      <Comment
                        key={comment.id}
                        name={comment.user.name}
                        role={comment.specialization ?? ''}
                        comment={comment.content}
                        time={moment.utc(comment.createdAt).fromNow()}
                        className="px-0 py-2"
                        followers={comment.user.totalFollowersCount || 0}
                        mutual={comment.user.mutualCount || 0}
                        totalLikes={comment.totalLikes || 0}
                      />
                    ))}

                  {post.hasMoreComments && (
                    <CustomButton
                      onClick={() => getMorePostComments(post.nextCursor)}
                      styleType={CustomButtonTypes.TERTIARY}
                      className="text-description font-medium text-primary-color underline m-4"
                    >
                      View more comments
                    </CustomButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PostDetailedModal;
