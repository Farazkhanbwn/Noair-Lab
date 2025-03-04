import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const LockIcon: FC<IconProps> = ({
  width = 15,
  height = 18,
  fillColor = '#9a9a9a',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3929 7.875H12.5893V5.34375C12.5893 2.39766 10.3058 0 7.5 0C4.6942 0 2.41071 2.39766 2.41071 5.34375V7.875H1.60714C0.719866 7.875 0 8.63086 0 9.5625V16.3125C0 17.2441 0.719866 18 1.60714 18H13.3929C14.2801 18 15 17.2441 15 16.3125V9.5625C15 8.63086 14.2801 7.875 13.3929 7.875ZM9.91071 7.875H5.08929V5.34375C5.08929 3.94805 6.17076 2.8125 7.5 2.8125C8.82924 2.8125 9.91071 3.94805 9.91071 5.34375V7.875Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default LockIcon;
