"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { Lightbox, useLightbox } from "@/components/lightbox";
import type { GalleryItem } from "@/content/site";
import { cn } from "@/lib/cn";

// Column spans (of 4) that tile the photos into two full rows on desktop.
function spansFor(count: number) {
  if (count === 5) return [2, 1, 1, 2, 2];
  if (count === 6) return [2, 1, 1, 1, 1, 2];
  return Array.from({ length: count }, () => 1);
}

/** A tiled photo grid; any photo opens full size in a keyboard-friendly lightbox. */
export function Gallery({ items }: { items: GalleryItem[] }) {
  const { index, open, close, step } = useLightbox(items.length);
  const spans = spansFor(items.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
        {items.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            onClick={(event) => open(itemIndex, event.currentTarget)}
            aria-label={`Open photo: ${item.caption}`}
            className={cn(
              "group relative h-[210px] overflow-hidden rounded-3xl bg-sand-soft text-left sm:h-[270px]",
              spans[itemIndex] === 2 && "col-span-2",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={spans[itemIndex] === 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className="object-cover saturate-[0.88] transition duration-700 ease-out-soft group-hover:scale-[1.06] group-hover:saturate-100"
            />
            <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/65 via-ink/0 to-transparent transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100" />
            <span className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 transition duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
              <span className="font-display text-sm font-semibold text-white">{item.caption}</span>
              <span className="grid size-9 flex-none place-items-center rounded-full bg-white/90 text-ink">
                <Expand aria-hidden className="size-4" />
              </span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox items={items} index={index} onClose={close} onStep={step} />
    </>
  );
}
