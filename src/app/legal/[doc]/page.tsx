import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalNav } from "@/components/legal-nav";
import { Reveal } from "@/components/motion/reveal";
import { PageTransition } from "@/components/page-transition";
import { legalDocs, legalUpdated, site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ doc: doc.slug }));
}

function findDoc(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/legal/[doc]">): Promise<Metadata> {
  const doc = findDoc((await params).doc);
  return doc ? { title: doc.title, description: doc.intro } : {};
}

export default async function LegalPage({ params }: PageProps<"/legal/[doc]">) {
  const doc = findDoc((await params).doc);
  if (!doc) notFound();

  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 pt-16 sm:px-10 sm:pt-[72px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[60px] -right-[140px] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(242,176,30,0.18),transparent_68%)]"
        />
        <div className="relative max-w-[780px]">
          <div className="mb-[26px] inline-flex animate-rise items-center gap-[9px] rounded-full border border-sand bg-white px-3.5 py-[7px]">
            <span className="size-[7px] rounded-full bg-leaf" />
            <span className="text-[13px] font-semibold text-ink-soft">Legal and data protection</span>
          </div>
          <h1 className="animate-rise font-display text-[clamp(38px,5vw,64px)] leading-[1.02] font-bold tracking-[-0.04em] text-balance [animation-delay:80ms]">
            {doc.title}
          </h1>
          <p className="mt-6 max-w-[620px] animate-rise text-lg leading-[1.6] text-moss [animation-delay:160ms] sm:text-[19px]">
            {doc.intro}
          </p>
          <div className="mt-[22px] flex animate-rise flex-wrap gap-2.5 text-[12.5px] font-bold tracking-[0.06em] uppercase [animation-delay:240ms]">
            <span className="rounded-full bg-gold-soft px-[13px] py-[7px] text-gold-ink">Last updated {legalUpdated}</span>
            <span className="rounded-full bg-[#edf2ea] px-[13px] py-[7px] text-[#3b6b4a]">{doc.scope}</span>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-12 px-5 pt-12 pb-24 sm:px-10 lg:flex-row lg:items-start lg:gap-14">
        <aside className="lg:sticky lg:top-28 lg:w-[236px] lg:flex-none">
          <p className="mb-3.5 text-[11.5px] font-extrabold tracking-[0.14em] text-[#8e9a87] uppercase">Documents</p>
          <LegalNav />
          <div className="mt-[26px] rounded-[22px] border border-sand bg-white p-[22px]">
            <p className="mb-[9px] font-display text-[15px] font-semibold">Questions about your data?</p>
            <p className="text-sm leading-[1.65] text-moss">
              Write to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-leaf hover:text-leaf-deep">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-semibold text-leaf hover:text-leaf-deep">
                {site.phone}
              </a>
              . Farmers can also ask any field agent to raise a request on their behalf.
            </p>
          </div>
        </aside>

        <article className="max-w-[780px] min-w-0 flex-1">
          {doc.sections.map((section) => (
            <Reveal key={section.n}>
              <section className="flex flex-col gap-3 border-t border-sand py-8 sm:flex-row sm:gap-[26px]">
                <p className="w-[52px] flex-none pt-[3px] font-display text-[15px] font-bold tracking-[0.02em] text-gold">
                  {section.n}
                </p>
                <div className="min-w-0 flex-1">
                  <h2 className="mb-3.5 font-display text-[22px] leading-[1.2] font-semibold tracking-[-0.02em]">
                    {section.title}
                  </h2>
                  {section.paras.map((paragraph) => (
                    <p key={paragraph} className="mb-[13px] text-base leading-[1.72] text-moss">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-[13px] text-[15.5px] leading-[1.65] text-moss">
                          <span aria-hidden className="mt-[9px] size-1.5 flex-none rounded-full bg-leaf" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
          <div className="mt-[34px] rounded-3xl bg-ink px-7 py-[26px] text-[14.5px] leading-[1.7] text-mist-soft">
            {doc.foot}
          </div>
        </article>
      </div>
    </PageTransition>
  );
}
