export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  createdAt?: string;
  demoUrl?: string;
  imageUrl?: string;
  outcome?: string;
  role?: string;
  sourceUrl?: string;
  year?: string;
  frontendDeploy?: string;
  backendDeploy?: string;
};
