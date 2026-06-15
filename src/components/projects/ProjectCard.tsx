"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/types/project.type";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visualTone =
    project.slug === "workout-app"
      ? "from-zinc-800 via-stone-800/80 to-zinc-900"
      : project.slug === "ecommerce-design"
        ? "from-zinc-800 via-neutral-700/80 to-stone-900"
        : project.slug === "dashboard-design"
          ? "from-zinc-900 via-zinc-800/80 to-[#1d1020]"
          : "from-zinc-800 via-neutral-800/80 to-[#26151d]";

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(47,47,228,0.15)] hover:bg-white/[0.07]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-[var(--accent)]/0 to-[var(--accent)]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      
      <Link aria-label={`View ${project.title}`} href={`/projects/${project.slug}`} className="block h-full">
        <div className={`relative aspect-[16/9] overflow-hidden p-6`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${visualTone} opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out`} />
          
          <div className="relative h-full flex flex-col justify-between rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-5 shadow-inner transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center justify-between text-xs font-medium tracking-wide text-zinc-300">
              <span className="rounded-full bg-white/10 px-3 py-1">{project.category ?? "Project"}</span>
              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1">
                 {project.year ?? "2026"}
              </span>
            </div>
            
            <div className="space-y-3 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <div className="h-2.5 w-1/4 rounded-full bg-[var(--accent-cyan)]/80 shadow-[0_0_10px_rgba(77,184,255,0.5)]" />
              <div className="h-2.5 w-1/2 rounded-full bg-white/80" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <span className="h-12 rounded-lg bg-white/10 border border-white/5" />
                <span className="h-12 rounded-lg bg-[var(--accent-warm)]/20 border border-[var(--accent-warm)]/20" />
                <span className="h-12 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/20" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[var(--accent-cyan)]">
              {project.title}
            </h3>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white group-hover:rotate-45">
               <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
            {project.description}
          </p>
          
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                className="rounded-md bg-white/5 border border-white/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-300 transition-colors group-hover:border-white/10 group-hover:bg-white/10"
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
