"use client";

import { motion } from "framer-motion";
import React from "react";

type AnimatedRevealProps = {
  children: React.ReactNode;
  index?: number;
};

export function AnimatedReveal({ children, index = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedReveal;
