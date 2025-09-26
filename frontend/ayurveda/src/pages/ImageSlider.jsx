
import React, { useState, useEffect } from "react";

// Replace these with your own high-quality, product/event images
const images = [
  "https://cdn.pixabay.com/photo/2024/11/05/17/15/seagull-9176504_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/08/12/16/05/swan-9770534_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/28/16/11/cathedral-6899648_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/07/21/18/51/international-9726929_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/08/07/19/57/mountain-9761503_1280.jpg",
];

const ImageSlider = ({ interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, isPaused]);

  return (
    <div
      // Updated classes:
      // max-w-5xl: sets a maximum width (adjust 5xl to your preference like 4xl, 6xl etc.)
      // mx-auto: centers the slider
      // rounded-xl: provides a medium rounded edge to all corners
      // shadow-xl: adds a more pronounced shadow
      // border border-gray-200: adds a subtle border
      className="relative h-[450px] w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl border border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Wrapper */}
      <div className="relative w-full h-full aspect-[16/5]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${
              currentImageIndex === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;