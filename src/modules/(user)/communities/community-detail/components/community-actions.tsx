import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { FC } from 'react';

interface CommunityActionsProps {
  onCreateDiscussion: () => void;
  onInviteMember: () => void;
  onLeaveCommunity: () => void;
  classNames?: string;
}

const CommunityActions: FC<CommunityActionsProps> = ({
  onCreateDiscussion,
  onInviteMember,
  onLeaveCommunity,
  classNames,
}) => {
  return (
    <div
      className={`hidden md:flex items-center justify-between lg:justify-start flex-wrap lg:flex-nowrap gap-3 pt-2 ${classNames}`}
    >
      <CustomButton
        onClick={onCreateDiscussion}
        className="!font-semibold border-primary-color !px-2 max-w-[12rem] w-full !py-2 !rounded-full border"
      >
        Create Discussions
      </CustomButton>
      <CustomButton
        onClick={onInviteMember}
        styleType={CustomButtonTypes.TERTIARY}
        className="border border-primary-color rounded-full px-1.5 py-2 max-w-[12rem] w-full text-primary-color font-semibold"
      >
        + Invite Member
      </CustomButton>
      <CustomButton
        onClick={onLeaveCommunity}
        styleType={CustomButtonTypes.TERTIARY}
        className="text-gray-600 bg-light-grey hover:text-gray-900 !px-1 max-w-[12rem] w-full py-2 rounded-full border border-transparent"
      >
        Leave Community
      </CustomButton>
    </div>
  );
};

export default CommunityActions;
