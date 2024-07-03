import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img
            className="w-auto h-7"
            src="https://merakiui.com/images/full-logo.svg"
            alt=""
          />
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2021. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://github.com/mdshamim125"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.linkedin.com/in/md-shamim125"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.facebook.com/profile.php?id=100028692487641&locale=fr_FR"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
