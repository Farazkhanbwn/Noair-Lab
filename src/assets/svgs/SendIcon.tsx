import { SvgIconProps } from '@/types';
import * as React from 'react';
const SendMessageIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      stroke="#EDF5FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 1-7 20-4-9-9-4 20-7Z"
    />
    <path
      stroke="#EDF5FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 1 10 12"
    />
  </svg>
);
export default SendMessageIcon;
