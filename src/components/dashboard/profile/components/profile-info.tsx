import { FC } from 'react';
import { UserProfileInfo } from '../../../../modules/(user)/profile/profile.types';
import CustomButton from '@/components/common/custom-button/custom-button';
import BetaUser from '@/components/icons/user/profile/beta-user';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface ProfileInfoProps {
  info: UserProfileInfo;
  classNames?: string;
  onBetaUserClick?: () => void;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  info,
  classNames,
  onBetaUserClick,
}) => {
  return (
    <div className={`text-pure-black ${classNames}`}>
      <h1 className="heading-secondary sm:text-[20px] mb-2 font-bold">
        {info?.name}
      </h1>

      {onBetaUserClick && (
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onBetaUserClick}
          className="flex-center gap-2 rounded-[10px] font-medium heading-tertiary mb-2 border border-light-blue-100 bg-light-blue p-1"
        >
          <BetaUser />
          Private Beta Member
        </CustomButton>
      )}

      <div className="text-[14px] space-y-2">
        <div className="flex items-center gap-x-3">
          <span>
            <img src="/briefcase.svg" alt="briefcase icon" />
          </span>
          {info?.title}
        </div>
        <div className="flex items-center gap-x-3">
          <span>
            <img src="/arrows.svg" alt="briefcase icon" />
          </span>
          {info?.specialization}
        </div>

        <div className="flex items-center gap-x-3">
          <span>
            <img src="/employment.svg" alt="briefcase icon" />
          </span>
          {info?.currentEmployment}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
