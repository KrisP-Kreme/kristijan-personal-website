'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function HeroVisualFM() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Map motion values to small translation for orb and inverse for inner
  const orbX = useTransform(mx, (v) => `${v * 14}px`);
  const orbY = useTransform(my, (v) => `${v * 14}px`);
  const innerX = useTransform(mx, (v) => `${-v * 6}px`);
  const innerY = useTransform(my, (v) => `${-v * 6}px`);
  const rotX = useTransform(my, (v) => v * 6);
  const rotY = useTransform(mx, (v) => -v * 6);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = (e.clientX - cx) / (rect.width / 2); // -1..1
      const y = (e.clientY - cy) / (rect.height / 2); // -1..1
      mx.set(x);
      my.set(y);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onLeave);

    return () => {
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onLeave);
    };
  }, [mx, my]);

  return (
    <div className="my-20 w-full flex justify-center items-center">
      <motion.div
        ref={containerRef}
        className="relative w-80 h-80 flex items-center justify-center"
        style={{ rotateX: rotX, rotateY: rotY }}
        whileHover={{ scale: 1.02 }}
      >
        {/* gradient orb layer */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-30 blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          initial={false}
          style={{
            x: orbX,
            y: orbY,
            background: 'linear-gradient(135deg, #3178C6, #06B6D4, #61DAFB, #3178C6)',
          }}
        />

        {/* inner circle */}
        <motion.div
          style={{ x: innerX, y: innerY }}
          className="relative z-10 w-48 h-48 rounded-full border-2 border-background/30 flex items-center justify-center backdrop-blur-md"
          initial={{ scale: 0.98 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          <div className="text-center">
            <p className="text-background text-sm font-medium opacity-70">Building with</p>
            <p className="text-background text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Modern Tech
            </p>
          </div>
        </motion.div>

        {/* small orbiting dots (subtle) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-background rounded-full opacity-70"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8 + i * 2, ease: 'linear', repeatType: 'loop' }}
            style={{ transformOrigin: '140px 0', top: 0, left: '50%' }}
          />
        ))}
      </motion.div>
    </div>
  );
}
