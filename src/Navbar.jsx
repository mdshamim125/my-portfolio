import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { title: "Home", href: "#intro" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ["intro", "skills", "projects", "education", "contact"];

      // Determine active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      setAtTop(currentScrollY === 0);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed mx-auto top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      } ${
        atTop
          ? "bg-transparent"
          : "bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/60 shadow-xl"
      }`}
    >
      <div className="container px-4 py-3 mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="relative">
              <img
                className="w-10 h-10 rounded-md shadow-lg border border-sky-500/30"
                src="https://i.ibb.co/6BDDyvD/portfolio.png"
                alt="Logo"
              />
              <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 opacity-30 blur-sm"></div>
            </div>
            <div className="ml-3">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 hidden sm:block">
                Md Shamim
              </span>
              <span className="text-xs text-gray-400 hidden sm:block">
                Portfolio
              </span>
            </div>
          </motion.a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              whileHover={{
                y: -2,
                backgroundColor: "rgba(59, 130, 246, 0.08)",
              }}
              whileTap={{ y: 0 }}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg ${
                activeSection === link.href.substring(1)
                  ? "text-sky-400"
                  : "text-gray-300 hover:text-white"
              } transition-all duration-200`}
            >
              {link.title}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute inset-x-0 -bottom-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}

          <motion.a
            href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 px-5 py-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-md text-sm shadow-md hover:shadow-sky-500/20 transition-all duration-300 border border-sky-500/30"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <motion.div className="flex md:hidden" whileTap={{ scale: 0.9 }}>
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none bg-slate-800/70 p-2 rounded-lg hover:bg-slate-700/80 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50"
      >
        {isOpen && (
          <div className="container mx-auto px-6 py-4 space-y-2.5">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`block px-3 py-2 text-base font-medium rounded-lg ${
                  activeSection === link.href.substring(1)
                    ? "text-sky-400 bg-sky-900/20 border border-sky-800/30"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/70"
                } transition-colors duration-200`}
              >
                {link.title}
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              className="block px-4 py-2.5 mt-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md"
            >
              Resume
            </motion.a>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
