import React, { FC } from 'react';
import LikeIcon from '@/components/icons/user/feed/like-icon';
import CustomButton from '../custom-button/custom-button';
import { CustomButtonTypes } from '../custom-button/custom-button.types';

interface PostActionButtonsProps {
  userLike: boolean;
  onLikeClick: () => void;
  onCommentClick: () => void;
  onShareClick: () => void;
  actionButtonStyles: string;
  classNames?: string;
}

const PostActionButtons: FC<PostActionButtonsProps> = ({
  userLike,
  onLikeClick,
  onCommentClick,
  onShareClick,
  actionButtonStyles,
  classNames,
}) => {
  return (
    <div className={`flex justify-between ${classNames}`}>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className={`${actionButtonStyles}`}
        onClick={onLikeClick}
      >
        <LikeIcon
          strokeColor={userLike ? '#fff' : 'black'}
          fillColor={userLike ? '#0029FA' : 'white'}
        />
        Like
      </CustomButton>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className={actionButtonStyles}
        onClick={onCommentClick}
      >
        <img src="/comment.svg" alt="comment icon" /> Comment
      </CustomButton>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className={actionButtonStyles}
        onClick={onShareClick}
      >
        <img src="/share.svg" alt="share icon" /> Share
      </CustomButton>
    </div>
  );
};

export default PostActionButtons;
