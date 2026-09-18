import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroPhone } from "@/components/hero-phone";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageTransition } from "@/components/page-transition";
import { ParallaxPhoto } from "@/components/parallax-photo";
import { PartnerLogos } from "@/components/partner-logos";
import { ProductCard } from "@/components/product-card";
import { Ticker } from "@/components/ticker";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { h2Lg } from "@/components/ui/typography";
import { UssdCode } from "@/components/ussd-code";
import {
  channels,
  heroStats,
  impactShort,
  photos,
  pillars,
  products,
  screens,
  site,
} from "@/content/site";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative px-5 pt-12 sm:px-10 sm:pt-[76px]">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[60px] -left-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(242,176,30,0.22),transparent_68%)]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-[30px] inline-flex animate-rise flex-wrap items-center gap-[9px] rounded-full border border-sand bg-white py-[7px] pr-2 pl-3.5">
              <span className="relative flex size-[7px]">
                <span className="absolute inset-0 animate-ping rounded-full bg-leaf/50" />
                <span className="relative size-[7px] rounded-full bg-leaf" />
              </span>
              <span className="text-[13px] font-semibold text-ink-soft">Woman-led, out of Ikole, Ekiti</span>
              <span className="rounded-full bg-gold-soft px-[11px] py-[5px] text-[11.5px] font-extrabold tracking-[0.06em] text-gold-ink uppercase">
                Since 2021
              </span>
            </div>
            <h1 className="max-w-[800px] animate-rise font-display text-[clamp(44px,6.2vw,84px)] leading-[0.94] font-bold tracking-[-0.045em] text-balance [animation-delay:80ms]">
              Promise Point —
              <br />
              <span className="highlight">Building African Capacity for Economic Empowerment</span>
            </h1>
            <p className="mt-[30px] mb-9 max-w-[520px] animate-rise text-lg leading-[1.58] text-moss [animation-delay:160ms] sm:text-[19.5px]">
              A woman-led vision transforming local resources into world-class products, sustainable livelihoods and
              shared prosperity.
            </p>
            <div className="flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
              <ButtonLink href="/agrifintech#register" arrow>
                Register as a farmer
              </ButtonLink>
              <ButtonLink href="/produce" variant="outline">
                Buy our starch
              </ButtonLink>
            </div>
            <div className="mt-8 flex animate-rise flex-wrap items-center gap-3 text-sm text-sage [animation-delay:320ms]">
              <span>Try it on your phone:</span>
              <UssdCode />
            </div>
          </div>
          <HeroPhone />
        </div>
      </section>

      <section className="px-5 pt-2 pb-16 sm:px-10">
        <RevealGroup className="grid grid-cols-2 border-t border-sand lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <RevealItem
              key={stat.label}
              className={cn(
                "pt-8 pr-4 lg:pr-7",
                index > 0 && "lg:pl-7",
                index < heroStats.length - 1 && "lg:border-r lg:border-sand",
              )}
            >
              <p className="font-display text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.04em]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1.5 text-[13.5px] text-[#7a8578]">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <Ticker />

      <section className="px-5 pt-24 pb-4 sm:px-10">
        <Reveal className="max-w-[660px]">
          <Eyebrow>What we do</Eyebrow>
          <h2 className={h2Lg}>Three businesses, one farmer profile</h2>
        </Reveal>
      </section>
      <section className="px-5 pt-6 pb-[90px] sm:px-10">
        {pillars.map((pillar) => (
          <Reveal key={pillar.n}>
            <article className="group relative grid items-start gap-6 border-t border-sand py-11 md:grid-cols-3 md:gap-10">
              <div className="flex items-start gap-[22px]">
                <span className="pt-[9px] font-display text-[15px] font-semibold text-stone-soft transition-colors duration-300 group-hover:text-gold-ink">
                  {pillar.n}
                </span>
                <h3 className="font-display text-[clamp(28px,3.2vw,40px)] leading-[1.07] font-bold tracking-[-0.035em] transition-transform duration-300 ease-out-soft group-hover:translate-x-1.5">
                  {pillar.title}
                </h3>
              </div>
              <p className="max-w-[460px] text-[17px] leading-[1.62] text-moss">{pillar.body}</p>
              <div className="flex flex-col items-start gap-2.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sand bg-white px-4 py-2 text-[13.5px] font-semibold text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
                <Link
                  href={pillar.href}
                  className="mt-2 inline-flex items-center gap-1.5 font-display text-[14.5px] font-semibold text-leaf after:absolute after:inset-0 hover:text-leaf-deep"
                >
                  {pillar.cta}
                  <ArrowRight
                    aria-hidden
                    strokeWidth={2.5}
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative mx-3 mb-[90px] overflow-hidden rounded-[40px] bg-forest px-6 py-16 text-white sm:mx-6 sm:px-14 sm:py-20">
        <div aria-hidden className="absolute -top-[140px] -right-[120px] size-[480px] rounded-full bg-gold/[0.11]" />
        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="dark">The product in action</Eyebrow>
            <h2 className={cn(h2Lg, "text-white")}>A menu, not an app</h2>
            <p className="mt-6 mb-[34px] max-w-[520px] text-[17.5px] leading-[1.62] text-mist">
              A farmer dials the code and gets six choices. Someone who cannot read the menu calls{" "}
              <a href={site.voiceLineHref} className="font-semibold whitespace-nowrap text-white underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold">
                {site.voiceLine}
              </a>{" "}
              and speaks to an assistant in Yoruba, Hausa, Igbo or English. Both routes reach the same verified record and the
              same account.
            </p>
            <ul className="max-w-[520px]">
              {channels.map((channel) => (
                <li key={channel.title} className="group border-t border-white/[0.13] py-[22px]">
                  <p className="mb-1.5 font-display text-[17px] font-semibold text-white transition-colors duration-200 group-hover:text-gold">
                    {channel.title}
                  </p>
                  <p className="text-[14.5px] leading-[1.6] text-mist">{channel.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <RevealGroup className="grid gap-4">
            {screens.map((screen) => (
              <RevealItem key={screen.title}>
                <div className="flex items-center gap-5 rounded-3xl border border-white/[0.11] bg-white/[0.055] px-[26px] py-6 transition duration-300 ease-out-soft hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]">
                  <p className="w-24 flex-none font-display text-[26px] font-bold tracking-[-0.03em] text-gold">
                    <CountUp value={screen.value} />
                  </p>
                  <div>
                    <p className="mb-1 font-display text-[15.5px] font-semibold text-white">{screen.title}</p>
                    <p className="text-[13.5px] leading-[1.55] text-mist">{screen.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-10">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[600px]">
            <Eyebrow>Our produce</Eyebrow>
            <h2 className={h2Lg}>Premium cassava, processed at source</h2>
          </div>
          <ButtonLink href="/produce" variant="outline" arrow>
            See all products
          </ButtonLink>
        </Reveal>
        <RevealGroup className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <RevealItem key={product.name} className="h-full">
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-3 pb-24 sm:px-6">
        <Reveal>
          <ParallaxPhoto image={photos.facilityAerial} className="h-[440px] rounded-[40px] sm:h-[560px]">
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-12">
              <div className="max-w-xl text-white">
                <p className="mb-3 text-xs font-extrabold tracking-[0.18em] text-gold uppercase">Ikole, Ekiti State</p>
                <p className="font-display text-[clamp(26px,3.2vw,40px)] leading-[1.08] font-bold tracking-[-0.035em] text-balance">
                  Where the cassava is grown, graded and processed
                </p>
              </div>
              <ButtonLink href="/about" variant="glass" arrow>
                Meet Promise Point
              </ButtonLink>
            </div>
          </ParallaxPhoto>
        </Reveal>
      </section>

      <section className="px-5 pb-[100px] sm:px-10">
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-8">
          <h2 className={cn(h2Lg, "max-w-[540px]")}>Delivering value since 2021</h2>
          <p className="text-[13px] leading-relaxed text-stone sm:text-right">
            Last updated {site.lastUpdated}
            <br />
            Source: Promise Point administration
          </p>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4">
          {impactShort.map((item) => (
            <RevealItem key={item.label} className="border-t-2 border-ink pt-9 pb-8 sm:pr-7">
              <p className="font-display text-[clamp(36px,4vw,52px)] leading-none font-bold tracking-[-0.05em] text-leaf">
                <CountUp value={item.value} />
              </p>
              <p className="mt-3 mb-[5px] text-[15px] font-bold">{item.label}</p>
              <p className="text-[13px] leading-[1.55] text-stone">{item.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <PartnerLogos />
    </PageTransition>
  );
}
