import React from "react";
import libraryImg from "../../assets/images/library.jpg";
import canteenImg from "../../assets/images/canteen.jpg";
import campusImg from "../../assets/images/school1.jpg";
import hostelImg from "../../assets/images/hostel.jpg";

const facilitiesData = [
  { name: "Library", image: libraryImg },
  { name: "Canteen", image: canteenImg },
  { name: "Campus", image: campusImg },
  { name: "Hostel", image: hostelImg },
];

const Facilities = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          OUR FACILITIES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg group"
            >
              {/* Facility Image */}
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
              />

              {/* Dark shadow overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Facility Name at bottom-left */}
              <h3 className="absolute bottom-3 left-3 text-lg font-semibold text-white drop-shadow-lg">
                {facility.name}
              </h3>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] 
                              transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
