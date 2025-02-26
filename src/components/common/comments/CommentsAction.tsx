import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { CustomButtonTypes } from '../custom-button/custom-button.types';

interface PostActionsProps {
  likes: number;
  comments: number;
  shares: number;
  onOpenLikesModal: () => void;
  onOpenCommentsModal: () => void;
  onOpenSharesModal: () => void;
  btnClassName?: string;
  actionBtnBoxClassName?: string;
}

const CommentsAction: React.FC<PostActionsProps> = ({
  likes,
  comments,
  shares,
  onOpenLikesModal,
  onOpenCommentsModal,
  onOpenSharesModal,
  btnClassName = 'flex-1',
  actionBtnBoxClassName = '',
}) => {
  return (
    <div>
      {/* Top Section */}
      <div
        className={`flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-5 border-b border-stroke-grey ${actionBtnBoxClassName}`}
      >
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

      {/* Bottom Actions */}
      <div className={`flex justify-between text-sm ${actionBtnBoxClassName}`}>
        {[
          { label: 'Like', icon: '/like.svg' },
          { label: 'Comment', icon: '/comment.svg' },
          { label: 'Share', icon: '/share.svg' },
        ].map(({ label, icon }) => (
          <CustomButton
            key={label}
            styleType={CustomButtonTypes.TERTIARY}
            className={`flex-center gap-x-3 py-3 ${btnClassName}`}
          >
            <img src={icon} alt={`${label} icon`} />
            {label}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default CommentsAction;
