import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import React, { ElementType } from 'react';

interface PostTypeButtonProps {
  icon: ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const PostTypeButton: React.FC<PostTypeButtonProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}) => {
  const buttonClasses = `${isActive ? 'bg-light-blue-75' : 'bg-light-grey-50'} 
    heading-tertiary flex items-center rounded-[5px] gap-2 px-4 py-1.5 
    hover:bg-light-grey-100`;

  return (
    <CustomButton
      styleType={CustomButtonTypes.TERTIARY}
      className={buttonClasses}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {label}
    </CustomButton>
  );
};

export default PostTypeButton;
