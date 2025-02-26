import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { CommentProps } from './comment.types';
import { formatNumber } from '@/utils/feed/feed';

const Comment: FC<CommentProps> = ({
  name,
  role,
  comment,
  time,
  followers,
  mutual,
  className = 'px-5 mt-3',
}) => (
  <div className={`flex items-start gap-x-3 ${className}`}>
    <PrimaryImage
      width={32}
      height={32}
      src="/Ellipse 24.svg"
      alt={name}
      className="rounded-full w-[32px] h-[32px]"
    />
    <div>
      <h4 className="font-medium text-black heading-tertiary">{name}</h4>
      <p className="text-description text-secondary-grey">{role}</p>
      <div className="flex items-center text-description my-0.5 text-secondary-grey">
        <span className="pr-2 border-r border-stroke-grey">
          {mutual} Mutual
        </span>
        <span className="pl-2">{formatNumber(followers)} Followers</span>
      </div>
      <p className="text-description">{comment}</p>
      <div className="text-description font-medium text-secondary-grey mt-1 flex items-center gap-x-2">
        {time}
        <div className="flex items-center gap-x-1">
          <CustomButton styleType={CustomButtonTypes.TERTIARY}>
            Like
          </CustomButton>
          <hr className="w-[1px] h-[10px] bg-secondary-grey" />
          <CustomButton styleType={CustomButtonTypes.TERTIARY}>
            Reply
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
);

export default Comment;
