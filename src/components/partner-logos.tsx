import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { h2Lg } from "@/components/ui/typography";
import { partnerLogos } from "@/content/site";

/** The partners band: headline, a short note, and the institutions' logos on white plates. */
export function PartnerLogos() {
  return (
    <section className="px-5 pb-[100px] sm:px-10">
      <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-[620px]">
          <Eyebrow>Partners</Eyebrow>
          <h2 className={h2Lg}>
            The institutions
            <br className="hidden sm:inline" /> we work alongside
          </h2>
        </div>
        <p className="max-w-[340px] text-[15px] leading-[1.6] text-stone sm:text-right">
          Research, government, development finance and industry — each partner touches a different part of the chain.
        </p>
      </Reveal>
      <h3 className="sr-only">Our partners</h3>
      {/* Flex rather than grid so an odd count centres its last row instead of leaving a gap. */}
      <RevealGroup className="flex flex-wrap justify-center gap-[18px]">
        {partnerLogos.map((partner) => (
          <RevealItem
            key={partner.name}
            className="basis-[calc((100%_-_18px)/2)] sm:basis-[calc((100%_-_36px)/3)] lg:basis-[calc((100%_-_108px)/7)]"
          >
            <div className="grid h-full min-h-[150px] place-items-center rounded-[26px] border border-sand-soft bg-white p-6 transition duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_26px_48px_rgba(20,38,26,0.1)] sm:min-h-[172px] sm:p-7 lg:p-5">
              <div className="relative h-[70px] w-full sm:h-[84px]">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1024px) 180px, (min-width: 640px) 28vw, 42vw"
                  /* The optimizer rejects SVG unless dangerouslyAllowSVG is set; serve that one as-is. */
                  unoptimized={partner.src.endsWith(".svg")}
                  className="object-contain object-center"
                />
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
