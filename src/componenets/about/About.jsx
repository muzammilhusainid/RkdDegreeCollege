import React from "react";
import ownerPic from "../../assets/images/owner.webp"; // apni owner ki image ka path yaha lagao

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
        About Us
      </h2>

      {/* Grey Background Section */}
      <div className="bg-gray-100 rounded-lg shadow-md p-8 space-y-6">
        {/* College Details */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            RKD Degree College, established in <span className="font-semibold">2013</span>, 
            has been a proud institution dedicated to higher education. Initially affiliated 
            with <span className="font-semibold">CSJM University, Kanpur</span>, the college 
            is now affiliated with <span className="font-semibold">Lucknow University</span>, 
            ensuring academic excellence and recognition.
          </p>
          <p>
            Every year, nearly <span className="font-semibold">200 new students</span> join 
            our college, reflecting the trust and reputation we have built in the region. 
            Our aim is to provide quality education, nurture talent, and empower students 
            with knowledge and values that prepare them for a successful future.
          </p>
          <p>
            At RKD Degree College, teaching is not just about academics — it is about 
            holistic development. With experienced faculty, interactive learning methods, 
            and a focus on discipline, we ensure that every student receives the best 
            environment to grow intellectually and personally.
          </p>
        </div>

        {/* Chairman Message */}
        <div className="mt-10 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          {/* Owner Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <img
              src={ownerPic}
              alt="Chairman"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-900 shadow-md"
            />
          </div>

          {/* Message */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-blue-900">Chairman’s Message</h3>
            <p className="font-semibold text-gray-800 mb-2">Dr. Saroj Kumar Pandey — Founder / Director</p>
            <p className="italic text-lg leading-relaxed text-gray-700">
              "At RKD Degree College, we believe education is not just about degrees, 
              it is about shaping character, instilling discipline, and igniting curiosity.  
              Since 2013, our mission has been to empower young minds with knowledge and values 
              that prepare them to lead with confidence and integrity.  
              We welcome every student to be a part of this journey of growth, excellence, 
              and transformation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
