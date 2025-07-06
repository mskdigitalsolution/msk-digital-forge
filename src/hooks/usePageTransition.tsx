
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Reduced loading time for faster homepage appearance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Reduced from 600ms to 300ms for faster loading

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isLoading };
};
