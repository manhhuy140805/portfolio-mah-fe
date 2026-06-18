import ProjectList from "@/src/components/projects/ProjectList";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Button from "@/src/components/ui/Button";
import { portfolioProjects } from "@/src/lib/portfolio-data";

export default function FeaturedProjects() {
  return (
    <section className="border-b border-zinc-200 dark:border-white/10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            description="A quick pass at the featured work grid from the UI reference, built as reusable cards."
            eyebrow="Recent Portfolio"
            title="Transforming ideas into exceptional work"
          />
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
        <div className="mt-10">
          <ProjectList projects={portfolioProjects.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
