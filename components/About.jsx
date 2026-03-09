"use client";

import React from "react";

function About() {
  const experiences = [
    {
        company: "Globify", 
        role: "UIUX Designer / Frontend Developer",
        period: "Oct. 2025 - Present", 
        description: 
        "Designed web and mobile product experiences for a startup, from user flows to prototypes. Led website redesign and launch, grew social presence to 2K+ followers, and presented at CES 2026."
    },
    // {
    //   company: "Evernix",
    //   role: "Founding Engineer",
    //   period: "July 2025 - Present",
    //   description:
    //     "Built MVP for AI investment agents, creating beginner-friendly rationales and advanced reports, iterating product and business model for B2C users.",
    // },
    {
      company: "ZEP",
      role: "Software Engineer (Contract)",
      period: "Aug. 2025 - Present",
      description:
        "Automated video creation using Python, AI-generated quizzes, and Figma designs, publishing content via n8n and Coolify.",
    },
    {
      company: "Fasoo",
      role: "Software Developer Intern",
      period: "Jun. 2025 - Aug. 2025",
      description:
        "Created a reusable Flutter UI component library, collaborating with designers and engineers to improve consistency and scalability across platforms.",
    },
  ];

  return (
    <section id="about" className="py-[100px] md:pr-[100px] md:ml-[150px]">
      {/* text-gray-800 */}
      <h2 className="text-2xl font-semibold mb-[60px] mt-[20px]">
        <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">About Me
          </span>
      </h2>

      <div className="flex gap-[50px] relative max-md:flex-col">
        {/* Bio Section */}
        <div className="flex-1 max-w-[350px] text-base font-normal text-gray-800 max-md:max-w-full flex flex-col justify-between">
          <div>
            <p className="mb-5">
              I&apos;m a <strong>Computer Science</strong> and <strong>Cognitive Science</strong> double major at <strong>UC Berkeley</strong>, passionate about turning ideas into human-centered experiences. I enjoy exploring how <strong>design and technology intersect</strong> to create products that are intuitive, cohesive, and impactful.
            </p>

            <p className="mb-5">
              Whether refining UI details or rethinking user flows, I focus on building products that delight users. Outside of code, I enjoy sketching ideas, experimenting with new tools, and learning how small design choices can make a big difference.
            </p>
          </div>

          {/* Resume Button at the bottom */}
          <button
            onClick={() => window.open("/clarakim-resume-uiux.pdf", "_blank")}
            className="mt-4 border border-gray-300 text-gray-700 bg-white/60 px-6 py-2 text-md rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:scale-105 transition-all self-start"
          >
            Resume
          </button>
        </div>

        {/* Divider */}
        <div className="w-0 h-auto border-l border-gray-800 max-md:hidden"></div>

        {/* Experience Section */}
        <div className="flex-1 max-w-[500px] text-base text-gray-800 max-md:max-w-full">
          <h3 className="text-lg font-bold mb-6">Experience</h3>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{exp.company}</span>
                  <span className="italic text-gray-600 text-sm">{exp.period}</span>
                </div>
                <span className="font-medium text-gray-700">{exp.role}</span>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
