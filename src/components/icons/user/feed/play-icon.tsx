import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const PlayIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="currentColor"
    >
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
};

export default PlayIcon;
