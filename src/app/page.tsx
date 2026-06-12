import AboutPreview from "@/src/components/home/AboutPreview";
import ContactCTA from "@/src/components/home/ContactCTA";
import FeaturedProjects from "@/src/components/home/FeaturedProjects";
import HeroSection from "@/src/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
