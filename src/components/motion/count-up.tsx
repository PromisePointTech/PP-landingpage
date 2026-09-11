"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// "2,013", "155", "₦15.6m", "20,000 MT", "0 MB" count up; "*347*319#",
// "FSSC 6.0V" and "—" are not quantities and render as written.
const QUANTITY = /^(₦?)(\d[\d,]*(?:\.\d+)?)(\s?[A-Za-z%]*)$/;

function format(n: number, decimals: number, grouped: boolean) {
  return n.toLocaleString("en-NG", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouped,
  });
}

/** Renders `value`, counting its number up from zero when it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const match = QUANTITY.exec(value);
    const node = ref.current;
    if (!match || !node || !inView || reduceMotion) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const decimals = digits.split(".")[1]?.length ?? 0;
    const grouped = digits.includes(",");

    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${format(latest, decimals, grouped)}${suffix}`;
      },
      onComplete: () => {
        node.textContent = value;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
