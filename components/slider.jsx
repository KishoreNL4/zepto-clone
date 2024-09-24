import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://via.placeholder.com/1200x700.png?text=Slide+1",
    "https://via.placeholder.com/1200x700.png?text=Slide+2",
    "https://via.placeholder.com/1200x700.png?text=Slide+3",
    "https://via.placeholder.com/1200x700.png?text=Slide+4",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto slide after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[97%] h-[500px] mx-auto overflow-hidden rounded-xl mt-6 -z-10">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="min-w-full h-[500px] object-cover"
          />
        ))}
      </div>

      {/* Previous Icon */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  text-gray-700 p-3 rounded-full opacity-70 hover:opacity-100 transition"
      >
        ❮
      </button>

      {/* Next Icon */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-700 p-3 rounded-full opacity-70 hover:opacity-100 transition"
      >
        ❯
      </button>

      {/* Dots for each slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
