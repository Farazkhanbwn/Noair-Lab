import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const EyeIcon: FC<IconProps> = ({
  width = 22,
  height = 16,
  fillColor = '#9a9a9a',
  strokeColor = '#fff',
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8C1 8 4.63636 1 11 1C17.3636 1 21 8 21 8C21 8 17.3636 15 11 15C4.63636 15 1 8 1 8Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0007 10.625C12.5069 10.625 13.728 9.44975 13.728 8C13.728 6.55025 12.5069 5.375 11.0007 5.375C9.49448 5.375 8.27344 6.55025 8.27344 8C8.27344 9.44975 9.49448 10.625 11.0007 10.625Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
