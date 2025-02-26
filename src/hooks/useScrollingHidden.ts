import { useEffect } from 'react';

function useScrollingHidden() {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevent issues in SSR
    const originalOverflow = document.body.style.overflow; // Store existing style

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow; // Restore original style
    };
  }, []);

  return null; // Not needed but keeps ESLint happy
}

export default useScrollingHidden;
