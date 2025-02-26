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
    <div className="space-y-1">
      <h2 className="heading-tertiary font-semibold">Marcus Hyatt</h2>
      <p className="text-description text-dark-grey max-w-[200px]">
        Climate Scientists a Massachusetts Institute of Technology
      </p>
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
