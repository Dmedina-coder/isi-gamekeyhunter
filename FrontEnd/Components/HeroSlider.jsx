"use client";
import React, { useState, useEffect } from "react";

function HeroSlider() {
  // Sample images for the carousel
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e9d82ab14579fe8e614ce72c8a9301761ea1656",
      alt: "Game promotion 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/https://cdn.builder.io/api/v1/image/assets/TEMP/9e9d82ab14579fe8e614ce72c8a9301761ea1656",
      alt: "Game promotion 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/https://cdn.builder.io/api/v1/image/assets/TEMP/faef41b85294624ca51eb04fca0e62780c87b5eb",
      alt: "Game promotion 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate slides
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, images.length]);

  // Pause auto-rotation when user interacts with controls
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    pauseAutoPlay();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  return (
    <section className="relative flex justify-center items-center w-full bg-slate-900 h-[613px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <figure
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              className="object-cover w-full h-full"
              alt={image.alt}
            />
          </figure>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 z-20 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute right-4 z-20 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;