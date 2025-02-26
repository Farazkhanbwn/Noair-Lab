import { SvgIconProps } from '@/types';
import * as React from 'react';
const EmojiIcon = (props: SvgIconProps) => (
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
      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Z"
    />
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.8 10.6S7 12.2 9 12.2s3.2-1.6 3.2-1.6M6.6 6.6h.008M11.4 6.6h.008"
    />
  </svg>
);
export default EmojiIcon;
