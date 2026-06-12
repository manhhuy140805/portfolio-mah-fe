import Button from "@/src/components/ui/Button";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { serviceCards } from "@/src/lib/portfolio-data";

export default function AboutPreview() {
  return (
    <section className="border-b border-white/10 bg-[var(--background)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            description="A personal portfolio should make the work obvious, the strengths memorable, and the next step effortless."
            eyebrow="About"
            title="Designs that feel clear before they feel loud"
          />
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceCards.map((service) => (
            <article
              className="rounded-lg border border-white/10 bg-[var(--surface)] p-6 shadow-lg"
              key={service.title}
            >
              <p className="text-sm font-semibold text-[var(--accent)]">
                {service.metric}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
