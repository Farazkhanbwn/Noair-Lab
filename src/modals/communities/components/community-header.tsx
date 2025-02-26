import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import CrossIcon from '@/components/icons/cross-icon';

interface CommunityModalHeaderProps {
  title?: string;
  description?: string;
  onClose: () => void;
  classNames?: string;
}

const CommunityModalHeader: FC<CommunityModalHeaderProps> = ({
  title,
  onClose,
  description,
  classNames,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 sm:p-5 pb-0 ${classNames}`}
    >
      <div>
        {title && <h2 className="heading-medium font-bold">{title}</h2>}
        {description && <p className="text-description">{description}</p>}
      </div>

      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className="bg-light-grey rounded-full p-2.5 hover:bg-light-grey-100 transition-colors"
        onClick={onClose}
      >
        <CrossIcon width={12} height={12} />
      </CustomButton>
    </div>
  );
};

export default CommunityModalHeader;
