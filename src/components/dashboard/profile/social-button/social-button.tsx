import React from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface SocialButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  styleType?: CustomButtonTypes;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onClick,
  styleType = CustomButtonTypes.TERTIARY,
  className = '',
}) => {
  return (
    <CustomButton styleType={styleType} className={className} onClick={onClick}>
      {icon}
    </CustomButton>
  );
};

export default SocialButton;
