import React from "react";
import "animate.css";
const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-base-200">
      <div className="text-center animate__animated animate__fadeInLeft">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="flex flex-wrap justify-center py-4">
          {/* List your technical skills here */}
          <span className="m-2 badge badge-secondary bg-red-500 text-white p-4 rounded-full animate-bounce">
            HTML
          </span>
          <span className="m-2 badge badge-secondary bg-blue-500 text-white p-4 rounded-full animate-pulse">
            CSS
          </span>
          <span className="m-2 badge badge-secondary bg-teal-500 text-white p-4 rounded-full animate-bounce">
            Tailwind CSS
          </span>
          <span className="m-2 badge badge-secondary bg-yellow-500 text-white p-4 rounded-full animate-pulse">
            JavaScript
          </span>
          <span className="m-2 badge badge-secondary bg-purple-500 text-white p-4 rounded-full animate-bounce">
            React
          </span>
          <span className="m-2 badge badge-secondary bg-green-500 text-white p-4 rounded-full animate-pulse">
            Node.js
          </span>
          <span className="m-2 badge badge-secondary bg-pink-500 text-white p-4 rounded-full animate-bounce">
            Express.js
          </span>
          <span className="m-2 badge badge-secondary bg-indigo-500 text-white p-4 rounded-full">
            MongoDB
          </span>

          <span className="m-2 badge badge-secondary bg-fuchsia-500 text-white p-4 rounded-full animate-bounce">
            C
          </span>
          <span className="m-2 badge badge-secondary bg-amber-500 text-white p-4 rounded-full animate-pulse">
            Java
          </span>
        </div>
      </div>

      <div className="text-center mt-10 animate__animated animate__fadeInRight">
        <h2 className="text-3xl font-bold">Soft Skills</h2>
        <div className="flex flex-wrap justify-center py-4">
          {/* List your soft skills here */}
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Communication
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Teamwork
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Problem Solving
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Time Management
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Leadership
          </span>
        </div>
      </div>

      <div className="text-center mt-10 animate__animated animate__fadeInDownBig">
        <h2 className="text-3xl font-bold">Tools & Technologies</h2>
        <div className="flex flex-wrap justify-center py-4">
          {/* List your tools & technologies here */}
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Visual Studio Code
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Git
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            GitHub
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Firebase
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Netlify
          </span>
          <span className="m-2 badge badge-secondary bg-gray-500 text-white p-4 rounded-full">
            Vercel
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
