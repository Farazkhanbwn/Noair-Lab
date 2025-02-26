import { useEffect, useCallback, useState } from 'react';

interface IDimensions {
  width?: number;
  height?: number;
}

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: undefined,
    height: undefined,
  });
  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (!window) {
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return dimensions;
};

export default useWindowDimensions;
