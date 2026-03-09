'use client';

import { X, ExternalLink, Github } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { useState } from "react";

export function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[80vh] bg-card bg-white rounded-2xl dropdown-shadow overflow-hidden animate-scale-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex gap-8 p-8 max-md:flex-col overflow-y-auto">
          {/* Project Image */}
          <div className="w-90 flex-shrink-0 flex flex-col gap-4 md:sticky md:top-8 md:self-start max-md:w-full">
            {project.images ? (
              project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title}-${i}`}
                  className="w-full min-h-[260px] max-h-[280px] rounded-xl object-cover shadow-sm"
                />
              ))
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full min-h-[280px] rounded-xl object-cover shadow-sm"
              />
            ) : (
              <div className="w-full h-40 flex items-center justify-center text-muted-foreground/30 text-sm">
                {project.title}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4 gap-4">
              <div className="space-y-2">
                <CategoryBadge category={project.category} />
                <h2 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h2>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                {project.demoLink && (
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => window.open(project.demoLink, '_blank')}
                    aria-label="Open Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
                {project.githubLink && (
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => window.open(project.githubLink, '_blank')}
                    aria-label="Open GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </div>

            {/* Overview */}
            <div className="mb-5">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Description */}
            {project.description && (
              <div className="mb-5 flex-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {/* For Case Studies */}
            {project.problem && (
                <div className="mb-5 flex-1">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Problem
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.problem}
                  </p>
              </div>
            )}

            {project.process && (
                <div className="mb-5 flex-1">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Process
                  </h3>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {project.process}
                  </p>
              </div>
            )}

            {project.outcome && (
                <div className="mb-5 flex-1">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Outcome
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.outcome}
                  </p>
              </div>
            )}
            

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-200/50 text-secondary-foreground text-sm font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}