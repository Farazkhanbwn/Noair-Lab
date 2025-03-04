import React from 'react';
import CrossIcon from '@/components/icons/cross-icon';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface ModalHeaderProps {
  title?: string;
  className?: string;
  onClose: () => void;
  iconColor?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title = '',
  className = '',
  onClose,
  iconColor = '#000',
}) => {
  return (
    <div className={`flex-between text-pure-black bg-pure-white ${className}`}>
      <div></div>
      <h2 className="text-[20px] font-bold">{title}</h2>

      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        className="p-2.5 hover:bg-light-grey-100 transition-colors cursor-pointer bg-light-grey rounded-full"
        onClick={onClose}
      >
        <CrossIcon width={14} height={14} color={iconColor} />
      </CustomButton>
    </div>
  );
};

export default ModalHeader;
