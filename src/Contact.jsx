import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    emailjs
      .send(
        "service_8nx1hy3", // Replace with your EmailJS service ID
        "template_bqg4mkj", // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "uv0dNGe2x2tgQzEx8" // Replace with your EmailJS public user ID
      )
      .then((result) => {
        toast.success("Email sent successfully!");
        console.log("Email sent:", result.text);
        setName(""); 
        setEmail(""); 
        setMessage("");
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.error("Error:", error);
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-white capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>
            <p className="mt-4 text-white dark:text-gray-400">
              Ask me everything and I would love to hear from you
            </p>

            {/* Form */}
            <form onSubmit={sendEmail} className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-lg text-white dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-lg text-white dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-lg text-white dark:text-gray-200">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full h-32 px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send Email
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="https://i.ibb.co/RPbKHWp/IMG-4539.jpg"
              alt="Profile"
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                  Rangpur, Bangladesh
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                  +8801710534833
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                  cse12005038brur@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-white dark:text-gray-300">Contact me with</h3>
              <div className="flex mt-4 -mx-1.5">
                <a
                  target="_blank"
                  href="https://github.com/mdshamim125"
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-shamim-4b2b88210/"
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/mdshamim125"
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                >
                  <FaFacebook size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
