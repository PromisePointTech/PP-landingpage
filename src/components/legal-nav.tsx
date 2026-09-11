"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalDocs } from "@/content/site";
import { cn } from "@/lib/cn";

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Legal documents" className="flex flex-col gap-[5px]">
      {legalDocs.map((doc) => {
        const href = `/legal/${doc.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={doc.slug}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center justify-between rounded-2xl px-[17px] py-[13px] font-display text-[14.5px] transition duration-200",
              active ? "bg-leaf font-semibold text-white" : "font-medium text-moss hover:bg-hover hover:text-ink",
            )}
          >
            {doc.label}
            <span
              aria-hidden
              className={cn(
                "size-1.5 rounded-full transition duration-200",
                active ? "bg-gold" : "scale-0 bg-leaf group-hover:scale-100",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
