
import React from 'react';

const LoadingBuffer = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#0F172A] flex items-center justify-center z-50">
      {/* Animated loading spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#7E69AB]/30 border-t-[#9b87f5] rounded-full animate-spin"></div>
        <div className="w-12 h-12 border-4 border-transparent border-t-[#D6BCFA] rounded-full animate-spin absolute top-2 left-2 animation-delay-200"></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute mt-24">
        <p className="text-[#D6BCFA] text-lg font-medium animate-pulse">
          Loading...
        </p>
        <div className="w-24 h-1 bg-[#7E69AB]/30 rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/5 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#7E69AB]/10 to-[#D6BCFA]/5 blur-xl animate-pulse animation-delay-500"></div>
    </div>
  );
};

export default LoadingBuffer;
