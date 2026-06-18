"use client";

import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/src/types/project.type";
import { useTranslation } from "react-i18next";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const { t } = useTranslation();

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
        <p className="text-lg font-medium text-zinc-400">
          {t("projects_page.empty.title")}
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          {t("projects_page.empty.subtitle")}
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
