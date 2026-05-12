import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mx-auto max-w-screen-lg w-full my-16 lg:my-10">
      {/* Title */}
      <h2 className="bg-blue-900 text-white text-2xl font-bold p-4 text-center">
        Contact Us
      </h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        
        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-900 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Address</h3>
              <p className="text-gray-700">
                Rajkali Devi Mahavidyalaya,  
            </p>
            <p className="text-gray-700">
                Vill-Lahenga, Block-Chhatoh, Tehsil-Salon
            </p>
             <p className="text-gray-700">
                District-Raebareli, Uttar Pradesh, India Pin-229305
            </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-blue-900 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Phone</h3>
              <p className="text-gray-700">+91-6306822532</p>
              <p className="text-gray-700">+91-8081738387</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-blue-900 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Email</h3>
              <p className="text-gray-700">info@college.edu</p>
              <p className="text-gray-700">muzammilhusainid@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="w-full h-96">
          <iframe
            title="College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.216288036606!2d81.56405962012363!3d26.18964154604659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a559c0c70fbed%3A0xc176c141d253860d!2sRajkali%20Devi%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1778581202651!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
