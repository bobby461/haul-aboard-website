# Haul Aboard Junk Removal

Marketing site for [haulaboardjunk.com](https://haulaboardjunk.com) — locally owned junk removal across the Jacksonville Beaches.

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript, React 18.3)
- **Tailwind CSS** (utility classes only — brand styles live in `globals.css` as CSS custom properties)
- **next/font** for self-hosted Bebas Neue / Barlow Condensed / Barlow
- **lucide-react** for icons
- **gray-matter + marked** for blog markdown rendering
- **@next/third-parties** for Google Analytics 4 (loads only if `NEXT_PUBLIC_GA_ID` is set)
- **Resend** for transactional email (the contact form)
- **Hosted on Vercel**

## Architecture in one paragraph

All editable content (every text string, every image path, every phone number, every service description, every location's neighborhoods, every blog post slug) lives in **one file**: `src/lib/content.ts`. Pages import from it. Adding a new service or location to that file generates a new page automatically — including its corresponding city × service combo pages — at the next build, with zero code changes elsewhere.

This means the site has 274 statically-generated pages from a single 4,000-line content file.

## Quick start

```bash
npm install
cp .env.local.example .env.local      # then fill in keys
npm run dev                           # http://localhost:3000
npm run build                         # production build
npm run audit                         # check vulnerabilities (high+critical only)
```

## Deploy

Push to GitHub. Vercel deploys automatically. See [MIGRATION.md](./MIGRATION.md) for the first-time deploy walkthrough.

## Editing content

Non-developers: read [HOW-TO-EDIT.md](./HOW-TO-EDIT.md) — it covers every common edit (phone number, photos, services, locations, blog posts, testimonials, third-party integrations).

## Security

See [SECURITY.md](./SECURITY.md). Quick highlights:

- Strict CSP, HSTS, X-Frame-Options, Permissions-Policy in `next.config.mjs`
- Form: server-side validation + sanitization + rate limiting (5/IP/hr) + honeypot
- No database, no admin login, no user accounts — entire content layer is editable TypeScript files
- All secrets in `.env.local` (gitignored) + Vercel env vars
- Audit log: [SECURITY-AUDIT.md](./SECURITY-AUDIT.md)

## SEO

- Auto-generated sitemap.xml (`src/app/sitemap.ts`) covers every static, service, location, combo, and blog page
- Auto-generated robots.txt (`src/app/robots.ts`) — production allows all, preview deploys are noindex
- JSON-LD schema markup on every page type:
  - LocalBusiness + Organization on the homepage
  - Service + BreadcrumbList + FAQPage on each service page
  - Service (with location) + BreadcrumbList + FAQPage on each city × service combo page
  - Article + BreadcrumbList on each blog post
  - FAQPage + BreadcrumbList on the FAQ page
- 238 hyper-local city × service combo pages — the brief calls them "the franchise killer." Auto-generated, no per-combo code.
- See [BACKLINKS-CHECKLIST.md](./BACKLINKS-CHECKLIST.md) for off-site SEO actions.

## Content data file structure

`src/lib/content.ts` is organized top-to-bottom in this order. Every section has clear headers and inline comments:

1. `business` — phone, email, hours, social URLs, review count, geo coords
2. `navigation` — top-nav links
3. `homepage` — hero, trust strip, services grid, reviews, big CTA
4. `services[]` — array of 17 services (basic info)
5. `locations[]` — array of 14 locations (basic info)
6. `aboutPage`, `servicesIndexPage`, `serviceAreasIndexPage`, `faqPage`, `contactPage`, `reviewsPage`, `blogIndexPage` — index/landing page copy
7. `serviceDetails` — body content for each service page (paragraphs, FAQ, etc.), keyed by slug
8. `locationDetails` — body content for each location page, keyed by slug
9. Tiny helper functions at the bottom

## Routes

| Route | Type | Source |
|---|---|---|
| `/` | static | `src/app/page.tsx` |
| `/services` | static index | `src/app/services/page.tsx` |
| `/services/[slug]` | SSG ×17 | `src/app/services/[slug]/page.tsx` |
| `/services/[slug]/[location]` | SSG ×238 | `src/app/services/[slug]/[location]/page.tsx` |
| `/service-areas` | static index | `src/app/service-areas/page.tsx` |
| `/service-areas/[slug]` | SSG ×14 | `src/app/service-areas/[slug]/page.tsx` |
| `/about` | static | `src/app/about/page.tsx` |
| `/faq` | static | `src/app/faq/page.tsx` |
| `/contact` | static | `src/app/contact/page.tsx` |
| `/reviews` | static | `src/app/reviews/page.tsx` |
| `/blog` | static index | `src/app/blog/page.tsx` |
| `/blog/[slug]` | SSG ×N | `src/app/blog/[slug]/page.tsx` |
| `/api/contact` | dynamic (POST) | `src/app/api/contact/route.ts` |
| `/sitemap.xml` | static | `src/app/sitemap.ts` |
| `/robots.txt` | static | `src/app/robots.ts` |

## Component layout

```
src/components/
├── Nav.tsx                      # Top nav with desktop dropdowns + mobile collapsibles
├── Footer.tsx                   # Site footer
├── Hero.tsx                     # Homepage hero
├── TrustStrip.tsx               # Black scrolling marquee
├── ServicesPreview.tsx          # 6 service cards on the homepage
├── ReviewsSection.tsx           # Homepage reviews section + Elfsight + fallback
├── BigCta.tsx                   # Orange "Ready when you are." CTA block
├── PageHero.tsx                 # Compact hero for service/location/blog/about pages
├── ServicePageSections.tsx      # WhatWeHandle, PhotoBanner, HowItWorks, Pricing, Related, Faq
├── LocationPageSections.tsx     # LocalIntro, LocationServices, Testimonials, OtherAreas
├── FaqAccordion.tsx             # Expandable FAQ list
├── ContactForm.tsx              # /contact form
└── SeoImage.tsx                 # next/image wrapper with placeholder fallback
```

## Scripts

```bash
npm run dev      # development server (Turbopack)
npm run build    # production build (prerenders all static pages)
npm run start    # serve production build locally
npm run lint     # next lint
npm run audit    # npm audit, fails on high+critical
```

## Performance targets

- Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO
- All images via `next/image` (WebP/AVIF auto, responsive `sizes`)
- Fonts via `next/font` with `display: swap`
- Single CSS bundle, no client-side JS frameworks beyond React + a tiny FAQ accordion + the form
- Elfsight + GA scripts load conditionally (Elfsight always, GA only if env var set)

## License

Proprietary — © Haul Aboard Junk Removal LLC.
