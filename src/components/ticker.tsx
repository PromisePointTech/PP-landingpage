import { ticker } from "@/content/site";
import { cn } from "@/lib/cn";

/** A slow marquee of proof points; it pauses while hovered. */
export function Ticker() {
  const items = [...ticker, ...ticker];

  return (
    <div className="overflow-hidden bg-ink py-5">
      <p className="sr-only">{ticker.join(". ")}</p>
      <div aria-hidden className="flex w-max animate-marquee pause-on-hover">
        {items.map((label, index) => (
          <div key={index} className="flex items-center gap-[34px] pr-[34px]">
            <span
              className={cn(
                "whitespace-nowrap font-display text-[15px] font-medium",
                index % 3 === 1 ? "text-gold" : "text-[#dce7de]",
              )}
            >
              {label}
            </span>
            <span className="size-1.5 flex-none rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}
