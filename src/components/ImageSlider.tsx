
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideData } from '@/utils/mockData';

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset interval on manual navigation
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    resetInterval();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    resetInterval();
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
    resetInterval();
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <section className="slider-container" 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-slide ${activeSlide === index ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="slider-overlay">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">
              {slide.description}
            </p>
            <Button 
              size="lg"
              className="bg-machgari-600 hover:bg-machgari-700 text-white"
            >
              {slide.ctaText}
            </Button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        className="slider-arrow left-4"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        className="slider-arrow right-4"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="slider-controls">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
