import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaDownload,
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="intro"
        className="min-h-screen bg-slate-900 flex items-center relative overflow-hidden
py-20 sm:py-24 md:py-28 lg:py-28"
      >
        <div
          ref={heroRef}
          className="container mx-auto
               px-4 sm:px-6 md:px-5 lg:px-12 xl:px-20

               grid grid-cols-1 lg:grid-cols-2
               gap-12 lg:gap-16
               items-center relative z-10"
        >
          {/* Text */}
          <div className="lg:mx-0  lg:text-left">
            <p className="text-sky-400 text-lg mb-3">Hello, I’m</p>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text">
                Md Shamim
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              <Typewriter
                words={[
                  "Full-Stack Web Developer",
                  "MERN Stack Specialist",
                  "React & Node.js Developer",
                ]}
                loop={0}
                cursor
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1400}
              />
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              I design and develop scalable, high-performance web applications
              with clean architecture, modern UI, and a strong focus on user
              experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg flex items-center gap-2 shadow-lg"
              >
                About Me <FaUserTie />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view"
                target="_blank"
                className="px-8 py-3 border border-slate-700 text-gray-200 rounded-lg flex items-center gap-2 hover:bg-slate-800"
              >
                Resume <FaDownload />
              </motion.a>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 blur-xl opacity-40" />
              <img
                src="https://i.ibb.co.com/G4SDhs3n/Portfolio-Profile.png"
                alt="Md Shamim"
                className="relative z-10
             w-64 sm:w-72 md:w-80 lg:w-[400px]
             rounded-2xl
             border border-slate-700
             shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" ref={aboutRef} className="py-28 bg-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A focused overview of my skills, experience, and professional
              mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <img
              src="https://i.ibb.co/1M7JsS2/profile-bg-Copy.jpg"
              alt="Md Shamim"
              className="rounded-xl shadow-xl border border-slate-700"
            />

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Full-Stack Web Developer
              </h3>

              <p className="text-gray-300 leading-relaxed">
                I specialize in building modern, scalable web applications using
                the MERN stack with TypeScript. My focus is on clean code,
                performance optimization, and intuitive user interfaces.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I have experience with REST APIs, authentication, database
                design, and state management using Redux Toolkit and React
                Query.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <InfoCard
                  icon={<FaCode />}
                  title="Tech Stack"
                  text="React, Node.js, MongoDB"
                />
                <InfoCard
                  icon={<FaBriefcase />}
                  title="Projects"
                  text="10+ Real-World Projects"
                />
                <InfoCard
                  icon={<FaGraduationCap />}
                  title="Education"
                  text="BSc in CSE (BRUR)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon, title, text }) => (
  <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
    <div className="text-sky-400 text-xl">{icon}</div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);

export default Introduction;

// import { motion } from "framer-motion";
// import {
//   FaDownload,
//   FaUser,
//   FaCode,
//   FaBriefcase,
//   FaGraduationCap,
// } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
// import { useEffect } from "react";

// const Introduction = () => {
//   useEffect(() => {
//     // Initialize animations if needed
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         id="intro"
//         className="pt-28 flex items-center justify-center bg-slate-900 relative overflow-hidden"
//         style={{ minHeight: "100vh" }}
//       >
//         {/* Background Elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 z-0"
//         >
//           <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
//         </motion.div>

//         <div className="container mx-auto px-4 z-10 relative">
//           <div className="flex flex-col justify-center items-center">
//             {/* Content - Text */}
//             <motion.div
//               className="max-w-3xl w-full"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="flex flex-col md:flex-row justify-between items-center md:items-center relative">
//                 <div className="text-left w-full md:w-3/4">
//                   <motion.p
//                     className="text-xl sm:text-2xl lg:text-3xl text-sky-400 font-medium mb-3"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     Hello, I&apos;m
//                   </motion.p>

//                   <motion.h1
//                     className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
//                       Md Shamim
//                     </span>
//                   </motion.h1>

