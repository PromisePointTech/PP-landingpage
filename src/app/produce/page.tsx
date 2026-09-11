import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Gallery } from "@/components/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { PageTransition } from "@/components/page-transition";
import { ProductCard } from "@/components/product-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { processing, processingGallery, products, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Produce",
  description:
    "Cassava starch, flour, garri and by-products — sourced from our own registered network in Ekiti and processed at an FSSC 6.0V certified facility.",
};

export default function ProducePage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Produce"
        title={
          <>
            We buy the cassava and we <span className="highlight">process it ourselves</span>
          </>
        }
        intro="Sourced from our own registered network in Ekiti, processed at an FSSC 6.0V certified facility, and sold to food and industrial buyers."
        action={
          <ButtonLink href="/ecosystem#contact" arrow>
            Request a specification sheet
          </ButtonLink>
        }
      />

      <section className="px-5 pt-4 pb-[90px] sm:px-10">
        <RevealGroup className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <RevealItem key={product.name} className="h-full">
              <ProductCard product={product} size="lg" />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="relative mx-3 mb-[90px] overflow-hidden rounded-[40px] bg-forest px-6 py-16 text-white sm:mx-6 sm:px-14 sm:py-[76px]">
        <div aria-hidden className="absolute -bottom-40 -left-[140px] size-[440px] rounded-full bg-gold/10" />
        <div className="relative">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <Reveal className="max-w-[620px]">
              <Eyebrow tone="dark">Processing</Eyebrow>
              <h2 className="font-display text-[clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.04em] text-balance text-white">
                Certified from farm to finish
              </h2>
              <p className="mt-6 text-[17.5px] leading-[1.62] text-mist">
                Value stays close to the farm. Root arrives from our own network, and leaves as a graded, traceable
                product.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonLink
                href={site.foodSafetyPolicyUrl}
                variant="glass"
                icon={<Download aria-hidden className="size-4" strokeWidth={2.5} />}
              >
                Food Safety Policy (PDF)
              </ButtonLink>
            </Reveal>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4">
            {processing.map((item) => (
              <RevealItem key={item.title} className="group border-t border-white/[0.16] pt-7 pr-[26px] pb-6">
                <p className="mb-2.5 font-display text-lg font-semibold text-white transition-colors duration-200 group-hover:text-gold">
                  {item.title}
                </p>
                <p className="text-[14.5px] leading-[1.6] text-mist">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-[100px] sm:px-10">
        <Gallery items={processingGallery} />
      </section>
    </PageTransition>
  );
}
