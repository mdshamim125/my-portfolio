// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-base-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="py-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Project Name</h2>
              <p>Description of the project. Core features and technologies used.</p>
              <div className="card-actions justify-end">
                <a href="live_link" className="btn btn-primary">Live</a>
                <a href="github_link" className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
