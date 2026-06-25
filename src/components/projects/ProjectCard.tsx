"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/types/project.type";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  const visualTone =
    project.slug === "ggzone"
      ? "from-[#2e2a6f] via-[#4040a0] to-[#525280]"
      : project.slug === "reliefflow"
        ? "from-[#235070] via-[#3a7090] to-[#4a90a8]"
        : project.slug === "upwork-clone"
          ? "from-[#223880] via-[#2e4e90] to-[#2260a8]"
          : project.slug === "booknest"
            ? "from-[#3e2278] via-[#5e3898] to-[#3e2278]"
            : project.slug === "veggieshop"
              ? "from-[#1a4a2a] via-[#2e7a40] to-[#3a9050]"
              : "from-zinc-600 via-neutral-500/80 to-[#4d3045]";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-white/5 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(47,47,228,0.15)] hover:bg-zinc-200 dark:hover:bg-white/[0.07]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-(--accent)/0 via-(--accent)/0 to-(--accent)/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <Link aria-label={`View ${project.title}`} href={`/projects/${project.slug}`} className="block h-full">
        {/* Thumbnail */}
        <div className={`relative aspect-video overflow-hidden`}>
          <div className={`absolute inset-0 bg-linear-to-br ${visualTone} group-hover:scale-105 transition-transform duration-700 ease-in-out`} />

          {project.logoUrl ? (
            /* Logo display */
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Glow blob behind logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full bg-white/30 blur-3xl group-hover:bg-white/40 transition-all duration-700" />
              </div>
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={project.logoUrl}
                  alt={`${project.title} logo`}
                  width={280}
                  height={280}
                  className="object-contain drop-shadow-[0_0_32px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_52px_rgba(255,255,255,0.65)] transition-all duration-500 max-h-52 w-auto"
                />
              </motion.div>
              {/* Category + year chips overlaid bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between text-xs font-medium tracking-wide text-zinc-300">
                <span className="rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/10">
                  {t(`projects_page.categories.${project.category}`, { defaultValue: project.category ?? "Project" })}
                </span>
                <span className="rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/10">
                  {project.year ?? "2026"}
                </span>
              </div>
            </div>
          ) : (
            /* Fallback placeholder */
            <div className="relative h-full flex flex-col justify-between rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-5 m-6 shadow-inner transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center justify-between text-xs font-medium tracking-wide text-zinc-300">
                <span className="rounded-full bg-white/10 px-3 py-1">{t(`projects_page.categories.${project.category}`, { defaultValue: project.category ?? "Project" })}</span>
                <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1">
                  {project.year ?? "2026"}
                </span>
              </div>
              <div className="space-y-3 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-2.5 w-1/4 rounded-full bg-(--accent-cyan)/80 shadow-[0_0_10px_rgba(77,184,255,0.5)]" />
                <div className="h-2.5 w-1/2 rounded-full bg-white/80" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <span className="h-12 rounded-lg bg-white/10 border border-white/5" />
                  <span className="h-12 rounded-lg bg-(--accent-warm)/20 border border-(--accent-warm)/20" />
                  <span className="h-12 rounded-lg bg-(--accent)/20 border border-(--accent)/20" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-(--accent-cyan)">
              {t(`portfolio_projects.${project.id}.title`, { defaultValue: project.title })}
            </h3>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white transition-all group-hover:bg-(--accent) group-hover:border-(--accent) group-hover:text-white group-hover:rotate-45">
               <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {t(`portfolio_projects.${project.id}.description`, { defaultValue: project.description })}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                className="rounded-md bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors group-hover:border-zinc-400 dark:group-hover:border-white/10 group-hover:bg-zinc-300 dark:group-hover:bg-white/10"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}
