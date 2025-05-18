
import React, { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel-react';

const images = [
  {
    src: "/lovable-uploads/1a76c23c-4247-42e7-bdc8-7fc6d1e9b2be.png",
    alt: "Futuristic city with yellow light highways and bridges"
  },
  {
    src: "/lovable-uploads/1509ae31-e89c-4489-b9dc-429c67733b52.png",
    alt: "Futuristic digital highway with neon lights"
  },
  {
    src: "/lovable-uploads/c70aca89-79ad-4091-a823-144996a38958.png",
    alt: "Modern futuristic city street view with yellow lights"
  },
  {
    src: "/lovable-uploads/59e44802-e3c9-43ed-bab7-f0526afaa6ac.png",
    alt: "Cyberpunk city view with neon yellow lanes"
  }
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;
    
    // When the embla API is available, set up the select handler
    emblaApi.on("select", onSelect);
    
    // Initial call to set the current index
    onSelect();
    
    // Set up auto-slide functionality
    const intervalId = setInterval(() => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId);
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full h-full relative">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] h-full min-w-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-msk-dark/40"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-msk-dark/30 hover:bg-msk-dark/60 text-white border-msk-yellow rounded-full h-8 w-8 flex items-center justify-center z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <button 
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-msk-dark/30 hover:bg-msk-dark/60 text-white border-msk-yellow rounded-full h-8 w-8 flex items-center justify-center z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-msk-yellow" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
