import type { Project } from "@/src/types/project.type";
import type { Skill } from "@/src/types/skill.type";

export const serviceCards = [
  {
    title: "Web Design",
    metric: "120 projects",
    description: "Landing pages, portfolio systems, and campaign microsites.",
  },
  {
    title: "UI/UX Design",
    metric: "241 projects",
    description: "Clean flows, component systems, and product interface polish.",
  },
  {
    title: "Web Research",
    metric: "240 reports",
    description: "Market, competitor, and product discovery before build time.",
  },
  {
    title: "Marketing",
    metric: "331 assets",
    description: "Conversion-focused content blocks for brand growth.",
  },
];

export const portfolioStats = [
  { value: "25", label: "Years of Experience" },
  { value: "20K+", label: "Projects Complete" },
  { value: "10K+", label: "Natural Products" },
  { value: "1,000+", label: "Satisfied Clients" },
];

export const designSkills: Skill[] = [
  { id: "photoshop", name: "Photoshop", category: "Design", level: "Expert", value: 100 },
  { id: "figma", name: "Figma", category: "Design", level: "Expert", value: 95 },
  { id: "adobe-xd", name: "Adobe XD", category: "Design", level: "Advanced", value: 60 },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    category: "Design",
    level: "Advanced",
    value: 70,
  },
];

export const developmentSkills: Skill[] = [
  { id: "nextjs", name: "Next.js", category: "Frontend", level: "Advanced", value: 92 },
  { id: "typescript", name: "TypeScript", category: "Language", level: "Advanced", value: 88 },
  { id: "react", name: "React", category: "Frontend", level: "Advanced", value: 90 },
  { id: "tailwind", name: "Tailwind CSS", category: "Styling", level: "Advanced", value: 84 },
];

export const portfolioProjects: Project[] = [
  {
    id: "saas-dashboard",
    slug: "saas-dashboard",
    title: "SaaS Website Design",
    description:
      "A polished subscription dashboard concept with pricing, analytics, and onboarding flows.",
    technologies: ["Next.js", "Dashboard", "UI Kit"],
    category: "Product Design",
    year: "2026",
    outcome: "Sharper trial-to-paid journey",
    role: "UI Designer and Frontend Developer",
  },
  {
    id: "workout-app",
    slug: "workout-app",
    title: "Workout App Design 3",
    description:
      "Mobile-first fitness experience with workout programs, progress tracking, and habit loops.",
    technologies: ["React", "Mobile UI", "Prototype"],
    category: "Mobile App",
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
];

export const educationItems = [
  {
    title: "Trainer Marketing",
    years: "2005-2009",
    description:
      "Built a foundation in positioning, customer journeys, and campaign planning.",
  },
  {
    title: "Assistant Director",
    years: "2010-2014",
    description:
      "Led small creative teams and coordinated delivery across content and visual systems.",
  },
  {
    title: "Design Assistant",
    years: "2008-2012",
    description:
      "Supported web, branding, and interface work for early-stage business clients.",
  },
  {
    title: "Product Collaborator",
    years: "2014-Now",
    description:
      "Designed and shipped portfolio, dashboard, and web experiences with modern stacks.",
  },
];

export const pricingPlans = [
  { name: "Starter", price: "$5.00", features: ["5 social accounts", "Free platform access", "24/7 support"] },
  { name: "Basic", price: "$230.00", features: ["Premium assets", "Marketing platform", "Lifetime support"] },
  { name: "Premium", price: "$45.00", features: ["5 social accounts", "Priority support", "Brand review"] },
];
