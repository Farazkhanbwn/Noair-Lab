import { SvgIconProps } from '@/types';
import * as React from 'react';
const UploadVideoIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 3-6.363 5L21 13V3ZM12.818 1h-10C1.814 1 1 1.895 1 3v10c0 1.105.814 2 1.818 2h10c1.004 0 1.818-.895 1.818-2V3c0-1.105-.814-2-1.818-2Z"
    />
  </svg>
);
export default UploadVideoIcon;