//                   <motion.h2
//                     className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <Typewriter
//                       words={[
//                         "Frontend Web Developer",
//                         "Backend Developer",
//                         "MERN Stack Developer",
//                         "React Developer",
//                         "Full Stack Developer",
//                       ]}
//                       loop={0}
//                       cursor
//                       cursorStyle="_"
//                       typeSpeed={70}
//                       deleteSpeed={50}
//                       delaySpeed={1000}
//                     />
//                   </motion.h2>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8 }}
//                     className="flex flex-wrap gap-4 my-6"
//                   >
//                     <motion.a
//                       href="#about"
//                       whileHover={{ scale: 1.05, y: -3 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
//                     >
//                       About Me
//                       <FaUser />
//                     </motion.a>

//                     <motion.a
//                       href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05, y: -3 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="px-8 py-3 bg-slate-800 text-gray-200 font-medium rounded-lg border border-slate-700 hover:bg-slate-750 flex items-center gap-2"
//                     >
//                       Resume <FaDownload />
//                     </motion.a>
//                   </motion.div>
//                 </div>

//                 {/* Scroll Indicator - Right Side */}
//                 <motion.div
//                   className="hidden md:flex flex-col items-center justify-center h-full my-auto"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 1, delay: 1 }}
//                   style={{ alignSelf: "center" }}
//                 >
//                   <motion.div
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                     }}
//                   >
//                     <a
//                       href="#about"
//                       className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
//                     >
//                       <span className="text-lg font-medium mb-2">
//                         Scroll Down
//                       </span>
//                       <svg
//                         width="40"
//                         height="40"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-sky-400"
//                       >
//                         <path
//                           d="M12 5V19M12 19L19 12M12 19L5 12"
//                           stroke="currentColor"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Mobile Scroll Indicator - Bottom Center */}
//           {/* <motion.div
//             className="md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, y: [0, 10, 0] }}
//             transition={{
//               duration: 1.5,
//               delay: 1,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//           >
//             <a
//               href="#about"
//               className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
//             >
//               <span className="text-lg font-medium mb-2">Scroll Down</span>
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="text-sky-400"
//               >
//                 <path
//                   d="M12 5V19M12 19L19 12M12 19L5 12"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//           </motion.div> */}
//         </div>
//       </section>

//       {/* About Me Section */}
//       <section
//         id="about"
//         className="py-24 bg-slate-800 relative overflow-hidden"
//       >
//         {/* Background decoration */}
//         <div className="absolute -top-40 -left-40 w-80 h-80 bg-sky-700/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-700/5 rounded-full blur-3xl"></div>

//         <div className="container mx-auto px-4 max-w-6xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
//               <span className="relative z-10">About Me</span>
//               <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-600/20 -z-10 transform -rotate-1"></span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Get to know more about me, my background, and what I do.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* About Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative z-10 rounded-lg overflow-hidden border-4 border-slate-700 shadow-xl">
//                 <img
//                   src="https://i.ibb.co/1M7JsS2/profile-bg-Copy.jpg"
//                   alt="About Md Shamim"
//                   className="w-full h-auto"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
//               </div>
//               <div className="absolute -top-4 -left-4 w-full h-full border-4 border-sky-500/30 rounded-lg z-0"></div>
//             </motion.div>

//             {/* About Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-2xl font-bold text-white">
//                 Full-Stack Developer
//               </h3>

//               <p className="text-gray-300 text-lg leading-relaxed">
//                 I specialize in building modern web applications using the MERN
//                 stack (MongoDB, Express, React, Node.js) along with TypeScript
//                 for type-safe development. I focus on creating intuitive,
//                 responsive interfaces and scalable backend solutions.
//               </p>

//               <p className="text-gray-300 text-lg leading-relaxed">
//                 Experienced in state management with Redux Toolkit & RTK Query,
//                 and comfortable working with relational databases like
//                 PostgreSQL. I’m passionate about clean code, optimized user
//                 experiences, and delivering solutions that truly meet client
//                 needs.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
//                     <FaCode className="text-sky-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">Web Development</h4>
//                     <p className="text-gray-400 text-sm">
//                       Modern & responsive apps
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
//                     <FaBriefcase className="text-sky-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">10+ Projects</h4>
//                     <p className="text-gray-400 text-sm">
//                       Delivered successfully
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
//                     <FaGraduationCap className="text-sky-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">BSc in CSE</h4>
//                     <p className="text-gray-400 text-sm">
//                       Begum Rokeya University, Rangpur
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-block px-8 py-3 mt-6 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg"
//               >
//                 Let&apos;s Talk
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Introduction;
