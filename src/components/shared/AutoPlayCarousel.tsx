import React, { useEffect, useState, useRef } from "react";

const AutoPlayCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null) as any;

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 5;
      }
    };

    const interval = setInterval(scrollCarousel, 10);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={carouselRef}
        className="flex gap-4 whitespace-nowrap overflow-x-scroll scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Sample items */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-lg font-bold"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      {/* Optional gradient effect for edges */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
    </div>
  );
};

export default AutoPlayCarousel;
