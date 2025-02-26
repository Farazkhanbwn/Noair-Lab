import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const ApproveIcon: FC<IconProps> = ({
  width = 16,
  height = 14,
  fillColor = '#fff',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6.99666L14.2255 5.13712L14.4727 2.67559L11.8473 2.12709L10.4727 0L8 0.976589L5.52727 0L4.15273 2.12709L1.52727 2.6689L1.77455 5.13043L0 6.99666L1.77455 8.85619L1.52727 11.3244L4.15273 11.8729L5.52727 14L8 13.0167L10.4727 13.9933L11.8473 11.8662L14.4727 11.3177L14.2255 8.85619L16 6.99666ZM6.54545 10.3411L3.63636 7.66555L4.66182 6.72241L6.54545 8.44816L11.3382 4.04013L12.3636 4.98997L6.54545 10.3411Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ApproveIcon;
