import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg"; // apna logo path yahan import karo
import RkdForm from "../../assets/images/RkdAdmissionForm.pdf"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* College Info / Logo */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="RKD Logo" className="h-10 w-10 mr-3 rounded-full shadow-lg" />
            <h2 className="text-xl font-semibold text-white ">RKD Degree College</h2>
          </div>
          <p className="leading-relaxed text-gray-400 text-justify">
            RKD Degree College, affiliated to Lucknow University, established in 2013.  
            Dedicated to providing quality education, holistic development, and a professional learning environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Important
          </h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-blue-400 transition">Disclaimer</a></li>
            <li><a href="/return" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="/service" className="hover:text-blue-400 transition">Lucknow University</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href={RkdForm} target="blank" className="hover:text-blue-400 transition">Download Form</a></li>
            <li><a href="/career" className="hover:text-blue-400 transition">List of Holidays (LU)</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Contact
          </h3>
          <p>📞 +91-8896638315</p>
          <p>📞 +91-8115067010</p>
          <p>✉️ muzammilhusainid</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-blue-900 text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} RKD Degree College. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
