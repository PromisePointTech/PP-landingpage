import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Mic, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { PageTransition } from "@/components/page-transition";
import { Eyebrow } from "@/components/ui/eyebrow";
import { h2Md } from "@/components/ui/typography";
import { contactMethods, impact, partners } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Seven ways to work with Promise Point — banks, development finance, investors, input providers, insurers, off-takers and agencies — and the verified numbers behind them.",
};

const contactIcons = { phone: Phone, voice: Mic, map: MapPin, mail: Mail } as const;

export default function EcosystemPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Ecosystem"
        glow="left"
        title="Seven ways to work with us, and the numbers behind them"
        intro="Each route has its own conversation, its own diligence pack and its own point of contact."
      />

      <section className="px-5 pt-4 pb-[90px] sm:px-10">
        <h2 className="sr-only">Ways to work with us</h2>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <RevealItem key={partner.title} className="h-full">
              <article className="group relative flex h-full min-h-[210px] flex-col justify-between rounded-[26px] border border-sand-soft bg-white p-7 transition duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_26px_48px_rgba(20,38,26,0.1)]">
                <div>
                  <p className="mb-4 font-display text-xs font-semibold text-stone-soft">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-[11px] font-display text-lg leading-[1.24] font-semibold tracking-[-0.025em]">
                    {partner.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.62] text-moss">{partner.body}</p>
                </div>
                <Link
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-leaf after:absolute after:inset-0 hover:text-leaf-deep"
                >
                  {partner.cta}
                  <ArrowRight
                    aria-hidden
                    strokeWidth={2.5}
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-5 pb-24 sm:px-10">
        <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[600px]">
            <Eyebrow>Impact and scale</Eyebrow>
            <h2 className="font-display text-[clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.04em] text-balance">
              Only figures the platform can produce
            </h2>
          </div>
          <p className="max-w-[280px] text-[13px] leading-relaxed text-stone sm:text-right">
            Where a number has not been verified yet, the space is left empty rather than filled with an estimate.
          </p>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <RevealItem
              key={item.label}
              className={cn("border-t-2 pt-[30px] pr-[26px] pb-[26px]", item.verified ? "border-ink" : "border-sand")}
            >
              <p
                className={cn(
                  "font-display text-[clamp(32px,3.4vw,42px)] leading-none font-bold tracking-[-0.045em]",
                  item.verified ? "text-leaf" : "text-[#cfc8b6]",
                )}
              >
                {item.verified ? (
                  <CountUp value={item.value} />
                ) : (
                  <>
                    <span aria-hidden>{item.value}</span>
                    <span className="sr-only">Not yet verified</span>
                  </>
                )}
              </p>
              <p className="mt-3 mb-[5px] text-[14.5px] font-bold">{item.label}</p>
              <p className="text-[12.5px] leading-[1.55] text-stone">{item.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="contact"
        className="mx-3 mb-[100px] grid items-start gap-14 rounded-[40px] bg-white p-6 sm:mx-6 sm:p-14 lg:grid-cols-2 lg:gap-16"
      >
        <Reveal>
          <Eyebrow>Have questions?</Eyebrow>
          <h2 className={h2Md}>Send us a message</h2>
          <p className="mt-6 mb-[34px] max-w-[440px] text-[17px] leading-[1.65] text-moss">
            Tell us what you need — a specification sheet, a diligence pack, a partnership conversation, or help with a
            farmer account.
          </p>
          <ul>
            {contactMethods.map((method) => {
              const Icon = contactIcons[method.icon];
              const external = method.href.startsWith("http");
              return (
                <li key={method.label} className="border-t border-sand-soft">
                  <a
                    href={method.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid size-11 flex-none place-items-center rounded-[14px] bg-cream text-leaf transition duration-300 ease-out-soft group-hover:-rotate-6 group-hover:bg-leaf group-hover:text-white">
                      <Icon aria-hidden className="size-[19px]" strokeWidth={2.5} />
                    </span>
                    <span>
                      <span className="mb-1 block text-[11.5px] font-extrabold tracking-[0.11em] text-stone uppercase">
                        {method.label}
                      </span>
                      <span className="block text-[15.5px] leading-normal font-semibold transition-colors duration-200 group-hover:text-leaf">
                        {method.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </PageTransition>
  );
}
