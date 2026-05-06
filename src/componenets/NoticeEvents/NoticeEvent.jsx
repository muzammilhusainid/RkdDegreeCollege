import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const initialNotices = [
  { title: "Admission Form 2026", date: "01 May 2026", link: "/pdfs/admission.pdf" },
  { title: "Exam Schedule", date: "02 May 2026", link: "/pdfs/exam.pdf" },
  { title: "Holiday List", date: "03 May 2026", link: "/pdfs/holiday.pdf" },
  { title: "Fee Notice Fee Notice Fee Notice Fee Notice Fee Notice Fee Notice", date: "04 May 2026", link: "/pdfs/fee.pdf" },
  { title: "Result Declared", date: "05 May 2026", link: "/pdfs/result.pdf" },
  { title: "Muzammil Husain", date: "05 May 2026", link: "/pdfs/result.pdf" },
  { title: "Rajkali Devi Degree College Rajkali Devi Degree College", date: "05 May 2026", link: "/pdfs/result.pdf" },
  { title: "RKD Mahavidyalaya", date: "05 May 2026", link: "/pdfs/result.pdf" },
];

const events = [
  { title: "Annual Fest", image: "/images/event1.jpg", link: "/images/event1.jpg" },
  { title: "Sports Day", image: "/images/event2.jpg", link: "/images/event2.jpg" },
  { title: "Seminar", image: "/images/event3.jpg", link: "/images/event3.jpg" },
  { title: "Workshop", image: "/images/event4.jpg", link: "/images/event4.jpg" },
  { title: "Convocation", image: "/images/event5.jpg", link: "/images/event5.jpg" },
];

const NoticeEvent = () => {
  const [paused, setPaused] = useState(false);
  const [notices, setNotices] = useState(initialNotices);
  const noticeRef = useRef(null);

  const [index, setIndex] = useState(0);

  const rowHeight = 64;

  // Smooth scroll for Notices
  const smoothScroll = (element, distance, duration, callback) => {
    if (!element) return;
    const start = element.scrollTop;
    const end = start + distance;
    const step = distance / (duration / 16);
    let current = start;

    const animate = () => {
      current += step;
      element.scrollTop = current;
      if ((step > 0 && current < end) || (step < 0 && current > end)) {
        requestAnimationFrame(animate);
      } else {
        element.scrollTop = end;
        if (callback) callback();
      }
    };
    animate();
  };

  // Infinite loop scroll for Notices
  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        if (noticeRef.current) {
          smoothScroll(noticeRef.current, rowHeight, 600, () => {
            setNotices((prev) => {
              const updated = [...prev];
              const first = updated.shift();
              updated.push(first);
              noticeRef.current.scrollTop = 0;
              return updated;
            });
          });
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [paused]);

  // Auto slide for Events
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

  // Get 5 visible events (center + 2 left + 2 right)
  const getVisibleEvents = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push(events[(index + i + events.length) % events.length]);
    }
    return visible;
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto py-12 px-6">
      {/* Notices Area */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mx-auto w-full lg:w-auto">
        <h2 className="bg-blue-900 text-white text-lg font-bold p-3 text-center lg:text-left">
          Latest Notices
        </h2>

        <div ref={noticeRef} className="overflow-hidden h-64">
          {notices.map((n, i) => (
            <div key={i} className="grid grid-cols-3 items-start border-b border-gray-300 py-2">
              <div className="col-span-2 flex items-start border-r-2 border-dashed pr-3 px-2">
                <span className="text-blue-700 mr-2">➤</span>
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium break-words whitespace-normal"
                >
                  {n.title}
                </a>
              </div>
              <div className="col-span-1 flex items-center justify-center text-sm text-gray-500 px-2">
                {n.date}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 flex justify-between items-center p-3">
          <a href="/all-notices" className="text-blue-600 font-semibold">
            View All Notices
          </a>
          <button
            onClick={() => setPaused(!paused)}
            className="text-blue-600 flex items-center gap-2"
          >
            {paused ? <FaPlay /> : <FaPause />} {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>

      {/* Events Area */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-auto">
        <h2 className="bg-green-700 text-white text-lg font-bold p-3 text-center lg:text-left">
          Events
        </h2>

        <div className="relative flex-1 h-80 flex justify-center items-center gap-4 px-4 overflow-hidden">
          {getVisibleEvents().map((e, i) => {
            const center = i === 2; // middle image
            return (
              <a
                key={i}
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg overflow-hidden shadow-md transform transition-all duration-700 ease-out ${
                  center
                    ? "w-56 h-56 scale-110 opacity-100 z-10 shadow-xl"
                    : "w-44 h-44 opacity-60 scale-95"
                }`}
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover"
                />
              </a>
            );
          })}
        </div>

        <div className="bg-gray-100 flex justify-between items-center p-3">
          <a href="/all-events" className="text-green-700 font-semibold">
            View All Events
          </a>
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
    </section>
  );
};

export default NoticeEvent;
