'use client';

import { ThumbsUp, ThumbsDown, Pin, Share2 } from 'lucide-react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

const DiscussionPost = () => {
  return (
    <div>
      <div className="space-y-2 px-4">
        {/* Author Info */}
        <div className="flex items-center space-x-2">
          <PrimaryImage
            width={40}
            height={40}
            src="/profile-person.png"
            alt="Author avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center heading-tertiary font-medium text-secondary-grey">
            <span>Posted by</span>
            <span className="text-blue-600 mx-1 pr-1 border-r">Jhon Doe</span>
            <span>3m ago</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="heading-tertiary">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sit tempus duis egestas
            molestie. Ultrices quis et ultrices consectetur ultricies. Volutpat
            urna est. Pellentesque accumsan hendrerit augue id in phasellus
            mauris tincidunt dolor. Aliquam posuere massa ullamcorper et
            pulvinar malesuada commodo cursus dolor. Viverra amet.
          </p>
        </div>

        {/* Tags */}
        <div className="flex text-description font-medium space-x-2">
          <span className="bg-light-blue rounded-[2px] px-2 py-0.5">
            #research
          </span>
          <span className="bg-light-blue rounded-[2px] px-2 py-0.5">
            #university
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-between xs:justify-start gap-2 xs:gap-0 xs:flex-nowrap items-center text-description pt-2 divide-x-0 xs:divide-x-2 divide-stroke-grey">
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Useful</span>
          </CustomButton>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
          >
            <ThumbsDown className="w-4 h-4" />
            <span>Not Useful</span>
          </CustomButton>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
          >
            <Pin className="w-4 h-4" />
            <span>Pin</span>
          </CustomButton>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </CustomButton>
        </div>
      </div>
      <hr className="border-t-2 border-light-grey my-4" />
    </div>
  );
};

export default DiscussionPost;
