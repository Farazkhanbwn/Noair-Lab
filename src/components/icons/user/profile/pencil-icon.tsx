import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const PencilIcon: FC<IconProps> = ({
  width = 12,
  height = 12,
  fillColor = '#1A1A1A',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.07788 0.501357C9.23683 0.342407 9.42553 0.216321 9.63321 0.130298C9.84088 0.0442754 10.0635 1.67481e-09 10.2883 0C10.513 -1.67481e-09 10.7356 0.0442754 10.9433 0.130298C11.151 0.216321 11.3397 0.342407 11.4986 0.501357C11.6576 0.660307 11.7837 0.849008 11.8697 1.05669C11.9557 1.26436 12 1.48695 12 1.71174C12 1.93653 11.9557 2.15912 11.8697 2.3668C11.7837 2.57447 11.6576 2.76317 11.4986 2.92212L3.32855 11.0922L0 12L0.907788 8.67145L9.07788 0.501357Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PencilIcon;
