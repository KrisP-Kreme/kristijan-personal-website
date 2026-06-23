'use client';

import { motion, useInView } from 'framer-motion';
import React from 'react';
import { InteractiveCube } from './interactive-cube';
import { TechStack } from './tech-stack';

export function AboutSection() {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });
  const [fallbackInView, setFallbackInView] = React.useState(false);

  // Fallback: manual scroll check to handle edge cases where useInView doesn't fire
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
      id="about"
      ref={ref}
      variants={variants}
      initial="hidden"
      // animate when either useInView or the scroll-fallback detects visibility
      animate={inView || fallbackInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="mb-20 w-full max-w-4xl mx-auto px-6 py-70"
    >
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="text-background w-full text-lg">
          Hey, I'm Kristijan, a recent Computer Science graduate and software developer based in Melbourne.
          I enjoy building full-stack web applications and experimenting with AI-powered tools.
          Recently I've been working with React, Next.js, TypeScript, and .NET, while also exploring
          areas like LLMs, automation, and game development. Take a look around and check out some of my projects!
        </p>
    </div>

      {/* Render the interactive cube below the About text - hidden on mobile */}
      <div className="hidden sm:flex mt-8 justify-center">
        <TechStack />
      </div>
    </motion.section>
  );
}
