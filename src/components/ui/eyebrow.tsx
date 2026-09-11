import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-[18px] text-xs font-extrabold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-gold" : "text-leaf",
        className,
      )}
    >
      {children}
    </p>
  );
}
