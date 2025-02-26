import { SvgIconProps } from '@/types';
import * as React from 'react';
const PostIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#9A9A9A"
      d="M15 1H1v14.4h3.889V19L8 15.4h3.889L15 11.8V1ZM7.222 9.1V5.5v3.6Zm3.89 0V5.5v3.6Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.222 9.1V5.5m3.89 3.6V5.5M15 1H1v14.4h3.889V19L8 15.4h3.889L15 11.8V1Z"
    />
  </svg>
);
export default PostIcon;
