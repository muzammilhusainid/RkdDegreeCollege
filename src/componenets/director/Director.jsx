import React from "react";
import directorImg from "../../assets/images/owner.webp";

const Director = () => {
    return (
        <section className="pt-12 director-section ">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-4 items-center px-24 flex justify-center">

                {/* Director Image + Name Card */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative inline-block">
                        {/* Frame strokes */}
                        <div class="directorPic w-[316px] md:w-[336px] h-[380px] md:h-[400px] flex justify-center items-center relative hover:scale-105 duration-500">
                            <div class="bg-gradient-to-tl from-[#1e1d8ae8] to-sky-500 w-32 h-32 absolute top-0 left-0"></div>
                            <div class="bg-gradient-to-br from-[#1e1d8ae8] to-sky-500 w-32 h-32 absolute bottom-0 right-0"></div>
                            <img src={directorImg} alt="directorImg" class="w-[300px] md:w-80 h-[364px] md:h-96 z-10 " /></div>

                        <div className="absolute bottom-2 left-2  bg-yellow-600 text-white px-12 py-1 shadow-lg text-center z-40">
                            <h4 className="text-lg font-bold">Dr. Saroj Kumar Pandey</h4>
                            <span className="text-sm italic">Director</span>
                        </div>
                    </div>

                </div>

                {/* Director Message */}
                <div className="space-y-4">
                    <div className="section-header text-start">
                        <span className="text-blue-700 font-semibold uppercase tracking-wide">
                            From the Director's Desk
                        </span>
                        <h2 className="text-3xl font-bold text-blue-900 mt-2">
                            A Message from <span className="text-yellow-500">Our Director</span>
                        </h2>
                    </div>

                    <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 text-lg text-justify">
                        "Education is not just about acquiring knowledge, but about shaping
                        character, building values, and preparing students to lead society
                        with wisdom and compassion."
                    </blockquote>

                    <p className="text-gray-700 leading-relaxed text-justify">
                        At Rajkali Devi Mahavidyalaya, we believe that true education goes beyond
                        classrooms. It is about nurturing integrity, discipline, and
                        leadership in every student. Our mission is to empower young minds
                        to become responsible citizens who contribute positively to the
                        nation.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-justify">
                        We encourage our students to strive for excellence in academics,
                        sports, and cultural activities, while also embracing values of
                        brotherhood and service. Together, we aim to build a future where
                        knowledge meets character.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Director;
