import React, { FC } from 'react';
import { Info } from 'lucide-react';

import CustomSelect from '@/components/common/custom-select/custom-select';
import { UNIVERSITIES } from '@/constants/verify-user/verify-user';
import TooltipWrapper from '@/components/common/tooltip-wrapper/tooltip-wrapper';
import CircleTickIcon from '@/components/icons/auth/circle-tick-icon';
import { VerifyUserCardProps } from '../verify-user-type.interface';
import Link from '@/components/common/custom-link/custom-link';
import { CustomLinkTypes } from '@/components/common/custom-link/custom-link.types';

const PrivateBetaCard: FC<VerifyUserCardProps> = ({ isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`border ${
        isSelected
          ? 'relative border-primary-color'
          : 'border-stroke-grey cursor-pointer'
      } rounded-xl mt-1 bg-black p-4 shadow-[0_0_15px_rgba(0,0,255,0.1)] w-full max-w-md`}
    >
      {isSelected && (
        <CircleTickIcon
          width={22}
          height={22}
          className="absolute top-[-10px] left-[-10px]"
        />
      )}
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          Private Beta User
        </h2>

        <TooltipWrapper
          content="Eligible UNIVERSITIES are members of the Ivy Plus Libraries Confederation."
          className="max-w-[200px] px-2 py-6 text-center rounded-3xl !bg-[#373737]"
        >
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer" />
        </TooltipWrapper>
      </div>
      <p className="text-gray-300 text-sm sm:text-base mb-4">
        Join Noair Lab as a Private Beta User!
      </p>

      <CustomSelect
        options={UNIVERSITIES}
        placeholder="Select your university"
        className="mb-4 max-w-[21rem]"
        onChange={value => console.log('value are : ', value)}
      />

      <Link
        href={'/private-beta-user'}
        styleType={CustomLinkTypes.PRIMARY}
        className="!px-0 max-w-[10rem] w-full"
      >
        Join Private Beta
      </Link>
    </div>
  );
};

export default PrivateBetaCard;
