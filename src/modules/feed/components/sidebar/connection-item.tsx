import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import PrimaryImage from '@/components/common/primary-image/primary-image';

const ConnectionItem: FC = () => (
  <div className="flex items-start gap-x-3 px-3">
    <PrimaryImage
      src="/profile.png"
      width={40}
      height={40}
      alt="Connection"
      className="rounded-full w-[30px] h-[30px] mt-2"
    />
    <div className="space-y-3">
      <div className="flex flex-col gap-[0.375rem]">
        <h2 className="heading-tertiary font-semibold">Marcus Hyatt</h2>
        <p className="text-description text-dark-grey max-w-[200px]">
          Climate Scientists a Massachusetts Institute of Technology
        </p>
        <div className="flex items-center text-description  text-secondary-grey">
          <span className="pr-2 text-secondary-grey text-xs border-r border-stroke-grey">
            2 Mutual
          </span>
          <span className="pl-2 text-secondary-grey text-xs">
            1.2k Followers
          </span>
        </div>
      </div>
      <CustomButton
        styleType={CustomButtonTypes.SECONDARY}
        className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
      >
        Follow
      </CustomButton>
    </div>
  </div>
);

export default ConnectionItem;
