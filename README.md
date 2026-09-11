# PP-landingpage

The public website for Promise Point General Trading Nigeria Limited, built from the **Final Version** design in `../Promise Point`.

## Stack

- Next.js 16 (App Router, Turbopack) and React 19
- Tailwind CSS v4 — design tokens live in `src/app/globals.css`
- `motion` for scroll reveals, count-ups and interactive pieces; `lucide-react` for icons

## Scripts

```bash
npm run dev     # local development on http://localhost:3000
npm run build   # production build (also type-checks)
npm run start   # serve the production build
npm run lint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | **All copy and data**: figures, products, partners, photos and alt text, and the four legal documents. Edit content here, not in the page files. |
| `src/app` | Routes: `/`, `/about`, `/agrifintech`, `/produce`, `/ecosystem`, `/legal/[doc]` (`privacy`, `terms`, `data-protection`, `complaints`), plus `not-found`, `sitemap.ts`, `robots.ts` and the share image. |
| `src/components` | Header, footer and the interactive pieces: hero phone, USSD code chip, photo gallery and lightbox, FAQ, steps and contact form. |
| `src/components/motion` | `Reveal` / `RevealGroup` scroll reveals and `CountUp`. |
| `public/images` | `brand`, `photos`, `products` and `platform/ussd-menu.png` (the farmer-facing USSD screen). |

## Things to know

- **No admin screens on the public site.** The internal dashboard is deliberately not shown. Anything in `public/` can be downloaded by anyone, so keep admin screenshots and personal data out of it.
- **Contact form.** There is no mail backend. Submitting opens the visitor's email app with the message addressed to `info@promisepointgtnl.com`. Wire it to a Route Handler or email service if you want in-page sending.
- **Figures are static.** The impact numbers (2,013 farmers, ₦15.6m, …) are hard-coded in `site.ts` with a "Last updated" date. They do not read from the admin.
- **Motion.** All animation respects the visitor's reduced-motion setting. Route changes cross-fade using React's `ViewTransition`.
