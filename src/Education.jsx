import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const educationData = [
  {
    id: 1,
    degree: "BSc in Computer Science and Engineering",
    institution: "Begum Rokeya University, Rangpur",
    location: "Rangpur, Bangladesh",
    duration: "2022 - Present",
    status: "Ongoing",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science and Engineering with a strong focus on problem-solving, software development, and modern web technologies. Building a solid foundation in algorithms, data structures, and full-stack application development.",
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
    ],
    icon: <FaGraduationCap className="text-6xl text-sky-500" />,
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="education"
      className="bg-gray-900 py-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Education</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background that has shaped my technical expertise and
            professional growth.
          </p>
        </div>

        {/* Single Education Card */}
        {educationData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-sky-900/10 transition-all duration-300 hover:translate-y-[-5px]"
            data-aos="zoom-in"
          >
            <div className="p-8">
              <div className="flex items-start gap-6">
                {item.icon}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        item.status === "Ongoing"
                          ? "bg-sky-900/50 text-sky-300"
                          : "bg-green-900/50 text-green-300"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" /> {item.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-gray-300 mt-2">
                    <FaUniversity className="text-sky-400 mr-2" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <FaMapMarkerAlt className="text-sky-400 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Key Subjects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
