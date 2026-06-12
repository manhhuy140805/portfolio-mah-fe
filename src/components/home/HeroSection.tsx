import Image from "next/image";
import Button from "@/src/components/ui/Button";
import { portfolioStats } from "@/src/lib/portfolio-data";
import homePreview from "@/src/UI/home.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0f0d0b]">
      <div className="accent-rail h-1 w-full" />
      <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
            Web Developer
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Jackson Clark
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            I design and build portfolio experiences, strategic landing pages,
            and product interfaces with a sharp visual system and clean code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Hire Portfolio</Button>
            <Button href="/projects" variant="secondary">
              Explore Work
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {portfolioStats.map((stat) => (
              <div
                className="rounded-lg border border-black/10 bg-[var(--surface-cream)] p-4 text-zinc-950"
                key={stat.label}
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-32 w-48 rounded-lg bg-[var(--accent-warm)]" />
          <div className="absolute -right-5 top-16 h-24 w-36 rounded-lg bg-[var(--accent-cyan)]" />
          <div className="absolute right-4 top-4 z-10 rounded-md border border-black/10 bg-[var(--surface-cream)] px-4 py-3 text-zinc-950 shadow-2xl">
            <p className="text-3xl font-bold">25</p>
            <p className="text-xs text-zinc-600">Years of experience</p>
          </div>
          <div className="relative h-[560px] overflow-hidden rounded-lg border border-white/15 bg-[var(--surface)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <Image
              alt="Portfolio homepage visual reference"
              className="h-full w-full object-cover object-top opacity-95"
              placeholder="blur"
              priority
              src={homePreview}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
