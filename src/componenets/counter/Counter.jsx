import React, { useEffect, useState, useRef } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaBookOpen } from "react-icons/fa";

const statsData = [
  { label: "Students", value: 1200, icon: <FaUserGraduate /> },
  { label: "Faculty", value: 45, icon: <FaChalkboardTeacher /> },
  { label: "Departments", value: 8, icon: <FaBuilding /> },
  { label: "Courses", value: 25, icon: <FaBookOpen /> },
];

const Counter = ({ end, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end, trigger]);

  return <span>{count}</span>;
};

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-blue-900"
    >
      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-xl p-5 hover:scale-105 transform transition duration-300 border border-white/20 rounded-xl"
          >
            <div className="text-3xl md:text-5xl text-yellow-400 mb-4 flex justify-center drop-shadow-lg">
              {item.icon}
            </div>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-md">
              <Counter end={item.value} trigger={visible} />
            </h2>
            <p className="mt-2 text-lg font-medium text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
