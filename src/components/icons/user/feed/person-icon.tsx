import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const PersonIcon: FC<IconProps> = ({
  width = 14,
  height = 14,
  fillColor = '#9a9a9a',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7.875C9.17383 7.875 10.9375 6.11133 10.9375 3.9375C10.9375 1.76367 9.17383 0 7 0C4.82617 0 3.0625 1.76367 3.0625 3.9375C3.0625 6.11133 4.82617 7.875 7 7.875ZM10.5 8.75H8.99336C8.38633 9.02891 7.71094 9.1875 7 9.1875C6.28906 9.1875 5.61641 9.02891 5.00664 8.75H3.5C1.5668 8.75 0 10.3168 0 12.25V12.6875C0 13.4121 0.587891 14 1.3125 14H12.6875C13.4121 14 14 13.4121 14 12.6875V12.25C14 10.3168 12.4332 8.75 10.5 8.75Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PersonIcon;
