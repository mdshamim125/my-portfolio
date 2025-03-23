import { motion } from "framer-motion";
import {
  FaDownload,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    // Initialize animations if needed
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="intro"
        className="pt-28 flex items-center justify-center bg-slate-900 relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col justify-center items-center">
            {/* Content - Text */}
            <motion.div
              className="max-w-3xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center md:items-center relative">
                <div className="text-left w-full md:w-3/4">
                  <motion.p
                    className="text-xl sm:text-2xl lg:text-3xl text-sky-400 font-medium mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Hello, I&apos;m
                  </motion.p>

                  <motion.h1
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                      Md Shamim
                    </span>
                  </motion.h1>

                  <motion.h2
                    className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Typewriter
                      words={[
                        "Frontend Web Developer",
                        "Backend Developer",
                        "MERN Stack Developer",
                        "React Developer",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4 mt-6"
                  >
                    <motion.a
                      href="#about"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
                    >
                      About Me
                      <FaUser />
                    </motion.a>

                    <motion.a
                      href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-slate-800 text-gray-200 font-medium rounded-lg border border-slate-700 hover:bg-slate-750 flex items-center gap-2"
                    >
                      Resume <FaDownload />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Scroll Indicator - Right Side */}
                <motion.div
                  className="hidden md:flex flex-col items-center justify-center h-full my-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ alignSelf: "center" }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <a
                      href="#about"
                      className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      <span className="text-lg font-medium mb-2">
                        Scroll Down
                      </span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-sky-400"
                      >
                        <path
                          d="M12 5V19M12 19L19 12M12 19L5 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Scroll Indicator - Bottom Center */}
          <motion.div
            className="md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span className="text-lg font-medium mb-2">Scroll Down</span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-sky-400"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-24 bg-slate-800 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-sky-700/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-700/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-600/20 -z-10 transform -rotate-1"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-slate-700 shadow-xl">
                <img
                  src="https://i.ibb.co/1M7JsS2/profile-bg-Copy.jpg"
                  alt="About Md Shamim"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-sky-500/30 rounded-lg z-0"></div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Full Stack Developer Based in Bangladesh
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                I build modern web applications using the MERN stack (MongoDB,
                Express, React, Node.js), focusing on creating intuitive,
                responsive interfaces and robust backend solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about clean code and optimized user experiences, I
                collaborate with clients to deliver custom web solutions that
                effectively address their business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaCode className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Web Development</h4>
                    <p className="text-gray-400 text-sm">
                      Modern and responsive
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaBriefcase className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">3+ Projects</h4>
                    <p className="text-gray-400 text-sm">Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaGraduationCap className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">BSc in CSE</h4>
                    <p className="text-gray-400 text-sm">
                      Begum Rokeya University, Rangpur
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 mt-6 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
