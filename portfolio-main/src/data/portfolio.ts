export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
};

export type ExperienceItem = {
  title: string;
  period: string;
  location?: string;
  points: string[];
};

export type HackathonItem = {
  title: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  tech: string[];
};

export const personalInfo = {
  brand: "MyPortfolio",
  name: "Purba Saha",
  location: "India",
  role: "AI/ML and Data Science Enthusiast",
  intro:
    "Transforming complex datasets into actionable insights through AI/ML expertise. Passionate about data science, predictive modeling, and building intelligent solutions.",
  about:
    "I am a Computer Science Engineering student focused on AI/ML and Data Science, passionate about transforming complex datasets into actionable insights.",
  aboutSecondary:
    "Currently open to internships and full-time opportunities in data-driven roles.",
  email: "purbasahasince2005@gmail.com",
  phone: "+91 00000 00000",
  github: "https://github.com/Purba234",
  linkedin: "https://www.linkedin.com/in/purba-saha-b273a12b8/",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export const techStack = [
  { name: "LangChain", icon: "chain" },
  { name: "Ollama", icon: "llm" },
  { name: "OpenAI", icon: "openai" },
  { name: "Python", icon: "python" },
  { name: "Scikit-learn", icon: "science" },
  { name: "Pandas", icon: "data" },
  { name: "NumPy", icon: "array" },
  { name: "Machine Learning", icon: "ml" },
  { name: "Data Science", icon: "datascience" },
  { name: "SQL", icon: "database" },
  { name: "Data Visualization", icon: "chart" },
  { name: "Power BI", icon: "powerbi" },
  { name: "DAX", icon: "dax" },
  { name: "Predictive Modeling", icon: "predict" },
  { name: "Analytics", icon: "analytics" },
  { name: "Deployment", icon: "deploy" },
] as const;

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio built with React, Framer Motion and Vite.",
    tech: ["React", "Framer Motion", "AOS", "Node.js"],
    image: "/projects/project-1.svg",
  },
  {
    title: "Customer Shopping Behavior Dashboard",
    description:
      "Comprehensive data analytics dashboard analyzing customer shopping patterns, behavior trends, and purchase insights with interactive visualizations and predictive modeling.",
    tech: [
      "Python",
      "Pandas",
      "Power BI",
      "Data Cleaning",
      "Data Manipulation",
      "Analytics",
    ],
    image: "/projects/project-2.svg",
  },
  {
    title: "Spotify Music Data Analysis",
    description:
      "Power BI dashboard analyzing Spotify Top 50 data, highlighting top artists, popularity distribution, explicit vs non-explicit share, average song duration, ranking trends over time, and album/track patterns through interactive KPI cards and visuals.",
    tech: [
      "Power BI",
      "DAX",
      "Data Cleaning",
      "Data Transformation",
      "Data Analysis",
    ],
    image: "/projects/project-3.svg",
    liveLink:
      "https://app.powerbi.com/view?r=eyJrIjoiMmEyYjQ2ZTEtZGE2Zi00ZjY1LWIyZjMtODRmZGFiOGI0N2NhIiwidCI6IjgxMzk3MDMwLTk1MDEtNDU0Ni04ZTg5LWY2MDMzMGM2NjAwYyJ9",
  },
  {
    title: "AI QnA Chatbot (RAG-Based)",
    description:
      "An intelligent QnA chatbot built using LangChain, Ollama, and GroqCloud API that answers questions from custom documents using Retrieval-Augmented Generation (RAG). It retrieves relevant context and generates accurate responses in real time.",
    tech: [
      "LangChain",
      "Ollama",
      "Groq API",
      "RAG Pipeline",
      "Python",
      "FAISS / Vector DB",
    ],
    image: "/projects/project-4.svg",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Power BI Intern - Cognifyz Technologies",
    period: "Feb 2026 - Present",
    location: "India - Remote",
    points: [
      "Working on interactive Power BI dashboards and reports to turn raw datasets into actionable business insights",
      "Performing data cleaning, transformation, and DAX-based analysis to improve reporting quality and decision support",
    ],
  },
  {
    title: "Data Visualization Analyst (Virtual) - Tata Consultancy Services via Forage",
    period: "Jan 2026",
    points: [
      "Designed interactive data visualizations and dashboards for executive leadership, enabling data-driven decision making for business insights",
      "Prepared strategic questions and conducted data analysis presentations for C-level stakeholders, demonstrating strong business acumen",
    ],
  },
];

export const hackathons: HackathonItem[] = [
  {
    title: "Smart India Hackathon 2024 - Internal Hackathon",
    role: "Team Byte Gurus",
    date: "Aug 2024 - Aug 2024",
    location: "JIS College of Engineering, August 2024",
    summary:
      "Developed a Smart Classroom Management System website using Laravel, focusing on efficient classroom operations, user management, and real-time data handling.",
    tech: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Diversion 2K25",
    role: "Team ByteGurus",
    date: "Feb 2025 - Feb 2025",
    location: "Institute of Engineering and Management, February 2025",
    summary:
      "Designed and developed an AI Powered Financial advisory platform designed to help users make informed decisions regarding property investments and financial planning.",
    tech: ["AI", "Python", "JavaScript"],
  },
  {
    title: "InnovoCon 2025",
    role: "Organizer",
    date: "Feb 2025 - Feb 2025",
    location: "JIS College of Engineering, February 2025",
    summary:
      "I played a key role in organizing InnovoCon 2025, overseeing end-to-end planning and execution to ensure the event's overall success.",
    tech: ["Event Management", "Leadership"],
  },
  {
    title: "Hack4Bengal 4.0 - Virtual Hack",
    role: "Team Pookies",
    date: "Apr 2025 - Apr 2025",
    location: "Virtual Hackathon, April 2025",
    summary:
      "We developed Fakebuster AI during Hack4Bengal 4.0 Virtual Hackathon, an innovative solution designed to detect and combat misinformation and fake content using advanced artificial intelligence techniques.",
    tech: ["AI", "Python", "JavaScript"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personalInfo.github, icon: "github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "linkedin" },
  {
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "email",
  },
];
