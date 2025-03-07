import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import { ProfilePostProps } from '../../../../modules/(user)/profile/profile.types';
import PostOptions from './post-options';

const ProfilePost: FC<ProfilePostProps> = ({
  isPinned,
  name,
  role,
  content,
  image,
  likes,
  comments,
  shares,
  userImage,
  mutual,
  followers,
  onOpenLikesModal,
  onOpenCommentsModal,
  onOpenSharesModal,
}) => (
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
        {isPinned ? (
          <CustomButton
            styleType={CustomButtonTypes.SECONDARY}
            className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
          >
            Follow
          </CustomButton>
        ) : (
          <PostOptions />
        )}
      </div>
      <p className="heading-tertiary">{content}</p>
    </div>
    {image && <img src={image} alt="Post visual" className="w-full" />}
    <div className="flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-5 border-b border-stroke-grey">
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        onClick={onOpenLikesModal}
      >
        {likes} likes
      </CustomButton>
      <div className="flex items-center gap-x-4">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onOpenCommentsModal}
        >
          {comments} Comments
        </CustomButton>
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onOpenSharesModal}
        >
          {shares} Shares
        </CustomButton>
      </div>
    </div>
    <div className="flex justify-between text-sm">
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className="flex-center gap-x-3 py-3 flex-1"
      >
        <img src="/like.svg" alt="like icon" /> Like
      </CustomButton>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className="flex-center gap-x-3 py-3 flex-1"
      >
        <img src="/comment.svg" alt="comment icon" /> Comment
      </CustomButton>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className="flex-center gap-x-3 py-3 flex-1"
      >
        <img src="/share.svg" alt="share icon" /> Share
      </CustomButton>
    </div>
  </div>
);

export default ProfilePost;
