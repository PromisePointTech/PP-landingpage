"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.q} className="border-t border-sand-soft">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="group flex w-full items-start justify-between gap-6 py-7 text-left"
              >
                <span className="font-display text-[clamp(19px,2vw,23px)] leading-[1.22] font-semibold tracking-[-0.025em] transition-colors duration-200 group-hover:text-leaf">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 grid size-9 flex-none place-items-center rounded-full border transition duration-300 ease-out-soft",
                    isOpen ? "rotate-45 border-leaf bg-leaf text-white" : "border-sand text-ink group-hover:border-ink",
                  )}
                >
                  <Plus className="size-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 text-base leading-[1.68] text-moss">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
