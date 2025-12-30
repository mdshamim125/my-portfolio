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
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiMongoose,
  SiC,
  SiCplusplus,
  SiReactquery,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FaCode className="text-sky-400 text-xl" />,
    skills: [
      { skill: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { skill: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      {
        skill: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
      },
      {
        skill: "Sass (SCSS)",
        icon: <FaSass className="text-pink-500 text-4xl" />,
      },
      {
        skill: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500 text-4xl" />,
      },
      {
        skill: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-4xl" />,
      },
      {
        skill: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-4xl" />,
      },
      {
        skill: "React.js",
        icon: <FaReact className="text-sky-400 text-4xl" />,
      },
      {
        skill: "Next.js",
        icon: <SiNextdotjs className="text-white text-4xl" />,
      },
      {
        skill: "Redux Toolkit",
        icon: <SiRedux className="text-purple-500 text-4xl" />,
      },
      {
        skill: "TanStack Query",
        icon: <SiReactquery className="text-red-500 text-4xl" />,
      },
    ],
  },
  {
    name: "Backend Development",
    icon: <FaServer className="text-sky-400 text-xl" />,
    skills: [
      {
        skill: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
      },
      {
        skill: "Express.js",
        icon: <SiExpress className="text-white text-4xl" />,
      },
      {
        skill: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />,
      },
      {
        skill: "Mongoose",
        icon: <SiMongoose className="text-green-600 text-4xl" />,
      },
      {
        skill: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500 text-4xl" />,
      },
      {
        skill: "MySQL / SQL",
        icon: <SiMysql className="text-blue-400 text-4xl" />,
      },
      {
        skill: "Prisma ORM",
        icon: <SiPrisma className="text-white text-4xl" />,
      },
    ],
  },
  {
    name: "Programming Languages",
    icon: <FaDatabase className="text-sky-400 text-xl" />,
    skills: [
      { skill: "C", icon: <SiC className="text-blue-600 text-4xl" /> },
      {
        skill: "C++",
        icon: <SiCplusplus className="text-blue-500 text-4xl" />,
      },
      {
        skill: "Python",
        icon: <FaPython className="text-yellow-400 text-4xl" />,
      },
      { skill: "Java", icon: <FaJava className="text-orange-500 text-4xl" /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable, performant and
            production-ready applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, cIndex) => (
            <div key={cIndex}>
              {/* Category Header */}
              <div
                className="flex items-center gap-3 mb-8"
                data-aos="fade-right"
              >
                {category.icon}
                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 40}
                    className="bg-gray-800/60 border border-gray-700 rounded-xl p-6
                      flex flex-col items-center justify-center text-center
                      transition-all duration-300
                      hover:border-sky-500 hover:bg-gray-800 hover:shadow-md hover:shadow-sky-500/20"
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <span className="text-white text-base font-medium">
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
