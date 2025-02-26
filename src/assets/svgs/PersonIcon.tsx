import { SvgIconProps } from '@/types';
import * as React from 'react';
const PersonIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={19}
    fill="none"
    {...props}
  >
    <path d="M7.063 9.5c2.209 0 4-2.014 4-4.5S9.271.5 7.063.5c-2.21 0-4 2.014-4 4.5s1.79 4.5 4 4.5Zm2.8 1.125H9.34a4.944 4.944 0 0 1-2.278.563 4.953 4.953 0 0 1-2.279-.563h-.521c-2.32 0-4.2 2.116-4.2 4.725v1.463c0 .931.671 1.687 1.5 1.687h11c.828 0 1.5-.756 1.5-1.688V15.35c0-2.609-1.882-4.725-4.2-4.725Z" />
  </svg>
);
export default PersonIcon;
