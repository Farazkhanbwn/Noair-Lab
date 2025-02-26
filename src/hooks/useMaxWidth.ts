import { useLayoutEffect } from 'react';

const useMaxWidth = (id: string) => {
  useLayoutEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      const prevMaxWidth = element.style.maxWidth; // Store previous maxWidth
      const prevWidth = element.style.width; // Store previous width
      const prevMarginInline = element.style.marginInline; // Store previous margin-inline

      // Apply new styles
      element.style.maxWidth = '100%';
      element.style.marginLeft = '0px';

      return () => {
        // Restore previous styles on unmount
        element.style.maxWidth = prevMaxWidth || '90rem';
        element.style.width = prevWidth || '100%';
        element.style.marginInline = prevMarginInline || 'auto';
      };
    }
  }, [id]);
};

export default useMaxWidth;
