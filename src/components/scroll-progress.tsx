"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** A thin gold bar along the top edge that tracks how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-90 h-[3px] origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}
