import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { legalDocs, logo, mainNav, photos, site } from "@/content/site";

type FooterLink = { href: string; label: string };

const resources: FooterLink[] = [
  { href: site.foodSafetyPolicyUrl, label: "Food Safety Policy (PDF)" },
  { href: "/produce", label: "Product specifications" },
  { href: "/legal/complaints", label: "Farmer support" },
];

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <p className="mb-[18px] text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-gold">{title}</p>
      <ul className="flex flex-col gap-3 text-[14.5px]">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          const className =
            "group inline-flex items-center gap-1 text-[#c3d8c9] transition-colors duration-200 hover:text-white";
          const label = (
            <>
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                {link.label}
              </span>
              {external && <ArrowUpRight aria-hidden className="size-3.5 opacity-60" />}
            </>
          );
          return (
            <li key={link.href}>
              {external ? (
                <a href={link.href} className={className}>
                  {label}
                </a>
              ) : (
                <Link href={link.href} className={className}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <section className="relative mx-3 mb-3 overflow-hidden rounded-[40px] bg-leaf sm:mx-6 sm:mb-6">
        <Image
          src={photos.processingTeam.src}
          alt=""
          fill
          sizes="(min-width: 1440px) 1392px, 100vw"
          className="object-cover opacity-[0.13]"
        />
        <Reveal className="relative px-6 py-20 text-center sm:px-14 sm:py-[86px]">
          <h2 className="mx-auto mb-[18px] max-w-[760px] font-display text-[clamp(34px,4.4vw,56px)] font-bold leading-[1.03] tracking-[-0.04em] text-balance text-white">
            Build the future of agriculture with us
          </h2>
          <p className="mx-auto mb-9 max-w-[500px] text-lg leading-[1.6] text-mist-soft">
            Whether you farm, buy, lend or fund, there is a way in.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="/agrifintech#register" variant="gold">
              Register as a farmer
            </ButtonLink>
            <ButtonLink href="/produce" variant="glass">
              Buy from Promise Point
            </ButtonLink>
            <ButtonLink href="/ecosystem#contact" variant="glass">
              Speak with our team
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <div className="mx-3 mb-3 rounded-[40px] bg-ink px-6 pt-16 text-white sm:mx-6 sm:mb-6 sm:px-10">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Promise Point home"
              className="mb-5 inline-flex rounded-xl bg-white px-2.5 py-1.5 transition-transform duration-200 hover:-rotate-2"
            >
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 w-auto" />
            </Link>
            <p className="mb-3 text-[14.5px] font-bold">{site.legalName}</p>
            <address className="text-sm leading-[1.75] text-mist-dim not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3.5 text-sm leading-[1.75] text-mist-dim">
              <a href={site.phoneHref} className="block transition-colors hover:text-white">
                {site.phone}
              </a>
              <a href={site.voiceLineHref} className="block transition-colors hover:text-white">
                AI voice line: {site.voiceLine}
              </a>
              <a href={`mailto:${site.email}`} className="text-gold transition-colors hover:text-white">
                {site.email}
              </a>
            </p>
          </div>
          <FooterColumn title="Explore" links={mainNav} />
          <FooterColumn title="Resources" links={resources} />
          <FooterColumn
            title="Legal"
            links={legalDocs.map((doc) => ({ href: `/legal/${doc.slug}`, label: doc.label }))}
          />
        </div>

        <p
          aria-hidden
          className="select-none overflow-hidden whitespace-nowrap font-display text-[clamp(48px,9vw,118px)] font-bold leading-[0.9] tracking-[-0.05em] text-white/[0.07]"
        >
          Promise Point
        </p>

        <div className="mt-3 flex flex-wrap items-start justify-between gap-10 border-t border-white/10 pt-7 pb-8">
          <p className="max-w-[820px] text-[12.5px] leading-[1.65] text-mist-faint">{site.disclaimer}</p>
          <p className="whitespace-nowrap text-[12.5px] text-mist-faint">
            &copy; {new Date().getFullYear()} {site.shortLegalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
