import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaServer,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { projectsData } from "./data/projects";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const displayedTech = project.details.technologies.slice(0, 4);
  const displayedFeatures = project.details.features.slice(0, 4);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-900/30 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-72 group overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-md"
              title="Client Repo"
            >
              <FaCode size={18} />
            </a>
          )}
          {project.serverGithubUrl && (
            <a
              href={project.serverGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-md"
              title="Server Repo"
            >
              <FaServer size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.shortDesc}
          </p>

          {/* Technologies */}
          <div className="mb-5">
            <h5 className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">
              Technologies
            </h5>
            <div className="flex flex-wrap gap-2">
              {displayedTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-900/20 text-blue-300 rounded-full text-xs font-medium hover:bg-blue-700 hover:text-white transition-all"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
              {project.details.technologies.length > 4 && (
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium">
                  +{project.details.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div>
            <h5 className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">
              Key Features
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {displayedFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 text-sm flex items-start gap-2"
                >
                  <FaArrowRight className="text-blue-400 mt-[3px]" size={12} />
                  {feature.title}
                </li>
              ))}
              {project.details.features.length > 4 && (
                <li className="col-span-2 text-center">
                  <span className="text-blue-400 font-medium text-sm px-3 py-1 border border-blue-400 rounded-full bg-blue-900/20 hover:bg-blue-700 hover:text-white transition-all cursor-pointer">
                    +{project.details.features.length - 4} more
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Details Button */}
        <div className="mt-6 text-right">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-3 py-2 rounded-md shadow-md transition-all duration-300"
          >
            View Details <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  // Limit projects to 4
  const displayedProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-16 bg-[#0f1c31] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-4 relative inline-block">
            <span className="relative z-10">Featured Projects</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of my work showcasing problem-solving, design,
            and modern development practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-6 text-right">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-3.5 py-2.5 rounded-md shadow-md transition-all duration-300"
          >
            View All Projects <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
