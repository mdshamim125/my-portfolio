// import React from "react";

// const Skills = () => {
//   return (
//     <div id="skills" className="py-20 bg-base-200">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold">Technical Skills</h2>
//         <div className="flex flex-wrap justify-center py-4">
//           {/* List your skills here */}
//           <span className="m-2 badge badge-secondary">HTML</span>
//           <span className="m-2 badge badge-secondary">CSS</span>
//           <span className="m-2 badge badge-secondary">Tailwind CSS</span>
//           <span className="m-2 badge badge-secondary">JavaScript</span>
//           <span className="m-2 badge badge-secondary">React</span>
//           <span className="m-2 badge badge-secondary">Node.js</span>
//           <span className="m-2 badge badge-secondary">Express.js</span>
//           <span className="m-2 badge badge-secondary">MongoDB</span>
//           <span className="m-2 badge badge-secondary">Firebase</span>
//           <span className="m-2 badge badge-secondary">Netlify</span>
//           <span className="m-2 badge badge-secondary">Vercel</span>
//           <span className="m-2 badge badge-secondary">Java</span>
//           <span className="m-2 badge badge-secondary">C</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-base-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="flex flex-wrap justify-center py-4">
          {/* List your skills here */}
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
          <span className="m-2 badge badge-secondary bg-indigo-500 text-white p-4 rounded-full ">
            MongoDB
          </span>
          <span className="m-2 badge badge-secondary bg-orange-500 text-white p-4 rounded-full animate-bounce">
            Firebase
          </span>
          <span className="m-2 badge badge-secondary bg-cyan-500 text-white p-4 rounded-full animate-pulse">
            Netlify
          </span>
          <span className="m-2 badge badge-secondary bg-lime-500 text-white p-4 rounded-full animate-bounce">
            Vercel
          </span>
          <span className="m-2 badge badge-secondary bg-amber-500 text-white p-4 rounded-full animate-pulse">
            Java
          </span>
          <span className="m-2 badge badge-secondary bg-fuchsia-500 text-white p-4 rounded-full animate-bounce">
            C
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
