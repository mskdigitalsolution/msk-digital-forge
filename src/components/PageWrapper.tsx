
import React from 'react';
import { usePageTransition } from '@/hooks/usePageTransition';
import LoadingBuffer from './LoadingBuffer';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { isLoading } = usePageTransition();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F172A]">
      {isLoading && <LoadingBuffer />}
      <div 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
