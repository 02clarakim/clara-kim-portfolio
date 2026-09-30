export const categoryLabels = {
  swe: 'SWE Project',
  uiux: 'UI/UX Design',
  consulting: 'Consulting',
};

export const techStackOptions = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'React Native',
  'PostgreSQL',
  'Redis',
  'TensorFlow',
  'OpenAI API',
  'LangGraph',
  'Figma',
  'HTML/CSS',
  'AI',
  'Full-Stack',
];

export const projectsData = [
  {
    id: 11,
    title: "MatchThread: Live Football Feed",
    overview: "Real-time football feed that cross-verifies Reddit goal posts against ESPN data, streamed live over WebSockets with LLM commentary.",
    description: `Built a real-time aggregator that merges live match events, LLM-generated commentary, and community clips into one verified feed. Designed a three-stage matching engine that cross-checks Reddit posts against ESPN match data by scorer, minute, and scoreline, blocking false goal posts before they're published. Streamed events through a custom WebSocket gateway backed by an idempotent ingestion pipeline. Consolidated four processes into a single deployable unit with an optional Redis cache/pub-sub layer, cutting hosting costs from ~$28 to $0–7/month with no functional regression. Deployed on Render and Neon Postgres.`,
    category: "swe",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSockets", "OpenAI API"],
    demoLink: "https://matchthread.onrender.com",
    githubLink: "https://github.com/02clarakim/matchthread",
    image: "/assets/images/matchthread/matchthread-example.png",
    images: ["/assets/images/matchthread/matchthread-example.png", "/assets/images/matchthread/matchthread-profile.png"],
    fitImages: true,
  },
  {
    id: 1,
    title: "Campus Creator Hub · Globify",
    overview: "Sole engineer: React Native (Expo) iOS app + Next.js admin console + Supabase/Postgres backend, with Stripe Connect escrow payments. Replaced a manual Discord/WhatsApp/Google Sheets workflow for a 300-creator network.",
    problem: `• No system to source, vet, or manage 300+ creators across concurrent brand campaigns
• Brand spend and creator payouts tracked by hand — not auditable, easy to lose
• Staff needed scoped roles (admin / manager / brand) that don't require manual setup per brand`,
    process: `Discover → Apply → Deliver → Review → Get Paid

Creator app
  • Lifecycle-based, collapsible sections (Available → In Review → Accepted → Previous), reused across Events and Deliverables
  • Search added to Match, Community, and Events at scale
  • Token-based light/dark theming system unifying 35 screens and 33 shared components

Admin console
  • Auto-scoped brand access by campaign/event ownership — no manual per-campaign assignment
  • Grouped-by-brand, searchable, live/closed views across Campaigns, Applications, Deliverables, Events
  • Escrow-style payout flow on Stripe Connect + Checkout: brands fund campaigns → staff approve deliverables → creators get paid, so every payout is traceable and all spend auditable`,
    outcome: `• One source of truth across both products: creator status, payout eligibility, and brand funding all derive from the same state
• Currently in TestFlight, ahead of App Store launch`,
    category: "swe",
    tags: ["React Native", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe"],
    image: "/assets/images/globify/cch-cover.jpg",
    images: ["/assets/images/globify/cch-home.png", "/assets/images/globify/cch-match.png", "/assets/images/globify/cch-events.png", "/assets/images/globify/cch-chat.png"],
    fitImages: true,
    imageColumns: 2,
  },
  // {
  //   id: 1,
  //   title: "Evernix MVP Prototype",
  //   overview: "Built an AI-driven investment platform for B2C users, simulating multi-agent behaviors and generating personalized investment rationales.", 
  //   description: `
  //   Led the development of the MVP for Evernix, designing AI investment agents that simulate multiple investor strategies. Generated beginner-friendly explanations to help new investors understand decisions, while producing full reports for advanced users. Conducted customer discovery surveys and usability tests to iterate on product features and business model, improving engagement and retention. Built the frontend using Next.js and backend logic in Python, integrating AI prompting for automated reasoning. Focused on scalable, maintainable code and incorporating feedback loops from early adopters to refine the platform.
  //   `,
  //   category: "swe",
  //   tags: ["Next.js", "Python"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
  {
    id: 4,
    title: "AI Course Recommendation Platform",
    overview: "Full-stack React + TensorFlow web app providing personalized course recommendations based on student profiles.",
    description: `
    Built a full-stack web app using React for frontend and TensorFlow/Keras for backend predictive modeling. Trained models on manually generated datasets and AI-augmented data to predict course recommendations based on GPA, target school, and major. Implemented interactive data-driven UI to help students explore suggested courses and understand rationale behind recommendations. Used useState, useEffect, and context hooks to manage state and ensure responsive, intuitive user experience.
    `,
    category: "swe",
    tags: ["TensorFlow", "React", "Python"],
    demoLink: "https://ai-classrec.onrender.com/",
    githubLink: "https://github.com/02clarakim/ai_classrec",
    image: "/assets/images/airec-landing.png",
    images: ["/assets/images/airec-landing.png", "/assets/images/airec-result.png"]
  },
  {
    id: 12,
    title: "AURA: Multi-Agent Research Pipeline",
    overview: "Multi-agent LangGraph pipeline generating evidence-cited innovation strategies, with an LLM-as-judge harness for prompt A/B testing.",
    description: `Built a multi-agent LLM pipeline at Honda Research Institute's 99P Labs (LangGraph, TypeScript, GPT-4o) that produces structured, evidence-cited innovation strategies for eVTOL and robotaxi domains, presented to 99P Labs researchers. Designed a two-layer evaluation system to make prompt changes measurable: a 7-axis weighted scoring loop with Elo ranking inside the pipeline, plus an A/B benchmark harness scoring prompt variants against 5 LLM-as-judge rubrics. Kept results reliable under LLM failures by scoring failed evaluations as 0 and tracing every scoring decision in Langfuse.`,
    category: "swe",
    processLabel: "How it works",
    process: `1. Enter topic → describe a research question
2. Clarify scope → answer 3–5 AI-generated questions
3. Set priorities → weight each answer from 1–5
4. Review queries → edit and refine generated search queries
5. Run research → agents search 50+ sources (web + arXiv), then generate, score, debate, and evolve hypotheses over 2 rounds
6. View report → read the synthesized, evidence-cited report
7. Chat → ask follow-up questions with MCP tools`,
    tags: ["LangGraph", "TypeScript", "OpenAI API", "Langfuse"],
    demoLink: "https://likelion-aura.vercel.app/",
    image: "/assets/images/aura/aura-architecture.png",
    images: ["/assets/images/aura/aura-architecture.png", "/assets/images/aura/aura-clarify.png", "/assets/images/aura/aura-result.png"],
    fitImages: true,
  },
  {
    id: 3,
    title: "Fasoo Design System (FDS) UI Library",
    overview: "Created a reusable Flutter component library to improve cross-platform design consistency and developer efficiency.",
    description: `
    Developed a Flutter UI library from scratch (buttons, dialogs, inputs, etc.) without relying on Material components. Analyzed company Figma files and existing apps to design reusable, maintainable components that integrated seamlessly. Collaborated with designers to capture design intent, negotiated folder structure and MVVM architecture for long-term scalability. Converted an internal company app fully to use the library, enhancing cross-platform UX consistency and developer efficiency.
    `,
    category: "uiux",
    tags: ["Flutter", "Figma"],
    demoLink: "https://fds-mobile-demo.web.app/",
    image: "/assets/images/fds-light-buttons.png",
    images: ["/assets/images/fds-light-buttons.png", "/assets/images/fds-dark-list.png"],
  },
  {
    id: 9,
    title: "Builder - Gamified Productivity App",
    overview: "Builder is a gamified productivity app designed to help college students maintain focus and reduce digital distractions. The concept transforms focused work sessions into a progression system where users build and customize a virtual island as they complete tasks.",
    problem: `College students often struggle to maintain focus due to constant digital distractions, cognitive overload, and lack of motivation. Existing productivity apps focus heavily on task lists but fail to sustain long-term engagement.`,
    process: `Conducted 9 user interviews and usability testing sessions with undergraduate students to identify pain points in task management and motivation. Key insights revealed that users felt overwhelmed by complex task interfaces and preferred a single, central focus timer.

Based on these insights, I designed interaction flows and prototypes in Figma, introducing:

    • Task-linked Pomodoro timers
    • Difficulty-based reward multipliers
    • Visual progression through customizable island environments
    • Lightweight social accountability through friend leaderboards

Iterated on navigation and screen hierarchy to simplify the main workflow: select task → start focus session → earn rewards.`,
    outcome: "The final prototype integrates behavioral design principles such as habit formation, variable rewards, and cognitive offloading to encourage sustained focus while keeping the experience engaging and intuitive.",
    category: "uiux",
    tags: ["Figma"],
    image: "/assets/images/builder1.png",
    images: ["/assets/images/builder1.png", "/assets/images/builder2.png", "/assets/images/builder3.png"]
  },
  {
    id: 2,
    title: "ZEP Quiz → YouTube Shorts Pipeline",
    overview: "Automated pipeline generating ~900 trend-based quizzes a day with GPT-4o and auto-publishing the best as YouTube Shorts.",
    description: `Built an n8n pipeline for Naver Z's ZEP Quiz that pulls trending keywords from SerpApi every 4 hours and uses GPT-4o to generate 10 quizzes per keyword, about 900 questions a day. Added an evaluation stage that filters out weak quizzes and auto-publishes passing ones as YouTube Shorts, taking content from generation to publication without manual steps. Also designed the Shorts video layout.`,
    category: "swe",
    tags: ["Python", "n8n", "OpenAI API", "Figma"],
    githubLink: "https://github.com/98sean/likelion-zep-video-generation",
    image: "/assets/images/zep-youtube-img.png"
  },
  {
    id: 8,
    title: "Bondit - Onboarding UX Redesign",
    overview: "Bondit is a scheduling and social networking platform for college students. This project focused on improving the onboarding and login experience to reduce early user drop-off. [IDEA Factory Consulting Project]",
    problem: `
    User analytics from the client indicated that many new users abandoned the app during the onboarding and login process.`,
    process: `Conducted 2 rounds of 15+ usability interviews where participants navigated the onboarding flow while verbalizing their thoughts and reactions. Organized insights using affinity diagrams and identified several key friction points:

    • Login process was overly long -> Reduced process by 50%
    • The app’s value proposition was unclear during onboarding
    • Privacy concerns around the map feature

Performed competitive analysis of similar student platforms and mapped the existing information architecture to identify structural issues.

Using Figma, designed wireframes and interaction improvements that streamlined the login process and clarified the product’s purpose earlier in the onboarding flow.`,
    outcome: "The redesigned onboarding flow reduced cognitive friction by 42% and emphasized Bondit’s core value as a social-academic platform for students.",
    category: "consulting",
    tags: ["Figma"],
    image: ["/assets/images/bondit/bondit-figma1.png"],
    images: ["/assets/images/bondit/bondit-figma1.png", "/assets/images/bondit/bondit-journey.png", "/assets/images/bondit/bondit-postits.png", "/assets/images/bondit/Persona-01.png"],
  },
  {
    id: 5,
    title: "CAHL Lab – Adaptive Learning Platform",
    overview: "Enhanced an educational platform that personalizes lessons using Bayesian Knowledge Tracing.",
    description: `
    Worked with React functional components and hooks (useState, useEffect, useContext) to process student data and generate JSON lesson plans. Implemented Bayesian Knowledge Tracing to suggest personalized tasks based on student mastery and engagement. Refactored UI from Material UI components to custom functional components for maintainability and improved user experience. Collaborated with educators to refine lesson sequencing and adapt platform behavior based on feedback.
    `,
    category: "swe",
    tags: ["React", "JavaScript"],
    githubLink: "https://github.com/CAHLR/OATutor?tab=readme-ov-file",
    image: "/assets/images/oatutor-img1.png"
  },
  // {
  //   id: 6,
  //   title: "AIED Lab – Attention Detection",
  //   overview: "Developed a computer vision system to measure attention and focus via webcam.",
  //   description: `
  //   Used OpenCV and Dlib to detect faces and track eye openness, implementing thresholds for attention and handling false positives. Built experiments with Pygame to visualize attention and tested usability under constrained resources. Implemented logic for blink detection, attention alerts, and error handling for varying user behaviors. Refined algorithms and conducted A/B testing with quizzes and surveys to optimize alert accuracy and user comfort.
  //   `,
  //   category: "swe",
  //   tags: ["Python"],
  //   demoLink: "#",
  //   githubLink: "https://github.com/joseph-kimm/AI_CU",
  // },
  {
    id: 7,
    title: "WeatherWear – Hackathon MVP",
    overview: "Created an interactive, animated weather app with ratings and visuals.",
    description: `
    Designed an animated UI with sunrise/sunset visuals and interactive rating bars. Built the MVP in TypeScript during a hackathon, focusing on frontend animations and user engagement. Learned TypeScript and experimented with integrating dynamic components for interactive user experience.
    `,
    category: "swe",
    tags: ["TypeScript"],
    demoLink: "https://weather-wear-fe.vercel.app/",
    githubLink: "https://github.com/hyeyoungcha/WeatherWearFE",
    image: "/assets/images/wwear-landing.png"
  },
  
  {
    id: 10,
    title: "MirrorClear - Design Research + 3D Modeling",
    overview: "MirrorClear is a concept design exploring how technology could help users understand the effectiveness of their skincare routines.",
    problem: "Many skincare users rely on subjective visual cues to determine whether their cleansing routines effectively remove makeup and residue.", 
    process: `Conducted mixed-method research including:

    • 68 survey responses
    • 13 user interviews
    • 1 expert interview with an esthetician

Synthesized insights using affinity diagrams and personas to understand common cleansing habits and frustrations.

Based on these findings, our team explored several potential product directions before selecting a smart mirror concept that visually highlights residue left on the skin after cleansing.

Developed both a physical prototype by 3D Printing and digital simulation demonstrating how users would interact with the mirror interface.`,
    outcome: "The final concept provides real-time visual feedback that helps users identify areas where residue remains, transforming an invisible skincare outcome into actionable information.", 
    category: "uiux",
    tags: ["SolidWorks", "Figma"],
    image: "/assets/images/mirrorclear-process.png",
    images: ["/assets/images/mirrorclear-research.png", "/assets/images/mirrorclear-process.png", "/assets/images/mirrorclear-outcome.png", "/assets/images/mirrorclear-physical.png"],
  },
  
];
