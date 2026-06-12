import AboutPreview from "@/src/components/home/AboutPreview";
import ContactCTA from "@/src/components/home/ContactCTA";
import FeaturedProjects from "@/src/components/home/FeaturedProjects";
import HeroSection from "@/src/components/home/HeroSection";
import SkillsSection from "@/src/components/home/SkillsSection";
import GithubActivity from "@/src/components/home/GithubActivity";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <GithubActivity />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
