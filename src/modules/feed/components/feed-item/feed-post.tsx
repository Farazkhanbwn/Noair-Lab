import { FC } from 'react';
import { FeedPostProps } from '../../feed.interface';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import UserCard from '@/components/dashboard/components/user-card/user-card';

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
  time,
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
          timeStamp={time}
        />
        <CustomButton
          styleType={CustomButtonTypes.SECONDARY}
          className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
        >
          Follow
        </CustomButton>
      </div>
      <p className="heading-tertiary">{content}</p>
    </div>

    {mediaPost}
    {/* {image && (
      <PrimaryImage
        width={600}
        height={200}
        src={image}
        alt="Post visual"
        onClick={onImageClick}
        className="w-full h-full min-h-[200px] cursor-pointer"
      />
    )} */}
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

export default FeedPost;
