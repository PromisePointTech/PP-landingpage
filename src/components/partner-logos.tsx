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
      <RevealGroup className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-6">
        {partnerLogos.map((partner) => (
          <RevealItem key={partner.name} className="h-full">
            <div className="grid h-full min-h-[150px] place-items-center rounded-[26px] border border-sand-soft bg-white p-7 transition duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_26px_48px_rgba(20,38,26,0.1)] sm:min-h-[172px]">
              <div className="relative h-[70px] w-full sm:h-[84px]">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 28vw, 42vw"
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
