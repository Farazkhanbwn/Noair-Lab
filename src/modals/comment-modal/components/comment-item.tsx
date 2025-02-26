import { FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { CommentItemProps } from '../comments.types';

const CommentItem: FC<CommentItemProps> = ({
  heading,
  designation,
  description,
}) => (
  <div className="flex items-start gap-x-3">
    <PrimaryImage
      width={32}
      height={32}
      src="/Ellipse 24.svg"
      alt="User Avatar"
      className="rounded-full w-[32px] h-[32px]"
    />
    <div>
      <h2 className="font-medium text-black heading-tertiary">{heading}</h2>
      <p className="text-description text-secondary-grey">{designation}</p>
      <p className="text-description">{description}</p>
      <div className="text-description text-secondary-grey mt-1 flex items-center gap-x-2 font-medium">
        1h
        <div className="flex items-center gap-x-1.5">
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

export default CommentItem;
