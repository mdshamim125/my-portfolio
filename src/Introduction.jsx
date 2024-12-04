import "animate.css";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  return (
    <div
      id="intro"
      className="hero flex items-center justify-center bg-base-200"
      style={{
        minHeight: "calc(100vh - 80px)", // Subtracts 60px navbar height from the full viewport height
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/dbk5Mkc/IMG-4537.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
        backgroundRepeat: "no-repeat", // Ensure the background does not repeat
        backgroundOrigin: "padding-box", // Controls the origin of the background
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate__animated animate__fadeInLeft">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-left">
            <Typewriter
              words={["Hello, I'm Md Shamim"]}
              loop={0} // Once the sentence is typed, it stops.
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={200}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="text-xl md:text-2xl text-white my-4 text-left">
            <Typewriter
              words={[
                "Frontend Web Developer",
                "Backend Developer",
                "MERN Stack Developer",
                "React Developer",
              ]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-sm md:text-lg text-white leading-relaxed text-left">
            I have expertise in HTML, CSS, JavaScript, TypeScript, React.js,
            Next.js, Express.js, and MongoDB. I specialize in building
            responsive websites and aim to become a professional MERN stack web
            developer.
          </p>
          <div className="flex gap-2 items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1zVjQPJZYl_M6fSVQT8qFlpvUvOBJxDWm/view"
              className="mt-6  px-6 py-2 md:py-3 text-xs md:text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

// import "animate.css";
// import { Typewriter } from "react-simple-typewriter";

// const Introduction = () => {
//   return (
//     <div
//       id="intro"
//       className="hero min-h-[520px] bg-base-200 flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto flex flex-wrap items-center justify-center">
//         <div className="lg:w-1/2 md:w-2/3 w-full px-4">
//           <div className=" animate__animated animate__fadeInLeft">
//             <h1 className="md:text-5xl text-2xl font-bold text-white">
//               <Typewriter
//                 words={["Hello, I'm Md Shamim"]}
//                 loop={0} // Once the sentence is typed, it stops.
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </h1>
//             <h2 className="md:text-2xl text-lg text-white my-4">
//               <Typewriter
//                 words={[
//                   "Frontend Web Developer",
//                   "React Developer",
//                   "Web Enthusiast",
//                 ]}
//                 loop={0} // 0 means infinite loop
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </h2>
//             <p className="md:text-lg text-white">
//               I have expertise in HTML, CSS, JavaScript, React, Express.js, and
//               MongoDB. I specialize in building responsive websites and aim to
//               become a professional MERN stack web developer.
//             </p>
//             <a
//               target="_blank"
//               href="https://drive.google.com/file/d/1stVnnZfFJgiBw9YVKLoMyOBRruGTDyP_/view?usp=sharing"
//               className="btn btn-primary  md:mt-4 md:px-6 md:py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//         <div className="flex-1 text-center mb-0 mt-1 md:mt-0 animate__animated animate__fadeInRight">
//           <img
//             src="https://i.ibb.co/dbk5Mkc/IMG-4537.jpg"
//             alt="Md Shamim"
//             className="w-[500px] h-[500px] rounded-full md:ml-24"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Introduction;
