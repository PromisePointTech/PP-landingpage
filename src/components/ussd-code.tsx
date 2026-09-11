"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Phone } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** The short code as a chip: click to copy on desktop, tap "Dial" on a phone. */
export function UssdCode({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const dark = tone === "dark";

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.ussdCode);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard is unavailable (insecure context or denied) — the code stays visible to read.
    }
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy the USSD code ${site.ussdCode}`}
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-1.5 pl-4 font-display text-[15px] font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5",
          dark
            ? "border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12]"
            : "border-sand bg-white text-ink hover:border-ink",
        )}
      >
        {site.ussdCode}
        <span
          className={cn(
            "grid size-8 place-items-center rounded-full transition-colors duration-200",
            copied ? "bg-leaf text-white" : dark ? "bg-white/10" : "bg-cream group-hover:bg-hover",
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "copy"}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? <Check className="size-3.5" strokeWidth={3} /> : <Copy className="size-3.5" strokeWidth={2.5} />}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>
      <a
        href={site.ussdHref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-bold sm:hidden",
          dark ? "bg-gold text-ink" : "bg-ink text-white",
        )}
      >
        <Phone aria-hidden className="size-4" />
        Dial
      </a>
      <span aria-live="polite" className="sr-only">
        {copied ? "USSD code copied" : ""}
      </span>
    </span>
  );
}
