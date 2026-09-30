"use client";

import React from "react";

function About() {
  const experiences = [
    {
        company: "Globify",
        role: "Founding Software Engineer",
        period: "Feb. 2026 - Present",
        description:
        "Sole engineer building a creator marketplace (React Native, Next.js, Supabase) with Stripe Connect escrow payments for a 300-creator network. Now in TestFlight."
    },
    {
      company: "Honda Research Institute (99P Labs)",
      role: "AI Engineer Intern",
      period: "Jan. 2026 - May 2026",
      description:
        "Built a multi-agent LLM research pipeline (LangGraph, GPT-4o) with an evaluation system that makes prompt changes measurable: Elo-ranked scoring plus LLM-as-judge A/B benchmarks.",
    },
    // {
    //   company: "Evernix",
    //   role: "Founding Engineer",
    //   period: "July 2025 - Present",
    //   description:
    //     "Built MVP for AI investment agents, creating beginner-friendly rationales and advanced reports, iterating product and business model for B2C users.",
    // },
    {
      company: "Naver Z (ZEP Quiz)",
      role: "Software Engineer Intern",
      period: "Aug. 2025 - Dec. 2025",
      description:
        "Automated quiz generation (~900/day) with n8n and GPT-4o, adding an evaluation stage that auto-publishes the best quizzes as YouTube Shorts.",
    },
  ];

  return (
    <section id="about" className="py-[100px]">
      {/* text-gray-800 */}
      <h2 className="text-2xl font-semibold mb-[60px] mt-[20px]">
        <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">About Me
          </span>
      </h2>

      <div className="flex gap-[50px] relative max-lg:flex-col">
        {/* Bio Section */}
        <div className="flex-[2] text-base font-normal text-gray-800 flex flex-col justify-between">
          <div>
            <p className="mb-5">
              I&apos;m a software engineer and recent <strong>UC Berkeley</strong> graduate in <strong>Computer Science</strong> and <strong>Cognitive Science</strong>. I like owning products from the first sketch to production: talking to users, designing the flow, building the system, and shipping it.
            </p>

            <p className="mb-5">
              Cognitive science taught me to start with people: how they think, what confuses them, and what makes them come back. I bring that to engineering, whether I&apos;m designing a data model or refining a UI detail. I want to build things people actually enjoy using.
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
        <div className="w-0 h-auto border-l border-gray-800 max-lg:hidden"></div>

        {/* Experience Section */}
        <div className="flex-[3] text-base text-gray-800">
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
