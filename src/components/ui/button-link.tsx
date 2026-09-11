import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-leaf text-white shadow-[0_14px_30px_rgba(10,96,51,0.24)] hover:bg-leaf-deep hover:shadow-[0_20px_38px_rgba(10,96,51,0.3)]",
  dark: "bg-ink text-white hover:bg-leaf",
  gold: "bg-gold text-ink shadow-[0_14px_30px_rgba(242,176,30,0.22)] hover:bg-[#f6bf45]",
  outline: "border-[1.5px] border-sand-strong text-ink hover:border-ink hover:bg-white",
  glass: "border border-white/30 bg-white/[0.13] text-white hover:bg-white/[0.22]",
} as const;

const sizes = {
  md: "px-7 py-4 text-[15px]",
  sm: "px-5 py-2.5 text-[13.5px]",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<"a">, "href" | "children" | "className">;

/** A pill-shaped call to action that lifts on hover and nudges its arrow. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  icon,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition duration-200 ease-out-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {icon}
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          strokeWidth={2.5}
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
