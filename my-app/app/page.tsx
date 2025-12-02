import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TechStack } from "./components/tech-stack";
import { HeroVisual } from "./components/hero-visual-clean";
import { ScrollArrow } from "./components/scroll-arrow";
import { AboutSection } from "./components/about-section";
import { AnimatedReveal } from "./components/animated-reveal";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center py-50 justify-center bg-foreground font-sans dark:bg-foreground">
      <h1 className="text-background max-w text-5xl font-bold">
        Hello, I'm Kristijan.
      </h1>

      {/* Tech Stack */}
      {/* <TechStack /> */}


      <div className="py-25">
        
      {/* Hero visual (original animated orb + parallax) */}

      <HeroVisual />
      </div>
      
      {/* Scroll Arrow below visual */}
      <ScrollArrow />




          {/* About */}
          <AboutSection />

          {/* Scroll Arrow to Projects */}
      <div className="-mt-90">
        <ScrollArrow targetId="projects" ariaLabel="Scroll to projects" />
      </div>          
          {/* Projects */}
          <ProjectsSection />
      </div>
  );
}
