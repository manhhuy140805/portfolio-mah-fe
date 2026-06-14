import AboutHero from "@/src/components/about/AboutHero";
import PersonalBio from "@/src/components/about/PersonalBio";
import ServicesGrid from "@/src/components/about/ServicesGrid";
import ExperienceStats from "@/src/components/about/ExperienceStats";
import SkillsSection from "@/src/components/about/SkillsSection";
import EducationTimeline from "@/src/components/about/EducationTimeline";
import GithubActivity from "@/src/components/home/GithubActivity";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--accent)]/30">
      <AboutHero />
      <PersonalBio />
      <ExperienceStats />
      <ServicesGrid />
      <SkillsSection />
      <GithubActivity />
      <EducationTimeline />
    </main>
  );
}
