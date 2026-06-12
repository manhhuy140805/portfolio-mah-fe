import Button from "@/src/components/ui/Button";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { portfolioProjects } from "@/src/lib/portfolio-data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project =
    portfolioProjects.find((item) => item.slug === slug) ?? portfolioProjects[0];

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0f0d0b]">
        <div className="accent-rail h-1 w-full" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
              {project.category ?? "Project"}
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss Similar Work</Button>
              <Button href="/projects" variant="secondary">
                Back to Projects
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-[var(--surface)] p-6">
            <dl className="grid gap-5 text-sm">
              <div>
                <dt className="text-zinc-500">Role</dt>
                <dd className="mt-1 font-semibold text-white">{project.role}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Outcome</dt>
                <dd className="mt-1 font-semibold text-white">
                  {project.outcome}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Year</dt>
                <dd className="mt-1 font-semibold text-white">{project.year}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bright-section">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            description="This case study shell is ready for screenshots, metrics, and process notes."
            eyebrow="Case Study"
            title="Project overview"
            tone="light"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.technologies.map((technology) => (
              <article className="bright-card rounded-lg p-6" key={technology}>
                <p className="text-sm font-semibold text-[var(--accent)]">
                  Stack
                </p>
                <h2 className="mt-4 text-xl font-semibold text-zinc-950">
                  {technology}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Add details about how this part supported the final experience.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
