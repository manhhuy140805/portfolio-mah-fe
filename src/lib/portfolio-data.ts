import type { Project } from "@/src/types/project.type";
import type { Skill } from "@/src/types/skill.type";

export const serviceCards = [
  {
    title: "Visual Memory & Observation",
    metric: "Pixel-Perfect",
    description: "Strong visual memory and keen attention to detail. I can quickly spot UI inconsistencies and debug complex code patterns at a glance.",
  },
  {
    title: "Agile Problem Solving",
    metric: "Fast Reflexes",
    description: "Quick thinking and rapid adaptation to new challenges. Able to troubleshoot bugs efficiently and handle high-pressure situations.",
  },
  {
    title: "Microsoft Word Mastery",
    metric: "High Proficiency",
    description: "Expert-level skills in Microsoft Word. Highly proficient in fast typing, advanced text formatting, and efficient information processing.",
  },
  {
    title: "Full-Stack Development",
    metric: "Robust Systems",
    description: "Combining my observation skills with a strong tech stack to build scalable, responsive, and high-performance web applications.",
  },
];

export const portfolioStats = [
  { value: 3, suffix: "rd", label: "Year IT Student" },
  { value: 15, suffix: "+", label: "Academic Projects" },
  { value: 4, suffix: "+", label: "Core Technologies" },
  { value: 100, suffix: "%", label: "Passion for Coding" },
];

export const designSkills: Skill[] = [
  { id: "figma", name: "Figma", category: "Design", level: "Expert", value: 95 },
];

export const developmentSkills: Skill[] = [
  { id: "react", name: "React.js", category: "Frontend", level: "Advanced", value: 90 },
  { id: "nextjs", name: "Next.js", category: "Frontend", level: "Advanced", value: 92 },
  { id: "nestjs", name: "NestJS", category: "Backend", level: "Intermediate", value: 80 },
  { id: "aspnet", name: "ASP.NET", category: "Backend", level: "Intermediate", value: 75 },
  { id: "javascript", name: "JavaScript", category: "Language", level: "Advanced", value: 90 },
  { id: "typescript", name: "TypeScript", category: "Language", level: "Advanced", value: 88 },
  { id: "csharp", name: "C#", category: "Language", level: "Intermediate", value: 75 },
  { id: "java", name: "Java", category: "Language", level: "Intermediate", value: 70 },
  { id: "kotlin", name: "Kotlin", category: "Language", level: "Intermediate", value: 70 },
  { id: "sqlserver", name: "SQL Server", category: "Database", level: "Intermediate", value: 75 },
  { id: "postgresql", name: "PostgreSQL", category: "Database", level: "Intermediate", value: 75 },
  { id: "mongodb", name: "MongoDB", category: "Database", level: "Intermediate", value: 75 },
  { id: "firebase", name: "Firebase", category: "Database", level: "Intermediate", value: 80 },
  { id: "tailwind", name: "Tailwind CSS", category: "Styling", level: "Advanced", value: 84 },
];

export const portfolioProjects: Project[] = [
  {
    id: "workout-app",
    slug: "workout-app",
    title: "Workout App Landing Page",
    description:
      "A high-converting landing page for a fitness experience with workout programs and habit loops.",
    technologies: ["React", "Landing Page", "Framer Motion"],
    category: "Landing Page",
    year: "2026",
    outcome: "Clearer daily workout planning",
    role: "Product Designer",
  },
  {
    id: "ecommerce-design",
    slug: "ecommerce-design",
    title: "E-Commerce Design",
    description:
      "A refined shopping interface focused on product storytelling, trust, and checkout clarity.",
    technologies: ["Commerce", "UX Research", "Design System"],
    category: "E-Commerce",
    year: "2025",
    outcome: "Better browsing and checkout confidence",
    role: "UX Designer",
  },
  {
    id: "dashboard-design",
    slug: "dashboard-design",
    title: "Dashboard Design 4",
    description:
      "Operations dashboard with dense but readable cards for metrics, activity, and team review.",
    technologies: ["Admin UI", "Analytics", "TypeScript"],
    category: "Dashboard",
    year: "2025",
    outcome: "Faster operational scanning",
    role: "Frontend Developer",
  },
  {
    id: "ggzone",
    slug: "ggzone",
    title: "GGZone Platform",
    description: "GGZone is a full-stack academic web application prototype built for my Advanced Web Development course. It is designed as a gaming social network and marketplace where users can browse games, join communities, interact with posts, manage profiles, connect with friends, and purchase gaming-related products. The frontend was built with React, TypeScript, Vite, Tailwind CSS, and React Router, following a feature-based architecture with reusable components, centralized API services, protected routes, and JWT authentication. The backend was developed in two versions, ASP.NET and NestJS, with the current demo using the NestJS REST API. The project focuses on demonstrating UI development, API integration, user flows, role-based access, and full-stack application structure for academic purposes.",
    technologies: ["ReactJS", "NestJS", "Tailwind CSS", "PostgreSQL"],
    category: "Web App",
    year: "2026",
    outcome: "Successfully deployed and active",
    role: "Full-stack Developer",
    demoUrl: "https://ggzone-kappa.vercel.app/",
    frontendDeploy: "Vercel",
    backendDeploy: "Render",
  },
];

export const educationItems = [
  {
    title: "University of Technology and Education, the University of Da Nang",
    years: "2023 - Present",
    description: "Studying Information Technology with a focus on software engineering, web development, and system design.",
  },
];

