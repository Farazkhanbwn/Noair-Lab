import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const WebsiteIcon: FC<IconProps> = ({
  width = 18,
  height = 18,
  strokeColor = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9H17"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00078 1C11.0018 3.19068 12.139 6.03363 12.2008 9C12.139 11.9664 11.0018 14.8093 9.00078 17C6.99976 14.8093 5.86258 11.9664 5.80078 9C5.86258 6.03363 6.99976 3.19068 9.00078 1Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WebsiteIcon;
