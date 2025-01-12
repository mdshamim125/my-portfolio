import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing:"ease-in-out",
    });
  });

  return (
    <section id="education" className="bg-gray-900 py-14">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h1 className="text-4xl font-bold text-gray-400 dark:text-white capitalize">
            Education
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 dark:text-gray-400">
            A snapshot of my academic journey that has shaped my technical
            skills and knowledge.
          </p>
        </div>

        {/* Education Cards Container */}
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {/* SSC Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex items-center justify-between">
              <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                2018
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
              SSC Completion
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Completed Secondary School Certificate (SSC) at Kamarpukur Model
              High School, Haripur, Thakurgaon.
            </p>
            <div className="mt-4 flex items-center">
              <FaUniversity className="text-gray-600 dark:text-gray-300" />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Kamarpukur Model High School
              </span>
            </div>
          </div>

          {/* HSC Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex items-center justify-between">
              <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                2020
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
              HSC Completion
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Completed Higher Secondary Certificate (HSC) at Pirganj Government
              College, Pirganj, Thakurgaon.
            </p>
            <div className="mt-4 flex items-center">
              <FaUniversity className="text-gray-600 dark:text-gray-300" />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Pirganj Government College
              </span>
            </div>
          </div>

          {/* BSc in CSE Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex items-center justify-between">
              <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                Ongoing
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
              BSc in Computer Science and Engineering
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Currently pursuing BSc in Computer Science and Engineering at
              Begum Rokeya University, Rangpur.
            </p>
            <div className="mt-4 flex items-center">
              <FaUniversity className="text-gray-600 dark:text-gray-300" />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Begum Rokeya University, Rangpur
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
