'use client';
import { useState, useEffect } from 'react';

const useTransitionDelay = (delay: number) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isVisible;
};

export default useTransitionDelay;
