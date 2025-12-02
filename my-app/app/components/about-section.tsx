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
      className="mb-20 w-full max-w-4xl mx-auto px-6 py-100"
    >
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="text-background w-full text-lg">
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on developing responsive web applications and expanding my knowledge in different modern technologies, such as React, Next.js, and TypeScript. 
          Welcome to my portfolio!
        </p>
      </div>

      {/* Render the interactive cube below the About text */}
      <div className="mt-8 flex justify-center">
        <TechStack />
      </div>
    </motion.section>
  );
}
