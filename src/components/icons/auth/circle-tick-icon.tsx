import React, { FC } from 'react';
import { IconProps } from '../app-icon.types';

const CircleTickIcon: FC<IconProps> = ({
  width = 64,
  height = 64,
  fillColor = '#0029FA',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31.767" cy="31.8686" r="31.3139" fill={fillColor} />
      <path
        d="M48.4669 21.4307L25.5034 42.3066L15.0654 32.8175"
        stroke="white"
        strokeWidth="4.17518"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleTickIcon;
