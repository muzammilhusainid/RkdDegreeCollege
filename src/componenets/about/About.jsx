import React from "react";
import ownerPic from "../../assets/images/owner.webp"; // apni owner ki image ka path yaha lagao
import Director from "../director/Director"

const About = () => {
  return (

      <section className="max-w-screen-xl mx-auto px-6 py-16 lg:py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          ABOUT US
        </h2>

        {/* Grey Background Section */}
        <div className="bg-gray-100 shadow-md p-8 space-y-6">
          {/* College Details */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Rajkali Devi Mahavidyalaya, established in <span className="font-semibold">2010</span>,
              has been a proud institution dedicated to higher education. Initially affiliated
              with <span className="font-semibold">CSJM University, Kanpur</span>, the college
              is now affiliated with <span className="font-semibold">Lucknow University</span>,
              ensuring academic excellence and recognition.
            </p>
            <p>
              Every year, nearly <span className="font-semibold">500 new students</span> join
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
        </div>

        {/* Director Messege */}
        <Director />
      </section>
  );
};

export default About;
