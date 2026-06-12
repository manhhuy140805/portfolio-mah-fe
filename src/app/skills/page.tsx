import SkillCard from "@/src/components/skills/SkillCard";
import SectionTitle from "@/src/components/ui/SectionTitle";
import {
  designSkills,
  developmentSkills,
  serviceCards,
} from "@/src/lib/portfolio-data";

export default function SkillsPage() {
  const skills = [...designSkills, ...developmentSkills];

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0f0d0b]">
        <div className="accent-rail h-1 w-full" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
            Skills
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white">
            Balanced design craft and frontend execution
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            The UI reference mixes service clarity with visible progress bars,
            so this page keeps both patterns.
          </p>
        </div>
      </section>

      <section className="bright-section">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <article className="bright-card rounded-lg p-6" key={service.title}>
              <p className="text-sm font-semibold text-[var(--accent)]">
                {service.metric}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-zinc-950">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          description="A quick capability map for the initial profile site."
          eyebrow="Capability"
          title="Design and development stack"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  );
}
