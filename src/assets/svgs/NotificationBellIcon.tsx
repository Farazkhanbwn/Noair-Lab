import { SvgIconProps } from '@/types';
import * as React from 'react';
const NotificationBellIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#9A9A9A"
      className={props.className}
      d="M8 17c1.261 0 2.285-.951 2.285-2.125h-4.57C5.715 16.049 6.74 17 8 17Zm7.693-4.97c-.69-.69-1.982-1.727-1.982-5.124 0-2.58-1.945-4.645-4.569-5.152v-.692C9.142.477 8.631 0 8 0c-.63 0-1.142.476-1.142 1.063v.691c-2.624.507-4.57 2.572-4.57 5.152 0 3.397-1.29 4.434-1.98 5.123A.998.998 0 0 0 0 12.75c.004.544.464 1.063 1.146 1.063h13.708c.682 0 1.142-.519 1.146-1.063a.998.998 0 0 0-.307-.72Z"
    />
    <circle cx={12} cy={3} r={3} fill="#FF0D11" />
  </svg>
);
export default NotificationBellIcon;
