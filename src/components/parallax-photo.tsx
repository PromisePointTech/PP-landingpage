"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Img } from "@/content/site";
import { cn } from "@/lib/cn";

/** A rounded photo that drifts slightly slower than the page as you scroll past. */
export function ParallaxPhoto({
  image,
  className,
  sizes = "(min-width: 1440px) 1360px, 100vw",
  priority = false,
  children,
}: {
  image: Img;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-sand-soft", className)}>
      <motion.div className="absolute inset-x-0 -inset-y-[9%]" style={{ y }}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover saturate-[0.9]" />
      </motion.div>
      {children}
    </div>
  );
}
