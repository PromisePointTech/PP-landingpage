import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="relative px-5 pt-24 pb-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-36 size-[440px] rounded-full bg-[radial-gradient(circle,rgba(242,176,30,0.2),transparent_68%)]"
      />
      <div className="relative max-w-[720px]">
        <p className="mb-5 animate-rise text-xs font-extrabold tracking-[0.18em] text-leaf uppercase">Page not found</p>
        <h1 className="animate-rise font-display text-[clamp(40px,5.4vw,72px)] leading-none font-bold tracking-[-0.045em] text-balance [animation-delay:80ms]">
          Nothing has been planted <span className="highlight">here yet</span>
        </h1>
        <p className="mt-8 max-w-[520px] animate-rise text-lg leading-[1.58] text-moss [animation-delay:160ms]">
          The page you were looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/ecosystem#contact" variant="outline">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
