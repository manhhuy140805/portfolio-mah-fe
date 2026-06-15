"use client";

import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/src/types/project.type";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
        <p className="text-lg font-medium text-zinc-400">
          No projects found in this category.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Try selecting a different filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
}
