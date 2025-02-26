import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import React, { FC } from 'react';

interface AddPostProps {
  onCreatePost: () => void;
  classNames?: string;
}

const AddPost: FC<AddPostProps> = ({ onCreatePost, classNames }) => {
  return (
    <div className={`bg-white rounded-[20px] ${classNames}`}>
      <h3 className="heading-secondary p-5 pb-3 border-b border-stroke-grey text-black font-semibold">
        New Feed
      </h3>
      <div className="flex items-center gap-x-8 p-5">
        <PrimaryImage
          width={42}
          height={42}
          src="/Ellipse 24.svg"
          alt="Profile"
          className="rounded-full w-[42px] h-[42px]"
        />
        <input
          name="addPost"
          type="text"
          placeholder="Write your update here..."
          className="w-full text-black m-0 text-sm border-none focus:outline-none flex-2 focus:ring-0"
        />
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onCreatePost}
        >
          <img
            src="/file_upload.svg"
            alt="Upload"
            className="max-w-[16px] h-[16px] ml-auto"
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default AddPost;
