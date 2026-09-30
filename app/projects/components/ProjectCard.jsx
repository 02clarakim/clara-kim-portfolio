'use client';

import { ExternalLink, Github } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { useEffect, useRef, useState } from 'react';

export function ProjectCard({ project, onClick }) {
  const tagsRef = useRef(null);
  const [tagRows, setTagRows] = useState(1);

  // Count wrapped tag rows so the description can give up a line when tags need two
  useEffect(() => {
    const el = tagsRef.current;
    if (!el) return;
    const measure = () => {
      const rows = new Set([...el.children].map((child) => child.offsetTop)).size;
      setTagRows(Math.min(rows, 2));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden animate-fade-in h-full flex flex-col"
      onClick={onClick}
    >
      {/* Category Badge - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <CategoryBadge category={project.category} />
      </div>

      {/* Action Buttons - Top Right */}
      <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {project.demoLink && (
          <button
            className="p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.demoLink, '_blank');
            }}
            aria-label="Open Live Demo"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </button>
        )}
        {project.githubLink && (
          <button
            className="p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubLink, '_blank');
            }}
            aria-label="Open GitHub"
          >
            <Github className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Project Image */}
      <div className="w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-lg border border-gray-200/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="text-gray-400 text-sm">{project.title}</div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 flex-1 flex flex-col min-h-[194px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p
          className={`text-sm text-gray-600 mb-4 leading-relaxed ${
            tagRows > 1 ? 'line-clamp-2 min-h-[3.25em]' : 'line-clamp-3 min-h-[4.875em]'
          }`}
        >
          {project.overview}
        </p>

        {/* Tags */}
        <div ref={tagsRef} className="mt-auto flex flex-wrap gap-2 max-h-[56px] overflow-hidden">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-gray-200/50 text-gray-700 text-xs font-medium rounded-lg backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
