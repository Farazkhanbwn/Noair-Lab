import React, { FC } from 'react';
import { IconProps } from '../../app-icon.types';

const PinIcon: FC<IconProps> = ({ width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="12" fill="url(#pattern0_996_1214)" />
      <defs>
        <pattern
          id="pattern0_996_1214"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_996_1214" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_996_1214"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default PinIcon;
