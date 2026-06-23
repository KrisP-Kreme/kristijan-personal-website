import { TechStack } from "./components/tech-stack";
import { HeroVisual } from "./components/hero-visual-clean";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { ScrollArrow } from "./components/scroll-arrow";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <div id="top" className="flex flex-col min-h-screen items-center bg-foreground font-sans dark:bg-foreground">
      <section className="w-full px-6 py-12 sm:px-8 sm:py-16 pt-24 sm:pt-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-background text-5xl font-bold leading-tight max-w-4xl">
            Hi, I'm Kristijan.
          </h1>

          <HeroVisual />

          <ScrollArrow targetId="about" ariaLabel="Scroll to about section" className="-mt-8" />
        </div>
      </section>

      <AboutSection />
      <div className="w-full max-w-7xl px-6 -mt-60">
        <ScrollArrow targetId="projects" ariaLabel="Scroll to projects section" />
      </div>

      <ProjectsSection />
      <div className="w-full max-w-7xl px-6">
        <ScrollArrow targetId="experience" ariaLabel="Scroll to experience section" />
      </div>

      <ExperienceSection />
    </div>
  );
}
