import { useEffect, useState } from 'react';

export const useWindowSize = (size: number): boolean => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  return width < size;
};
