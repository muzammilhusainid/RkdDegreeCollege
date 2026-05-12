import React, { useState, useEffect } from "react";
import RkdAdmissionBanner from "../../assets/images/Rkd-Admission-Banner.png";
import school from "../../assets/images/school.jpg";
import school1 from "../../assets/images/school1.jpg";
import school6 from "../../assets/images/school6.jpg";
import school7 from "../../assets/images/school7.jpg";
import school2 from "../../assets/images/school2.jpg";

const images = [RkdAdmissionBanner, school, school1, school6, school7, school2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-14 lg:pt-0">
      <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden shadow-lg">
        {/* Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Carousel;
