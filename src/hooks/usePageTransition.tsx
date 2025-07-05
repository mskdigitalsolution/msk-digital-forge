
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading state
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate minimum loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Reduced time for faster transitions

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isLoading };
};
