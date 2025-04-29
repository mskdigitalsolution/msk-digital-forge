
import React, { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 5000); // Change image every 5 seconds

    // Set up the event listeners
    emblaApi.on('select', onSelect);

    // Initial call to set the current index
    onSelect();

    return () => {
      clearInterval(intervalId);
      emblaApi?.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Carousel
      className="w-full h-full"
      opts={{ loop: true, align: "center" }}
    >
      <CarouselContent className="h-full" ref={emblaRef}>
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-msk-dark/40"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-msk-dark/30 hover:bg-msk-dark/60 text-white border-msk-yellow" />
      <CarouselNext className="right-4 bg-msk-dark/30 hover:bg-msk-dark/60 text-white border-msk-yellow" />
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
    </Carousel>
  );
};

export default ImageCarousel;
