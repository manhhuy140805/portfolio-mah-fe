import SectionTitle from "@/src/components/ui/SectionTitle";
import { portfolioProjects, portfolioStats } from "@/src/lib/portfolio-data";

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        description="A first-pass admin view for content totals, project review, and message triage."
        eyebrow="Admin"
        title="Dashboard"
      />

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {portfolioStats.map((stat) => (
          <article
            className="rounded-lg border border-white/10 bg-[var(--surface)] p-6"
            key={stat.label}
          >
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-white/10 bg-[var(--surface)]">
          <div className="border-b border-white/10 p-5">
            <h2 className="text-lg font-semibold text-white">Projects</h2>
          </div>
          <div className="divide-y divide-white/10">
            {portfolioProjects.map((project) => (
              <div
                className="grid gap-3 p-5 text-sm md:grid-cols-[1fr_auto_auto]"
                key={project.id}
              >
                <div>
                  <p className="font-semibold text-white">{project.title}</p>
                  <p className="mt-1 text-zinc-500">{project.category}</p>
                </div>
                <span className="text-zinc-400">{project.year}</span>
                <span className="text-[var(--accent-warm)]">Draft</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[var(--surface)] p-6">
          <h2 className="text-lg font-semibold text-white">Inbox</h2>
          <div className="mt-5 grid gap-4">
            {["Portfolio refresh", "Landing page review", "Dashboard UI"].map(
              (message) => (
                <div
                  className="rounded-md border border-white/10 bg-black/20 p-4"
                  key={message}
                >
                  <p className="text-sm font-semibold text-white">{message}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    New contact request awaiting response.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
