# How to Edit Haul Aboard Junk Removal

This guide is written for **you** — the business owner — not a developer. You don't need to know how to code to edit your site. Almost every visible piece of text, every photo, every phone number, and every page on the site can be changed by editing one of two things:

1. **One TypeScript file** — `src/lib/content.ts` — for everything text-based
2. **The `/public/images/` folder** — for every photo

When you save a change, push it to GitHub, Vercel automatically rebuilds and deploys your live site within ~60 seconds. You'll see your change live on `haulaboardjunk.com`.

---

## Table of Contents

1. [The deploy flow (read this first)](#the-deploy-flow-read-this-first)
2. [Change the phone number everywhere](#change-the-phone-number-everywhere)
3. [Update the review count or star rating](#update-the-review-count-or-star-rating)
4. [Update the jobs-completed counter](#update-the-jobs-completed-counter)
5. [Swap a photo](#swap-a-photo)
6. [Edit text on the homepage](#edit-text-on-the-homepage)
7. [Edit a service page](#edit-a-service-page)
8. [Edit a location page](#edit-a-location-page)
9. [Add a new service page](#add-a-new-service-page)
10. [Add a new location page](#add-a-new-location-page)
11. [How city × service combo pages auto-generate](#how-city--service-combo-pages-auto-generate)
12. [Publish a blog post](#publish-a-blog-post)
13. [Add or replace a customer testimonial](#add-or-replace-a-customer-testimonial)
14. [Set up Resend (the email service for the contact form)](#set-up-resend-the-email-service-for-the-contact-form)
15. [Set up the Google Sheets backup webhook (optional)](#set-up-the-google-sheets-backup-webhook-optional)
16. [Set up Google Analytics 4](#set-up-google-analytics-4)
17. [Verify the site in Google Search Console](#verify-the-site-in-google-search-console)
18. [Enable Cloudflare Turnstile (optional bot protection)](#enable-cloudflare-turnstile-optional-bot-protection)
19. [Replace the Elfsight reviews widget](#replace-the-elfsight-reviews-widget)
20. [Disable the Elfsight reviews widget](#disable-the-elfsight-reviews-widget)
21. [Run npm audit (monthly)](#run-npm-audit-monthly)

---

## The deploy flow (read this first)

Every edit follows the same 3 steps:

1. **Edit the file** (in GitHub's web editor, GitHub Desktop, or any code editor on your computer)
2. **Save and commit** the change with a short message like "Updated review count to 350"
3. **Push to GitHub**

That's it. Vercel watches your GitHub repo. Within a minute of pushing, your change is live on `haulaboardjunk.com`.

If you've never used GitHub before, the easiest path is the **github.com web editor**:

1. Go to your repo on github.com
2. Click the file you want to edit (e.g. `src/lib/content.ts`)
3. Click the pencil icon (top-right of the file)
4. Make your change
5. Scroll to the bottom, type a short commit message, click **Commit changes**

You can also undo any change by going to the **commits** view in GitHub and reverting it.

---

## Change the phone number everywhere

Open `src/lib/content.ts`. Near the top, find the `business` object:

```ts
export const business = {
  phone: "(904) 875-7183",
  phoneRaw: "3025321186",
  ...
};
```

Update both fields. `phone` is the display version (with parens, dash). `phoneRaw` is just the digits — it's used by the `tel:` links so phones dial correctly. **Keep both in sync.**

The phone number appears on every Call Now button, every footer, the contact page sidebar, the LocalBusiness schema markup, and form auto-replies.

---

## Update the review count or star rating

In `src/lib/content.ts`, in the same `business` object:

```ts
reviewCount: 300,
reviewRating: 4.9,
```

Bump these as your Google reviews grow. They show up in:

- The hero stat blocks ("300+ Verified Reviews")
- The reviews section eyebrow on the homepage and `/reviews` page
- The structured data Google reads (your Knowledge Panel rating)

**Tip:** keep the count rounded down (e.g. 350+ when you have 357) so it stays evergreen and never lies if you lose a single review.

---

## Update the jobs-completed counter

Same `business` object:

```ts
jobsCompleted: 2600,
```

Update this as you grow. It shows up in the third orange hero stat block ("2,600+ Jobs Completed").

---

## Swap a photo

Photos live in `/public/images/` organized by section:

- `/public/images/hero/` — homepage hero photo
- `/public/images/services/` — service-page heroes and banner photos
- `/public/images/locations/` — location-page heroes
- `/public/images/blog/` — blog post featured images
- `/public/images/brand/` — logo, watermark, etc.

To swap any photo:

1. **Resize first.** Hero photos: 1600–2400px wide, JPG or WebP, under 400 KB. Card photos: 1200px wide, under 200 KB. Use [Squoosh](https://squoosh.app) — it's free and lives in your browser.
2. **Match the existing filename.** If `content.ts` says `/images/services/hot-tub-removal-hero.jpg`, name your new file exactly `hot-tub-removal-hero.jpg`.
3. **Drop it in the matching folder** in your GitHub repo.
4. Push. Done.

If a photo's path doesn't yet have a file, the page shows a labeled gray placeholder ("REPLACE WITH YOUR PHOTO: …") instead of breaking.

To use a **different filename** instead of overwriting, edit `src/lib/content.ts` and change the `src:` path to point at your new file.

---

## Edit text on the homepage

In `src/lib/content.ts`, find the `homepage` object. Sections are clearly commented:

- `homepage.hero` — headline ("Haul that JUNK AWAY for good."), the three orange-stat-block contents, the lede ("A local crew that shows up..."), and the primary CTA labels
- `homepage.trustStrip` — the 6 items in the scrolling black bar (Licensed, Insured, etc.)
- `homepage.servicesPreview` — the 6 service cards in the "If it doesn't belong, it's gone." section
- `homepage.reviewsSection` — eyebrow + title for the reviews block
- `homepage.bigCta` — the orange "Ready when you are." section at the bottom

Each field has an inline comment explaining what it controls. Change the text, push, done.

---

## Edit a service page

In `src/lib/content.ts`, find the `services` array. Each entry has:

```ts
{
  slug: "hot-tub-removal",
  name: "Hot Tub & Spa Removal",
  navLabel: "Hot Tub Removal",  // shorter label for nav dropdowns
  h1: "Hot Tub Removal",
  h1Accent: "in Jacksonville Beach.",     // the orange-tinted part
  metaTitle: "Hot Tub Removal Jacksonville Beach | Haul Aboard",
  metaDescription: "...",
  heroPhoto: { src: "...", alt: "..." },
  heroLede: "Old hot tubs are heavy...",
}
```

The body content (the "What we handle" paragraphs, FAQ items, etc.) lives in a separate object further down in the same file: `serviceDetails`. Find your service's slug in there and edit any of:

- `whatWeHandle.paragraphs` — body copy on the left
- `whatWeHandle.includesList` — bullet list on the right (what we'll take)
- `banner.text` / `banner.textAccent` — big slogan over the photo banner ("We do the heavy lifting. **Literally.**")
- `howItWorks.steps` — the 3 numbered cards
- `pricing.paragraphs` — the dark pricing block paragraphs
- `related.slugs` — list of 3 other service slugs that show as photo cards at the bottom
- `faq.items` — array of `{ q, a }` pairs (the accordion at the bottom of the page)

---

## Edit a location page

Same pattern as service pages, but with the `locations` array and `locationDetails` map.

`locations` has the basic info (slug, name, hero photo, meta tags). `locationDetails` has the body content:

- `hero.lede` — the paragraph under the H1
- `hero.stats` — 3 numbers in the row (e.g. "300+ Local jobs done")
- `localIntro.paragraphs` — body copy on the left
- `localIntro.neighborhoods` (for towns) — the neighborhoods list on the right
- `localIntro.towns` (for counties) — town list with optional `slug` to link
- `servicesPreview.featuredSlugs` — exactly 6 service slugs to feature
- `testimonials.items` — 3 customer testimonials
- `otherAreas.slugs` — 6 other location slugs to link

---

## Add a new service page

Two steps:

1. **Add an entry** to the `services` array in `src/lib/content.ts`. Copy an existing one (like "hot-tub-removal") and adjust slug, name, photos, etc.
2. **Add a matching entry** in the `serviceDetails` object below, keyed by your new slug.

The new page automatically appears at `/services/your-new-slug`, in the Services nav dropdown, in the sitemap, and as a city × service combo page for every location (e.g. `/services/your-new-slug/wilmington`).

---

## Add a new location page

Same pattern with `locations` and `locationDetails`.

**Choose `kind: "town"` or `kind: "county"`** in the `locations` entry — that controls whether the page shows a Neighborhoods card or a "Towns we serve" list.

A new town/county appears at `/service-areas/your-slug`, in the Service Areas nav dropdown, in the sitemap, and combo pages auto-generate for every (service, your-new-location) pair.

---

## How city × service combo pages auto-generate

The site has dedicated SEO landing pages at URLs like:

- `/services/hot-tub-removal/wilmington`
- `/services/garage-cleanouts/middletown`
- `/services/scrap-metal-removal/dover`

You don't write these — they generate automatically from the `services` × `locations` cross-product. Every service page paired with every location page = one combo page. With 17 services × 14 locations, that's **238 combo pages**, each with a unique H1, meta title, breadcrumb, and Schema.org markup pointing at that specific (service, location) pair.

If you add a new service or new location to `content.ts`, the combo pages for that new entry generate automatically next deploy.

---

## Publish a blog post

Blog posts live in `/content/blog/` as plain Markdown files. Each one is a separate `.md` file.

To publish a new post:

1. **Create a new file** in `/content/blog/` named `your-post-slug.md` (lowercase, hyphens, no spaces). The slug becomes the URL: `/blog/your-post-slug`.
2. **Add frontmatter at the top** (the metadata between `---` lines):

```md
---
title: "How Much Does Junk Removal Cost in Jacksonville Beach?"
slug: "how-much-does-junk-removal-cost-in-delaware"
date: "2026-05-15"
excerpt: "A short 1-2 sentence summary that appears on the blog index."
featuredImage: "/images/blog/your-post-image.jpg"
metaTitle: "Junk Removal Cost Jacksonville Beach | Haul Aboard"
metaDescription: "Tag-line for Google search results, ~150 chars."
author: "Haul Aboard Team"
---

# Your post title

Your body content goes here, in Markdown.

## A subheading

A paragraph with a [link](/services/hot-tub-removal) and **bold** text.

- Bullet
- Bullet

> A blockquote
```

3. **Drop your featured image** at the path you specified in `featuredImage`.
4. Push to GitHub. The post appears at `/blog/your-post-slug` and on the `/blog` index automatically.

To **edit** an existing post: open the `.md` file in `/content/blog/`, change the body or frontmatter, push.

To **unpublish** a post: delete or rename the `.md` file (rename to e.g. `old-post.draft.md` so it's still in the repo but not picked up by the blog system, which only reads `.md` files).

---

## Add or replace a customer testimonial

Testimonials live on each location page in `locationDetails[slug].testimonials.items`. Each item is:

```ts
{
  rating: 5,
  quote: "Showed up on time, gave me a fair price, and...",
  name: "Sarah M.",
  details: "Trolley Square · Garage Cleanout",
}
```

To replace a placeholder:

1. Find the location's testimonial array in `src/lib/content.ts`
2. Replace the `[REPLACE WITH REAL REVIEW]` quote with the actual review text
3. Update `name` and `details` (neighborhood + service name)
4. Push. Done.

Tip: keep first names + last initial (e.g. "Sarah M.") for privacy, even if they left a full name on Google.

---

## Set up Resend (the email service for the contact form)

The contact form needs Resend wired up to actually send emails. Until you do this step, form submissions are received and validated but no email goes out (the lead is logged but you'd never see it). **Required for production.**

10-minute setup:

### 1. Sign up at Resend

1. Go to https://resend.com → **Sign up** (free tier covers 3,000 emails/month, plenty for a small business).
2. Verify your email.

### 2. Verify your domain

1. In Resend dashboard → **Domains** → **Add Domain** → enter `haulaboardjunk.com`.
2. Resend gives you 3 DNS records (TXT + 2 CNAMEs). Copy them.
3. Log in to wherever your domain DNS is (Cloudflare, GoDaddy, Namecheap, etc.) and add those 3 records.
4. Back in Resend, click **Verify**. Takes 5–60 minutes for DNS propagation.

Once verified, you can send from any `@haulaboardjunk.com` address. The site is configured to send from `forms@haulaboardjunk.com` to `info@haulaboardjunk.com`.

### 3. Generate an API key

1. Resend dashboard → **API Keys** → **Create API Key** → name it "junkawaydelaware production" → permissions "Full access" (or "Sending only" if you prefer) → **Add**.
2. **Copy the key immediately** — Resend only shows it once.

### 4. Add the key to Vercel

1. Go to vercel.com → your `haul-aboard-website` project → **Settings** → **Environment Variables**.
2. Add a variable: name `RESEND_API_KEY`, value the key you copied. Apply to **Production**, **Preview**, and **Development**.
3. Click **Save**.
4. Redeploy: **Deployments** tab → top deployment → **... menu** → **Redeploy**. (Or push any commit — that auto-deploys.)

That's it. Form submissions now email `info@haulaboardjunk.com`.

---

## Set up the Google Sheets backup webhook (optional)

Optional, but nice — every form submission also gets logged to a Google Sheet so you have a permanent record even if email ever has hiccups.

1. **Create a new Google Sheet**, name it "Haul Aboard Leads" or whatever.
2. Add header row in row 1: `Timestamp | Name | Phone | Email | Address | Service | Description`.
3. **Extensions** → **Apps Script**. Paste this code (replace `YOUR_SHEET_ID` with the long string in the URL of your sheet — `docs.google.com/spreadsheets/d/THIS-PART/edit`):

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  sheet.appendRow([
    data.submittedAt,
    data.name,
    data.phone,
    data.email,
    data.address,
    data.service,
    data.description,
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Deploy** → **New Deployment** → **Web App** → Execute as: **Me** → Who has access: **Anyone** → **Deploy**.
5. Copy the Web app URL it gives you.
6. In Vercel: add env var `SHEETS_WEBHOOK_URL` with that URL. Redeploy.

Done. Every form submission now appends a row to your sheet.

If you ever want to disable this, just remove the env var.

---

## Set up Google Analytics 4

To track visitors, page views, form submissions, and CTA clicks:

1. Go to https://analytics.google.com → admin → create a new property for `haulaboardjunk.com`.
2. Set up a **Web Stream** for `haulaboardjunk.com`.
3. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
4. In Vercel: add env var `NEXT_PUBLIC_GA_ID` with that ID. Redeploy.

Done. GA4 starts tracking immediately. Without this env var set, no analytics tags load (no privacy footprint, no script weight).

The site already has `data-cta="..."` attributes on every CTA so you can track conversion clicks in GA4 → set up custom events for elements with those data attributes.

---

## Verify the site in Google Search Console

So Google indexes your pages and you can see search performance:

1. https://search.google.com/search-console → **Add property** → URL prefix → `https://haulaboardjunk.com`.
2. Choose **HTML tag** verification method.
3. Google gives you a string like `content="abc123..."`.
4. In Vercel: add env var `NEXT_PUBLIC_GSC_VERIFICATION` with **just the value** (the `abc123...` part, not the whole tag). Redeploy.
5. Back in Search Console, click **Verify**.

Once verified:
- **Sitemaps** menu → submit `https://haulaboardjunk.com/sitemap.xml`
- It auto-includes every page, location, service, combo, and blog post

You'll start seeing search performance data within ~3 days, and pages will start appearing in Google search ~1–7 days after that.

---

## Enable Cloudflare Turnstile (optional bot protection)

The contact form already has a honeypot trap and rate limiting, which catch most bots. Turnstile adds an invisible CAPTCHA — recommended only if you start getting spam through the form.

1. Cloudflare account → **Turnstile** → **Add site** → enter `haulaboardjunk.com`.
2. Choose **Invisible** widget type.
3. Copy the **Site Key** (public) and **Secret Key** (server-only).
4. In Vercel:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = your site key
   - `TURNSTILE_SECRET_KEY` = your secret key
5. Redeploy.

(Note: enabling Turnstile requires a small code change to wire it into the form — until then, just having the env vars set is harmless.)

---

## Replace the Elfsight reviews widget

If you ever change Elfsight widgets or switch to a different one:

1. Get the new widget's app ID (the long hex string in the embed code's class name, like `fb580886-a333-4bc3-aa24-6f200807df6a`).
2. Open `src/lib/content.ts`, find:

```ts
elfsightAppId: "fb580886-a333-4bc3-aa24-6f200807df6a",
```

3. Replace with your new app ID.
4. Push.

The widget appears on the homepage reviews section AND the `/reviews` page (same data source).

---

## Disable the Elfsight reviews widget

If Elfsight is ever compromised, paused, or you want to drop them entirely:

1. Open `src/app/layout.tsx`.
2. Comment out or delete this line:

```html
<script src="https://elfsightcdn.com/platform.js" async />
```

3. Push.

The widget container becomes empty, and the built-in fallback ("See every review on Google → click here") takes over. No broken page, no dangling script.

To re-enable: uncomment the script tag.

---

## Run npm audit (monthly)

Once a month, check for security updates in your dependencies:

```bash
npm audit
```

If anything **high** or **critical** appears, update it:

```bash
npm audit fix
```

Or for breaking changes:

```bash
npm audit fix --force
```

Test locally first (`npm run dev` and click around), then push to deploy. Moderate findings are usually fine to defer.

---

## Anything I forgot?

If something on the site needs to change and the answer isn't in this guide, the rule is simple:

- **Text or numbers** → search `src/lib/content.ts` for the existing wording, change it
- **Photos** → drop a new file in the matching `/public/images/` subfolder
- **Visual style (colors, fonts, sizes)** → those live in `src/app/globals.css` — show me the change you want and I'll update it
- **A new page** → tell me; some pages need both data and a new route file

When in doubt, ask. There are no dumb questions.
