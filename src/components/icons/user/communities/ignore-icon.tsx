import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const IgnoreIcon: FC<IconProps> = ({
  width = 16,
  height = 16,
  fillColor = '#0029FA',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0ZM8 1.6C6.48 1.6 5.12 2.08 4.08 2.96L13.04 11.92C13.84 10.8 14.4 9.44 14.4 8C14.4 4.48 11.52 1.6 8 1.6ZM11.92 13.04L2.96 4.08C2.08 5.12 1.6 6.48 1.6 8C1.6 11.52 4.48 14.4 8 14.4C9.52 14.4 10.88 13.92 11.92 13.04Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default IgnoreIcon;
