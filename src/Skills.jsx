import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiC,
  SiVisualstudiocode,
  SiFirebase,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const technicalSkills = [
  { skill: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { skill: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  {
    skill: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-5xl" />,
  },
  { skill: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  {
    skill: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
  { skill: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
  {
    skill: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 text-5xl" />,
  },
  { skill: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { skill: "Express.js", icon: <SiExpress className="text-black text-5xl" /> },
  { skill: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { skill: "C", icon: <SiC className="text-blue-700 text-5xl" /> },
  { skill: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
];

const toolsAndTechnologies = [
  {
    tool: "Visual Studio Code",
    icon: <SiVisualstudiocode className="text-blue-600 text-5xl" />,
  },
  { tool: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  { tool: "GitHub", icon: <FaGithub className="text-black text-5xl" /> },
  {
    tool: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
  },
  { tool: "Netlify", icon: <SiNetlify className="text-blue-500 text-5xl" /> },
  { tool: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-base-200">
      <div className="container mx-auto px-5">
        {/* Technical Skills Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-3 text-xl font-semibold">
                  {skill.skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                <span className="text-xl font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {toolsAndTechnologies.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                {tool.icon}
                <span className="mt-3 text-xl font-semibold">{tool.tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
