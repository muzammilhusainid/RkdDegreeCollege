import React from "react";

const facultyData = [
  {
    name: "Dr. Anil Kumar",
    image: "/images/anil.jpg",
    designation: "Professor & Head",
    qualification: "Ph.D. in Physics"
  },
  {
    name: "Ms. Priya Sharma",
    image: "/images/priya.jpg",
    designation: "Assistant Professor",
    qualification: "M.A. in English"
  },
  {
    name: "Mr. Rajesh Singh",
    image: "/images/rajesh.jpg",
    designation: "Lecturer",
    qualification: "M.Sc. in Mathematics"
  },
  // ...aise hi aur 11 entries add karo total 14 staff ke liye
];

const FacultyCard = ({ image, designation, qualification, name }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-indigo-600 mt-1">{designation}</p>
        <p className="text-sm text-gray-500 mt-1">{qualification}</p>
      </div>
    </div>
  );
};

const Faculty = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Faculty Members
        </h2>
        <p className="text-gray-600 mt-2">
          Meet our experienced and qualified teaching staff
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {facultyData.map((teacher, index) => (
          <FacultyCard key={index} {...teacher} />
        ))}
      </div>
    </section>
  );
};

export default Faculty;
