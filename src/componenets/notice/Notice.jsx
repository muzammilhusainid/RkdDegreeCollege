import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

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

const Notice = () => {
  const [paused, setPaused] = useState(false);
  const [notices, setNotices] = useState(initialNotices);
  const noticeRef = useRef(null);

  const rowHeight = 64;

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

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mx-auto w-full lg:w-auto">
      <h2 className="bg-blue-900 text-white text-lg font-bold p-3 text-center lg:text-left">
        Latest Notices
      </h2>

      {/* Main Notice List */}
      <div ref={noticeRef} className="overflow-hidden h-76 lg:84">
        {notices.map((n, i) => (
          <div
            key={i}
            className="flex items-center border-b border-gray-300 py-2"
          >
            {/* 1. Arrow */}
            <div className="w-8 flex justify-center text-blue-700">➤</div>

            {/* 2. Title */}
            <div className="flex-1 px-2 text-left">
              <a
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-medium break-words whitespace-normal"
              >
                {n.title}
              </a>
            </div>

            {/* 3. Divider */}
            <div className="w-6 flex justify-center">
              <div className="border border-dashed border-gray-400 h-16"></div>
            </div>

            {/* 4. Date */}
            <div className="w-28 flex flex-col items-center justify-center text-sm text-gray-500">
                <p>Uploaded Date</p>
              {n.date}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Strip */}
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
  );
};

export default Notice;
