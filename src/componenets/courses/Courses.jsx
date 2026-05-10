import React from "react";
import { FaGraduationCap, FaBookOpen, FaBalanceScale, FaChild, FaChalkboardTeacher, FaChartBar, } from "react-icons/fa";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const coursesData = [
  {
    name: "BBA (Bachelor of Business Administration)",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    icon: <FaChartBar />,
    subjects: "As per University",
    duration: "3 Years (6 Semesters)",
    qualification: "10+2 (Intermediate)",
  },
  {
    name: "B.A. (Bachelor of Arts)",
    color: "bg-gradient-to-r from-red-500 to-pink-500",
    icon: <FaGraduationCap />,
    subjects: "Hindi, English, Urdu, Home Science, History, Political Science, Sociology, Geography",
    duration: "3 Years (6 Semesters)",
    qualification: "10+2 (Intermediate)",
  },
  {
    name: "B.Sc. (Bachelor of Science)",
    color: "bg-gradient-to-r from-pink-600 to-yellow-500",
    icon: <FaBookOpen />,
    subjects: "Physics, Chemistry, Mathematics, Zoology, Botany",
    duration: "3 Years (6 Semesters)",
    qualification: "10+2 (Science Stream)",
  },
  {
    name: "B.Com. (Bachelor of Commerce)",
    color: "bg-gradient-to-r from-green-500 to-lime-500",
    icon: <FaChartBar />,
    subjects: "Accountancy, Business Studies, Economics",
    duration: "3 Years (6 Semesters)",
    qualification: "10+2 (Commerce/Science Stream)",
  },
  {
    name: "M.A. (Master of Arts)",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    icon: <FaGraduationCap />,
    subjects: "Hindi, Home Science,",
    duration: "2 Years (4 Semesters)",
    qualification: "Graduation in relevant subject",
  },
    {
    name: "M.Sc. (Master of Science)",
    color: "bg-gradient-to-r from-blue-900 to-sky-500",
    icon: <FaGraduationCap />,
    subjects: "Botany",
    duration: "2 Years (4 Semesters)",
    qualification: "Graduation in relevant subject",
  },
  {
    name: "B.Ed. (Bachelor of Education)",
    color: "bg-gradient-to-r from-orange-500 to-yellow-400",
    icon: <FaChalkboardTeacher />,
    subjects: "Education, Pedagogy, Teaching Practice",
    duration: "2 Years (4 Semesters)",
    qualification: "Graduation in any stream with 50%",
  },
  {
    name: "D.El.Ed (BTC) (Diploma in Elementary Education)",
    color: "bg-gradient-to-r from-green-500 to-teal-500",
    icon: <FaChild />,
    subjects: "Child Development, Pedagogy, Teaching Skills",
    duration: "2 Years (4 Semesters)",
    qualification: "Graduation in any stream",
  },
  {
    name: "LLB (Bachelor of Laws)",
    color: "bg-gradient-to-r from-gray-700 to-gray-500",
    icon: <FaBalanceScale />,
    subjects: "Coming Soon...",
    duration: "Coming Soon...",
    qualification: "Coming Soon...",
  },

];

const Courses = () => {
  return (
    <div>
      <Header />
      <section className="max-w-screen-xl mx-auto px-6 py-16 lg:py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          Courses Offered
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden border border-gray-200 
                       hover:border-blue-900 transform hover:-translate-y-2 
                       hover:shadow-xl transition duration-300 ease-in-out"
            >
              {/* Colorful Patti with Icon */}
              <div
                className={`${course.color} flex items-center space-x-2 text-white text-lg font-bold py-3 px-4`}
              >
                <span className="text-2xl">{course.icon}</span>
                <span>{course.name}</span>
              </div>

              {/* Details */}
              <div className="p-5 space-y-1 bg-gray-50">
                <p>
                  <span className="font-semibold">Subjects:</span>{" "}
                  {course.subjects}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {course.duration}
                </p>
                <p>
                  <span className="font-semibold">Qualification:</span>{" "}
                  {course.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default Courses;
