import React from "react";
import teacher1 from "../../assets/images/teacher1.jpg";
import teacher2 from "../../assets/images/teacher2.jpg";
// ... similarly import upto teacher15

const facultyData = [
  {
    name: "Dr. A. Sharma",
    designation: "Professor of Physics",
    qualification: "Ph.D. in Physics",
    image: teacher1,
  },
  {
    name: "Prof. B. Singh",
    designation: "Assistant Professor of Commerce",
    qualification: "M.Com, NET Qualified",
    image: teacher2,
  },
  {
    name: "Dr. A. Sharma",
    designation: "Professor of Physics",
    qualification: "Ph.D. in Physics",
    image: teacher1,
  },
  {
    name: "Prof. B. Singh",
    designation: "Assistant Professor of Commerce",
    qualification: "M.Com, NET Qualified",
    image: teacher2,
  },
  {
    name: "Dr. A. Sharma",
    designation: "Professor of Physics",
    qualification: "Ph.D. in Physics",
    image: teacher1,
  },
  {
    name: "Prof. B. Singh",
    designation: "Assistant Professor of Commerce",
    qualification: "M.Com, NET Qualified",
    image: teacher2,
  },
  {
    name: "Dr. A. Sharma",
    designation: "Professor of Physics",
    qualification: "Ph.D. in Physics",
    image: teacher1,
  },
  {
    name: "Prof. B. Singh",
    designation: "Assistant Professor of Commerce",
    qualification: "M.Com, NET Qualified",
    image: teacher2,
  },
  // ... add total 15 teachers
];

const Staff = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Faculty and Staff
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center justify-items-center">
        {facultyData.map((teacher, index) => (
          <div
            key={index}
            className={`w-64 rounded-xl bg-gray-100 border-b-4 border-blue-900 
                         transform hover:-translate-y-2 
                        transition duration-300 ease-in-out hover:cursor-pointer drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]`}
          >
            {/* Teacher Image with white border + shadow */}
            <div className="flex justify-center mt-4">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-48 h-52 object-cover rounded-lg "
              />
            </div>

            {/* Teacher Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-blue-900">{teacher.name}</h3>
              <p className="italic text-gray-600">{teacher.designation}</p>
              <p className="text-gray-700 mt-1">{teacher.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
