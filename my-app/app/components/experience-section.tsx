'use client';

import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import React from 'react';

export function ExperienceSection() {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });
  const [fallbackInView, setFallbackInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.05;
      if (isVisible) setFallbackInView(true);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  } as const;

  return (
    <motion.section
      id="experience"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView || fallbackInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="mb-24 mt-20 w-full max-w-4xl mx-auto px-6 py-50"
    >
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h2 className="text-3xl uppercase tracking-[0.35em] text-white">
            Experience
        </h2>

        <div className="w-full space-y-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <Image
                    src="/RMIT%20Stem%20Hub.jpg"
                    alt="RMIT STEM Hub"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Sessional Researcher</p>
                  <p className="text-sm text-white/60">Sept 2025 – Present</p>
                  <p className="text-sm text-white/60">RMIT STEM Hub for Digital Innovation · Melbourne, VIC</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Contribute to technical development projects supporting teaching, learning and research across the STEM College, while assisting lab setup, maintenance and demonstrations for community visitors, including high school groups. I collaborate closely with staff and students in the Virtual Experiences Laboratory to provide reliable technical expertise and support digital innovation showcases.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">Technological Development</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">Community Outreach</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">Lab Operations</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <Image
                    src="/RMIT%20Stem%20Hub.jpg"
                    alt="RMIT STEM Hub"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Software Developer Intern</p>
                  <p className="text-sm text-white/60">Mar 2025 – Aug 2025</p>
                  <p className="text-sm text-white/60">RMIT STEM Hub for Digital Innovation · Melbourne, VIC</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Developed autonomous Python bots and a Finite State Machine framework for OpenAgar, a web-based multiplayer game showcased at RMIT’s Virtual Experience Laboratory. I supported gameplay through WebSocket-powered interactions, collaborated in Agile cycles, and presented the project at RMIT Open Day, receiving an Open Day Certificate of Recognition.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">Python</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">WebSockets</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">FSM</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
