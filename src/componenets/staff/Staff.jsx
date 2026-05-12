import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import muzammil from "../../assets/images/Muzammil-Husain.jpeg";
import sachin from "../../assets/images/sachin.jpg";
import vijay from "../../assets/images/vijay.jpg";
import rajiv from "../../assets/images/rajiv.jpg";
import vinay from "../../assets/images/vinay.jpg";
// ... similarly import upto teacher15

const facultyData = [
  {
    name: "VINAY KM. SRIVASTAV",
    qualification: "Voice Principal",
    image: vinay,
  },
  {
    name: "VIJAY PAL PANDEY",
    qualification: "Sociology",
    image: vijay,
  },
  {
    name: "RAJIV KUMAR",
    qualification: "Mathematics", 
    image: rajiv,
  },
  {
    name: "MUZAMMIL HUSAIN",
    qualification: "Web Developer & IT Executive",
    image: muzammil,
    link:"https://mzhusain.vercel.app/"
  },
   {
    name: "SACHIN KUMAR",
    qualification: "Computer Operator",
    image: sachin,
  },

  // ... add total 15 teachers
];

const Staff = () => {
  return (
    <div>
      <Header />
      <section className="max-w-screen-xl mx-auto px-6 py-16 lg:py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          FACULTY & STAFF
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center justify-items-center">
          {facultyData.map((teacher, index) => (
            <div
              key={index}
              className={`w-64 rounded-xl bg-white border-b-4 border-blue-900 
                         transform hover:-translate-y-2 
                        transition duration-300 ease-in-out hover:cursor-pointer drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]`}
            >
              {/* Teacher Image with white border + shadow */}
              <a href={teacher.link} target="blanck">
              <div className="flex justify-center mt-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-52 h-56 object-contain rounded-lg"
                />
              </div>

              {/* Teacher Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-blue-900">{teacher.name}</h3>
                <p className="text-gray-700 mt-1">{teacher.qualification}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default Staff;
