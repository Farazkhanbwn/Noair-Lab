import React from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import ApproveIcon from '@/components/icons/user/communities/approve-icon';
import IgnoreIcon from '@/components/icons/user/communities/ignore-icon';

interface UserApprovalCardProps {
  userImage: string;
  name: string;
  role: string;
  mutual: number;
  followers: string;
  classNames?: string;
  onApprove: () => void;
  onIgnore: () => void;
}

const UserApprovalCard: React.FC<UserApprovalCardProps> = ({
  userImage,
  name,
  role,
  mutual,
  followers,
  classNames,
  onApprove,
  onIgnore,
}) => {
  return (
    <div className={`flex-between bg-pure-white ${classNames}`}>
      {/* User Info */}
      <UserCard
        userImage={userImage}
        name={name}
        role={role}
        mutual={mutual}
        followers={`${followers}k`}
      />

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <CustomButton
          className="!font-semibold !border border-primary-color heading-tertiary md:heading-secondary !px-2 lg:!px-4 !py-1 flex-center gap-1"
          onClick={onApprove}
        >
          <ApproveIcon />
          Approve
        </CustomButton>
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className="border border-primary-color px-2 lg:px-6 py-1 rounded-full text-primary-color heading-tertiary md:heading-secondary font-semibold flex-center gap-1"
          onClick={onIgnore}
        >
          <IgnoreIcon />
          Ignore
        </CustomButton>
      </div>
    </div>
  );
};

export default UserApprovalCard;
