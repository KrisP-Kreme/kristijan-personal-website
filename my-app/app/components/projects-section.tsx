"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AnimatedReveal } from "./animated-reveal";
import React from "react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left py-80">
        <AnimatedReveal index={0}>
          <h1 className="text-background max-w text-5xl font-bold">My projects</h1>
        </AnimatedReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 w-full mt-4">
          {projects.map((p, i) => (
            <AnimatedReveal key={p.title} index={i + 1}>
              <Link href={p.href}>
                <Card className="p-8 w-190 relative h-50 overflow-hidden rounded-none bg-transparent border-none p-0 group cursor-pointer">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition duration-150" />

                  <div className="absolute opacity-0 bottom-0 left-0 p-4 text-white translate-y-4 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="opacity-90">{p.description}</p>
                  </div>
                </Card>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
