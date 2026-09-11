import { cn } from "@/lib/cn";

/** The opening block of an inner page: eyebrow, headline, intro and an optional action. */
export function PageHero({
  eyebrow,
  title,
  intro,
  action,
  glow = "right",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  action?: React.ReactNode;
  glow?: "left" | "right";
}) {
  return (
    <section className="relative px-5 pt-16 pb-12 sm:px-10 sm:pt-20 sm:pb-16">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute size-[440px] rounded-full bg-[radial-gradient(circle,rgba(242,176,30,0.2),transparent_68%)]",
          glow === "right" ? "-top-10 -right-36" : "top-5 -left-36",
        )}
      />
      <div className={cn("relative", action && "flex flex-wrap items-end justify-between gap-10")}>
        <div className="max-w-[1000px]">
          <p className="mb-5 animate-rise text-xs font-extrabold tracking-[0.18em] text-leaf uppercase">{eyebrow}</p>
          <h1 className="animate-rise font-display text-[clamp(40px,5.4vw,72px)] leading-none font-bold tracking-[-0.045em] text-balance [animation-delay:80ms]">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-[640px] animate-rise text-lg leading-[1.58] text-moss [animation-delay:160ms] sm:text-[19px]">
              {intro}
            </p>
          )}
        </div>
        {action && <div className="animate-rise [animation-delay:240ms]">{action}</div>}
      </div>
    </section>
  );
}
