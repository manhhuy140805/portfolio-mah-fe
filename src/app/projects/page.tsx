import ProjectList from "@/src/components/projects/ProjectList";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { portfolioProjects } from "@/src/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-white/10 bg-[#0f0d0b]">
        <div className="accent-rail h-1 w-full" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white">
            Transforming ideas into exceptional digital experiences
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            A starter gallery for SaaS, mobile, commerce, and dashboard work.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-300">
            {["All", "Branding", "Apps", "Dashboard", "Marketing"].map((item) => (
              <span
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bright-section">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            description="Each card is ready to connect to real case study content later."
            eyebrow="Recent Portfolio"
            title="Selected work"
            tone="light"
          />
          <div className="mt-10">
            <ProjectList projects={portfolioProjects} />
          </div>
        </div>
      </section>
    </main>
  );
}
