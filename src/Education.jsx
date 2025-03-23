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
    duration: "2021 - Present",
    status: "Ongoing",
    description:
      "Focusing on core computer science principles, software engineering, and modern web development technologies.",
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
    ],
    icon: <FaGraduationCap className="text-5xl text-sky-500" />,
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Pirganj Government College",
    location: "Pirganj, Thakurgaon",
    duration: "2018 - 2020",
    status: "Completed",
    description:
      "Focused on Science group with Physics, Chemistry, Mathematics, and Biology as major subjects.",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: <FaGraduationCap className="text-5xl text-sky-500" />,
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kamarpukur Model High School",
    location: "Haripur, Thakurgaon",
    duration: "2016 - 2018",
    status: "Completed",
    description:
      "Completed secondary education with Science as the main focus area.",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: <FaGraduationCap className="text-5xl text-sky-500" />,
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
      className="bg-gray-900 py-24 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Educational Journey</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The academic path that has shaped my technical foundation and
            knowledge
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-500 to-indigo-600 rounded"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className="relative"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot (visible on md screens) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 border-4 border-gray-900 z-10 mt-6"></div>

                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0
                      ? "md:ml-auto md:mr-16"
                      : "md:mr-auto md:ml-16"
                  }`}
                >
                  <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-sky-900/10 transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        {item.icon}
                        <div>
                          <div className="flex items-center gap-2">
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
                          <h3 className="text-xl font-bold text-white mt-1">
                            {item.degree}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="flex items-center text-gray-300">
                          <FaUniversity className="text-sky-400 mr-2" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <FaMapMarkerAlt className="text-sky-400 mr-2" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-300">{item.description}</p>

                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
