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
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800"
    >
      <div className="mx-auto md:px-20 px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/6BDDyvD/portfolio.png"
            alt="Logo"
            className="w-9 h-9 rounded-md border border-slate-700"
          />
          <div className="hidden sm:block">
            <p className="text-white font-semibold leading-none">Md Shamim</p>
            <span className="text-xs text-slate-400">Portfolio</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`relative text-sm font-medium transition ${
                activeSection === link.href.substring(1)
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.title}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-medium rounded-md bg-sky-500 text-white hover:bg-sky-600 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-slate-900 border-t border-slate-800"
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                activeSection === link.href.substring(1)
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.title}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 text-sm rounded-md bg-sky-500 text-white"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
