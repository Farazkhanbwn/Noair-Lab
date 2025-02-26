import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const CheckIcon: FC<IconProps> = ({
  width = 14,
  height = 12,
  fillColor = '#000',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 13"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8.5C1 8.5 2.5 8.5 4.5 12C4.5 12 10.059 2.833 15 1"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
