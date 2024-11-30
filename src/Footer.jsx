import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="container flex flex-col items-center justify-between p-2 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="/">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i.ibb.co/6BDDyvD/portfolio.png"
            alt="Logo"
          />
        </a>

        <p className="text-sm text-white dark:text-gray-300">
          © Copyright 2024. All Rights Reserved.
        </p>

        <div className="flex text-white -mx-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400  transition-colors duration-300 transform hover:text-blue-500"
            href="https://github.com/mdshamim125"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400  transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.linkedin.com/in/md-shamim125"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1.5 dark:hover:text-blue-400  transition-colors duration-300 transform hover:text-blue-500"
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
