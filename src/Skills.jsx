import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-base-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="flex flex-wrap justify-center py-4">
          {/* List your skills here */}
          <span className="m-2 badge badge-secondary">HTML</span>
          <span className="m-2 badge badge-secondary">CSS</span>
          <span className="m-2 badge badge-secondary">Tailwind CSS</span>
          <span className="m-2 badge badge-secondary">JavaScript</span>
          <span className="m-2 badge badge-secondary">React</span>
          <span className="m-2 badge badge-secondary">Node.js</span>
          <span className="m-2 badge badge-secondary">Express.js</span>
          <span className="m-2 badge badge-secondary">MongoDB</span>
          <span className="m-2 badge badge-secondary">Firebase</span>
          <span className="m-2 badge badge-secondary">Netlify</span>
          <span className="m-2 badge badge-secondary">Vercel</span>
          <span className="m-2 badge badge-secondary">Java</span>
          <span className="m-2 badge badge-secondary">C</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
