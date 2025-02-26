import CustomButton from '@/components/common/custom-button/custom-button';
import Link from '@/components/common/custom-link/custom-link';
import PencilIcon from '@/components/icons/user/profile/pencil-icon';
import { Eye } from 'lucide-react';
import { FC } from 'react';

interface ActionButtonsProps {
  onEditProfile?: () => void;
  previewLink?: string;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  onEditProfile,
  previewLink = '',
}) => {
  return (
    <div className="flex gap-2">
      <CustomButton
        className="!rounded-[10px] !py-0 text-description md:!heading-tertiary !font-medium flex-center gap-2 !px-5 sm:!px-5"
        onClick={onEditProfile}
      >
        <PencilIcon fillColor="#fff" />
        Edit Profile
      </CustomButton>
      <Link
        href={previewLink}
        className="p-2 border border-primary-grey hover:bg-light-grey transition-colors !rounded-[10px] text-description md:!heading-tertiary font-medium flex-center gap-1 !text-primary-grey !no-underline"
      >
        <Eye className="w-5 h-5" />
        Preview Mode
      </Link>
    </div>
  );
};

export default ActionButtons;
