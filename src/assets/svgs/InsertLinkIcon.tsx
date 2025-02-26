import { SvgIconProps } from '@/types';
import * as React from 'react';
const InsertLinkIcon = (props: SvgIconProps) => (
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
      d="M7.39 9.805a4.025 4.025 0 0 0 4.628 1.361 4.022 4.022 0 0 0 1.439-.926l2.414-2.416a4.03 4.03 0 0 0-.05-5.645 4.02 4.02 0 0 0-5.639-.049L8.8 3.508"
    />
    <path
      stroke="#9A9A9A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.61 8.195a4.024 4.024 0 0 0-4.628-1.361 4.022 4.022 0 0 0-1.44.926L2.13 10.176A4.029 4.029 0 0 0 4.988 17a4.02 4.02 0 0 0 2.83-1.13l1.375-1.377"
    />
  </svg>
);
export default InsertLinkIcon;
