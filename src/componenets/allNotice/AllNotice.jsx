import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BAScheme from "../../assets/images/BA-Scheme-Sem-IV-&-VI.pdf";
import BScScheme from "../../assets/images/BSc-Scheme-Sem-IV-&-VI.pdf";
import BComScheme from "../../assets/images/BCom-Scheme-Sem-IV-&-VI.pdf";
import MAScheme from "../../assets/images/MA-Home-Science-Scheme-Sem-IV.pdf";

const allNotices = [
  { title: "Admission Form 2026", date: "01 May 2026", link: "/pdfs/admission.pdf" },
  { title: "MA Scheme Semester IV", date: "09 May 2026", link: MAScheme },
  { title: "BA Scheme Semester IV & VI", date: "23 Apr 2026", link: BAScheme },
  { title: "BSc Scheme Semester IV & VI", date: "23 Apr 2026", link: BScScheme },
  { title: "BCom Scheme Semester IV & VI", date: "23 Apr 2026", link: BComScheme },
  { title: "Muzammil Husain", date: "05 May 2026", link: "/pdfs/result.pdf" },
  { title: "Rajkali Devi Mahavidyalaya", date: "05 May 2026", link: "/pdfs/result.pdf" },
  { title: "RKD Mahavidyalaya", date: "05 May 2026", link: "/pdfs/result.pdf" },
  // aur bhi notices add kar sakte ho
];

const AllNotices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5; // ek page par kitne notices dikhane hain

  // Pagination logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = allNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(allNotices.length / noticesPerPage);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mx-auto max-w-screen-lg w-full my-10">
      <h2 className="bg-blue-900 text-white text-2xl font-bold p-4 text-center">
        All Notices
      </h2>

      {/* Notice List */}
      <div className="p-6">
        {currentNotices.map((n, i) => (
          <div
            key={i}
            className="flex items-center border-b border-gray-300 py-3"
          >
            {/* Arrow */}
            <div className="w-8 flex justify-center text-blue-700">
              <FaArrowRight />
            </div>

            {/* Title */}
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

            {/* Divider */}
            <div className="w-6 flex justify-center">
              <div className="border border-dashed border-gray-400 h-12"></div>
            </div>

            {/* Date */}
            <div className="w-32 flex flex-col items-center justify-center text-sm text-gray-500">
              <p className="font-semibold">Uploaded Date</p>
              {n.date}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 p-4 bg-gray-100">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-900 text-white hover:bg-blue-700"}`}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-900 text-white hover:bg-blue-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllNotices;
