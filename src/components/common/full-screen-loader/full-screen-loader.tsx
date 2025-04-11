import React, { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface FullScreenLoaderProps {
  color?: string;
}

const FullScreenLoader: FC<FullScreenLoaderProps> = ({ color = '#0029FA' }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full  z-50 bg-black/80  flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default FullScreenLoader;
