import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import fb_profile from "./assets/facebook_profile_2.jpg";

import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaSpinner,
  FaServer,
  // FaUserTie,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_8nx1hy3",
        "template_bqg4mkj",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          reply_to: formData.email,
          message: formData.message,
        },
        "uv0dNGe2x2tgQzEx8"
      )
      .then((result) => {
        toast.success(
          "Message sent successfully! I&apos;ll get back to you soon."
        );
        console.log("Email sent:", result.text);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setLoading(false);
        setFormSubmitted(true);

        // Reset form submitted state after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again later.");
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-800 py-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to explore collaboration
            opportunities? I&apos;m always open to discussing new ideas and
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm shadow-lg h-full flex flex-col transform transition-all duration-500 hover:shadow-blue-900/20"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaPaperPlane className="mr-3 text-sky-400" />
              <span className="relative">
                Send Me a Message
                {loading && (
                  <FaSpinner className="ml-3 inline-block animate-spin text-sky-400" />
                )}
                {formSubmitted && (
                  <span className="absolute -right-2 -top-2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                )}
              </span>
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5 flex-grow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border ${
                      formErrors.name ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border ${
                      formErrors.email ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border ${
                    formErrors.message ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 rounded-lg text-white font-medium transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-blue-900/20"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="h-full flex flex-col"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm shadow-lg h-full flex flex-col transform transition-all duration-500 hover:shadow-blue-900/20">
              <div className="mb-8 border-b border-gray-700 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  {/* <FaUserTie className="mr-3 text-sky-400" /> */}
                  <img
                    src={fb_profile}
                    className="h-16 w-16 rounded-full mr-4"
                    alt="fb_image"
                  />
                  Md Shamim
                </h3>
                <p className="text-gray-300 flex items-center space-x-2 mt-2">
                  <span className="bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text font-bold">
                    MERN Stack
                  </span>
                  <span className="mx-2 text-gray-600">|</span>
                  <span>Full Stack Developer</span>
                </p>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Specialized in building modern, high-performance web
                  applications with React, Node.js, and MongoDB.
                </p>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FaServer className="mr-3 text-sky-400" />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-sky-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-300 font-medium">Location</h4>
                      <p className="text-gray-400 mt-1">Rangpur, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
                      <FaEnvelope className="text-sky-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-300 font-medium">Email</h4>
                      <a
                        href="mailto:cse12005038brur@gmail.com"
                        className="text-gray-400 mt-1 hover:text-sky-400 transition-colors block"
                      >
                        cse12005038brur@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
                      <FaPhoneAlt className="text-sky-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-300 font-medium">Phone</h4>
                      <a
                        href="tel:+8801710534833"
                        className="text-gray-400 mt-1 hover:text-sky-400 transition-colors block"
                      >
                        +880 1710 534833
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-gray-300 font-medium mb-4 flex items-center">
                    Connect with me
                    <span className="ml-2 h-px bg-gradient-to-r from-sky-500/40 to-transparent flex-grow"></span>
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/mdshamim125"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-shamim125"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/md.shamim.421103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
