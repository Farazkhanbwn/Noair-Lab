// components/SpinnerLoader.tsx
'use client';

import { ClipLoader } from 'react-spinners';

interface SpinnerLoaderProps {
  size?: number;
  color?: string;
}

const SpinnerLoader = ({
  size = 40,
  color = '#4A90E2',
}: SpinnerLoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default SpinnerLoader;
