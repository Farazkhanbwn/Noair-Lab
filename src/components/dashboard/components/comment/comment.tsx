import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { CommentProps } from './comment.types';
import { formatNumber } from '@/utils/feed/feed';
import { Button } from '@/components/ui/button';

const Comment: FC<CommentProps> = ({
  name,
  role,
  comment,
  time,
  followers,
  mutual,
  className = 'px-5',
  isEditing = false,
  editedContent,
  onEditClick,
  onContentChange,
  onSaveClick,
  totalLikes = 0,
  isLiked,
  onLikeClick,
  onReplyClick,
}) => {
  return (
    <div className={`flex items-start gap-x-3 ${className}`}>
      <PrimaryImage
        width={32}
        height={32}
        src="/images/comment-profile-image.png"
        alt={name}
        className="rounded-full w-[32px] h-[32px]"
      />
      <div>
        <h4 className="font-medium text-black heading-tertiary">{name}</h4>
        <p className="text-description text-secondary-grey">{role}</p>
        <div className="flex items-center text-description my-0.5 text-secondary-grey">
          <span className="pr-2 text-secondary-grey text-xs border-r border-stroke-grey">
            {mutual} Mutual
          </span>
          <span className="pl-2 text-secondary-grey text-xs">
            {formatNumber(followers)} Followers
          </span>
        </div>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={onContentChange}
            className='className="w-full p-2 border bg-light-grey border-gray-300 rounded-sm mb-0'
          />
        ) : (
          <p>{comment}</p>
        )}

        <div>
          {isEditing && (
            <>
              <Button
                onClick={onSaveClick}
                className="text-pure-white rounded-sm"
                variant="default"
                size="sm"
              >
                Save
              </Button>
              <Button
                onClick={onEditClick}
                variant="outline"
                size="sm"
                className="text-gray-500 ml-2 rounded-sm"
              >
                Cancel
              </Button>
            </>
          )}
        </div>
        <div className="text-description font-medium text-secondary-grey mt-1 flex items-center gap-x-2">
          {time}
          <div className="flex items-center gap-x-1">
            <CustomButton
              onClick={onLikeClick}
              className={`${isLiked ? 'text-primary' : ''}`}
              styleType={CustomButtonTypes.TERTIARY}
            >
              Like {totalLikes ? `(${totalLikes})` : ''}
            </CustomButton>
            <hr className="w-[1px] h-[10px] bg-secondary-grey" />
            <CustomButton
              onClick={onReplyClick}
              styleType={CustomButtonTypes.TERTIARY}
            >
              Reply
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
