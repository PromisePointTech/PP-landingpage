"use client";

import { motion } from "motion/react";
import { steps } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** The seven steps from registration to payment; connectors draw in as they appear. */
export function StepsTrack() {
  return (
    <motion.ol
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={{ shown: { transition: { staggerChildren: 0.12 } } }}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-[22px]"
    >
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
          className="group"
        >
          <div className="mb-4 flex items-center">
            <span className="grid size-9 flex-none place-items-center rounded-full bg-ink font-display text-sm font-bold text-gold transition duration-300 ease-out-soft group-hover:scale-110 group-hover:bg-leaf group-hover:text-white">
              {index + 1}
            </span>
            {index < steps.length - 1 && (
              <motion.span
                aria-hidden
                className="ml-2.5 hidden h-px flex-1 origin-left bg-[#e0d7c0] lg:block"
                variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1, transition: { duration: 0.6, delay: 0.2, ease } } }}
              />
            )}
          </div>
          <p className="mb-[7px] font-display text-base leading-[1.25] font-semibold">{step.title}</p>
          <p className="text-sm leading-[1.6] text-moss">{step.body}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
