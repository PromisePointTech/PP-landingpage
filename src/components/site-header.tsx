"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { logo, mainNav } from "@/content/site";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className="pointer-events-none sticky top-0 z-80 px-3 pt-3 sm:px-7 sm:pt-4"
      style={{ viewTransitionName: "site-header" }}
    >
      <div
        className={cn(
          "pointer-events-auto rounded-[30px] border border-ink/[0.07] bg-white/[0.82] backdrop-blur-[18px] backdrop-saturate-150 transition-shadow duration-300",
          scrolled
            ? "shadow-[0_16px_44px_rgba(20,38,26,0.13)]"
            : "shadow-[0_10px_34px_rgba(20,38,26,0.07)]",
        )}
      >
        <div className="flex items-center gap-2.5 py-[9px] pr-[9px] pl-4 sm:pl-5">
          <Link
            href="/"
            aria-label="Promise Point home"
            onClick={close}
            className="flex shrink-0 items-center pr-2 transition-transform duration-200 hover:scale-[1.03]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              className="h-10 w-auto mix-blend-multiply"
            />
          </Link>

          <nav aria-label="Main" className="hidden flex-1 items-center gap-0.5 lg:flex">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-[9px] font-display text-sm transition-colors duration-200",
                    active ? "font-semibold text-ink" : "font-medium text-sage hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-hover"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <Link
              href="/ecosystem#contact"
              className="hidden rounded-full px-[18px] py-2.5 text-[13.5px] font-bold text-ink transition-colors duration-200 hover:bg-hover sm:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="/agrifintech#register"
              className="hidden rounded-full bg-ink px-5 py-[11px] text-[13.5px] font-bold text-white transition duration-200 hover:-translate-y-px hover:bg-leaf sm:inline-flex"
            >
              Register a farmer
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-hover lg:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Main"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-3 pb-3">
                {mainNav.map((item, index) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.3, ease }}
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-2xl px-4 py-3 font-display text-base transition-colors",
                          active ? "bg-hover font-semibold text-ink" : "text-sage hover:bg-hover hover:text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <li className="mt-2 grid grid-cols-2 gap-2 sm:hidden">
                  <Link
                    href="/ecosystem#contact"
                    onClick={close}
                    className="rounded-full border border-sand-strong px-4 py-3 text-center text-sm font-bold text-ink"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/agrifintech#register"
                    onClick={close}
                    className="rounded-full bg-ink px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    Register a farmer
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
