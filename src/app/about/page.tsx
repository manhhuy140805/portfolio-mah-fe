import Image from "next/image";
import Button from "@/src/components/ui/Button";
import SectionTitle from "@/src/components/ui/SectionTitle";
import {
  designSkills,
  developmentSkills,
  educationItems,
  portfolioStats,
  serviceCards,
} from "@/src/lib/portfolio-data";
import aboutPreview from "@/src/UI/about.png";

export default function AboutPage() {
  return (
    <main>
      <section className="overflow-hidden border-b border-white/10 bg-[#0f0d0b]">
        <div className="accent-rail h-1 w-full" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
              About Me
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-white">
              Designer and frontend builder for sharp digital portfolios
            </h1>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              I turn raw experience, project details, and brand goals into a
              portfolio that feels intentional from the first scroll.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">See Work</Button>
              <Button href="/contact" variant="secondary">
                Start a Brief
              </Button>
            </div>
          </div>
          <div className="h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[var(--surface)]">
            <Image
              alt="About page visual reference"
              className="h-full w-full object-cover object-top opacity-95"
              placeholder="blur"
              src={aboutPreview}
            />
          </div>
        </div>
      </section>

      <section className="bright-section">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <article className="bright-card rounded-lg p-6" key={service.title}>
              <p className="text-sm font-semibold text-[var(--accent)]">
                {service.metric}
              </p>
              <h2 className="mt-5 text-xl font-semibold text-zinc-950">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-2">
        <SkillGroup title="Design Skill" skills={designSkills} />
        <SkillGroup title="Development Skill" skills={developmentSkills} />
      </section>

      <section className="bright-section">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 lg:grid-cols-[1.15fr_1fr]">
        <article className="bright-card rounded-lg p-8">
          <div className="flex items-end gap-6">
            <p className="text-7xl font-bold text-[var(--accent)]">25</p>
            <h2 className="pb-2 text-3xl font-bold leading-tight text-zinc-950">
              Years Of Experience
            </h2>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-600">
            Business consulting and interface craft combine here: practical
            structure first, then a visual system with personality.
          </p>
        </article>
        <div className="grid gap-5 sm:grid-cols-2">
          {portfolioStats.slice(1).map((stat) => (
            <article
              className="bright-card rounded-lg p-8 text-center"
              key={stat.label}
            >
              <p className="text-3xl font-bold text-zinc-950">{stat.value}</p>
              <p className="mt-2 text-xs text-zinc-600">{stat.label}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle eyebrow="Education" title="A path through design and delivery" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {educationItems.map((item) => (
            <article
              className="rounded-lg border border-white/10 bg-[var(--surface)] p-6"
              key={`${item.title}-${item.years}`}
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs text-[var(--accent-warm)]">
                {item.years}
              </p>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

type SkillGroupProps = {
  title: string;
  skills: {
    id: string;
    name: string;
    value?: number;
  }[];
};

function SkillGroup({ skills, title }: SkillGroupProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <span className="h-px w-16 bg-[var(--accent-warm)]" />
      </div>
      <div className="mt-8 grid gap-6">
        {skills.map((skill) => (
          <div key={skill.id}>
            <div className="flex items-center justify-between text-xs font-semibold uppercase text-zinc-300">
              <span>{skill.name}</span>
              <span>{skill.value ?? 70}%</span>
            </div>
            <div className="mt-3 h-2 rounded-md bg-white/10">
              <div
                className="h-2 rounded-md bg-[var(--accent)]"
                style={{ width: `${skill.value ?? 70}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
