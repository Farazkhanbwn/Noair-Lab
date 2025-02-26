import { SvgIconProps } from '@/types';
import * as React from 'react';
const InsightsIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path d="M7.27 7.27a1.032 1.032 0 1 0 1.46 1.46 1.032 1.032 0 0 0-1.46-1.46ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm4.069 4.776L9.941 9.432a1.03 1.03 0 0 1-.509.509l-4.656 2.128a.638.638 0 0 1-.845-.845l2.128-4.657a1.03 1.03 0 0 1 .51-.508l4.655-2.128a.638.638 0 0 1 .845.845Z" />
  </svg>
);
export default InsightsIcon;
