import { useLayoutEffect } from 'react';

const useMaxWidth = (id: string) => {
  useLayoutEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.style.maxWidth = '100%';
      element.style.marginLeft = '0px';
    }
  }, [id]);
};

export default useMaxWidth;
