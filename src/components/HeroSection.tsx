
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scale, setScale] = useState(1);
  
  // Automatic zoom effect
  useEffect(() => {
    // Start slightly zoomed out and slowly zoom in
    let animationFrameId: number;
    let direction = 1; // 1 for zoom in, -1 for zoom out
    let currentScale = 1;
    const minScale = 1;
    const maxScale = 1.15;
    const zoomSpeed = 0.0005; // Slower speed for subtle effect
    
    const animateZoom = () => {
      // Update scale based on direction
      currentScale += zoomSpeed * direction;
      
      // Change direction when reaching limits
      if (currentScale >= maxScale) {
        direction = -1;
      } else if (currentScale <= minScale) {
        direction = 1;
      }
      
      setScale(currentScale);
      animationFrameId = requestAnimationFrame(animateZoom);
    };
    
    animationFrameId = requestAnimationFrame(animateZoom);
    
    // Clean up animation on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with automatic zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/6430cc2f-121c-43f3-8d6f-9c9e25ebeae6.png"
          alt="Futuristic city with yellow lights"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: `scale(${scale})` }}
        />
        <div className="absolute inset-0 bg-msk-dark/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-tech font-bold text-white leading-tight mb-4 opacity-0 animate-fade-in">
          SHAPE THE FUTURE <br /> 
          <span className="text-msk-yellow glow-yellow">DIGITALLY</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-delay-1">
          Transforming ideas into digital realities with cutting-edge solutions 
          for the modern business landscape.
        </p>
        
        <div className="opacity-0 animate-fade-in-delay-2">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-msk-yellow text-msk-yellow font-tech font-medium rounded-md hover:bg-msk-yellow hover:text-msk-dark transition-all duration-300"
          >
            EXPLORE OUR SERVICES
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-delay-3">
        <a href="#about" className="flex flex-col items-center justify-center text-gray-400 hover:text-msk-yellow transition-colors">
          <span className="text-xs font-tech mb-1">SCROLL DOWN</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
