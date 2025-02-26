import React, { FC } from 'react';
import { Info } from 'lucide-react';
import { VerifyUserCardProps } from '../verify-user-type.interface';
import CircleTickIcon from '@/components/icons/auth/circle-tick-icon';
import Link from '@/components/common/custom-link/custom-link';
import { CustomLinkTypes } from '@/components/common/custom-link/custom-link.types';

const WaitlistCard: FC<VerifyUserCardProps> = ({ isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`border ${
        isSelected
          ? 'relative border-primary-color'
          : 'border-stroke-grey cursor-pointer'
      } rounded-xl bg-black p-4 shadow-[0_0_15px_rgba(0,0,255,0.1)] w-full max-w-md`}
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
          Waitlist User
        </h2>
        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>
      <p className="text-gray-300 text-sm sm:text-base mb-4">
        Join our waitlist and be among the first to experience Noair Lab!
      </p>
      <Link
        href={'/wait-listed-user'}
        styleType={CustomLinkTypes.PRIMARY}
        className="!px-0 max-w-[10rem] w-full"
      >
        Join Waitlist
      </Link>
    </div>
  );
};

export default WaitlistCard;
