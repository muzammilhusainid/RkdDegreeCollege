import React, { useState } from "react";
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.jpg";
import event3 from "../../assets/images/event3.jpg";
import event4 from "../../assets/images/event4.jpg";
import event5 from "../../assets/images/event5.jpg";

const events = [
  { id: 1, title: "Annual Fest", image: event1 },
  { id: 2, title: "Sports Day", image: event2 },
  { id: 3, title: "Seminar", image: event3 },
  { id: 4, title: "Workshop", image: event4 },
  { id: 5, title: "Convocation", image: event5 },
];

const AllEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3; // ek page par kitne events dikhane hain

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mx-auto max-w-screen-lg w-full my-10">
      <h2 className="bg-green-700 text-white text-2xl font-bold p-4 text-center">
        All Events
      </h2>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {currentEvents.map((e) => (
          <a
            href={e.image}
            target="_blank"
            rel="noopener noreferrer"
            key={e.id}
          >
            <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-full object-contain rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-700">{e.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 p-4 bg-gray-100">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-700 text-white hover:bg-green-600"
          }`}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-700 text-white hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllEvents;
