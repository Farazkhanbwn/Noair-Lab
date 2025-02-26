import React, { FC } from 'react';

interface ProfileStatProps {
  number: string;
  text: string;
  borderRight?: boolean;
}

const ProfileStats: FC<ProfileStatProps> = ({ number, text, borderRight }) => {
  return (
    <p
      className={`${borderRight ? 'border-r-2 border-[#BCBCBC]' : 'ml-4 xs:ml-auto md:ml-4'} flex gap-3`}
    >
      <span className="text-primary-color font-bold">{number}</span>
      {text}
    </p>
  );
};

export default ProfileStats;
