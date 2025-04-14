import { FC } from 'react';
import { FeedPostProps } from '../../feed.interface';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import PostActionButtons from '@/components/common/post-action-button/post-action-button';

const FeedPost: FC<FeedPostProps> = ({
  name,
  role,
  content,
  likes,
  comments,
  mediaPost,
  shares,
  userImage,
  followers,
  mutual,
  userLike,
  userFollow,
  onOpenLikesModal,
  onOpenCommentsModal,
  onOpenSharesModal,
  onCommentClick,
  onLikeClick,
  onShareClick,
  isLoading,
}) => {
  const actionButtonStyles =
    'flex-center gap-x-3 py-3 w-full font-medium transition-all hover:bg-gray-100';
  return (
    <div>
      <div className="p-4 pb-3">
        <div className="flex justify-between items-start">
          <UserCard
            userImage={userImage}
            name={name}
            role={role}
            mutual={mutual}
            followers={`${followers}k`}
            classNames="mb-4"
          />
          <CustomButton
            styleType={
              userFollow
                ? CustomButtonTypes.PRIMARY
                : CustomButtonTypes.SECONDARY
            }
            className="heading-tertiary font-semibold rounded-[20px] !px-3.5 !py-1"
          >
            {userFollow ? 'Following' : 'Follow'}
          </CustomButton>
        </div>
        <p className="heading-tertiary">{content}</p>
      </div>

      {mediaPost}

      <div className="flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-5 border-b border-stroke-grey">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={Number(likes) > 0 ? onOpenLikesModal : undefined}
        >
          {likes} likes
        </CustomButton>
        <div className="flex items-center gap-x-4">
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            onClick={Number(comments) > 0 ? onOpenCommentsModal : undefined}
          >
            {comments} Comments
          </CustomButton>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            onClick={Number(shares) > 0 ? onOpenSharesModal : undefined}
          >
            {shares} Shares
          </CustomButton>
        </div>
      </div>

      <PostActionButtons
        classNames="text-sm px-2"
        userLike={userLike}
        onLikeClick={onLikeClick}
        onCommentClick={onCommentClick}
        onShareClick={onShareClick}
        isLoading={isLoading}
        actionButtonStyles={actionButtonStyles}
      />
    </div>
  );
};

export default FeedPost;
