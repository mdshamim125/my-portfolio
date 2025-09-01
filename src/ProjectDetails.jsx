import { useParams, Link } from "react-router-dom";
import { projectsData } from "./data/projects";
import {
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1c31] text-white">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f1c31] text-white py-16 px-6 md:px-12  mx-auto">
      {/* Back Link */}
      <Link to="/" className="text-blue-400 hover:underline my-8 inline-block">
        &larr; Back to Home
      </Link>

      {/* Project Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          {project.title}
        </h1>
        <p className="text-gray-400 text-lg">{project.shortDesc}</p>
      </div>

      {/* Project Image */}
      {project.imageUrl && (
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full object-cover max-h-96"
          />
        </div>
      )}

      {/* Project Description */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 text-lg whitespace-pre-line">
          {project.details.overview || project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.details.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-900/20 text-blue-300 rounded-full text-sm font-medium hover:bg-blue-700 hover:text-white transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="space-y-4">
          {project.details.features.map((feature, idx) => (
            <li key={idx} className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <FaArrowRight size={14} /> {feature.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md shadow-md transition"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md shadow-md transition"
          >
            Client Repo <FaCode />
          </a>
        )}
        {project.serverGithubUrl && (
          <a
            href={project.serverGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-md shadow-md transition"
          >
            Server Repo <FaServer />
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
