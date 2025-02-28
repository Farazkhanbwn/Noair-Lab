import { SvgIconProps } from '@/types';
import * as React from 'react';
const MessageIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#9A9A9A"
      className={props.className}
      d="M16 7.556a7.45 7.45 0 0 1-.8 3.377 7.556 7.556 0 0 1-6.756 4.178 7.448 7.448 0 0 1-3.377-.8L0 16l1.689-5.067a7.449 7.449 0 0 1-.8-3.377A7.556 7.556 0 0 1 5.067.8 7.449 7.449 0 0 1 8.444 0h.445A7.538 7.538 0 0 1 16 7.111v.445Z"
    />
  </svg>
);
export default MessageIcon;
