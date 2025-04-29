
import { ChevronDown } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background using ImageCarousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel />
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
