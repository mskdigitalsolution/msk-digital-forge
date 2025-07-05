
import React from 'react';
import { usePageTransition } from '@/hooks/usePageTransition';
import LoadingBuffer from './LoadingBuffer';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { isLoading } = usePageTransition();

  return (
    <>
      {isLoading && <LoadingBuffer />}
      <div 
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
