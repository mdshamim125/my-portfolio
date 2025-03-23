import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCode,
  FaServer,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiMongoose,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FaCode className="text-sky-400 text-xl" />,
    skills: [
      {
        skill: "HTML",
        icon: <FaHtml5 className="text-orange-600 text-4xl" />,
        proficiency: 95,
      },
      {
        skill: "CSS",
        icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
        proficiency: 92,
      },
      {
        skill: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500 text-4xl" />,
        proficiency: 90,
      },
      {
        skill: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-4xl" />,
        proficiency: 90,
      },
      {
        skill: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-4xl" />,
        proficiency: 85,
      },
      {
        skill: "React.js",
        icon: <FaReact className="text-blue-400 text-4xl" />,
        proficiency: 92,
      },
      {
        skill: "Redux",
        icon: <SiRedux className="text-purple-600 text-4xl" />,
        proficiency: 88,
      },
      {
        skill: "Next.js",
        icon: <SiNextdotjs className="text-white text-4xl" />,
        proficiency: 85,
      },
    ],
  },
  {
    name: "Backend Development",
    icon: <FaServer className="text-sky-400 text-xl" />,
    skills: [
      {
        skill: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />,
        proficiency: 88,
      },
      {
        skill: "Express.js",
        icon: <SiExpress className="text-white text-4xl" />,
        proficiency: 90,
      },
      {
        skill: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />,
        proficiency: 85,
      },
      {
        skill: "Mongoose",
        icon: <SiMongoose className="text-green-600 text-4xl" />,
        proficiency: 85,
      },
      {
        skill: "MySQL",
        icon: <SiMysql className="text-blue-600 text-4xl" />,
        proficiency: 82,
      },
    ],
  },
  {
    name: "Programming Languages",
    icon: <FaDatabase className="text-sky-400 text-xl" />,
    skills: [
      {
        skill: "C",
        icon: <SiC className="text-blue-700 text-4xl" />,
        proficiency: 85,
      },
      {
        skill: "C++",
        icon: <SiCplusplus className="text-blue-600 text-4xl" />,
        proficiency: 80,
      },
      {
        skill: "Python",
        icon: <FaPython className="text-red-600 text-4xl" />,
        proficiency: 82,
      },
      {
        skill: "Java",
        icon: <FaJava className="text-orange-500 text-4xl" />,
        proficiency: 83,
      },
    ],
  },
];

const getProficiencyLevel = (proficiency) => {
  if (proficiency >= 90) return { text: "Expert", color: "text-indigo-400" };
  if (proficiency >= 80) return { text: "Advanced", color: "text-sky-400" };
  if (proficiency >= 70) return { text: "Proficient", color: "text-green-400" };
  return { text: "Intermediate", color: "text-yellow-400" };
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Technical Skills</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise in various technologies and programming languages
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div
                className="flex items-center gap-3 mb-8"
                data-aos="fade-right"
              >
                {category.icon}
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg overflow-hidden hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="relative">
                        {skill.icon}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              getProficiencyLevel(skill.proficiency).color
                            }`}
                          ></div>
                        </div>
                      </div>
                      <span className="mt-4 text-lg font-medium text-white">
                        {skill.skill}
                      </span>

                      <div className="w-full mt-2 bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-sm font-medium mt-1 ${
                          getProficiencyLevel(skill.proficiency).color
                        }`}
                      >
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedSkill && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-gray-800 rounded-xl border border-gray-700 p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-4 mb-4">
                {selectedSkill.icon}
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {selectedSkill.skill}
                  </h4>
                  <div
                    className={`text-lg ${
                      getProficiencyLevel(selectedSkill.proficiency).color
                    }`}
                  >
                    {getProficiencyLevel(selectedSkill.proficiency).text} (
                    {selectedSkill.proficiency}%)
                  </div>
                </div>
              </div>

              <div className="w-full mb-6 bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                  style={{ width: `${selectedSkill.proficiency}%` }}
                ></div>
              </div>

              <p className="text-gray-300 mb-4">
                {selectedSkill.skill === "React.js" &&
                  "Building efficient, reusable UI components with React's component-based architecture and hooks system."}
                {selectedSkill.skill === "Node.js" &&
                  "Creating scalable server-side applications and RESTful APIs using Node.js runtime environment."}
                {selectedSkill.skill === "MongoDB" &&
                  "Designing and implementing NoSQL database schemas and queries for flexible data storage solutions."}
                {selectedSkill.skill.includes("CSS") &&
                  "Creating responsive and visually appealing layouts with modern CSS techniques and frameworks."}
                {selectedSkill.skill.includes("JavaScript") &&
                  "Implementing complex frontend logic and interactive user interfaces with modern JavaScript."}
                {(selectedSkill.skill === "C" ||
                  selectedSkill.skill === "C++" ||
                  selectedSkill.skill === "Python") &&
                  "Building efficient algorithms and data structures for various computational problems."}
                {!selectedSkill.skill.includes("CSS") &&
                  !selectedSkill.skill.includes("JavaScript") &&
                  selectedSkill.skill !== "React.js" &&
                  selectedSkill.skill !== "Node.js" &&
                  selectedSkill.skill !== "MongoDB" &&
                  selectedSkill.skill !== "C" &&
                  selectedSkill.skill !== "C++" &&
                  selectedSkill.skill !== "Python" &&
                  `Expertise in ${selectedSkill.skill} for building robust and scalable web applications.`}
              </p>

              <button
                className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-2 px-4 rounded-lg w-full"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 text-gray-400 bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
            <span>Skill Level:</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
              <span>Expert (90-100%)</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sky-400"></div>
              <span>Advanced (80-89%)</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Proficient (70-79%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
