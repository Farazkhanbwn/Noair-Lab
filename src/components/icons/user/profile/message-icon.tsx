import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const MessageIcon: FC<IconProps> = ({
  width = 16,
  height = 16,
  //   color = '#0029FA',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.778 7.98766L3.53 7.23866C1.177 6.45466 0 6.06266 0 5.34166C0 4.62166 1.177 4.22866 3.53 3.44466L12.043 0.606657C13.699 0.0546569 14.527 -0.221343 14.964 0.215657C15.401 0.652657 15.125 1.48066 14.574 3.13566L11.735 11.6497C10.951 14.0027 10.559 15.1797 9.838 15.1797C9.118 15.1797 8.725 14.0027 7.941 11.6497L7.191 9.40266L11.545 5.04866C11.7272 4.86005 11.828 4.60745 11.8257 4.34526C11.8234 4.08306 11.7182 3.83225 11.5328 3.64684C11.3474 3.46143 11.0966 3.35626 10.8344 3.35398C10.5722 3.3517 10.3196 3.4525 10.131 3.63466L5.778 7.98766Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MessageIcon;
