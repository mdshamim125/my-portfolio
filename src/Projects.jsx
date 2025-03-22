import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTools, FaServer, FaCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { projectsData } from "./data/projects";

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-900/20 transition-all duration-300 border border-gray-700 hover:translate-y-[-5px]"
    >
      <div className="relative h-52 overflow-hidden group">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center gap-4">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                title="View Live Site"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg"
                title="Client Repository"
              >
                <FaCode size={18} />
              </a>
            )}
            {project.serverGithubUrl && (
              <a
                href={project.serverGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg"
                title="Server Repository"
              >
                <FaServer size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2 border-t border-gray-700 pt-4 mt-4">
          <h4 className="font-medium text-gray-200 mb-2">Key Features</h4>
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <FaTools className="text-blue-400 mt-1 flex-shrink-0" size={14} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-2 relative inline-block">
            <span className="relative z-10">My Projects</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-900/40 -z-10 transform -rotate-1"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
