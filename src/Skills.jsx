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
  SiPostgresql,
  SiRedux,
  SiMongoose,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FaCode className="text-sky-400 text-xl" />,
    skills: [
      { skill: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
      { skill: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
      {
        skill: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500 text-5xl" />,
      },
      {
        skill: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-5xl" />,
      },
      {
        skill: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-5xl" />,
      },
      {
        skill: "React.js",
        icon: <FaReact className="text-blue-400 text-5xl" />,
      },
      // {
      //   skill: "Redux",
      //   icon: <SiRedux className="text-purple-600 text-5xl" />,
      // },
      {
        skill: "Redux Toolkit",
        icon: <SiRedux className="text-purple-600 text-5xl" />,
      },
      {
        skill: "RTK Query",
        icon: <SiRedux className="text-pink-500 text-5xl" />, 
      },
      {
        skill: "Next.js",
        icon: <SiNextdotjs className="text-white text-5xl" />,
      },
    ],
  },
  {
    name: "Backend Development",
    icon: <FaServer className="text-sky-400 text-xl" />,
    skills: [
      {
        skill: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-5xl" />,
      },
      {
        skill: "Express.js",
        icon: <SiExpress className="text-white text-5xl" />,
      },
      {
        skill: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
      {
        skill: "Mongoose",
        icon: <SiMongoose className="text-green-600 text-5xl" />,
      },
      {
        skill: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500 text-5xl" />,
      },
      
      { skill: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    ],
  },
  {
    name: "Programming Languages",
    icon: <FaDatabase className="text-sky-400 text-xl" />,
    skills: [
      { skill: "C", icon: <SiC className="text-blue-700 text-5xl" /> },
      {
        skill: "C++",
        icon: <SiCplusplus className="text-blue-600 text-5xl" />,
      },
      {
        skill: "Python",
        icon: <FaPython className="text-yellow-400 text-5xl" />,
      },
      { skill: "Java", icon: <FaJava className="text-orange-500 text-5xl" /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Technical Skills</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated set of technologies and tools for building scalable,
            high-performance applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <div
                className="flex items-center gap-3 mb-8"
                data-aos="fade-right"
              >
                {category.icon}
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                    className="group bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 shadow-lg 
  p-6 flex flex-col items-center text-center transform transition-transform duration-500 ease-out 
  hover:scale-110 hover:-translate-y-2 hover:border-sky-500 hover:shadow-sky-500/40"
                  >
                    {/* Icon */}
                    <div className="mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110">
                      {skill.icon}
                    </div>

                    {/* Text */}
                    <span className="text-lg font-medium text-white transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:text-sky-400">
                      {skill.skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
