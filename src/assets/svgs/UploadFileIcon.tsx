import { SvgIconProps } from '@/types';
import * as React from 'react';
const UploadFileIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 1H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-6-6Z"
    />
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 1v6h6M13 12H5M13 16H5M7 8H5"
    />
  </svg>
);
export default UploadFileIcon;
