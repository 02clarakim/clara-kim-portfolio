"use client";

import { useEffect, useRef } from "react";

const technologies = [
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "LangGraph", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/langchain.svg" },
  { name: "OpenAI API", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/openai.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const TechItem = ({ name, logo, delay }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 p-4 opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
        <img src={logo} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs text-black">{name}</span>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-1">
          <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 max-w-2xl mx-auto justify-items-center">
        {technologies.map((tech, index) => (
          <TechItem
            key={tech.name}
            name={tech.name}
            logo={tech.logo}
            delay={index * 50} // stagger animation
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
