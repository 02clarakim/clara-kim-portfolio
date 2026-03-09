"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { projectsData } from "@/data/projectsData";

const topProjects = projectsData.slice(0, 3);

{topProjects.map((project) => (
  <ProjectCard
    key={project.id}
    project={project}
    onClick={() => setSelectedProject(project)}
  />
))}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="md:ml-[150px] md:py-[100px] md:pr-[100px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[30px]">
        <h2 className="text-2xl font-semibold mt-[20px]">
        <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">Projects
          </span>
      </h2>

        <Link 
          href="/projects" 
          className="text-gray-600 hover:text-gray-800 font-medium transition-colors flex items-center gap-1 group"
        >
          View All 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Projects List */}
      <div className="flex flex-col items-left gap-4">
        {topProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}