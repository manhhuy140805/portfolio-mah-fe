import Link from "next/link";
import type { Project } from "@/src/types/project.type";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visualTone =
    project.slug === "workout-app"
      ? "from-zinc-900 via-stone-800 to-zinc-950"
      : project.slug === "ecommerce-design"
        ? "from-zinc-900 via-neutral-700 to-stone-950"
        : project.slug === "dashboard-design"
          ? "from-black via-zinc-900 to-[#1d1020]"
          : "from-zinc-950 via-neutral-900 to-[#26151d]";

  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition hover:border-[var(--accent)]">
      <Link aria-label={`View ${project.title}`} href={`/projects/${project.slug}`}>
        <div className={`aspect-[4/3] bg-gradient-to-br ${visualTone} p-5`}>
          <div className="flex h-full flex-col justify-between rounded-md border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>{project.category ?? "Project"}</span>
              <span>{project.year ?? "2026"}</span>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-md bg-[var(--accent)]" />
              <div className="h-3 w-36 rounded-md bg-white/75" />
              <div className="grid grid-cols-3 gap-2">
                <span className="h-16 rounded-md bg-white/10" />
                <span className="h-16 rounded-md bg-[var(--accent-warm)]/30" />
                <span className="h-16 rounded-md bg-[var(--accent-cyan)]/25" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <span className="text-xs font-semibold text-[var(--accent-warm)]">
            View
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              className="rounded-md border border-white/10 px-2 py-1 text-xs font-medium text-zinc-300"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
