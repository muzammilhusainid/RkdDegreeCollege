import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.jpg";
import event3 from "../../assets/images/event3.jpg";
import event4 from "../../assets/images/event4.jpg";
import event5 from "../../assets/images/event5.jpg";
import { Link } from "react-router-dom";

const events = [
  { title: "Annual Fest", image: event1 },
  { title: "Sports Day", image: event2 },
  { title: "Seminar", image: event3 },
  { title: "Workshop", image: event4 },
  { title: "Convocation", image: event5 },
];

const Event = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Get 5 visible events (center + 2 left + 2 right)
  const getVisibleEvents = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push(events[(index + i + events.length) % events.length]);
    }
    return visible;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-auto">
      {/* Title strip */}
      <h2 className="bg-green-700 text-white text-lg font-bold p-3 text-center lg:text-left">
        Events
      </h2>

      {/* 3D Coverflow Carousel */}
      <div
        {...handlers}
        className="relative flex-1 h-96 flex justify-center items-center overflow-hidden perspective-[1200px]"
      >
        {getVisibleEvents().map((e, i) => {
          const offset = i - 2; // center card = 0
          const isCenter = offset === 0;

          return (
            <div
              key={i}
              className="absolute transition-transform duration-700 ease-in-out"
              style={{
                transform: `
                  translateX(${offset * 220}px)
                  scale(${isCenter ? 1.1 : 0.8})
                  rotateY(${offset * -30}deg)
                `,
                zIndex: isCenter ? 10 : 5,
                opacity: isCenter ? 1 : 0.6,
              }}
            >
              <img
                src={e.image}
                alt={e.title}
                className="w-48 h-56 object-cover rounded-lg shadow-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 py-3">
        {events.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
              i === index ? "bg-green-700 scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="bg-gray-100 flex justify-between items-center p-3">
        <Link to="/all-events" className="text-green-700 font-semibold">View All Events</Link>
        <div className="flex gap-3">
          <button onClick={prevSlide} className="text-green-700">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="text-green-700">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
