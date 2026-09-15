import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageTransition } from "@/components/page-transition";
import { ParallaxPhoto } from "@/components/parallax-photo";
import { StepsTrack } from "@/components/steps-track";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { h2Md } from "@/components/ui/typography";
import { UssdCode } from "@/components/ussd-code";
import { photos, problems, services, signals, site, ussdScreenshot } from "@/content/site";

export const metadata: Metadata = {
  title: "AgriFintech",
  description:
    "Farmer registration, produce payments, savings and credit — reached by USSD and voice on any phone, delivered with licensed financial partners.",
};

export default function AgriFintechPage() {
  return (
    <PageTransition>
      <section className="relative mx-3 mt-6 overflow-hidden rounded-[40px] bg-forest px-6 pt-16 pb-14 text-white sm:mx-6 sm:px-14 sm:pt-[84px] sm:pb-[76px]">
        <div aria-hidden className="absolute -right-[120px] -bottom-[180px] size-[500px] rounded-full bg-gold/[0.11]" />
        <div className="relative">
          <p className="mb-5 animate-rise text-xs font-extrabold tracking-[0.18em] text-gold uppercase">
            Promise Point AgriFintech
          </p>
          <h1 className="max-w-[900px] animate-rise font-display text-[clamp(42px,5.6vw,74px)] leading-none font-bold tracking-[-0.045em] text-balance text-white [animation-delay:80ms]">
            A bank account that answers a feature phone
          </h1>
          <p className="mt-[30px] mb-9 max-w-[600px] animate-rise text-lg leading-[1.58] text-mist [animation-delay:160ms] sm:text-[19px]">
            Farmer registration, produce payments, savings and credit — reached by USSD and voice, delivered with
            licensed financial partners.
          </p>
          <div className="flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <ButtonLink href="#register" variant="gold" arrow>
              Register as a farmer
            </ButtonLink>
            <ButtonLink href="/ecosystem#contact" variant="glass">
              Become a financial partner
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="grid items-start gap-14 px-5 pt-[90px] sm:px-10 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>The access problem</Eyebrow>
          <h2 className={h2Md}>Productive farmers. Infrastructure built for someone else.</h2>
          <p className="mt-6 max-w-[460px] text-[17px] leading-[1.65] text-moss">
            What they lack is not capability — it is a financial system designed for a feature phone, a cash economy
            and a road that takes two hours to travel.
          </p>
        </Reveal>
        <RevealGroup>
          {problems.map((problem) => (
            <RevealItem key={problem.title} className="group grid gap-2 border-t border-sand py-[22px] sm:grid-cols-2 sm:gap-6">
              <p className="font-display text-[17px] leading-[1.3] font-semibold tracking-[-0.02em] transition-colors duration-200 group-hover:text-leaf">
                {problem.title}
              </p>
              <p className="text-[14.5px] leading-[1.6] text-moss">{problem.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section id="register" className="px-5 py-24 sm:px-10">
        <Reveal className="mb-11 max-w-[660px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className={h2Md}>From registration to payment, in seven steps</h2>
        </Reveal>
        <StepsTrack />

        <Reveal className="mt-16">
          <div className="grid items-center gap-10 overflow-hidden rounded-[40px] bg-white px-6 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-xl">
              <Eyebrow>Register today</Eyebrow>
              <h3 className="font-display text-[clamp(28px,3vw,38px)] leading-[1.08] font-bold tracking-[-0.035em] text-balance">
                Dial the code on any phone
              </h3>
              <p className="mt-4 mb-7 text-[17px] leading-[1.65] text-moss">
                Registration is free. Dial {site.ussdCode}, choose the role you are registering as and follow the
                prompts — or ask any Promise Point field agent to register you on the spot.
              </p>
              <UssdCode />
              <p className="mt-5 text-[15px] leading-relaxed text-moss">
                Can&rsquo;t read the menu? Call our AI voice line on{" "}
                <a href={site.voiceLineHref} className="font-semibold whitespace-nowrap text-leaf underline decoration-leaf/30 underline-offset-4 hover:text-leaf-deep">
                  {site.voiceLine}
                </a>{" "}
                and speak in Yoruba, Hausa, Igbo or English.
              </p>
              <p className="mt-3 text-[13px] text-stone">
                We do not charge for the menu itself; your network may charge for the session.
              </p>
            </div>
            <div className="group mx-auto w-[220px] sm:w-[240px]">
              <div className="rotate-[4deg] rounded-[40px] bg-[#0b0b0c] p-2.5 shadow-[0_40px_70px_rgba(20,38,26,0.28)] transition-transform duration-500 ease-out-soft group-hover:-translate-y-2 group-hover:rotate-0">
                <Image
                  src={ussdScreenshot.src}
                  alt={ussdScreenshot.alt}
                  width={ussdScreenshot.width}
                  height={ussdScreenshot.height}
                  sizes="240px"
                  className="h-auto w-full rounded-[32px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-24 sm:px-10">
        <div className="mb-10 grid items-end gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Financial services</Eyebrow>
            <h2 className={h2Md}>Ten services, all reachable without internet</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-3.5 rounded-[26px] bg-ink px-7 py-7 sm:px-[30px]">
              <ShieldCheck aria-hidden className="mt-0.5 size-5 flex-none text-gold" strokeWidth={2.5} />
              <div>
                <p className="mb-[7px] text-[14.5px] leading-[1.5] font-bold text-white">
                  Financial accounts and regulated payment services are provided through licensed financial partners.
                </p>
                <p className="text-[13.5px] leading-[1.6] text-[#9fb3a5]">
                  Promise Point is not a bank and does not hold customer deposits. Accounts, transfers and bill payments
                  are operated by Fidelity Bank and our regulated payment partners.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <RevealItem key={service.title} className="h-full">
              <div className="h-full rounded-[22px] border border-sand-soft bg-white p-[26px] transition duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(20,38,26,0.09)]">
                <div className="mb-2.5 flex items-start justify-between gap-2">
                  <p className="font-display text-base leading-[1.28] font-semibold">{service.title}</p>
                  {service.soon && (
                    <span className="rounded-full bg-gold-soft px-2 py-1 text-[10px] font-extrabold tracking-[0.07em] whitespace-nowrap text-gold-ink uppercase">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm leading-[1.6] text-moss">{service.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-3 mb-24 grid items-center gap-12 rounded-[40px] bg-white p-6 sm:mx-6 sm:p-14 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <ParallaxPhoto
            image={photos.farmlandAerial}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-[300px] rounded-[28px] sm:h-[420px]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Farmer data intelligence</Eyebrow>
          <h2 className="font-display text-[clamp(30px,3.6vw,44px)] leading-[1.07] font-bold tracking-[-0.04em] text-balance">
            Ten seasons of reliability, finally written down
          </h2>
          <p className="mt-6 mb-7 text-[17px] leading-[1.65] text-moss">
            Every registration, delivery, purchase and payment builds a profile a lender can actually read. Nothing is
            shared without the farmer&rsquo;s consent, and every profile is held under Nigeria&rsquo;s data-protection
            requirements.
          </p>
          <ul className="flex flex-wrap gap-[9px]">
            {signals.map((signal) => (
              <li
                key={signal}
                className="cursor-default rounded-full border border-sand bg-cream px-[17px] py-[9px] text-[13.5px] font-semibold text-ink-soft transition duration-200 hover:-translate-y-0.5 hover:border-leaf hover:bg-leaf hover:text-white"
              >
                {signal}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[13px] text-stone">
            USSD and SMS delivered by Africa&rsquo;s Talking &middot; identity verification by Dojah
          </p>
        </Reveal>
      </section>
    </PageTransition>
  );
}
