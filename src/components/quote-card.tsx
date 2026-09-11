import type { quotes } from "@/content/site";
import { cn } from "@/lib/cn";

export function QuoteCard({ quote }: { quote: (typeof quotes)[number] }) {
  const dark = quote.tone === "dark";

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-[28px] p-[30px] transition duration-300 ease-out-soft hover:-translate-y-1",
        dark
          ? "bg-ink text-[#eaf0eb] hover:shadow-[0_24px_48px_rgba(20,38,26,0.25)]"
          : "bg-white text-ink-soft hover:shadow-[0_24px_48px_rgba(20,38,26,0.08)]",
      )}
    >
      <span aria-hidden className="mb-3.5 font-display text-[38px] leading-none text-gold">
        &ldquo;
      </span>
      <blockquote className="flex-1 text-[15.5px] leading-[1.65]">{quote.text}</blockquote>
      <figcaption className={cn("mt-6 border-t pt-[18px]", dark ? "border-white/[0.14]" : "border-sand-soft")}>
        <p className={cn("font-display text-[15px] font-semibold", dark ? "text-white" : "text-ink")}>{quote.name}</p>
        <p className={cn("mt-[3px] text-[13px]", dark ? "text-mist-dim" : "text-stone")}>{quote.role}</p>
      </figcaption>
    </figure>
  );
}
