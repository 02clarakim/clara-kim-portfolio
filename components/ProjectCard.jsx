"use client";

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="w-full bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden mb-6"
      onClick={onClick}
    >
      <div className="flex gap-6 p-6 max-md:flex-col">
        {/* Project Image */}
        <div className="w-[153px] h-[121px] rounded-lg border-2 border-gray-200 overflow-hidden flex-shrink-0 max-md:w-full max-md:h-[200px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col min-h-[121px]">
          {/* Header with title and links */}
          <div className="flex justify-between items-start mb-3 gap-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h3>
            
            <div className="flex gap-2 flex-shrink-0">
              {project.demoLink && (
                <button
                  className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demoLink, "_blank");
                  }}
                  aria-label="Open Live Demo"
                >
                  <ExternalLink className="w-5 h-5 text-gray-600" />
                </button>
              )}

              {project.githubLink && (
                <button
                  className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubLink, "_blank");
                  }}
                  aria-label="Open GitHub Repository"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-2">
            {project.overview}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-gray-200/50 text-gray-700 text-sm font-medium rounded-md backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;