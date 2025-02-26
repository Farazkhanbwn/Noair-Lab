import { FC } from 'react';
import { CustomButtonProps, CustomButtonTypes } from './custom-button.types';
import { customButtonStyles } from './custom-button.styles';

const CustomButton: FC<CustomButtonProps> = ({
  styleType = CustomButtonTypes.PRIMARY,
  disable = false,
  onClick,
  type = 'button',
  className,
  children,
  hide = false,
}) => {
  if (hide) {
    return null;
  }
  return (
    <button
      className={`outline-none ${customButtonStyles[styleType]} ${className}`}
      disabled={disable}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
