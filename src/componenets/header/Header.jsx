import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import RkdForm from "../../assets/images/RkdAdmissionForm.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-50">
      {/* Top Logo + Info Section (Desktop only) */}
      <div
        className={`hidden lg:flex max-w-screen-xl mx-auto justify-between items-center py-3 px-6 transition-all duration-500 ${
          isScrolled
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* Logo + College Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="College Logo"
            className="h-12 w-12 object-cover shadow-md"
          />
          <span className="text-xl font-bold text-blue-900">
            Rajkali Devi Mahavidyalaya
          </span>
        </div>

        {/* Tagline + Contact */}
        <div className="flex flex-col items-end text-sm">
          <span className="font-semibold italic text-blue-900">
            Empowering Education Since 1990
          </span>
          <span className="text-gray-600">
            📞 +91-1234567890 | ✉️ info@college.edu
          </span>
        </div>
      </div>

      {/* Mobile Header (Logo + Hamburger) */}
      <div
        className={`flex lg:hidden justify-between items-center py-3 px-4 bg-white fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <img
            src={logo}
            alt="College Logo"
            className="h-8 w-8 object-cover shadow-md flex-shrink-0"
          />
          <span className="text-sm font-bold text-blue-900 break-words max-w-[200px]">
            Rajkali Devi Mahavidyalaya
          </span>
        </div>
        <button
          className="flex-shrink-0 focus:outline-none text-xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation (normal, visible when not scrolled) */}
      <div
        className={`hidden lg:block bg-blue-900 text-white shadow-md transition-all duration-500 ${
          isScrolled
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
          <nav className="flex space-x-6 font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/aboutPage" className="hover:text-yellow-400 transition">About Us</Link>
            <Link to="/courses" className="hover:text-yellow-400 transition">Courses</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Admissions</Link>
            <Link to="/staff" className="hover:text-yellow-400 transition">Faculty</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Events</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Contact</Link>
          </nav>
          <div>
            <a
              href={RkdForm}
              target="blank"
              className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 shadow-md hover:shadow-lg transition"
            >
              Admission Form
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation (Desktop only, visible when scrolled) */}
      <div
        className={`hidden lg:block fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md transition-transform duration-500 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
          <nav className="flex space-x-6 font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/aboutPage" className="hover:text-yellow-400 transition">About Us</Link>
            <Link to="/courses" className="hover:text-yellow-400 transition">Courses</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Admissions</Link>
            <Link to="/staff" className="hover:text-yellow-400 transition">Faculty</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Events</Link>
            <Link to="#" className="hover:text-yellow-400 transition">Contact</Link>
          </nav>
          <div>
            <a
              href={RkdForm}
              target="blank"
              className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 shadow-md hover:shadow-lg transition"
            >
              Admission Form
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden shadow-lg z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-4">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/aboutPage" className="hover:text-yellow-400 transition">About Us</Link>
          <Link to="/courses" className="hover:text-yellow-400 transition">Courses</Link>
          <Link to="#" className="hover:text-yellow-400 transition">Admissions</Link>
          <Link to="/staff" className="hover:text-yellow-400 transition">Faculty</Link>
          <Link to="#" className="hover:text-yellow-400 transition">Events</Link>
          <Link to="#" className="hover:text-yellow-400 transition">Contact</Link>
          <a
            href={RkdForm}
            target="blank"
            className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 shadow-md hover:shadow-lg transition"
          >
            Admission Form
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
