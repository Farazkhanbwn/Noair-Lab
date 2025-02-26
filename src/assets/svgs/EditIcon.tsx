import { SvgIconProps } from '@/types';
import * as React from 'react';
const EditIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      className={props.className}
      d="M9.078.501a1.712 1.712 0 1 1 2.42 2.421l-8.17 8.17L0 12l.908-3.329 8.17-8.17Z"
    />
  </svg>
);
export default EditIcon;
