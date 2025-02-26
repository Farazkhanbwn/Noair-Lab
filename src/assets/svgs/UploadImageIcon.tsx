import { SvgIconProps } from '@/types';
import * as React from 'react';
const UploadImageIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.222 1H2.778C1.796 1 1 1.796 1 2.778v12.444C1 16.204 1.796 17 2.778 17h12.444c.982 0 1.778-.796 1.778-1.778V2.778C17 1.796 16.204 1 15.222 1Z"
    />
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.889 7.222a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM17 11.667l-4.445-4.445L2.777 17"
    />
  </svg>
);
export default UploadImageIcon;
