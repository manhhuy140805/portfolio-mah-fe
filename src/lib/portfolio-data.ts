import type { Project } from "@/src/types/project.type";
import type { Skill } from "@/src/types/skill.type";

export const serviceCards = [
  {
    id: "observation",
    title: "Visual Memory & Observation",
    metric: "Pixel-Perfect",
    description: "Strong visual memory and keen attention to detail. I can quickly spot UI inconsistencies and debug complex code patterns at a glance.",
  },
  {
    id: "agile",
    title: "Agile Problem Solving",
    metric: "Fast Reflexes",
    description: "Quick thinking and rapid adaptation to new challenges. Able to troubleshoot bugs efficiently and handle high-pressure situations.",
  },
  {
    id: "word",
    title: "Microsoft Word Mastery",
    metric: "High Proficiency",
    description: "Expert-level skills in Microsoft Word. Highly proficient in fast typing, advanced text formatting, and efficient information processing.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    metric: "Robust Systems",
    description: "Combining my observation skills with a strong tech stack to build scalable, responsive, and high-performance web applications.",
  },
];

export const portfolioStats = [
  { id: "year", value: 3, suffix: "rd", label: "Year IT Student" },
  { id: "projects", value: 10, suffix: "+", label: "Academic Projects" },
  { id: "tech", value: 4, suffix: "+", label: "Core Technologies" },
  { id: "passion", value: 100, suffix: "%", label: "Passion for Coding" },
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
    id: "ggzone",
    slug: "ggzone",
    title: "GGZone Platform",
    description: "GGZone is a full-stack academic web application prototype built for my Advanced Web Development course. It is designed as a gaming social network and marketplace where users can browse games, join communities, interact with posts, manage profiles, connect with friends, and purchase gaming-related products. The frontend was built with React, TypeScript, Vite, Tailwind CSS, and React Router, following a feature-based architecture with reusable components, centralized API services, protected routes, and JWT authentication. The backend was developed in two versions, ASP.NET and NestJS, with the current demo using the NestJS REST API. The project focuses on demonstrating UI development, API integration, user flows, role-based access, and full-stack application structure for academic purposes.",
    technologies: ["ReactJS", "TypeScript", "ASP.NET Core 8", "NestJS", "Tailwind CSS", "PostgreSQL", "Cloudinary", "Swagger"],
    category: "Web App",
    year: "2025",
    teamSize: 3,
    outcome: "Successfully deployed and active",
    role: "Full-stack Developer",
    logoUrl: "/images/LogoProjects/ggzone.png",
    demoUrl: "https://ggzone-kappa.vercel.app/",
    sourceUrls: [
      { label: "Frontend (WNC)", url: "https://github.com/manhhuy140805/GGZone-WNC" },
      { label: "Backend (NestJS)", url: "https://github.com/manhhuy140805/ggzone-nestjs-be" },
    ],
    frontendDeploy: "Vercel",
    backendDeploy: "Render",
  },
  {
    id: "reliefflow",
    slug: "reliefflow",
    title: "ReliefFlow – Flood Relief Management System",
    description:
      "An academic project for the Software Engineering Project course in the second semester of the third year. Developed a transparent flood relief management system supporting donation management, warehouse tracking, distribution planning, complaint handling, reporting, and public transparency. The frontend was built with ReactJS (JavaScript/JSX), React Router DOM and Tailwind CSS. The backend was developed with ASP.NET Core Web API (.NET 8), Entity Framework Core, SQL Server, and Swagger/OpenAPI.",
    technologies: ["ReactJS", "JSX", "React Router DOM", "Tailwind CSS", "ASP.NET Core (.NET 8)", "Entity Framework Core", "SQL Server", "Swagger/OpenAPI"],
    category: "Dashboard",
    year: "2026",
    teamSize: 4,
    outcome: "Successfully deployed – transparent flood relief platform",
    role: "Team Lead, Full-stack Developer",
    logoUrl: "/images/LogoProjects/reliefflow.png",
    demoUrl: "https://relief-flow-jade.vercel.app/",
    sourceUrls: [
      { label: "Frontend (DAPM_FE)", url: "https://github.com/manhhuy140805/DAPM_FE" },
      { label: "Backend (DAPM_BE)", url: "https://github.com/NL-Nhat/DAPM_BE" },
    ],
    frontendDeploy: "Vercel",
    backendDeploy: "Render",
  },
  {
    id: "upwork-clone",
    slug: "upwork-clone",
    title: "Upwork Clone – Freelance Marketplace",
    description:
      "An academic project for the E-commerce course in the second semester of the third year. Built a full-stack platform supporting job posting, proposals, contracts, progress tracking, escrow-style payment, dispute handling, admin management, and real-time chat. The frontend was built with ReactJS (JavaScript/JSX), Vite and React Router DOM. The backend was developed with NestJS, TypeScript, Prisma ORM, PostgreSQL, REST API, Socket.IO, and Multer.",
    technologies: ["ReactJS", "JSX", "Vite", "React Router DOM", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Socket.IO", "REST API", "Multer"],
    category: "E-Commerce",
    year: "2026",
    teamSize: 4,
    outcome: "Full-stack freelance platform with real-time chat and escrow payment",
    role: "Team Lead, Full-stack Developer",
    logoUrl: "/images/LogoProjects/upwork.png",
    demoUrl: "https://up-work-iota.vercel.app/",
    sourceUrls: [
      { label: "Frontend (TMDT-FE)", url: "https://github.com/manhhuy140805/TMDT-FE" },
      { label: "Backend (TMDT-BE)", url: "https://github.com/manhhuy140805/TMDT-BE" },
    ],
    frontendDeploy: "Vercel",
    backendDeploy: "Render",
  },
  {
    id: "booknest",
    slug: "booknest",
    title: "BookNest – Online Book Catalog & Personal Library",
    description:
      "Developed a book management and browsing system with a React front-end and NestJS REST API. The application supports user registration/login, Google OAuth, email verification, password reset, book listing/detail pages, category filtering, search, favorite books, ratings, and admin-oriented APIs for managing books, categories, and users. The back-end uses PostgreSQL with Prisma, JWT authentication, role-based authorization, validation, caching with Redis/Upstash, rate limiting, Cloudinary for book cover images, and Supabase Storage for PDF uploads.",
    technologies: ["ReactJS", "Vite", "React Router", "Ant Design", "Framer Motion", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT/Passport", "Redis/Upstash", "Cloudinary", "Supabase Storage"],
    category: "Web App",
    year: "2026",
    teamSize: 3,
    outcome: "Full-featured book platform with OAuth, ratings, search, and admin management",
    role: "Full-stack Developer",
    logoUrl: "/images/LogoProjects/booknest.png",
    demoUrl: "https://book-nest-fe-react-js.vercel.app/",
    sourceUrls: [
      { label: "Frontend (BookNest-FE)", url: "https://github.com/manhhuy140805/BookNest-FE" },
      { label: "Backend (BookNest-BE)", url: "https://github.com/manhhuy140805/BookNest-BE" },
    ],
    frontendDeploy: "Vercel",
    backendDeploy: "Render",
  },
  {
    id: "veggieshop",
    slug: "veggieshop",
    title: "VeggieShop Manager – Android App for Vegetable Shop",
    description:
      "VeggieShop Manager is a Kotlin Android app following MVVM architecture (ViewModel + Repository + LiveData). Features: product management (add/edit/search/filter by category: Củ, Quả, Rau, Gia Vị, Đồ Khô + Cloudinary photo upload), category management, order creation with product selection and unit input (kg, bó, gói, quả, hộp, củ), order history sorted by date, order detail editing with status tracking (Pending / Completed / Cancelled), and a customer shop view with banner, category filter, and product grid — all synced live via Firebase.",
    technologies: ["Kotlin", "Android", "MVVM", "XML Layouts", "ViewBinding", "RecyclerView", "Coil", "Firebase Realtime DB", "Cloudinary"],
    category: "Mobile App",
    year: "2025",
    teamSize: 1,
    outcome: "Full admin + customer app with real-time Firebase sync",
    role: "Android Developer",
    logoUrl: "/images/LogoProjects/6.png",
    galleryUrls: [
      "/images/DemoProject/SeSeVegetables/dashboard.jpg",
      "/images/DemoProject/SeSeVegetables/products.jpg",
      "/images/DemoProject/SeSeVegetables/newProduct.jpg",
      "/images/DemoProject/SeSeVegetables/uploadImage.jpg",
      "/images/DemoProject/SeSeVegetables/listCategory.jpg",
      "/images/DemoProject/SeSeVegetables/newCategory.jpg",
      "/images/DemoProject/SeSeVegetables/listOrder.jpg",
      "/images/DemoProject/SeSeVegetables/newOrder.jpg",
      "/images/DemoProject/SeSeVegetables/addProductToOrder.jpg",
      "/images/DemoProject/SeSeVegetables/orderDetail.jpg"
    ]
  },
];

export const educationItems = [
  {
    id: "ute",
    title: "University of Technology and Education, the University of Da Nang",
    years: "2023 - Present",
    description: "Studying Information Technology with a focus on software engineering, web development, and system design.",
  },
];

