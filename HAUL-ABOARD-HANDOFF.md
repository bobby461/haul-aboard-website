# Haul Aboard Junk Removal — build handoff

This site was cloned from the Junk Away (Delaware) codebase and rebuilt for
**Haul Aboard Junk Removal**, serving the Jacksonville Beaches. Same tech stack
you already know: **Next.js → Vercel**, with all editable copy in
`src/lib/content.ts`. Edit that file, push to GitHub, Vercel redeploys.

- **Domain:** haulaboardjunk.com   **Phone:** (904) 875-7183   **Email:** info@haulaboardjunk.com
- **Brand:** 1950s Florida marina / bait-shop. Navy `#0F2E4D`, orange `#F15A24`,
  salt cream `#F6E9D6`, seafoam `#8FB6B7`. Display font: Anton. Tagline: "We Haul It All!"

## What's built
- Homepage, About, FAQ, Contact, Prices, Reviews, Blog
- **18 service pages** (`/services/*`) — same set as Junk Away
- **6 service-area pages** (`/service-areas/*`): Jacksonville Beach, Neptune
  Beach, Atlantic Beach, Ponte Vedra Beach, Ponte Vedra, Nocatee — each with
  real neighborhoods and a tuned service mix
- **6 enriched service×city combo pages** (indexed) + the rest auto-noindexed
- **11 blog posts** rewritten for Jacksonville Beach
- LocalBusiness / Organization / Service / FAQ / Breadcrumb / Article JSON-LD,
  sitemap, robots, `llms.txt`, OG/Twitter tags

## Honesty decisions (important — please keep these true)
Haul Aboard is **brand-new with no reviews of its own**, so the site does **not**
claim any Haul Aboard rating, review count, or job count, and there is **no
AggregateRating schema** (fake review stars are a Google violation). Instead the
trust angle is the **owner-experience** one you picked: the site says the same
owner runs **Junk Away, Delaware's top-rated junk removal company (4.9★, 300+
reviews, 2,600+ jobs)** — always clearly attributed to the Delaware company. The
/reviews page shows real Junk Away DE reviews, each tagged "· Junk Away, DE",
under a header that spells out they're the sister company's. **When you collect
real Google reviews for Haul Aboard**, add them to `homepage.realReviews` (with
Florida details), then set `business.reviewRating`/`reviewCount` and re-enable
the AggregateRating block in `src/lib/schema.ts` (there's a comment marking the spot).

Pricing = the single **$199 flat-rate minimum**, and nothing else, exactly like
Junk Away.

## ⚠️ You need to do these before/after launch
1. **Photos.** I removed all the Junk Away photos (they showed the DE crew,
   trucks with Delaware signage, and a DE phone number — can't use those here).
   Every photo now shows a labeled gray placeholder telling you the exact path
   to drop a file at. Priority shots to take: a hero shot (`/public/images/hero/crew.jpeg`,
   wide ~3:2), a couple of service photos, and an About photo. Until then the
   branded navy placeholders look intentional. **Tip:** don't `sips -r` rotate
   phone photos (EXIF double-rotation bug); resize with `sharp().rotate()`.
2. **Real logo.** The nav currently uses a clean text wordmark. To use your
   brand-board logo, drop a transparent PNG at `/public/images/brand/logo.png`
   and swap the `.logo-wordmark` block in `src/components/Nav.tsx` back to a
   `next/image`. I generated stand-in `logo.png` + `og.png` + favicon for
   schema/social — replace with the real artwork when you have it.
3. **Google Business Profile.** Create it, then put the real URL in
   `business.googleBusinessUrl` (currently a search-link placeholder).
4. **Social URLs.** `business.instagramUrl` / `facebookUrl` are guesses — fix them.
5. **"Basement Cleanouts" service** — Florida homes are slab-built, so this
   Junk Away service barely applies here. I kept the page (you asked for the same
   services) but don't feature it locally. Consider swapping it for **"Storm &
   Hurricane Debris Removal"** (big FL demand, on-brand) — say the word and I'll
   convert it.
6. **Blog images** still reference old placeholder filenames in their frontmatter
   (`featuredImage`). Harmless (they show placeholders), but update the paths when
   you add real photos so the Article schema image URLs resolve.
7. **About page** has two `[ADD]` spots for your own Jacksonville story/photos.

## Deploy (same as Junk Away)
1. Create a new **private GitHub repo** and push this folder to it.
2. In Vercel, **New Project → import that repo** (framework auto-detects Next.js).
3. Add the domain **haulaboardjunk.com** in the Vercel project's Domains, then in
   **WordPress DNS** point the domain at Vercel (A `76.76.21.21` for the apex, or
   the CNAME Vercel shows). Serve one canonical version (bare vs www) at 200 and
   308-redirect the other — `business.domain` is set to the bare `haulaboardjunk.com`.
4. Optional env vars in Vercel: `NEXT_PUBLIC_GA_ID` (GA4), `NEXT_PUBLIC_GSC_VERIFICATION`,
   and the contact-form key (see `.env.local.example`).
5. Submit `https://haulaboardjunk.com/sitemap.xml` in Google Search Console.

Run locally: `npm run dev` → http://localhost:3000. Build check: `npm run build`.
