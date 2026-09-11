import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { Gallery } from "@/components/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { PageTransition } from "@/components/page-transition";
import { ParallaxPhoto } from "@/components/parallax-photo";
import { QuoteCard } from "@/components/quote-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { h2Md } from "@/components/ui/typography";
import { claims, farmGallery, faqs, photos, quotes } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A woman-led cassava innovation for Africa's food and economic empowerment, transforming cassava into premium starch in Ikole, Ekiti State.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A woman-led cassava innovation for Africa&rsquo;s{" "}
            <span className="highlight">food and economic empowerment</span>
          </>
        }
        intro="Transforming cassava into premium starch with care — powered by innovation, tradition and the farmers of Ikole, Ekiti State."
      />

      <section className="px-5 pb-[90px] sm:px-10">
        <Reveal>
          <ParallaxPhoto image={photos.portrait} priority className="h-[360px] rounded-[36px] sm:h-[480px]" />
        </Reveal>
      </section>

      <section className="grid items-start gap-12 px-5 pb-24 sm:px-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className={h2Md}>Sustainable cassava processing for a healthier tomorrow</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-[30px] text-[17.5px] leading-[1.65] text-moss">
            We are dedicated to transforming cassava into premium starch and flour through environmentally responsible
            practices. Our goal is to nourish communities locally and globally with quality you can trust.
          </p>
          <ul>
            {claims.map((claim) => (
              <li key={claim} className="group flex items-center gap-3.5 border-t border-sand py-4">
                <span className="grid size-7 flex-none place-items-center rounded-full bg-mint text-leaf transition duration-300 group-hover:scale-110 group-hover:bg-leaf group-hover:text-white">
                  <Check aria-hidden className="size-4" strokeWidth={2.75} />
                </span>
                <span className="text-base font-semibold">{claim}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-3 mb-24 rounded-[40px] bg-white px-6 py-14 sm:mx-6 sm:px-14 sm:py-[72px]">
        <Reveal className="mb-8 max-w-[640px]">
          <Eyebrow>How we farm</Eyebrow>
          <h2 className={h2Md}>Questions we get asked most</h2>
        </Reveal>
        <Reveal>
          <FaqList items={faqs} />
        </Reveal>
      </section>

      <section className="px-5 pb-24 sm:px-10">
        <Reveal className="mb-10 max-w-[640px]">
          <Eyebrow>In their words</Eyebrow>
          <h2 className={h2Md}>Farmers, buyers and the people who check our work</h2>
        </Reveal>
        <RevealGroup className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <RevealItem key={quote.name} className="h-full">
              <QuoteCard quote={quote} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-5 pb-[100px] sm:px-10">
        <Reveal>
          <Eyebrow className="mb-5">Gallery of our farm</Eyebrow>
        </Reveal>
        <Gallery items={farmGallery} />
      </section>
    </PageTransition>
  );
}
