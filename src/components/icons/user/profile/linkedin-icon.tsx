import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const LinkedinIcon: FC<IconProps> = ({
  width = 18,
  height = 19,
  strokeColor = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2004 6.36842C13.4734 6.36842 14.6943 6.93402 15.5945 7.94079C16.4947 8.94757 17.0004 10.313 17.0004 11.7368V18H13.8004V11.7368C13.8004 11.2622 13.6318 10.8071 13.3318 10.4715C13.0317 10.1359 12.6247 9.94737 12.2004 9.94737C11.776 9.94737 11.3691 10.1359 11.069 10.4715C10.769 10.8071 10.6004 11.2622 10.6004 11.7368V18H7.40039V11.7368C7.40039 10.313 7.9061 8.94757 8.80628 7.94079C9.70645 6.93402 10.9274 6.36842 12.2004 6.36842Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.2 7.26316H1V18H4.2V7.26316Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6 4.57895C3.48366 4.57895 4.2 3.77777 4.2 2.78947C4.2 1.80117 3.48366 1 2.6 1C1.71634 1 1 1.80117 1 2.78947C1 3.77777 1.71634 4.57895 2.6 4.57895Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkedinIcon;
