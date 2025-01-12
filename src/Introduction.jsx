import "animate.css";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the viewport
      easing: "ease-in-out", // Easing function
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div>
      <div
        id="intro"
        className="hero flex items-center justify-center bg-gray-900"
        style={{
          minHeight: "calc(100vh - 80px)",
          backgroundOrigin: "padding-box",
        }}
      >
        <div
          className="container mx-auto px-4 flex flex-col-reverse justify-center md:flex-row items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* Left Content */}
          <div className="max-w-xl md:max-w-md m-6" data-aos="zoom-in" data-aos-delay="300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 text-left">
              <Typewriter
                words={["Hello, I'm Md Shamim"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </h1>
            <h2
              className="text-xl md:text-2xl text-gray-300 my-4 text-left"
              data-aos="fade-right"
              data-aos-delay="500"
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
            </h2>
            <p
              className="text-sm md:text-lg text-gray-300 leading-relaxed text-left"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              I have expertise in HTML, CSS, JavaScript, TypeScript, React.js,
              Next.js, Express.js, and MongoDB. I specialize in building
              responsive websites and aim to become a professional MERN stack
              web developer.
            </p>
            <div
              className="flex gap-2 items-center"
              data-aos="flip-up"
              data-aos-delay="900"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1zVjQPJZYl_M6fSVQT8qFlpvUvOBJxDWm/view"
                className="mt-6 px-6 py-2 md:py-3 text-xs md:text-base font-semibold text-gray-200 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-600 rounded-lg shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="m-6"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="https://i.ibb.co/1M7JsS2/profile-bg-Copy.jpg"
              alt="Profile"
              className="rounded-full object-cover w-60 h-60 md:w-52 md:h-52 xl:w-[450px] xl:h-[450px] lg:w-[300px] lg:h-[300px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
