import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "./data/projects";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const PROJECTS_PER_PAGE = 4;

const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0f1c31] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-4">
            All Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore my projects with detailed features, technologies, and live
            demos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-14">
            {/* Previous */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md border border-gray-600 text-sm transition
                ${
                  currentPage === 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:border-blue-600"
                }`}
            >
              <FaChevronLeft />
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition
                    ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "border border-gray-600 hover:bg-blue-600 hover:border-blue-600"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md border border-gray-600 text-sm transition
                ${
                  currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:border-blue-600"
                }`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-12 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-3.5 py-2.5 rounded-md shadow-md transition-all"
          >
            <FaArrowLeft size={12} /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
