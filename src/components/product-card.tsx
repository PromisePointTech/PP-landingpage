import Image from "next/image";
import type { Product } from "@/content/site";
import { cn } from "@/lib/cn";

export function ProductCard({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const available = product.state === "Available";
  const large = size === "lg";

  return (
    <article
      className={cn(
        "group h-full border border-sand-soft bg-white transition duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_28px_52px_rgba(20,38,26,0.11)]",
        large ? "rounded-[32px] p-7" : "rounded-[28px] p-[26px]",
      )}
    >
      <div
        className={cn(
          "grid place-items-center overflow-hidden",
          large ? "mb-6 h-[220px] rounded-3xl p-[30px]" : "mb-[22px] h-[180px] rounded-[20px] p-[26px]",
        )}
        style={{ backgroundColor: product.plate }}
      >
        <Image
          src={product.src}
          alt={product.alt}
          width={product.width}
          height={product.height}
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out-soft group-hover:-rotate-3 group-hover:scale-[1.08]"
        />
      </div>
      <div className="mb-2.5 flex flex-wrap items-center gap-[9px]">
        <h3 className={cn("font-display font-bold tracking-[-0.025em]", large ? "text-[21px]" : "text-[19px]")}>
          {product.name}
        </h3>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-[9px] py-1 text-[10.5px] font-extrabold uppercase tracking-[0.07em]",
            available ? "bg-mint text-leaf" : "bg-gold-soft text-gold-ink",
          )}
        >
          {available && <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-leaf" />}
          {product.state}
        </span>
      </div>
      <p className={cn("leading-[1.6] text-moss", large ? "text-[15px]" : "text-[14.5px]")}>{product.body}</p>
    </article>
  );
}
