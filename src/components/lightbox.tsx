"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Img } from "@/content/site";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export type LightboxItem = Img & { caption: string };

/** Open/close/step state for a lightbox, returning focus to whatever opened it. */
export function useLightbox(count: number) {
  const [index, setIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const open = useCallback((next: number, from: HTMLElement) => {
    trigger.current = from;
    setIndex(next);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    trigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => setIndex((current) => (current === null ? current : (current + delta + count) % count)),
    [count],
  );

  return { index, open, close, step };
}

/**
 * A full-screen viewer: Escape closes, arrow keys step, the page behind stops
 * scrolling. `fit="contain"` shows the whole image at its own proportions
 * (screenshots); `cover` fills a 3:2 frame (photographs).
 */
export function Lightbox({
  items,
  index,
  onClose,
  onStep,
  fit = "cover",
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onStep: (delta: number) => void;
  fit?: "cover" | "contain";
}) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, onStep]);

  const current = index === null ? null : items[index];

  return (
    <AnimatePresence>
      {current && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/[0.88] p-4 backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20 sm:top-6 sm:right-6"
          >
            <X className="size-5" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              className={cn("relative w-full", fit === "cover" ? "max-w-5xl" : "max-w-6xl")}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              onClick={(event) => event.stopPropagation()}
            >
              {fit === "cover" ? (
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-ink">
                  <Image src={current.src} alt={current.alt} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
                </div>
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className="mx-auto h-auto max-h-[78vh] w-auto max-w-full rounded-2xl bg-white"
                />
              )}
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-white">
                <span className="font-display text-base font-semibold">{current.caption}</span>
                {items.length > 1 && (
                  <span className="text-sm text-white/60">
                    {index + 1} / {items.length}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {items.length > 1 &&
            [
              { delta: -1, label: "Previous", Icon: ChevronLeft, side: "left-3 sm:left-6" },
              { delta: 1, label: "Next", Icon: ChevronRight, side: "right-3 sm:right-6" },
            ].map(({ delta, label, Icon, side }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={(event) => {
                  event.stopPropagation();
                  onStep(delta);
                }}
                className={cn(
                  "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-white/20",
                  side,
                )}
              >
                <Icon className="size-5" />
              </button>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
