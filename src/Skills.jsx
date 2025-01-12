import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  // FaGitAlt,
  // FaGithub,
  // FaJava,
  FaPython,
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
  // SiVisualstudiocode,
  // SiFirebase,
  // SiNetlify,
  // SiVercel,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const technicalSkills = [
  { skill: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { skill: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  {
    skill: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-4xl" />,
  },
  { skill: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  {
    skill: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
  },
  { skill: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { skill: "Redux", icon: <SiRedux className="text-purple-600 text-4xl" /> },

  {
    skill: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 text-4xl" />,
  },
  { skill: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { skill: "Express.js", icon: <SiExpress className="text-black text-4xl" /> },
  { skill: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  {
    skill: "Mongoose",
    icon: <SiMongoose className="text-green-600 text-4xl" />,
  },
  { skill: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
  { skill: "C", icon: <SiC className="text-blue-700 text-4xl" /> },
  { skill: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
  { skill: "Python", icon: <FaPython className="text-red-600 text-4xl" /> },
];

// const softSkills = [
//   "Communication",
//   "Teamwork",
//   "Problem Solving",
//   "Time Management",
// ];

// const toolsAndTechnologies = [
//   {
//     tool: "Visual Studio Code",
//     icon: <SiVisualstudiocode className="text-blue-600 text-4xl" />,
//   },
//   { tool: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
//   { tool: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
//   {
//     tool: "Firebase",
//     icon: <SiFirebase className="text-yellow-500 text-4xl" />,
//   },
//   { tool: "Netlify", icon: <SiNetlify className="text-blue-500 text-4xl" /> },
//   { tool: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
// ];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Technical Skills Section */}
        <div className="mb-16">
          <h2
            className="text-4xl font-extrabold text-center text-gray-400 mb-8"
            data-aos="fade-right"
          >
            My Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105"
              >
                {skill.icon}
                <span className="mt-4 text-lg font-medium text-gray-700">
                  {skill.skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg shadow-md p-4 flex justify-center items-center text-center"
              >
                <span className="text-lg font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Tools & Technologies Section */}
        {/* <div>
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {toolsAndTechnologies?.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105"
              >
                {tool.icon}
                <span className="mt-4 text-lg font-medium text-gray-700">
                  {tool.tool}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
