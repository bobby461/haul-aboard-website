// ============================================================
// JUNK AWAY — CONTENT FILE
// ------------------------------------------------------------
// This is the single source of truth for every editable piece
// of text, image path, and number on the live website.
//
// Edit anything in this file, save it, push to GitHub, and
// Vercel will redeploy automatically.
//
// Don't edit code anywhere else for normal copy changes —
// everything you need is here.
// ============================================================

// ============================================================
// BUSINESS DETAILS
// Phone, email, hours, social links, review counts.
// These values are pulled into the hero, the nav button,
// every footer, every page's structured data, and form replies.
// ============================================================
export const business = {
  // Display phone (used on every "Call Now" button and the footer)
  phone: "(904) 875-7183",
  // Raw digits for tel: links — keep matching `phone` above
  phoneRaw: "9048757183",

  // Email — used in footer and form auto-replies
  email: "info@haulaboardjunk.com",

  // Tagline — the brand line from the mascot board.
  tagline: "We Haul It All!",

  // The canonical domain (no https://) — used for canonical tags, the
  // sitemap, robots.txt, llms.txt, and all structured data.
  //
  // KEEP THIS AS THE BARE (non-www) DOMAIN. Whichever version (bare vs www)
  // you set here, make sure Vercel serves that one at 200 and 308-redirects
  // the other to it, and that the Search Console property matches. Mixing
  // them splits indexing and makes GSC reject sitemap URLs as out-of-property.
  domain: "haulaboardjunk.com",

  // Year the business was founded (used in About copy + schema).
  // Haul Aboard is brand-new — launched 2026.
  yearEstablished: 2026,

  // ---------- Sister-company track record ----------
  // Haul Aboard is run by the same owner as Junk Away, the top-rated junk
  // removal company in Delaware. Haul Aboard itself is brand-new and has NO
  // reviews of its own yet, so these numbers are ONLY ever shown with clear
  // "at our Delaware company, Junk Away" attribution (reviews section + About)
  // — never presented as Haul Aboard's own rating, and never put into
  // AggregateRating schema. Once Haul Aboard collects real Google reviews,
  // add a separate `reviewCount` / `reviewRating` and wire the schema.
  sister: {
    name: "Junk Away",
    region: "Delaware",
    url: "https://junkawaydelaware.com",
    reviewRating: 4.9,
    reviewCount: 300,
    jobsCompleted: 2600,
  },

  // ---------- Hours ----------
  hours: {
    weekdays: "Mon–Fri 7am–7pm",
    saturday: "Sat 7am–3pm",
    sunday: "Closed Sunday",
  },

  // ---------- External links ----------
  // Drives the "Read our reviews on Google" CTA, the Get Directions link on
  // the contact page, and footer social icons. TODO(Bobby): replace with the
  // real Haul Aboard Google Business Profile + social URLs once created.
  googleBusinessUrl: "https://www.google.com/search?q=Haul+Aboard+Junk+Removal+Jacksonville+Beach",
  instagramUrl: "https://www.instagram.com/haulaboardjunk",
  facebookUrl: "https://www.facebook.com/haulaboardjunk",

  // ---------- Pricing ----------
  // Lowest dollar amount we'll quote. Mentioned in pricing copy
  // and used by the JSON-LD schema (priceRange). One published number only.
  minimumPrice: 199,

  // Geo coords for LocalBusiness schema — Jacksonville Beach, FL
  geo: { lat: 30.2947, lng: -81.3931 },

  // Plain-English service area — appears in schema and footer
  serviceArea:
    "From Atlantic Beach and Neptune Beach down through Jacksonville Beach to Ponte Vedra Beach, Ponte Vedra and Nocatee — we serve the Jacksonville Beaches and the St. Johns County coast.",
} as const;

// ============================================================
// NAVIGATION
// Top-level desktop links. Service / Service Areas / Resources
// are rendered as dropdowns and auto-populated from the
// `services` and `locations` arrays below — you don't edit them
// here unless you want to change the link order.
// ============================================================
export const navigation = {
  primary: [
    { label: "Services", href: "/services", dropdown: "services" as const },
    {
      label: "Service Areas",
      href: "/service-areas",
      dropdown: "locations" as const,
    },
    { label: "Resources", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

// ============================================================
// HOMEPAGE
// Every block on the homepage maps to a section below.
// ============================================================
export const homepage = {
  // ---------- Hero (top of page) ----------
  // Poster-style hero straight off the brand board: the "We Haul It All!"
  // slogan IS the headline, with the mascot to the right, honest trust
  // badges, a service-icon row, and the orange "serving" bar underneath.
  hero: {
    eyebrow: "Serving the Jacksonville Beaches",
    headline1: "We Haul",
    headline2: "It All!",

    // Mascot illustration slot (brand-board "fishing for junk" pose). Drop a
    // transparent PNG here and it replaces the labeled placeholder.
    mascot: {
      src: "/images/brand/mascot-hero.png",
      alt: "Haul Aboard mascot reeling in junk with a fishing rod",
    },

    lede:
      "Locally owned junk removal for Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra & Nocatee. Same-day service, one flat price, and a crew that treats your place like our own.",

    // Honest trust badges (no invented reviews).
    badges: [
      "Licensed & Insured",
      "Same-Day Service",
      "Free On-Site Estimates",
      "$199 Flat-Rate Minimum",
    ],

    primaryCtaLabel: "Get My Free Estimate",
    primaryCtaSubLabel: "Book in 60 seconds",
    metaPhoneLabel: "Call us direct",
    metaPhoneSub: "Mon–Fri 7–7 · Sat 7–3",

    // Orange service-icon row (like the brand-board social post).
    serviceRow: [
      { label: "Junk Removal", icon: "trash" as const, href: "/services" },
      { label: "Cleanouts", icon: "box" as const, href: "/services/estate-cleanouts" },
      { label: "Appliances", icon: "washer" as const, href: "/services/appliance-removal" },
      { label: "Furniture & More", icon: "couch" as const, href: "/services/furniture-and-mattress-removal" },
    ],
    servingBar: "Serving Jacksonville Beach & Surrounding Areas",
  },

  // ---------- Trust strip ----------
  // The black scrolling bar with orange Lucide icons. The 6 items
  // loop seamlessly. To add or remove, just edit this array — the
  // component duplicates them for the marquee automatically.
  trustStrip: [
    { icon: "shield-check" as const, big: "Licensed", small: "& Bonded" },
    {
      icon: "shield" as const,
      big: "Fully Insured",
      small: "Workers comp + liability",
    },
    {
      icon: "clock" as const,
      big: "Same-Day Service",
      small: "Available 6 days a week",
    },
    {
      icon: "badge-dollar" as const,
      big: "Free Estimates",
      small: "No hidden fees",
    },
    {
      icon: "home" as const,
      big: "Local Crew",
      small: "Jacksonville Beach locally owned",
    },
    {
      icon: "calendar-check" as const,
      big: "Book Anytime",
      small: "7 days a week online",
    },
  ],

  // ---------- Services preview (6 cards) ----------
  // These cards link to the full service pages. Each `linkSlug`
  // must match a `slug` in the `services` array further down.
  servicesPreview: {
    eyebrow: "What we haul",
    title: "If it doesn't belong, ",
    titleAccent: "it's gone.",
    cards: [
      {
        num: "01",
        name: "Garage\n& Attic",
        desc: "Years of stuff, gone in an afternoon. We do the lifting, you point and direct.",
        linkSlug: "garage-cleanouts",
        photo: "/images/services/garage-attic.jpg",
        alt: "Cluttered garage being cleaned out",
      },
      {
        num: "02",
        name: "Furniture\n& Appliances",
        desc: "Couches, fridges, hot tubs. If two guys can carry it, we can take it.",
        linkSlug: "furniture-and-mattress-removal",
        photo: "/images/services/furniture-appliances.jpg",
        alt: "Old couch being loaded into a Haul Aboard truck",
      },
      {
        num: "03",
        name: "Estate\nCleanouts",
        desc: "Patient, respectful, thorough. We've helped families through the hard parts.",
        linkSlug: "estate-cleanouts",
        photo: "/images/services/estate-cleanouts.jpg",
        alt: "Estate cleanout in progress, boxes stacked neatly",
      },
      {
        num: "04",
        name: "Construction\nDebris",
        desc: "Drywall, flooring, demo waste. Keep your crew on the job, we'll handle the haul.",
        linkSlug: "construction-debris-removal",
        photo: "/images/services/construction-debris.jpg",
        alt: "Construction debris pile next to a renovation site",
      },
      {
        num: "05",
        name: "Yard\nWaste",
        desc: "Brush, branches, that pile from last fall. Cleared and gone.",
        linkSlug: "yard-waste-removal",
        photo: "/images/services/yard-waste.jpg",
        alt: "Yard waste and tree branches piled in a Jacksonville Beach backyard",
      },
      {
        num: "06",
        name: "If it's\njunk, ask.",
        desc: "Don't see it on the list? Send a photo. We'll quote it the same day.",
        linkSlug: null,
        ctaLabel: "Get an estimate",
        photo: "/images/services/anything-else.jpg",
        alt: "Haul Aboard crew loading miscellaneous items into the truck",
      },
    ],
  },

  // ---------- Reviews section ----------
  // The homepage shows the first 3 from `realReviews`. The /reviews
  // page shows all of them. We moved off the Elfsight widget on
  // 2026-05-21 — it broke too often (widget IDs going stale, CSP
  // hiccups, free-tier view limits) — and the reviews below are
  // copied verbatim from Bobby's Google Business profile so they
  // also get indexed by Google for SEO. Add new ones to the top of
  // `realReviews` whenever Haul Aboard collects a noteworthy review.
  reviewsSection: {
    // HONESTY: Haul Aboard is brand-new and has NO reviews of its own yet.
    // Everything below is a REAL 5-star Google review of Junk Away — the
    // same owner's top-rated Delaware junk removal company — shown here as
    // our track record and clearly attributed on every card ("· Junk Away,
    // DE"). Do NOT relabel these as Haul Aboard / Florida reviews. When Haul
    // Aboard collects its own Google reviews, add them to the TOP of this
    // list with Florida details and update the section copy.
    eyebrow: "New here — but not new to this",
    title: "The same crew standards, ",
    titleAccent: "now at the Beaches.",
    titleAfter: "",
    intro:
      "Haul Aboard just launched in Jacksonville Beach, so we haven't collected local reviews yet. But this isn't our first rodeo: our owner also runs Junk Away, the top-rated junk removal company in Delaware. Here's what their customers say — the exact standard we're bringing to Jax Beach.",
    ctaLabel: "See Junk Away's reviews on Google →",
  },

  // REAL 5-star Google reviews of Junk Away (Delaware) — the owner's sister
  // company. Each card is clearly tagged "· Junk Away, DE" so nothing is
  // passed off as a Haul Aboard / Florida review. Quotes are verbatim.
  realReviews: [
    {
      rating: 5,
      quote:
        "Junk Away removed a gazebo damaged by a snow storm at my father's property — and they didn't stop there. They also cleared the remaining snow off the deck without being asked. Bobby was professional and personable from the first call. So happy I found them!",
      name: "Cathy C.",
      details: "Gazebo Removal · Newark · Junk Away, DE",
    },
    {
      rating: 5,
      quote:
        "Extremely friendly, professional, and efficient. They removed my junk — and I had a ton — the same day I called, at a more than reasonable price. Not only did they save my back, they saved me time. Can't thank them enough!",
      name: "Brandon E.",
      details: "Same-Day Junk Removal · Smyrna · Junk Away, DE",
    },
    {
      rating: 5,
      quote:
        "Quick, kind, professional, phenomenal. I'm so happy I came across this wonderful business. They've made my life easier these last few years — my parents are older and can't do as much, and Bobby and his crew are always one phone call away.",
      name: "Britt T.",
      details: "Junk Removal · Middletown · Junk Away, DE",
    },
    {
      rating: 5,
      quote:
        "Shawn and Brian did a great job removing my 20-year-old hot tub. Speedy and complete cleanup. I'll definitely call them again for junk removal.",
      name: "Joseph R.",
      details: "Hot Tub Removal · Wilmington · Junk Away, DE",
    },
    {
      rating: 5,
      quote:
        "What an amazing group. Called in the morning and Bobby had one of his team out the same day to take a look. They gave a reasonable estimate and got right to work. Most definitely the best around.",
      name: "Karl P.",
      details: "Furniture Removal · Wilmington · Junk Away, DE",
    },
    {
      rating: 5,
      quote:
        "Responded quickly, arrived on time, and came fully ready to work. Handled everything I needed removed — broken sofa and loveseat, mattresses, twin beds, dressers. A locally owned business that's kind, professional, and fast. Can't recommend them enough.",
      name: "Sarah D.",
      details: "Apartment Cleanout · Delaware · Junk Away, DE",
    },
  ],

  // ---------- Jacksonville Beach copy + internal links block ----------
  // Sits above the big CTA. Two jobs:
  //  1. Work the "almost page-1" keywords into real homepage body copy
  //     naturally (junk removal delaware / delaware junk removal /
  //     junk removal de / junk haulers / haul away junk / same-day /
  //     this afternoon) — these rank 5-9 and need reinforcement.
  //  2. Give the homepage descriptive, keyword-rich internal links down
  //     to the service and city pages (93% of clicks land here, so this
  //     is where link equity should be pushed from).
  seoLinks: {
    eyebrow: "Serving the Jacksonville Beaches",
    title: "Junk removal at the Beaches, ",
    titleAccent: "done right.",
    paragraphs: [
      "Haul Aboard is a locally owned junk removal company serving Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra, Ponte Vedra Beach and Nocatee. We're the junk haulers your neighbors call to clear out a garage, a condo, a rental turnover, or an entire estate — furniture, appliances, hot tubs, construction debris, the works. Licensed, insured, and locally owned.",
      "Need it gone today? Same-day junk removal is available six days a week across the Beaches — if you're looking for junk removal this afternoon, call us in the morning and we'll do our best to fit you in. Every estimate is free and on-site, and you get a flat price before we start. No surprises, no hidden fees.",
    ],
    servicesHeading: "Popular services",
    areasHeading: "Where we work",
  },

  // ---------- Big orange CTA at bottom of page ----------
  bigCta: {
    pre: "Free, no-obligation estimates",
    huge: "Ready when\nyou are.",
    primaryLabel: "Get My Free Estimate →",
    secondaryLabel: "Call (904) 875-7183",
  },
} as const;

// ============================================================
// SERVICES
// One entry per service page. The `slug` is the URL segment
// (e.g. "/services/hot-tub-removal"). Add a new service by
// adding an object to this array — the route, sitemap entry,
// nav dropdown link, and city+service combo pages all
// auto-generate.
//
// Note: this is the skeleton with names, slugs, and SEO-ready
// placeholder copy. Body copy for each service page is filled
// in alongside the service-page template (phase 2 of the build).
// ============================================================
export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  // Hero
  h1: string;
  h1Accent: string;
  metaTitle: string;
  metaDescription: string;
  heroPhoto: { src: string; alt: string; focal?: string };
  heroLede: string;
};

export const services: Service[] = [
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    navLabel: "Appliance Removal",
    h1: "Appliance Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Appliance Removal in Jacksonville Beach — Same-Day Service",
    metaDescription:
      "Fridge, stove, washer, dryer & AC removal across the Beaches. Same-day service, free on-site estimates, licensed & insured — call Haul Aboard today.",
    heroPhoto: {
      src: "/images/services/appliance-removal-hero.jpg",
      alt: "Two Haul Aboard crew members moving a washing machine out of a Jacksonville Beach home on a dolly",
      focal: "center 45%",
    },
    heroLede:
      "Old appliances are heavy and awkward. We disconnect, haul out, and recycle — no scuffed floors, no stuck doorways. Same-day service across the Beaches.",
  },
  {
    slug: "furniture-and-mattress-removal",
    name: "Furniture & Mattress Removal",
    navLabel: "Furniture & Mattresses",
    h1: "Furniture & Mattress Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Furniture & Mattress Removal Jacksonville Beach — Same-Day",
    metaDescription:
      "Couch, mattress, dresser & box-spring removal across the Beaches. Same-day service, free estimates, licensed & insured. We donate and recycle what we can.",
    heroPhoto: {
      src: "/images/services/furniture-removal-hero.jpg",
      alt: "Haul Aboard crew carrying a wooden cabinet out of an empty bedroom",
      focal: "center 50%",
    },
    heroLede:
      "From a single mattress to a full living room set — we lift it, carry it down the stairs, and haul it away. Couches, beds, dressers, recliners, all of it.",
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub & Spa Removal",
    navLabel: "Hot Tub Removal",
    h1: "Hot Tub Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Hot Tub Removal in Jacksonville Beach — Same-Day Service",
    metaDescription:
      "Hot tub & spa removal across the Beaches. We dismantle on-site, haul it away & leave your yard clean. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/hot-tub-removal-hero.jpg",
      alt: "An old teal hot tub on a Jacksonville Beach backyard patio, ready to be removed",
      focal: "center 45%",
    },
    heroLede:
      "Old hot tubs are heavy, awkward, and a pain to dismantle. We do it all — disconnect, break it down, and haul it away. Same-day service available in Jacksonville Beach, Neptune Beach, and across Duval County.",
  },
  {
    slug: "shed-and-fence-removal",
    name: "Shed & Fence Removal",
    navLabel: "Sheds & Fences",
    h1: "Shed & Fence Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Shed & Fence Removal Jacksonville Beach — Free Estimates",
    metaDescription:
      "Old sheds, fences, playsets & carports torn down and hauled away across the Beaches. Licensed & insured, same-day service, free estimates. Licensed & insured.",
    heroPhoto: {
      src: "/images/services/shed-fence-removal-hero.jpg",
      alt: "A Haul Aboard crew member carrying a weathered wooden plank across a Jacksonville Beach backyard",
      focal: "center 45%",
    },
    heroLede:
      "Old sheds, rotting fences, leaning carports — we tear them down, haul them away, and leave the yard ready for whatever's next.",
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    navLabel: "Yard Waste",
    h1: "Yard Waste Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Yard Waste & Brush Removal Jacksonville Beach — Same-Day",
    metaDescription:
      "Brush, branches, leaves & storm debris hauled away across the Beaches. Same-day service for cleanups, free on-site estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/yard-waste-hero.jpg",
      alt: "A large pile of cut brush, branches and yard debris in a Jacksonville Beach backyard",
      focal: "center 55%",
    },
    heroLede:
      "Storm took down a tree? Spring cleanup left you with a mountain of brush? We load it, haul it, and dispose of it the right way.",
  },
  {
    slug: "storm-debris-removal",
    name: "Storm & Hurricane Debris Removal",
    navLabel: "Storm & Hurricane Debris",
    h1: "Storm & Hurricane Debris Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Storm & Hurricane Debris Removal — Jacksonville Beach, FL",
    metaDescription:
      "Fast storm & hurricane debris removal across the Jacksonville Beaches — downed limbs, fence sections, ruined furniture, drywall & flooding damage. Same-day cleanup, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/storm-debris-hero.jpg",
      alt: "Storm debris — downed branches and damaged fencing — piled in a Jacksonville Beach yard after a hurricane",
      focal: "center 50%",
    },
    heroLede:
      "After a Florida storm, the last thing you need is a mountain of debris. We clear downed limbs, blown-down fencing, ruined furniture, and water-damaged material fast — so you can get back to normal.",
  },
  {
    slug: "attic-cleanouts",
    name: "Attic Cleanouts",
    navLabel: "Attic Cleanouts",
    h1: "Attic Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Attic Cleanouts in Jacksonville Beach — Free Estimates",
    metaDescription:
      "Attic cleanout services across the Beaches — old insulation, boxes, furniture & forgotten clutter cleared out. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/attic-cleanout-hero.jpg",
      alt: "A Haul Aboard crew member alongside the company's dump trailer in Jacksonville Beach",
      focal: "center 40%",
    },
    heroLede:
      "Pull-down ladders, low ceilings, decades of forgotten boxes. We bring the muscle and the patience to clear it all out — safely.",
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    navLabel: "Garage Cleanouts",
    h1: "Garage Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Garage Cleanouts in Jacksonville Beach — Same-Day Service",
    metaDescription:
      "Full garage cleanouts across the Beaches — tools, old paint & mystery boxes gone. Get your garage back. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/garage-cleanout-hero.jpg",
      alt: "Haul Aboard crew loading items into the company dump trailer",
      focal: "center 40%",
    },
    heroLede:
      "When your garage hasn't held a car in years — we fix that. Old tools, broken bikes, stacks of mystery boxes. Cleared in an afternoon.",
  },
  {
    slug: "foreclosure-cleanouts",
    name: "Foreclosure Cleanouts",
    navLabel: "Foreclosure Cleanouts",
    h1: "Foreclosure Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Foreclosure Cleanouts Jacksonville Beach — Fast Turnaround",
    metaDescription:
      "Fast foreclosure & REO cleanouts for banks, asset managers & realtors across the Beaches. Photo-documented, broom-swept, licensed & insured. Free estimates.",
    heroPhoto: {
      src: "/images/services/foreclosure-cleanout-hero.jpg",
      alt: "An emptied room with chairs and furniture stacked ready for removal",
      focal: "center 55%",
    },
    heroLede:
      "We work with banks, asset managers, and realtors across the Beaches to clear foreclosed properties quickly. Photo documentation, broom-swept finish, fast turnaround.",
  },
  {
    slug: "hoarder-cleanouts",
    name: "Hoarder Cleanouts",
    navLabel: "Hoarder Cleanouts",
    h1: "Hoarder Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Hoarder Cleanouts Jacksonville Beach — Judgment-Free",
    metaDescription:
      "Compassionate, judgment-free hoarder cleanouts across the Beaches. We work at your pace and protect your privacy. Licensed & insured, free estimates.",
    heroPhoto: {
      src: "/images/services/hoarder-cleanout-hero.jpg",
      alt: "A large pile of household junk — mattresses, furniture, boxes and bagged waste — cleared out into a Jacksonville Beach backyard",
      focal: "center 45%",
    },
    heroLede:
      "We approach every hoarder cleanout with patience and zero judgment. Discreet, careful, and at your pace — we'll work with you to bring the home back.",
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    navLabel: "Construction Debris",
    h1: "Construction Debris Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Construction Debris Removal Jacksonville Beach — Same-Day",
    metaDescription:
      "Drywall, flooring & demo debris hauled fast across the Beaches. We work around active job sites so your crew stays on the build. Free estimates, same-day.",
    heroPhoto: {
      src: "/images/services/construction-debris-hero.jpg",
      alt: "Haul Aboard crew lifting a panel into the dump trailer loaded with cabinets",
      focal: "center 45%",
    },
    heroLede:
      "Drywall, flooring, kitchen demo, bathroom tear-outs. We pull up, load fast, and let your crew stay on the build.",
  },
  {
    slug: "commercial-office-cleanouts",
    name: "Commercial & Office Cleanouts",
    navLabel: "Office Cleanouts",
    h1: "Office & Commercial Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Office & Commercial Cleanouts in Jacksonville Beach",
    metaDescription:
      "Office furniture, cubicles & commercial cleanouts across the Beaches. After-hours service available, free on-site estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/services/office-cleanout-hero.jpg",
      alt: "Haul Aboard crew walking an office corridor past stacked desks and cabinets",
      focal: "center 45%",
    },
    heroLede:
      "Closing an office, downsizing, or relocating? We handle desks, cubicles, conference tables, and full office furniture cleanouts. After-hours service available.",
  },
  {
    slug: "tenant-turnover-services",
    name: "Tenant Turnover Services",
    navLabel: "Tenant Turnover",
    h1: "Tenant Turnover Services",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Tenant Turnover Cleanouts in Jacksonville Beach — Fast",
    metaDescription:
      "Fast tenant move-out cleanouts for landlords & property managers across the Beaches. Get the unit rent-ready fast. Same-day service, free estimates.",
    heroPhoto: {
      src: "/images/services/tenant-turnover-hero.jpg",
      alt: "Haul Aboard crew loading chairs and desks into a box truck",
      focal: "center 45%",
    },
    heroLede:
      "When a tenant leaves a mess, every day costs you rent. We turn the unit over fast — broom-swept and ready for the next listing photo.",
  },
  {
    slug: "scrap-metal-removal",
    name: "Scrap Metal Removal",
    navLabel: "Scrap Metal",
    h1: "Scrap Metal Removal",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Scrap Metal Removal in Jacksonville Beach — Same-Day",
    metaDescription:
      "Old appliances, swing sets, AC units & water heaters hauled away across the Beaches as part of our junk removal. Free on-site estimates, same-day service.",
    heroPhoto: {
      src: "/images/services/scrap-metal-hero.jpg",
      alt: "A Haul Aboard crew member loading a metal cabinet panel into the trailer",
      focal: "center 40%",
    },
    // IMPORTANT: scrap metal is a paid removal service. Never imply
    // free pickup or buyback — see the brief.
    heroLede:
      "Old swing sets, AC units, water heaters, busted appliances. We haul scrap metal away as part of our standard junk removal service — priced like every other haul.",
  },
  {
    slug: "property-management-cleanouts",
    name: "Property Management Cleanouts",
    navLabel: "Property Mgmt Cleanouts",
    h1: "Property Management Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Property Management Cleanouts in Jacksonville Beach",
    metaDescription:
      "Recurring junk removal for property managers across the Beaches. Fast scheduling, photo documentation, free estimates. Locally owned, licensed & insured.",
    heroPhoto: {
      src: "/images/services/property-management-hero.jpg",
      alt: "The Haul Aboard dump trailer hitched to the company pickup at a Jacksonville Beach commercial building",
      focal: "center 60%",
    },
    heroLede:
      "Managing 20 doors or 200, we'll be your standing junk crew. Predictable pricing, fast turnaround, professional photos for your file.",
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    navLabel: "Estate Cleanouts",
    h1: "Estate Cleanouts",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Estate Cleanouts Jacksonville Beach — Compassionate Help",
    metaDescription:
      "Compassionate, thorough estate cleanout services across the Beaches. We help families through the hardest parts. Licensed & insured, free estimates.",
    heroPhoto: {
      src: "/images/services/estate-cleanout-hero.jpg",
      alt: "A Haul Aboard crew member with a tablet beside the company trailer, loaded with boxes from a cleanout",
      focal: "center 40%",
    },
    heroLede:
      "After a loss, a downsize, or a long-distance move, we're the careful hands you can hand the keys to. Patient, respectful, thorough.",
  },
  {
    slug: "moving-services",
    name: "Moving Services",
    navLabel: "Moving Help",
    h1: "Moving Services",
    h1Accent: "in Jacksonville Beach.",
    metaTitle: "Local Moving Help in Jacksonville Beach — Same-Day Crews",
    metaDescription:
      "Local moving help across the Beaches — heavy lifting, single-item moves & short-haul moves with the crew that hauls your junk. Free estimates, same-day.",
    heroPhoto: {
      src: "/images/services/moving-services-hero.jpg",
      alt: "A Haul Aboard crew member with a dolly beside a loaded box truck",
      focal: "center 50%",
    },
    heroLede:
      "Single piano? A loaded apartment across town? We handle short-haul local moves with the same crew, the same trucks, and the same flat-rate honesty.",
  },
];

// ============================================================
// LOCATIONS
// One entry per major town or county we serve.
// "kind: town" pages get a Neighborhoods section.
// "kind: county" pages get a "Towns we serve" section instead.
// ============================================================
export type LocationKind = "town" | "county";
export type Location = {
  slug: string;
  name: string;
  nameWithState: string;
  kind: LocationKind;
  metaTitle: string;
  metaDescription: string;
  heroPhoto: { src: string; alt: string; focal?: string };
};

export const locations: Location[] = [
  {
    slug: "jacksonville-beach",
    name: "Jacksonville Beach",
    nameWithState: "Jacksonville Beach, FL",
    kind: "town",
    metaTitle: "Junk Removal in Jacksonville Beach, FL — Same-Day",
    metaDescription:
      "Local junk removal in Jacksonville Beach, FL — furniture, appliances, hot tubs, garage & condo cleanouts. Same-day service, free on-site estimates, licensed & insured. Call Haul Aboard.",
    heroPhoto: {
      src: "/images/locations/jacksonville-beach-hero.jpg",
      alt: "Jacksonville Beach, Florida oceanfront and pier",
      focal: "center 40%",
    },
  },
  {
    slug: "neptune-beach",
    name: "Neptune Beach",
    nameWithState: "Neptune Beach, FL",
    kind: "town",
    metaTitle: "Junk Removal in Neptune Beach, FL — Same-Day Service",
    metaDescription:
      "Junk removal in Neptune Beach, FL — from Beaches Town Center to the ocean. Furniture, appliance & full-home cleanouts. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/locations/neptune-beach-hero.jpg",
      alt: "Quiet residential street in Neptune Beach, Florida",
      focal: "center 45%",
    },
  },
  {
    slug: "atlantic-beach",
    name: "Atlantic Beach",
    nameWithState: "Atlantic Beach, FL",
    kind: "town",
    metaTitle: "Junk Removal in Atlantic Beach, FL — Same-Day Service",
    metaDescription:
      "Junk removal in Atlantic Beach, FL — hauling furniture, appliances, hot tubs & cleanouts across Duval County's north beaches. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/locations/atlantic-beach-hero.jpg",
      alt: "Coastal homes near the ocean in Atlantic Beach, Florida",
      focal: "center 40%",
    },
  },
  {
    slug: "ponte-vedra-beach",
    name: "Ponte Vedra Beach",
    nameWithState: "Ponte Vedra Beach, FL",
    kind: "town",
    metaTitle: "Junk Removal in Ponte Vedra Beach, FL — White-Glove",
    metaDescription:
      "Junk removal in Ponte Vedra Beach, FL — estate cleanouts, furniture & hot tub removal with careful, white-glove crews. Same-day service, free estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/locations/ponte-vedra-beach-hero.jpg",
      alt: "Palm-lined coastal neighborhood in Ponte Vedra Beach, Florida",
      focal: "center 35%",
    },
  },
  {
    slug: "ponte-vedra",
    name: "Ponte Vedra",
    nameWithState: "Ponte Vedra, FL",
    kind: "town",
    metaTitle: "Junk Removal in Ponte Vedra, FL — Same-Day Service",
    metaDescription:
      "Junk removal in Ponte Vedra, FL — garage, home & estate cleanouts plus furniture and appliance haul-away. Same-day service, free on-site estimates, licensed & insured.",
    heroPhoto: {
      src: "/images/locations/ponte-vedra-hero.jpg",
      alt: "Upscale residential area in Ponte Vedra, Florida",
      focal: "center 40%",
    },
  },
  {
    slug: "nocatee",
    name: "Nocatee",
    nameWithState: "Nocatee, FL",
    kind: "town",
    metaTitle: "Junk Removal in Nocatee, FL — Same-Day Service",
    metaDescription:
      "Junk removal in Nocatee, FL — new-build debris, moving-day cleanouts, furniture & appliance haul-away across Ponte Vedra's master-planned community. Same-day service, free estimates.",
    heroPhoto: {
      src: "/images/locations/nocatee-hero.jpg",
      alt: "Master-planned neighborhood streets in Nocatee, Florida",
      focal: "center 45%",
    },
  },
];

// ============================================================
// ABOUT PAGE
// Copy comes from the build brief. Editable here so you can
// tighten or refresh it later without touching components.
// ============================================================
// ABOUT — honest owner-experience story. Haul Aboard is brand-new (2026),
// launched by the same owner who runs Junk Away, Delaware's top-rated junk
// removal company. We do NOT invent a Florida family/farm history. TODO(Bobby):
// add your personal Jacksonville story + real photos (the truck, the crew, you)
// wherever it says [ADD].
export const aboutPage = {
  metaTitle: "About Haul Aboard — Jacksonville Beach Junk Removal",
  metaDescription:
    "Haul Aboard is a locally owned junk removal crew serving the Jacksonville Beaches, launched by the same owner behind Junk Away — Delaware's top-rated junk removal company. New here, but not new to the work.",
  // Hero photo behind the headline. Drop a real shot at this path — the truck
  // on the beach, the crew, or you. Dark gradient sits on top for legibility.
  heroPhoto: {
    src: "/images/about/about-hero.jpg",
    alt: "Haul Aboard Junk Removal truck at the beach in Jacksonville Beach, Florida",
  },
  h1: "New at the Beaches.",
  h1Accent: "Not new to the work.",
  sections: [
    {
      heading: "Where we come from",
      paragraphs: [
        "Haul Aboard is the newest junk removal crew at the Jacksonville Beaches — but the people behind it have been doing this for years. Our owner also runs Junk Away, the top-rated junk removal company in Delaware, with 2,600+ jobs completed and a 4.9-star average across more than 300 Google reviews.",
        "We fell in love with the Florida coast — the marinas, the bait shops, the salt air — and decided to bring the exact same crew standards down to the Beaches: show up on time, quote a flat price before we start, work hard, clean up after ourselves, and treat your home like it's our own.",
      ],
      photoAfter: {
        src: "/images/about/truck.jpg",
        alt: "Haul Aboard Junk Removal truck and dump trailer parked near the water",
        caption:
          "Same owner, same standards as Junk Away in Delaware — now at the Beaches. [ADD your own photo + caption]",
      },
    },
    {
      heading: "How we work",
      paragraphs: [
        "We're fully licensed and insured, and everything starts with a free, no-obligation estimate — over a quick photo or in person. You get one flat price up front, with a $199 minimum and no hidden fees, no add-ons at the curb, no surprises when we're done.",
        "We haul it all: furniture, appliances, hot tubs, garage and estate cleanouts, construction debris, yard waste — if two people can carry it, it's gone. Whatever we can donate or recycle, we do, so less of it ends up in the landfill. That's the Haul Aboard promise: we haul it all, and we do it right.",
      ],
      photoAfter: {
        src: "/images/about/crew.jpg",
        alt: "Haul Aboard crew loading items into the dump trailer after a Jacksonville Beach cleanout",
        caption: "The crew on the job at the Beaches. [ADD your own photo + caption]",
      },
    },
  ],
  closingCtaPre: "Ready to see the difference a local crew makes?",
} as const;

// ============================================================
// SERVICE PAGE BODY CONTENT
// Keyed by service slug. For each slug there's an object with
// every section the /services/[slug] page renders. Fields are
// optional so unfinished services can fall back to defaults
// derived from the entry in `services` above.
//
// To finish a service page later, add an entry here. The route,
// nav, sitemap, and combo pages will pick it up automatically.
// ============================================================
export type ServiceDetail = {
  // === COMPACT HERO ===
  // Optional override for what the hero says. If omitted, the
  // hero pulls h1, h1Accent, heroLede from the basic `services`
  // entry above.
  hero?: {
    h1?: string;
    h1Accent?: string;
    lede?: string;
    photo?: { src: string; alt: string; focal?: string };
  };

  // === WHAT WE HANDLE ===
  // Two-column section: paragraphs on the left, "Includes" bullet
  // list on the right. The bullet list is what we'll take.
  whatWeHandle?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    includesEyebrow: string;
    includesList: string[];
  };

  // === BANNER PHOTO ===
  // Full-width photo strip with a big slogan over a dark gradient.
  banner?: {
    photo: { src: string; alt: string; focal?: string };
    text: string;       // first part (white)
    textAccent: string; // last part (orange)
  };

  // === HOW IT WORKS ===
  // 3 steps. Always 3 — change the order to change emphasis.
  howItWorks?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    steps: { num: string; title: string; desc: string }[];
  };

  // === PRICING ===
  // Dark section with paragraphs on the left and an orange CTA
  // card on the right. Always end the paragraphs with the $199
  // minimum mention and free-estimate promise.
  pricing?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    cardPre: string;
    cardLg: string;
  };

  // === RELATED SERVICES ===
  // Three slugs from the `services` array — they render as photo
  // cards linking to /services/[slug]. Pick services a customer
  // is likely to also need.
  related?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    slugs: string[];
  };

  // === FAQ ===
  // Accordion. 4–6 items per page is the sweet spot.
  faq?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    items: { q: string; a: string }[];
  };
};

export const serviceDetails: Record<string, ServiceDetail> = {
  // ============================================================
  // HOT TUB & SPA REMOVAL — first fully built service page
  // ============================================================
  "hot-tub-removal": {
    hero: {
      photo: {
        src: "/images/services/hot-tub-removal-hero.jpg",
        alt: "An old teal hot tub on a Jacksonville Beach backyard patio, ready to be removed",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Any tub, any size, ",
      titleAccent: "any condition.",
      paragraphs: [
        "Hot tub removal isn't a one-person job. The acrylic shell, the wood frame, the heater, the pump — every piece needs to come apart before it can leave the yard. Our crew arrives with the saws, dollies, and manpower to dismantle your tub on-site and load it cleanly into the truck.",
        "No surprise fees. No leaving you with debris in the yard. We sweep up after ourselves and recycle whatever components we can — copper, scrap metal, and frame wood — to keep junk out of the landfill.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Acrylic shell tubs",
        "Wood-frame tubs",
        "Inflatable spas",
        "Swim spas",
        "Plug-and-play units",
        "Built-in tubs",
        "Working or broken",
        "Indoor or outdoor",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/hot-tub-removal-banner.jpg",
        alt: "A hot tub part-dismantled in a Jacksonville Beach gazebo, shell lifted to expose the frame, pump and wiring",
        focal: "center 55%",
      },
      text: "We do the heavy lifting. ",
      textAccent: "Literally.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo of the tub or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with all the tools to dismantle and remove your tub safely.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away and recycle what we can. You're left with a clean yard and one less thing to worry about.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Hot tub removal is priced based on the size of the tub, the access to your yard, and how much dismantling is required. We give you a flat quote upfront after seeing a photo or doing a quick walkthrough — and that price doesn't change on the day.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "furniture-and-mattress-removal",
        "shed-and-fence-removal",
        "construction-debris-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Hot tub removal, ",
      titleAccent: "explained.",
      items: [
        {
          q: "How much does hot tub removal cost in Jacksonville Beach?",
          a: "Pricing depends on the size of the tub, the access to your yard, and how much dismantling is needed. Most residential hot tub removals fall in a predictable range, and we give you a flat quote upfront after seeing a photo. Our minimum is $199 — and free estimates always.",
        },
        {
          q: "Do I need to drain the tub before you arrive?",
          a: "Yes, please drain the tub fully before our crew arrives. If you can't drain it yourself, let us know when booking and we can talk through options. A drained tub is much faster — and safer — to remove.",
        },
        {
          q: "Will you damage my deck or yard?",
          a: "No. Our crew dismantles the tub on-site so we can carry it out in pieces — no dragging across decks or lawns. We bring boards to protect surfaces and clean up before we leave.",
        },
        {
          q: "Can you remove a hot tub on the same day?",
          a: "Often, yes. Same-day service is available in most of the Beaches depending on our crew's schedule. Call us in the morning and we'll do our best to fit you in.",
        },
        {
          q: "What happens to the tub after you take it?",
          a: "We recycle everything we can — copper, scrap metal, frame wood — and dispose of the rest responsibly at licensed facilities. Eco-friendly junk removal is the standard, not an upgrade.",
        },
        {
          q: "Do you remove built-in or in-ground hot tubs?",
          a: "Yes. Built-in tubs take more work — we may need to disassemble decking or remove tile surrounds — but we've handled it before. Send us photos and we'll give you a fair quote.",
        },
      ],
    },
  },

  // ============================================================
  // APPLIANCE REMOVAL
  // ============================================================
  "appliance-removal": {
    hero: {
      photo: {
        src: "/images/services/appliance-removal-hero.jpg",
        alt: "Two Haul Aboard crew members moving a washing machine out of a Jacksonville Beach home on a dolly",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Anything that plugs in. ",
      titleAccent: "We'll haul it.",
      paragraphs: [
        "Old appliances are a special kind of headache — heavy, awkward, and usually stuck in tight kitchens or garages with stairs you'd never want to navigate alone. We bring the dollies, the straps, and the muscle. We disconnect, carry, and load. You don't lift a finger.",
        "We recycle whatever has scrap value — copper, steel — and dispose of the rest at licensed facilities. Refrigerators get refrigerant-recovered properly so CFCs don't end up in the air. That's not optional, it's the law, and we follow it.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Refrigerators & freezers",
        "Stoves & ovens",
        "Dishwashers",
        "Washers & dryers",
        "Window AC units",
        "Microwaves",
        "Working or broken",
        "Built-in or freestanding",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/appliance-removal-banner.jpg",
        alt: "A Haul Aboard crew member lowering a large white metal cabinet panel into the dump trailer, box truck and brick building behind",
        focal: "center 50%",
      },
      text: "Heavy, awkward, ",
      textAccent: "and gone.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Appliance removal is priced by what you're getting rid of and how hard it is to get out — a single dishwasher in a cramped laundry closet is different from a kitchen full of built-ins on a third floor. We give you a flat quote upfront after a quick photo or walkthrough.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "furniture-and-mattress-removal",
        "garage-cleanouts",
        "scrap-metal-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Appliance removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does appliance removal cost in Jacksonville Beach?", a: "Pricing depends on the appliance and how hard it is to access. Most single-appliance jobs are predictable, and we give you a flat quote upfront. Our minimum is $199 — and free estimates always." },
        { q: "Do I need to disconnect the appliance before you arrive?", a: "If you can, great — that saves time. If not, we'll handle it. We disconnect water lines and cap gas at the valve. We bring the right tools." },
        { q: "Can you take a fridge with refrigerant in it?", a: "Yes. Refrigerant gets recovered at licensed recycling facilities — required by law and the right thing to do. No old fridge ends up dumped in a field." },
        { q: "Do you remove built-in appliances?", a: "Yes. Built-in dishwashers, ovens, and microwaves take more careful work but it's standard for us. Send photos and we'll quote it accurately." },
        { q: "Same-day appliance pickup?", a: "Often, yes. Same-day service is available across most of the Beaches depending on our crew's schedule. Call early in the day for the best chance." },
      ],
    },
  },

  // ============================================================
  // FURNITURE AND MATTRESS REMOVAL
  // ============================================================
  "furniture-and-mattress-removal": {
    hero: {
      photo: {
        src: "/images/services/furniture-removal-hero.jpg",
        alt: "Haul Aboard crew carrying a wooden cabinet out of an empty bedroom",
        focal: "center 50%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Couches, beds, dressers ",
      titleAccent: "— all of it.",
      paragraphs: [
        "From a single mattress to a full living room set, we handle the lift, the stairs, and the tight doorways. Sectionals, recliners, sleeper sofas with the metal frames that weigh a ton — bring it on. We come prepared.",
        "We donate what's still usable to Jacksonville Beach-area shelters and donation centers when condition allows, and recycle mattress components (the springs, foam, and frames) wherever possible. The rest goes to licensed facilities.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Couches & sectionals",
        "Mattresses & box springs",
        "Bed frames",
        "Dressers & nightstands",
        "Recliners & sleeper sofas",
        "Office chairs",
        "Dining tables & chairs",
        "TV stands & entertainment centers",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/furniture-removal-banner.jpg",
        alt: "A Haul Aboard crew member carrying an upturned sofa on his shoulder along a sidewalk",
        focal: "center 55%",
      },
      text: "Single mattress or full set. ",
      textAccent: "We lift it.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Furniture removal is priced by volume — a single mattress costs less than a full living room. We quote flat after a photo or walkthrough, and what you see is what you pay. No add-ons for stairs, no surprise fees on the day.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "estate-cleanouts",
        "appliance-removal",
        "garage-cleanouts",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Furniture & mattress removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does furniture removal cost in Jacksonville Beach?", a: "Single items start at our $199 minimum. Volume-based pricing scales from there. We always quote flat upfront — free estimates." },
        { q: "Do you take mattresses?", a: "Yes — bed bugs, stains, age, none of it scares us. We recycle springs and frames where possible and dispose of the rest properly." },
        { q: "Will you carry it down the stairs?", a: "That's the whole job. Two-flight walk-ups, garage haul-outs, tight Jacksonville Beach stairwells — we plan it before we start." },
        { q: "Can you donate it instead of trashing it?", a: "We try. If it's clean and usable, we route it to local Jacksonville Beach shelters and donation centers. Anything that won't pass donation goes to recycling and licensed disposal." },
        { q: "Do you offer same-day pickup?", a: "Often. Same-day service is available across most of the Beaches depending on the day's schedule. Call us in the morning." },
      ],
    },
  },

  // ============================================================
  // SHED AND FENCE REMOVAL
  // ============================================================
  "shed-and-fence-removal": {
    hero: {
      photo: {
        src: "/images/services/shed-fence-removal-hero.jpg",
        alt: "A Haul Aboard crew member carrying a weathered wooden plank across a Jacksonville Beach backyard",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Tear it down. ",
      titleAccent: "Haul it out.",
      paragraphs: [
        "Rotting sheds, leaning fences, and aging carports take more than just hauling. They need to come apart safely first. We bring the saws, the pry bars, and the manpower to demolish on-site, then load and haul. Your yard goes from eyesore to clean slate.",
        "Metal sheds are a job of their own. We take them apart panel by panel, unbolting the walls and roof and breaking down the steel frame, then haul it out flat. The steel and aluminum go to a scrap recycler instead of the landfill, so a rusted-out metal shed becomes someone else's raw material. Concrete pads under a shed can come up too, and every fence material has its own quirks: chain link, vinyl, wood, wrought iron. We've handled them all.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Wood & metal sheds",
        "Plastic resin sheds",
        "Wood fences",
        "Vinyl & chain link fences",
        "Wrought iron fencing",
        "Carports & pergolas",
        "Concrete pads",
        "Posts & post holes",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/shed-fence-removal-banner.jpg",
        alt: "A Haul Aboard crew member loading long metal trim over the trailer's side rail while a second crew member helps",
        focal: "center 45%",
      },
      text: "Demo and haul. ",
      textAccent: "Same crew.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Shed and fence removal is priced based on size, materials, and how much demolition is needed. A 6×8 wood shed is different from a 12×20 metal shed with a concrete pad. We quote flat after seeing a photo or walking the yard with you.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "yard-waste-removal",
        "construction-debris-removal",
        "scrap-metal-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Shed & fence removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does shed removal cost in Jacksonville Beach?", a: "Most residential shed removals fall in a predictable range. Size and material drive the price. Free estimates and our $199 minimum applies." },
        { q: "Do you remove metal sheds?", a: "Yes, metal sheds are one of our most common shed jobs. We dismantle them on-site, unbolting the panels and breaking down the frame, then haul it all out. The steel and aluminum go to a scrap recycler, not the landfill. Rusted, dented, or half-collapsed, it doesn't matter." },
        { q: "Do I need a permit?", a: "Usually not for sheds under a certain size, but it depends on your township. We can guide you to the right office to check before we schedule the demo." },
        { q: "Will you remove the concrete pad too?", a: "Yes if you want. Pad removal is priced separately because of the additional labor and disposal weight." },
        { q: "What if my fence has metal posts set in concrete?", a: "Standard. We pull posts and footings out cleanly. The holes get backfilled with the displaced dirt or capped, depending on what you want." },
        { q: "Same-day demolition?", a: "Smaller sheds and fences, often yes. Larger demos we usually schedule a day or two ahead so we bring the right equipment." },
      ],
    },
  },

  // ============================================================
  // YARD WASTE REMOVAL
  // ============================================================
  "yard-waste-removal": {
    hero: {
      photo: {
        src: "/images/services/yard-waste-hero.jpg",
        alt: "A large pile of cut brush, branches and yard debris in a Jacksonville Beach backyard",
        focal: "center 55%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Brush, branches, ",
      titleAccent: "and back to clean.",
      paragraphs: [
        "Storm took down a tree? Spring cleanup left you with a mountain of brush you can't fit in the cans? We load it, haul it, and get rid of it the right way. Yard waste goes to compost facilities or licensed disposal — never the landfill if we can help it.",
        "We handle big jobs that won't fit in the weekly trash pickup. Old mulch piles, tree-trimming aftermath, leaves, hedges, garden tear-outs. If it's organic and you want it gone, we'll take it.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Brush & branches",
        "Leaves",
        "Tree trimmings",
        "Old mulch",
        "Garden waste",
        "Hedges & shrubs",
        "Storm debris",
        "Sod & topsoil",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/yard-waste-banner.jpg",
        alt: "A Haul Aboard crew member on the company dump trailer in Jacksonville Beach",
        focal: "center 40%",
      },
      text: "Storm cleanup or seasonal pile. ",
      textAccent: "Gone.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Yard waste is priced by volume. A small pile of clippings is different from a half-acre of post-storm tree limbs. We give you a flat quote after a photo or walkthrough — and the price doesn't grow on the day.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "shed-and-fence-removal",
        "construction-debris-removal",
        "scrap-metal-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Yard waste removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does yard waste removal cost in Jacksonville Beach?", a: "Volume-based pricing starting at our $199 minimum. Free estimates after a photo. Storm cleanup is often a higher priority job for us — call right after the weather clears." },
        { q: "Do I need to bag the leaves?", a: "Helps but not required. We have rakes, tarps, and trucks. If you want to skip the bagging, we'll do it as part of the haul." },
        { q: "Can you take a tree trunk?", a: "Logs and trunks under what two people can carry, yes. Whole-tree removal with a chainsaw is a tree service, not us — we pick up after they're done." },
        { q: "What about old mulch piles?", a: "Yes, all day. Old mulch, dirt piles, sod tear-out — load and haul." },
        { q: "Same-day yard waste pickup?", a: "Often, especially after storms when we know it's a priority. Same-day service depends on our crew's schedule." },
      ],
    },
  },

  // ============================================================
  // BASEMENT CLEANOUTS
  // ============================================================
  "storm-debris-removal": {
    hero: {
      photo: {
        src: "/images/services/storm-debris-hero.jpg",
        alt: "Storm debris — downed branches and damaged fencing — piled in a Jacksonville Beach yard after a hurricane",
        focal: "center 50%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "When the storm passes, ",
      titleAccent: "we clear the mess.",
      paragraphs: [
        "Living at the Beaches means living with hurricane season. When a storm rolls through, it leaves downed limbs, snapped fence sections, shredded screen enclosures, and soaked, ruined furniture behind. We come in after the wind stops and haul it all off — fast — so your yard and home aren't a hazard while you're trying to recover.",
        "Flooding leaves its own mess: water-logged drywall, baseboards, carpet, mattresses, and appliances that have to come out before mold sets in. We load it, haul it, and dispose of it the right way. One flat price, quoted before we start, even in the middle of a busy cleanup week.",
      ],
      includesEyebrow: "We haul",
      includesList: [
        "Downed limbs & brush",
        "Blown-down fencing",
        "Damaged screen/lanai enclosures",
        "Water-damaged furniture",
        "Flood-soaked drywall & carpet",
        "Ruined appliances",
        "Tarps & construction debris",
        "General storm cleanup",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/storm-debris-banner.jpg",
        alt: "A Haul Aboard truck loaded with hurricane debris cleared from a coastal Jacksonville Beach property",
        focal: "center 55%",
      },
      text: "Storm's over. ",
      textAccent: "Let's get you back to normal.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Call or send photos",
          desc: "Tell us what the storm left behind. We give you a flat, transparent price upfront — no storm-season price gouging, ever.",
        },
        {
          num: "02",
          title: "We show up ready",
          desc: "Our local crew rolls in with the trucks, saws, and manpower to clear debris safely, even when access is tight.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul everything off and dispose of it properly, so your property is safe and clear again.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Fair pricing, ",
      titleAccent: "even after a storm.",
      paragraphs: [
        "Storm debris is priced by volume — how much space it takes in the truck — plus the labor to clear it safely. We give you a flat quote after a quick look or a few photos, and it doesn't change on the day. No storm-season surge pricing.",
        "Our minimum is $199 (a small load) and the price scales from there based on how much there is and how tough the access is. Free estimates, every time — even when we're slammed after a big storm.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Get it\ncleared.",
    },
    related: {
      eyebrow: "Related services",
      title: "More to ",
      titleAccent: "clear out?",
      slugs: [
        "yard-waste-removal",
        "construction-debris-removal",
        "shed-and-fence-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Storm debris removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does storm debris removal cost in Jacksonville Beach?", a: "It's priced by volume and labor — how much debris there is and how hard it is to reach. We quote a flat price after a quick look or a few photos. Our minimum is $199 and estimates are always free, even during a busy storm-recovery week." },
        { q: "Do you charge more after a hurricane?", a: "No. We don't do storm-season surge pricing. You get the same fair, flat-rate pricing whether it's a calm week or the day after a hurricane." },
        { q: "Can you come right after the storm?", a: "We do our best to get out fast during cleanup weeks. Call as early as you can — demand spikes after a big storm, so the sooner you're on the list, the sooner we can clear your property." },
        { q: "Do you handle flood-damaged material inside the home?", a: "Yes. We haul out water-logged drywall, carpet, baseboards, furniture, and appliances so you can start drying out and preventing mold. For structural repairs you'll want a licensed contractor, but the demo debris is ours to clear." },
        { q: "Do you take downed trees and large limbs?", a: "We take limbs, brush, and manageable sections. For large whole-tree removals that need a crane or bucket truck, we'll point you to a tree service and haul off the debris once it's down." },
      ],
    },
  },

  // ============================================================
  // ATTIC CLEANOUTS
  // ============================================================
  "attic-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/attic-cleanout-hero.jpg",
        alt: "A Haul Aboard crew member alongside the company's dump trailer in Jacksonville Beach",
        focal: "center 40%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Pull-down ladders. ",
      titleAccent: "Low ceilings. No problem.",
      paragraphs: [
        "Attics are awkward. Pull-down ladders, low rafters, dust, and decades of boxes nobody wants to climb up there to deal with. We do. The right ladder, the right gear, the right care for what's worth keeping and what isn't.",
        "Old insulation, packed-tight boxes, cracked Christmas storage bins, ancient luggage — it all comes out clean. Heat-trapped attics in summer are no fun, so we work in cooler hours when we can and stay efficient when we can't.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Boxes & bins",
        "Old furniture",
        "Christmas storage",
        "Books & documents",
        "Loose insulation (with permits if needed)",
        "Old electronics",
        "Luggage & trunks",
        "Forgotten everything",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/attic-cleanout-banner.jpg",
        alt: "Four Haul Aboard crew members talking in a parking lot beside an open box truck ramp",
        focal: "center 45%",
      },
      text: "Get your storage ",
      textAccent: "back.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Attic cleanouts are priced by volume and by access — a walk-in attic is faster than a pull-down ladder space with low headroom. Flat quote upfront after a quick walkthrough.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "storm-debris-removal",
        "garage-cleanouts",
        "estate-cleanouts",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Attic cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does an attic cleanout cost in Jacksonville Beach?", a: "Volume + access drive the price. Free estimates and our $199 minimum applies. Most residential attics fall in a predictable range." },
        { q: "Will you take old insulation?", a: "Loose-fill we can take with the right precautions. Blown-in insulation we'll quote separately. We'll let you know if anything looks like vermiculite (which has special handling)." },
        { q: "My attic is HOT in summer — will you still come?", a: "Yes. We try to schedule attic cleanouts for early morning or cooler weather when possible, but we get it done either way." },
        { q: "What if there's stuff up there worth saving?", a: "Set it aside before we get there or point it out — we don't sort, we follow your direction." },
        { q: "Do you take items from any-floor attics?", a: "Walk-up, pull-down, drop-down ladders, scuttle holes. We've worked them all. Send a photo of your access and we'll plan accordingly." },
      ],
    },
  },

  // ============================================================
  // GARAGE CLEANOUTS
  // ============================================================
  "garage-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/garage-cleanout-hero.jpg",
        alt: "Haul Aboard crew loading items into the company dump trailer",
        focal: "center 40%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Park your car ",
      titleAccent: "in the garage again.",
      paragraphs: [
        "When your garage hasn't held a car in years, that changes today. Old tools, broken bikes, stacks of mystery boxes, paint cans that should've been disposed of a decade ago, lawn equipment that doesn't run anymore — we take it. Cleared in an afternoon.",
        "We separate scrap-worthy metal (tools, bike frames, old grills) for recycling, properly dispose of household hazards like dried paint and old solvents, and donate what's still usable. You get back a clean garage and a usable space.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Old tools & toolboxes",
        "Broken bikes & lawn equipment",
        "Paint cans (dried)",
        "Mystery boxes",
        "Furniture stored in garage",
        "Old grills",
        "Sports equipment",
        "Ladders & shelving",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/garage-cleanout-banner.jpg",
        alt: "A Haul Aboard crew member standing in the dump trailer beside a white metal panel, desks and chair frames loaded around him",
        focal: "center 50%",
      },
      text: "From storage unit ",
      textAccent: "to usable space.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Garage cleanouts are priced by truckload volume. Single-bay or three-bay, we quote flat after a photo or walkthrough. We sort scrap from disposal as we go, but pricing is based on what comes out the door.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "storm-debris-removal",
        "appliance-removal",
        "scrap-metal-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Garage cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does a garage cleanout cost in Jacksonville Beach?", a: "Volume-based. Most residential garages fall in a predictable range. Free estimates and $199 minimum." },
        { q: "Will you take old paint?", a: "Dried-out paint, yes. Liquid paint needs to be dried first or taken to a household hazardous waste site. We can guide you on the easy ways to dry it." },
        { q: "Can you sort what's worth keeping?", a: "We don't sort — that's your call. If you want to keep something, pull it aside before we arrive." },
        { q: "Do you take a lawn mower or snow blower?", a: "Yes. We drain the gas first (or you can) and load it for proper disposal/recycling." },
        { q: "How long does a garage cleanout take?", a: "Most residential garages: 2–4 hours. Heavily packed three-car garages: a half day. We work fast and don't take longer than the job needs." },
      ],
    },
  },

  // ============================================================
  // FORECLOSURE CLEANOUTS
  // ============================================================
  "foreclosure-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/foreclosure-cleanout-hero.jpg",
        alt: "An emptied room with chairs and furniture stacked ready for removal",
        focal: "center 55%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Bank-ready, ",
      titleAccent: "fast.",
      paragraphs: [
        "Foreclosure cleanouts are different from residential cleanouts. There's a clock, a lender, and often a property condition report waiting on photos. We work with banks, asset managers, REO firms, and Jacksonville Beach realtors to clear properties efficiently — full trash-out, broom-swept, photo-documented.",
        "We turn around quickly because every day a foreclosure sits costs money. Net-30 invoicing for repeat property managers, signed liability releases on every job, and we've never missed a closing because of trash.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Full trash-outs",
        "Abandoned furniture",
        "Appliances",
        "Personal property left behind",
        "Yard debris",
        "Garage contents",
        "Photo documentation",
        "Broom-swept finish",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/foreclosure-cleanout-banner.jpg",
        alt: "A Haul Aboard crew member stepping onto the trailer fender to load a metal piece, wooden cabinets stacked inside",
        focal: "center 50%",
      },
      text: "Days, not weeks. ",
      textAccent: "Sale-ready.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Foreclosure cleanouts are priced by property volume and condition. We give bulk pricing for property managers and asset firms with recurring jobs. First-job estimate is free, follow-on jobs run on standing rates.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "property-management-cleanouts",
        "estate-cleanouts",
        "tenant-turnover-services",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Foreclosure cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How fast can you clear a foreclosed property?", a: "Most residential foreclosures: same-day or next-day for properties under 2,500 sq ft. Larger properties usually inside 48 hours." },
        { q: "Do you provide photo documentation?", a: "Yes — before, during, after. Sent to your email or uploaded to your portal. Standard for every foreclosure job." },
        { q: "Do you offer net-30 invoicing for property managers?", a: "Yes for repeat clients with established accounts. First job is paid upon completion." },
        { q: "What if there's hazardous material?", a: "We'll flag it and either route it to a hazmat partner or include the disposal in our quote. We don't haul anything we shouldn't." },
        { q: "Do you handle interior AND exterior?", a: "Yes — interior trash-out, garage, sheds, yard debris all in one job. One contractor, one invoice." },
      ],
    },
  },

  // ============================================================
  // HOARDER CLEANOUTS
  // ============================================================
  "hoarder-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/hoarder-cleanout-hero.jpg",
        alt: "A large pile of household junk — mattresses, furniture, boxes and bagged waste — cleared out into a Jacksonville Beach backyard",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Patient. ",
      titleAccent: "Discreet. Compassionate.",
      paragraphs: [
        "Hoarder cleanouts ask more than just hauling. We approach every job with patience and zero judgment. Discreet trucks, careful pacing, and full respect for whoever is involved — the homeowner, the family, the property manager. We work at your speed.",
        "We bring PPE for our crew, take the time to look for documents and items of value, and never throw out anything important without confirming. We've helped Jacksonville Beach families bring homes back from years of accumulation. We can help yours too.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Decades of accumulation",
        "Mixed trash & possessions",
        "Document recovery (with consent)",
        "Furniture & appliances",
        "Pest-affected materials",
        "Biohazard partner referrals",
        "Discretion guaranteed",
        "Family support during sorting",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/hoarder-cleanout-banner.jpg",
        alt: "A large pile of household junk — mattresses, furniture, boxes and bagged waste — cleared out into a Jacksonville Beach backyard",
        focal: "center 30%",
      },
      text: "Bring the home ",
      textAccent: "back.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Hoarder cleanouts are scoped before quoted — we walk through with you (or family/property manager), assess scope, and give you a fair flat quote. We don't charge by the hour and we don't surprise you on the day.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "estate-cleanouts",
        "foreclosure-cleanouts",
        "storm-debris-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Hoarder cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does a hoarder cleanout cost in Jacksonville Beach?", a: "Scoped per property — small one-room cleanouts are very different from full-house multi-decade accumulations. Free estimates after walkthrough." },
        { q: "Will you protect privacy?", a: "Always. Unmarked options available on request. We don't talk about jobs publicly and we don't post photos without permission." },
        { q: "What if pests or biohazards are involved?", a: "We work with vetted biohazard remediation partners across the Beaches and refer them when needed. Sometimes that's pre-haul, sometimes alongside us." },
        { q: "Can family be present?", a: "Yes — most hoarder cleanouts go better with a family member there to make calls on what stays. We can also work without anyone present if that's easier." },
        { q: "How long does a hoarder cleanout take?", a: "Anywhere from a day to a week, depending on volume. We can do partial cleanouts spread across multiple visits if that's easier on the homeowner." },
      ],
    },
  },

  // ============================================================
  // CONSTRUCTION DEBRIS REMOVAL
  // ============================================================
  "construction-debris-removal": {
    hero: {
      photo: {
        src: "/images/services/construction-debris-hero.jpg",
        alt: "Haul Aboard crew lifting a panel into the dump trailer loaded with cabinets",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Drywall, flooring, ",
      titleAccent: "demo waste.",
      paragraphs: [
        "Renovation, kitchen demo, bathroom tear-out, drywall replacement, deck removal — the debris adds up fast. Your crew shouldn't be running it to the dump. We pull up, load fast, and let them stay focused on the build.",
        "We coordinate with contractors, GCs, and homeowners running their own projects. On-call dumps for ongoing work, single hauls for one-time renos. Every load goes to licensed disposal facilities — drywall recycling where it makes sense, scrap metal pulled out for recovery.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Drywall & plaster",
        "Flooring (carpet, tile, hardwood, vinyl)",
        "Cabinet tear-outs",
        "Bathroom & kitchen demo",
        "Roofing shingles (small batches)",
        "Deck & framing lumber",
        "Tile, brick & concrete",
        "Fixture removal",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/construction-debris-banner.jpg",
        alt: "Two Haul Aboard crew members lifting a long metal panel overhead into the dump trailer, U-Haul truck alongside",
        focal: "center 45%",
      },
      text: "Keep your crew on the job. ",
      textAccent: "We'll haul.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Construction debris is priced by volume and weight. A bathroom demo is priced differently from a full kitchen tear-out. We give a flat quote upfront and lock the price for ongoing project work.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "shed-and-fence-removal",
        "scrap-metal-removal",
        "yard-waste-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Construction debris removal, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does construction debris removal cost in Jacksonville Beach?", a: "Volume + weight drive the price. We give bulk rates for active job sites and contractors with recurring needs." },
        { q: "Do you work with contractors directly?", a: "Yes — many of our regular customers are GCs, remodelers, and handyman businesses across the Beaches. Predictable pricing and fast scheduling." },
        { q: "Can you take roofing shingles?", a: "Small batches yes, with the disposal fees included. For a full re-roof, we'll give you a quote that accounts for the weight." },
        { q: "Will you haul concrete and brick?", a: "Yes. Heavy material requires the right truck — we'll let you know which crew and rate apply." },
        { q: "Same-day haul during a renovation?", a: "Often. Mid-job clean-ups are common for our contractor clients. Call us in the morning." },
      ],
    },
  },

  // ============================================================
  // COMMERCIAL OFFICE CLEANOUTS
  // ============================================================
  "commercial-office-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/office-cleanout-hero.jpg",
        alt: "Haul Aboard crew walking an office corridor past stacked desks and cabinets",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Office, retail, ",
      titleAccent: "or warehouse — gone.",
      paragraphs: [
        "Closing an office, downsizing, or relocating your business? We handle desks, cubicles, conference tables, and full office furniture cleanouts. After-hours and weekend service available so we don't disrupt operations during business hours.",
        "Retail spaces, warehouses, and small commercial buildings — we work with property managers, business owners, and lease termination cleanouts. Insured, licensed, and we sign off on COIs for your landlord when needed.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Desks & workstations",
        "Cubicle systems",
        "Conference tables",
        "Office chairs",
        "File cabinets",
        "Server room equipment (with consent)",
        "Retail fixtures",
        "Break room appliances",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/office-cleanout-banner.jpg",
        alt: "Two Haul Aboard crew members in the back of an open box truck loaded with stacked chairs, desks and wood panels",
        focal: "center 45%",
      },
      text: "After-hours, weekends, ",
      textAccent: "no problem.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Office cleanouts are priced by volume and access — a 2,000 sq ft office is different from a multi-floor corporate move-out. After-hours service is available with advance scheduling. Flat quote upfront after a walkthrough.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "foreclosure-cleanouts",
        "property-management-cleanouts",
        "tenant-turnover-services",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Office cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does an office cleanout cost in Jacksonville Beach?", a: "Volume-based. Free estimate after walkthrough. We give pricing in advance for after-hours and weekend service." },
        { q: "Can you work after business hours?", a: "Yes. Evening and weekend cleanouts are routine for us, especially for offices that can't afford operations downtime." },
        { q: "Will you sign a COI for my landlord?", a: "Yes. Send us the requirements and we'll have insurance certs and contractor agreements turned around quickly." },
        { q: "Do you take server equipment or hard drives?", a: "Yes, with proper data destruction documentation if needed. We partner with certified data destruction services for that." },
        { q: "What about cubicle teardown?", a: "Standard. We disassemble, palletize what's salable for resale (we'll route to liquidators when worth it), and haul the rest." },
      ],
    },
  },

  // ============================================================
  // TENANT TURNOVER SERVICES
  // ============================================================
  "tenant-turnover-services": {
    hero: {
      photo: {
        src: "/images/services/tenant-turnover-hero.jpg",
        alt: "Haul Aboard crew loading chairs and desks into a box truck",
        focal: "center 45%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Move-out mess. ",
      titleAccent: "Move-in ready.",
      paragraphs: [
        "When a tenant leaves a mess, every day costs you rent. We turn the unit over fast — full cleanout, broom-swept, ready for the next listing photo. We work with Jacksonville Beach property managers, individual landlords, and short-term rental hosts.",
        "Standing-account pricing for property managers with recurring needs, single-job pricing for one-off turnovers. Photo-documented before/after for your records and security deposit deductions.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Furniture left behind",
        "Mattresses & bedding",
        "Garage contents",
        "Patio & balcony debris",
        "Trash bags & boxes",
        "Old appliances",
        "Photo documentation",
        "Broom-swept finish",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/tenant-turnover-banner.jpg",
        alt: "Two Haul Aboard crew members carrying a long metal panel past the company trailer loaded with tall wooden cabinets",
        focal: "center 50%",
      },
      text: "Listing photo ready ",
      textAccent: "in 48 hours.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Tenant turnovers are priced by unit size and condition. Standard rates available for property managers with recurring units. First job estimated for free; standing accounts run on agreed pricing.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "foreclosure-cleanouts",
        "property-management-cleanouts",
        "commercial-office-cleanouts",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Tenant turnover service, ",
      titleAccent: "explained.",
      items: [
        { q: "How fast can you turn over a unit?", a: "Most apartments: same-day or next-day. We know the clock starts when the tenant walks out." },
        { q: "Do you have standing rates for property managers?", a: "Yes — schedule a call and we'll set up an account with predictable per-unit pricing." },
        { q: "Will you photo-document for security deposit purposes?", a: "Standard. Before/during/after photos sent to your email immediately after the job." },
        { q: "Do you handle multi-unit properties?", a: "Yes. Five-unit buildings, twenty-unit complexes — we scale the crew. Predictable per-unit pricing." },
        { q: "Same-day service on tenant turnovers?", a: "Yes when scheduled. Same-day calls depend on crew availability — book ahead for guaranteed turnaround." },
      ],
    },
  },

  // ============================================================
  // SCRAP METAL REMOVAL
  // ============================================================
  "scrap-metal-removal": {
    hero: {
      photo: {
        src: "/images/services/scrap-metal-hero.jpg",
        alt: "A Haul Aboard crew member loading a metal cabinet panel into the trailer",
        focal: "center 40%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Old swing sets, AC units, ",
      titleAccent: "and broken metal — gone.",
      paragraphs: [
        "Scrap metal removal is a paid junk-removal service. We haul old swing sets, broken-down AC condensers, water heaters, dead appliances, fence panels, and metal anything you need gone. We take it as part of standard junk removal — priced like every other haul.",
        "We route what we collect to licensed scrap recycling facilities in Jacksonville Beach. The recycling part is good for the environment, and it's how we keep prices fair. But this isn't a free pickup service or a buyback — pricing is the same as any other junk job.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Swing sets & playsets",
        "AC condensers & window units",
        "Water heaters",
        "Old grills & smokers",
        "Metal fencing & posts",
        "Broken appliances (metal-heavy)",
        "Lawn equipment shells",
        "Bicycle frames",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/scrap-metal-banner.jpg",
        alt: "Two Haul Aboard crew members carrying a long length of corrugated metal across a parking lot beside the company trailer",
        focal: "center 50%",
      },
      text: "Paid haul-away. ",
      textAccent: "Eco-friendly disposal.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Scrap metal removal is priced by volume, just like every other junk removal job — there's no buyback, no free pickup. We come, we haul, and we route the metal to recycling. The price you pay is for our crew's labor and disposal logistics, same as any other haul.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "appliance-removal",
        "shed-and-fence-removal",
        "construction-debris-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Scrap metal removal, ",
      titleAccent: "explained.",
      items: [
        { q: "Do you pay for scrap metal?", a: "No — scrap metal removal is a paid haul-away service, not a buyback. We charge for the labor and disposal, same as any other junk job." },
        { q: "How much does scrap metal removal cost in Jacksonville Beach?", a: "Volume-based, starting at our $199 minimum. Free estimates after a photo or walkthrough." },
        { q: "Will you take a swing set?", a: "Yes — disassembly included. Most residential swing sets fall under a single haul." },
        { q: "Can you remove an old AC condenser?", a: "Yes. We disconnect (we don't touch live electrical), pull the unit, and haul. Refrigerant in older units is recovered properly." },
        { q: "Do you take car parts?", a: "Small parts yes (rims, bumpers, exhaust pieces). Whole vehicles, no — that's a salvage yard's job, not ours." },
      ],
    },
  },

  // ============================================================
  // PROPERTY MANAGEMENT CLEANOUTS
  // ============================================================
  "property-management-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/property-management-hero.jpg",
        alt: "The Haul Aboard dump trailer hitched to the company pickup at a Jacksonville Beach commercial building",
        focal: "center 60%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Your standing ",
      titleAccent: "junk crew.",
      paragraphs: [
        "Managing 20 doors or 200, we'll be the junk crew you call without thinking. Predictable pricing, fast scheduling, photos with every job, and net-30 invoicing once the account is established.",
        "We handle tenant turnovers, foreclosure cleanouts, common-area trash, oversized item disposal — anything that comes up across your portfolio. One contact, one invoice, no surprises on rates.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Tenant turnovers",
        "Foreclosure trash-outs",
        "Common-area large items",
        "Storage unit cleanouts",
        "Multi-unit recurring service",
        "After-hours scheduling",
        "Photo documentation",
        "Net-30 invoicing",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/property-management-banner.jpg",
        alt: "Four Haul Aboard crew members standing with arms folded in front of the loaded company trailer",
        focal: "center 50%",
      },
      text: "20 doors or 200. ",
      textAccent: "Same crew.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Property management accounts get standing-rate pricing per service type — turnovers, foreclosures, common-area haul-aways. The rates are agreed upfront and stay predictable across the portfolio. New clients get a free first-job quote.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "tenant-turnover-services",
        "foreclosure-cleanouts",
        "commercial-office-cleanouts",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Property management cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "Do you offer standing-rate pricing?", a: "Yes. Set up an account and rates per service type are locked. No re-quoting every job." },
        { q: "Net-30 invoicing?", a: "Yes for established accounts. New clients pay on completion until the account history is built." },
        { q: "Can you handle multiple properties in one day?", a: "Yes. Multi-property routes are common for our property management clients. We schedule and bill them as a batch." },
        { q: "Do you provide a single point of contact?", a: "Yes. Each account gets a primary point of contact for booking, scheduling, and invoicing — no phone tag." },
        { q: "What about emergency cleanouts?", a: "Same-day service available with our standing clients. Call us first — we route emergencies to the next open slot." },
      ],
    },
  },

  // ============================================================
  // ESTATE CLEANOUTS
  // ============================================================
  "estate-cleanouts": {
    hero: {
      photo: {
        src: "/images/services/estate-cleanout-hero.jpg",
        alt: "A Haul Aboard crew member with a tablet beside the company trailer, loaded with boxes from a cleanout",
        focal: "center 40%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Patient, respectful, ",
      titleAccent: "thorough.",
      paragraphs: [
        "After a loss, a downsize, or a long-distance move, an estate cleanout takes a different kind of crew. We're the careful hands you can hand the keys to. Patient pacing, full discretion, and respect for whatever needs to be looked through versus what can simply go.",
        "We coordinate with executors, attorneys, and Jacksonville Beach family members from out of state. Items of value get flagged for your review. Donations get routed to local Jacksonville Beach shelters. Trash goes to licensed disposal. Photo documentation is standard.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Whole-house contents",
        "Furniture & appliances",
        "Documents & paperwork (sorted and saved)",
        "Donatable items routed to local charities",
        "Photo documentation",
        "Hand-off coordination with realtors",
        "Coordination with executors",
        "Discretion throughout",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/estate-cleanout-banner.jpg",
        alt: "A driveway piled with bagged household items and furniture during a Jacksonville Beach home cleanout",
        focal: "center 50%",
      },
      text: "We've helped families ",
      textAccent: "through the hard parts.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Estate cleanouts are scoped before quoted. We walk the property with you (or your executor / family member) and give a flat quote based on volume, condition, and any items needing extra care. Free walkthrough, no obligation.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "hoarder-cleanouts",
        "foreclosure-cleanouts",
        "storm-debris-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Estate cleanouts, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does an estate cleanout cost in Jacksonville Beach?", a: "Property-by-property quote after walkthrough. Free estimates and our $199 minimum applies for partial cleanouts." },
        { q: "Will you flag items of value?", a: "We do — anything that looks valuable, sentimental, or important (documents, photos, jewelry, valuables) gets set aside for your review before haul-away." },
        { q: "Can you coordinate with an out-of-state family?", a: "Yes. We do this often — Jacksonville Beach estate, out-of-state family. Photos, video walkthroughs, and full email coordination." },
        { q: "Do you donate the donatable items?", a: "When condition allows, yes. Local Jacksonville Beach shelters and donation centers. We can provide donation receipts when needed." },
        { q: "How long does an estate cleanout take?", a: "From a day to a full week depending on size and how much sorting is needed. We don't rush — but we don't drag it out either." },
      ],
    },
  },

  // ============================================================
  // MOVING SERVICES
  // ============================================================
  "moving-services": {
    hero: {
      photo: {
        src: "/images/services/moving-services-hero.jpg",
        alt: "A Haul Aboard crew member with a dolly beside a loaded box truck",
        focal: "center 50%",
      },
    },
    whatWeHandle: {
      eyebrow: "What we handle",
      title: "Single piano. ",
      titleAccent: "Cross-town move. Either way.",
      paragraphs: [
        "We're a junk crew that also moves things — short-haul, single-item, and small local moves with the same hands you trust to haul out a garage. Need a piano moved across the room? A fridge to the new house? Half a one-bedroom across Jacksonville Beach? Same crew.",
        "We're not a national van line and we don't pretend to be. We're better than that for short Jacksonville Beach moves: same-day availability, flat hourly or flat-rate quotes, no fuel surcharges, no hidden add-ons.",
      ],
      includesEyebrow: "Includes",
      includesList: [
        "Single-item heavy moves",
        "Short-haul local moves",
        "Piano & gun safe moves",
        "In-home rearrangements",
        "Donation drop-off coordination",
        "Storage unit moves",
        "Apartment moves",
        "Office relocations (small)",
      ],
    },
    banner: {
      photo: {
        src: "/images/services/moving-services-banner.jpg",
        alt: "Two Haul Aboard crew members loading a box truck with chairs and wrapped furniture via a metal ramp",
        focal: "center 45%",
      },
      text: "Local moves. ",
      textAccent: "Real prices.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps. ",
      titleAccent: "That's it.",
      steps: [
        {
          num: "01",
          title: "Get a free estimate",
          desc: "Send us a photo or call us. We give you a flat, transparent price upfront — no hidden fees, no surprises on the day.",
        },
        {
          num: "02",
          title: "We show up on time",
          desc: "Our local Jacksonville Beach crew arrives in branded trucks with the right tools and the right manpower for the job.",
        },
        {
          num: "03",
          title: "It's gone for good",
          desc: "We haul it away, recycle what we can, and leave your space cleaner than we found it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, ",
      titleAccent: "no surprises.",
      paragraphs: [
        "Moving service is priced flat per job — we walk it with you (in person or by photo/list) and quote upfront. No hourly drift, no fuel surcharges. Single-item moves start at our $199 minimum and scale by volume and distance.",
        "We beat the franchises on price, and we care a heck of a lot more about the work. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there based on volume and labor. Free estimates, every time.",
      ],
      cardPre: "Free Estimate",
      cardLg: "Book in\n60 seconds.",
    },
    related: {
      eyebrow: "Related services",
      title: "More junk to ",
      titleAccent: "get rid of?",
      slugs: [
        "furniture-and-mattress-removal",
        "estate-cleanouts",
        "appliance-removal",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Local moving help, ",
      titleAccent: "explained.",
      items: [
        { q: "How much does a local move cost in Jacksonville Beach?", a: "Flat-rate per job. Single items start at $199. Studio and one-bedroom apartments fall in a predictable range. Free estimate after walkthrough or list." },
        { q: "Do you move pianos?", a: "Yes — uprights, baby grands, and small grands. We bring the dolly, straps, and four hands. We don't tune them and we don't move concert grands." },
        { q: "Same-day moving help?", a: "Often, especially for in-town single-item moves. Larger moves we usually schedule a day or two ahead." },
        { q: "Do you provide packing materials?", a: "We bring blankets, straps, and floor protection. Boxes and packing tape we don't supply — bring your own or we can route you to a local supplier." },
        { q: "How big a move is too big?", a: "Whole-house long-haul moves aren't us — that's a national van line. Anything within Jacksonville Beach or to nearby Maryland/PA, we handle routinely." },
      ],
    },
  },
};

// ============================================================
// LOCATION PAGE BODY CONTENT
// Keyed by location slug. Towns get neighborhoods + 3
// testimonials. Counties replace neighborhoods with a
// "towns we serve" list.
//
// For both, the services preview pulls from the global
// `services` array but each location can override which
// services to feature in `featuredServiceSlugs`.
// ============================================================
export type LocationDetail = {
  hero?: {
    h1?: string;
    h1Accent?: string;
    lede?: string;
    photo?: { src: string; alt: string };
    stats: { num: string; label: string }[]; // exactly 3
  };

  // The two-column section under the hero.
  // For TOWNS: paragraphs on the left, neighborhoods card on the right.
  // For COUNTIES: paragraphs on the left, "Towns we serve" card on the
  // right with each town linking to its own page when one exists.
  localIntro?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    // For towns:
    neighborhoodsHeading?: string;
    neighborhoods?: string[];
    // For counties:
    townsHeading?: string;
    towns?: { name: string; slug?: string }[];
  };

  // Services grid (6 cards) — defaults to the homepage preview slugs
  // if not overridden. Use to feature different services per area.
  servicesPreview?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    featuredSlugs: string[]; // exactly 6 slugs
  };

  // Testimonials heading. The actual review items are injected at
  // render time from real Google reviews (`getLocationTestimonials`),
  // so no per-location `items` are stored here anymore.
  testimonials?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    items?: { rating: number; quote: string; name: string; details: string }[];
  };

  // Other-areas grid — usually 6 nearby town slugs.
  otherAreas?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    slugs: string[];
  };

  // Optional link to this town's in-depth blog guide. Renders a small
  // callout on the location page. Used to reciprocate the blog->area
  // link so the city cluster is cross-linked in both directions.
  guide?: {
    blurb: string;
    href: string;
    anchor: string;
  };
};

export const locationDetails: Record<string, LocationDetail> = {
  "jacksonville-beach": {
    guide: {
      blurb: "Want the local deep dive? Read our full guide to",
      anchor: "junk removal in Jacksonville Beach, FL",
      href: "/blog/junk-removal-jacksonville-beach-fl",
    },
    hero: {
      lede: "From the pier and downtown Jax Beach out to the Intracoastal, we haul furniture, appliances, hot tubs, and whole-home cleanouts — same-day, flat-rate, and clean.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Jacksonville Beach's local junk crew",
      title: "We know ",
      titleAccent: "Jacksonville Beach.",
      paragraphs: [
        "Jacksonville Beach is our home base. We clear out beach condos and rentals along 1st and 3rd Street, garages and sheds in the older neighborhoods off Beach Boulevard, and full estates over toward the Intracoastal. Salt air is hard on outdoor furniture, grills, and hot tubs — when they're done, we haul them off and recycle what we can.",
        "Whether you're staging a South Beach rental between guests, clearing a garage in Isle of Palms, or emptying a whole house near Pablo Point, our crew shows up on time with the truck and the muscle. Same-day junk removal is regular here, and every estimate is free and on-site.",
      ],
      neighborhoodsHeading: "Jacksonville Beach Neighborhoods We Serve",
      neighborhoods: [
        "South Jacksonville Beach",
        "Isle of Palms",
        "Palm Cove",
        "Pablo Point",
        "San Pablo",
        "Ocean Forest",
        "Sunrise",
        "Beach Haven",
        "Sabre Point",
        "Cedar Bay",
        "Paradise Key",
        "Downtown Jax Beach",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Jacksonville Beach",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "furniture-and-mattress-removal",
        "appliance-removal",
        "hot-tub-removal",
        "garage-cleanouts",
        "estate-cleanouts",
        "tenant-turnover-services",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["neptune-beach", "atlantic-beach", "ponte-vedra-beach", "ponte-vedra", "nocatee"],
    },
  },

  "neptune-beach": {
    hero: {
      lede: "A short hop north of the pier, Neptune Beach is one of our most-served towns — cleanouts, furniture, appliances, and rental turnovers, done same-day.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Neptune Beach's local junk crew",
      title: "We know ",
      titleAccent: "Neptune Beach.",
      paragraphs: [
        "Neptune Beach packs a lot into a small footprint, from the shops and restaurants of Beaches Town Center down to the quiet streets near the ocean. We handle beach-cottage cleanouts, garage clear-outs, appliance swaps, and the odd hot tub tucked behind an older home.",
        "Tight lots and alley access are the norm here — our crew is used to carrying loads out the long way without scuffing a wall or a fence. Same-day service is common, and you always get a flat price before we start.",
      ],
      neighborhoodsHeading: "Neptune Beach Neighborhoods We Serve",
      neighborhoods: [
        "Beaches Town Center",
        "Oceanwalk",
        "Cedar Bluff",
        "Poinsettia",
        "Hopkins Street",
        "Third Street Corridor",
        "Florida Boulevard",
        "Forest & Myra Streets",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Neptune Beach",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "furniture-and-mattress-removal",
        "appliance-removal",
        "garage-cleanouts",
        "tenant-turnover-services",
        "yard-waste-removal",
        "estate-cleanouts",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["jacksonville-beach", "atlantic-beach", "ponte-vedra-beach", "ponte-vedra", "nocatee"],
    },
  },

  "atlantic-beach": {
    hero: {
      lede: "From Selva Marina to the north end, we clear furniture, appliances, hot tubs, and full homes across Atlantic Beach — same-day, flat-rate, and tidy.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Atlantic Beach's local junk crew",
      title: "We know ",
      titleAccent: "Atlantic Beach.",
      paragraphs: [
        "Atlantic Beach ranges from the walkable blocks near Beaches Town Center to the golf-course homes around Selva Marina and the Atlantic Beach Country Club. We do garage and shed cleanouts, appliance and furniture haul-away, and estate clear-outs in the established neighborhoods.",
        "Older trees, coquina driveways, and mature landscaping mean careful access — we protect your property on the way out and sweep up before we leave. Free on-site estimates and same-day service whenever our schedule allows.",
      ],
      neighborhoodsHeading: "Atlantic Beach Neighborhoods We Serve",
      neighborhoods: [
        "Selva Marina",
        "Selva Lakes",
        "Ocean Grove",
        "Saltair",
        "Sherry Estates",
        "Section H",
        "Donner",
        "Atlantic Beach Country Club",
        "Royal Palms (border)",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Atlantic Beach",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "furniture-and-mattress-removal",
        "appliance-removal",
        "hot-tub-removal",
        "garage-cleanouts",
        "estate-cleanouts",
        "yard-waste-removal",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["jacksonville-beach", "neptune-beach", "ponte-vedra-beach", "ponte-vedra", "nocatee"],
    },
  },

  "ponte-vedra-beach": {
    hero: {
      lede: "White-glove junk removal for Ponte Vedra Beach — estate cleanouts, furniture, and hot tubs handled with care around Sawgrass, Marsh Landing, and the Boulevard.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Ponte Vedra Beach's local junk crew",
      title: "We know ",
      titleAccent: "Ponte Vedra Beach.",
      paragraphs: [
        "Ponte Vedra Beach is home to some of the finest addresses on the First Coast — Marsh Landing, The Plantation, Sawgrass, and the estates along Ponte Vedra Boulevard. These jobs call for a careful crew: floor protection, clean loading, and total discretion.",
        "We handle full estate cleanouts, downsizing moves, furniture and appliance removal, and hot tub teardowns — quietly and on schedule. Every job starts with a free walkthrough or photo quote and a flat price with no surprises.",
      ],
      neighborhoodsHeading: "Ponte Vedra Beach Neighborhoods We Serve",
      neighborhoods: [
        "Sawgrass",
        "Sawgrass Country Club",
        "Marsh Landing",
        "The Plantation at Ponte Vedra",
        "Old Ponte Vedra",
        "Sea Hammock",
        "Ponte Vedra Boulevard",
        "Sawgrass Players Club",
        "TPC Sawgrass area",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Ponte Vedra Beach",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "estate-cleanouts",
        "furniture-and-mattress-removal",
        "hot-tub-removal",
        "appliance-removal",
        "moving-services",
        "garage-cleanouts",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["ponte-vedra", "nocatee", "jacksonville-beach", "neptune-beach", "atlantic-beach"],
    },
  },

  "ponte-vedra": {
    hero: {
      lede: "Garage, home, and estate cleanouts plus furniture and appliance haul-away across Ponte Vedra — same-day, flat-rate, licensed and insured.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Ponte Vedra's local junk crew",
      title: "We know ",
      titleAccent: "Ponte Vedra.",
      paragraphs: [
        "Ponte Vedra spreads from Palm Valley and Sawmill Lakes to the newer communities near Nocatee. We clear garages, sheds, and lanais, haul off old furniture and appliances, and handle whole-home and estate cleanouts across the area.",
        "It's a lot of newer construction and growing families, which means moving-day cleanouts, playset and shed teardowns, and renovation debris. We give you one flat price up front and get it gone — often the same day.",
      ],
      neighborhoodsHeading: "Ponte Vedra Neighborhoods We Serve",
      neighborhoods: [
        "Palm Valley",
        "Sawmill Lakes",
        "Ponte Vedra Lakes",
        "The Colony",
        "Turtle Shores",
        "Odom's Mill",
        "Sweetwater",
        "Walden Chase",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Ponte Vedra",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "furniture-and-mattress-removal",
        "appliance-removal",
        "garage-cleanouts",
        "estate-cleanouts",
        "construction-debris-removal",
        "shed-and-fence-removal",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["ponte-vedra-beach", "nocatee", "jacksonville-beach", "neptune-beach", "atlantic-beach"],
    },
  },

  "nocatee": {
    hero: {
      lede: "One of Florida's fastest-growing communities — we handle new-build debris, moving-day cleanouts, and furniture and appliance haul-away all over Nocatee.",
    stats: [
        { num: "Same-Day", label: "Service available" },
        { num: "Free", label: "On-site estimates" },
        { num: "$199", label: "Flat-rate minimum" },
      ],
    },
    localIntro: {
      eyebrow: "Nocatee's local junk crew",
      title: "We know ",
      titleAccent: "Nocatee.",
      paragraphs: [
        "Nocatee is booming, and new homes mean new junk: packaging and renovation debris, old furniture from the last house, playsets and grills that didn't survive the move. We clear it all across Town Center, Twenty Mile, and the villages in between.",
        "From Del Webb downsizers to young families in Willowcove and Crosswater, we bring the truck, quote a flat price, and haul it off fast. Same-day service is common and every estimate is free.",
      ],
      neighborhoodsHeading: "Nocatee Neighborhoods We Serve",
      neighborhoods: [
        "Nocatee Town Center",
        "Twenty Mile",
        "Greenleaf Village",
        "Willowcove",
        "Kelly Pointe",
        "Coastal Oaks",
        "Austin Park",
        "Crosswater",
        "Del Webb Nocatee",
        "Daniel Park",
        "Addison Park",
        "Seabrook",
      ],
    },
    servicesPreview: {
      eyebrow: "Services in Nocatee",
      title: "If it doesn't belong, ",
      titleAccent: "it's gone.",
      featuredSlugs: [
        "furniture-and-mattress-removal",
        "appliance-removal",
        "construction-debris-removal",
        "garage-cleanouts",
        "moving-services",
        "shed-and-fence-removal",
      ],
    },
    otherAreas: {
      eyebrow: "Other areas we serve",
      title: "All along ",
      titleAccent: "the Beaches.",
      slugs: ["ponte-vedra", "ponte-vedra-beach", "jacksonville-beach", "neptune-beach", "atlantic-beach"],
    },
  },
};

// ============================================================
// HELPERS — small functions used by the dynamic routes
// ============================================================
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
export function getLocationDetail(slug: string): LocationDetail | undefined {
  return locationDetails[slug];
}

// ============================================================
// ENRICHED CITY × SERVICE COMBO PAGES
// ------------------------------------------------------------
// The site auto-generates a /services/[slug]/[location] page for
// every service × location pair (238 total). Those pages share the
// parent service's body with only the town name swapped in — which
// Google (correctly) treats as thin/duplicate and refuses to index
// ("crawled - currently not indexed"). Left in the index at scale,
// they drag down the whole site's quality signal.
//
// The fix (see SEO-NOTES-FOR-BOBBY.md):
//   • Combos WITHOUT an entry here render `noindex, follow`, stay out
//     of the sitemap, and consolidate their relevance onto the strong
//     parent service + town pages. They still WORK if visited and
//     still pass internal-link equity.
//   • Combos WITH an entry here get genuinely unique, hand-written
//     local content (below), stay indexable, and appear in the
//     sitemap — so the handful with real search demand can rank.
//
// Key is `"<serviceSlug>:<locationSlug>"`. To promote a combo to
// indexable, add unique local copy for it here — nothing else needed.
// ============================================================
export type ComboDetail = {
  // Unique localized intro rendered only on enriched combo pages.
  localIntro: {
    heading: string;
    paragraphs: string[];
  };
  // Optional town-and-service-specific FAQ. When present, the combo page
  // renders THIS accordion (and emits it as FAQPage JSON-LD) instead of the
  // parent service's generic FAQ, so the structured data matches the local
  // page. 3-4 questions is the sweet spot.
  faq?: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    items: { q: string; a: string }[];
  };
  // Optional real review from a customer in or near this town. Only set it
  // when the review genuinely comes from there; never relabel a review to a
  // town it isn't from.
  review?: { rating: number; quote: string; name: string; details: string };
};

export const comboDetails: Record<string, ComboDetail> = {
  "hot-tub-removal:jacksonville-beach": {
    localIntro: {
      heading: "Hot tub removal in Jacksonville Beach, FL",
      paragraphs: [
        "Salt air is brutal on backyard spas, and when a Jacksonville Beach hot tub finally quits, getting it out is the hard part. Our crew dismantles the shell, frame, pump, and heater right where it sits — no dragging a waterlogged tub across your pavers or lanai — and carries it out in pieces.",
        "From the condos near the pier to the homes over toward the Intracoastal, we handle the full teardown and recycle the copper, metal, and frame wood we pull out. Same-day hot tub removal is often available in Jacksonville Beach — send a photo and we'll give you a flat quote, with a $199 minimum, before we lift a finger.",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Hot tub removal, ",
      titleAccent: "explained.",
      items: [
        {
          q: "Do I need to drain the hot tub first?",
          a: "Yes — please drain it fully before we arrive. A drained tub is faster and safer to dismantle. If you can't drain it, tell us when you book and we'll talk through options.",
        },
        {
          q: "Will you damage my deck or pavers?",
          a: "No. We take the tub apart in place and carry it out in sections, laying down protection over decking and walkways. We sweep up before we go.",
        },
        {
          q: "Can you remove it the same day?",
          a: "Often, yes — same-day hot tub removal is available in Jacksonville Beach depending on the crew's schedule. Call in the morning and we'll do our best to fit you in.",
        },
      ],
    },
  },
  "estate-cleanouts:ponte-vedra-beach": {
    localIntro: {
      heading: "Estate cleanouts in Ponte Vedra Beach, FL",
      paragraphs: [
        "Clearing an estate in Ponte Vedra Beach — in Marsh Landing, The Plantation, Sawgrass, or along the Boulevard — calls for a careful, discreet crew. After a loss, a downsize, or a long-distance move, we're the hands you can hand the keys to.",
        "We sort what's kept, donated, and hauled, protect floors and doorways in the home, and leave it broom-swept and ready to list. Everything starts with a free, private walkthrough and one flat price up front, with a $199 minimum and no surprises.",
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Estate cleanouts, ",
      titleAccent: "explained.",
      items: [
        {
          q: "Can you work with our realtor or attorney's timeline?",
          a: "Yes. We coordinate around closing dates, listing photos, and probate schedules, and can photo-document the finished cleanout for your records.",
        },
        {
          q: "What happens to usable items?",
          a: "Whatever can be donated or recycled, we route to local charities and recyclers so less ends up in the landfill. We can set aside anything the family wants kept.",
        },
      ],
    },
  },
  "furniture-and-mattress-removal:jacksonville-beach": {
    localIntro: {
      heading: "Furniture & mattress removal in Jacksonville Beach, FL",
      paragraphs: [
        "From a single mattress in a beach rental to a full living-room set, we lift it, carry it down the stairs, and haul it away — couches, beds, dressers, recliners, box springs, all of it. Perfect for turnovers along 1st and 3rd Street or a quick declutter before guests arrive.",
        "No stairs too narrow, no piece too awkward. We donate and recycle what we can, and you get a flat price before we start, with a $199 minimum. Same-day furniture removal is common in Jacksonville Beach.",
      ],
    },
  },
  "construction-debris-removal:nocatee": {
    localIntro: {
      heading: "Construction & renovation debris removal in Nocatee, FL",
      paragraphs: [
        "Nocatee is one of the fastest-growing communities in Florida, and all that building leaves debris behind — drywall, flooring, packaging, cabinets, and demo waste. We pull up, load fast, and keep your crew on the build instead of on the dump run.",
        "We work around active job sites in Town Center, Twenty Mile, and the villages, and haul everything to the right facility. Flat-rate pricing with a $199 minimum, free estimates, and same-day service when the schedule allows.",
      ],
    },
  },
  "appliance-removal:jacksonville-beach": {
    localIntro: {
      heading: "Appliance removal in Jacksonville Beach, FL",
      paragraphs: [
        "Old appliances are heavy, awkward, and usually wedged into a tight beach-cottage kitchen or garage. We disconnect, dolly out, and load — refrigerators, stoves, washers, dryers, and window AC units — without scuffing your floors or doorframes.",
        "Refrigerators are refrigerant-recovered properly, and we recycle the scrap metal. One flat price before we start, with a $199 minimum, and same-day appliance removal is regular across Jacksonville Beach.",
      ],
    },
  },
  "garage-cleanouts:ponte-vedra": {
    localIntro: {
      heading: "Garage cleanouts in Ponte Vedra, FL",
      paragraphs: [
        "When the garage in Palm Valley or Sawmill Lakes hasn't held a car in years, we fix that in an afternoon — old tools, broken beach gear, paint cans, playsets, and stacks of mystery boxes, cleared out and hauled off.",
        "You point, we lift. We sort out anything donatable, sweep the slab, and give you one flat price up front with a $199 minimum. Free on-site estimates and same-day service across Ponte Vedra.",
      ],
    },
  },
};

export function getComboDetail(
  serviceSlug: string,
  locationSlug: string,
): ComboDetail | undefined {
  return comboDetails[`${serviceSlug}:${locationSlug}`];
}

// ============================================================
// REAL REVIEWS PER LOCATION
// ------------------------------------------------------------
// Location pages used to carry hand-written "[REPLACE WITH REAL
// REVIEW]" placeholder testimonials. Instead we now source them
// from the SAME real Google reviews shown on the homepage/reviews
// page (`homepage.realReviews`) so nothing fake ever renders and
// there's one place to manage reviews.
//
// For each location we surface 3 real reviews, preferring ones
// genuinely FROM that town, then nearby towns, then general
// Jacksonville Beach reviews. Every review keeps its true town label — we
// never relabel a review to a town it didn't come from.
// ============================================================
type ReviewItem = {
  rating: number;
  quote: string;
  name: string;
  details: string;
};

const reviewTown = (details: string) => details.split("·")[0].trim().toLowerCase();

// Towns to borrow nearby reviews from when a location has fewer than
// three of its own. Names must match the town label in a review's
// `details` string.
// Currently unused for the beach towns: Haul Aboard has no per-town Florida
// reviews yet, and the location pages intentionally don't render a
// testimonials block (see locationDetails — no `testimonials` keys). Kept
// wired up so that when real Florida reviews come in, adding nearby-town
// fallbacks here (keyed by the FL location slug) just works.
const NEARBY_REVIEW_TOWNS: Record<string, string[]> = {
  "jacksonville-beach": ["Neptune Beach", "Atlantic Beach"],
  "neptune-beach": ["Jacksonville Beach", "Atlantic Beach"],
  "atlantic-beach": ["Neptune Beach", "Jacksonville Beach"],
  "ponte-vedra-beach": ["Ponte Vedra", "Nocatee"],
  "ponte-vedra": ["Ponte Vedra Beach", "Nocatee"],
  "nocatee": ["Ponte Vedra", "Ponte Vedra Beach"],
};

export function getLocationTestimonials(loc: Location): ReviewItem[] {
  // Widen the readonly const-asserted reviews into plain ReviewItems.
  const reviews: ReviewItem[] = homepage.realReviews.map((r) => ({
    rating: r.rating,
    quote: r.quote,
    name: r.name,
    details: r.details,
  }));
  const ordered: ReviewItem[] = [];

  // 1) Reviews genuinely from this town (county pages skip — no single town).
  if (loc.kind === "town") {
    ordered.push(...reviews.filter((r) => reviewTown(r.details) === loc.name.toLowerCase()));
  }
  // 2) Reviews from nearby towns / county member towns.
  for (const town of NEARBY_REVIEW_TOWNS[loc.slug] ?? []) {
    ordered.push(...reviews.filter((r) => reviewTown(r.details) === town.toLowerCase()));
  }
  // 3) General "Jacksonville Beach" reviews, then anything else, as fallback.
  ordered.push(...reviews.filter((r) => reviewTown(r.details) === "delaware"));
  ordered.push(...reviews);

  // De-dupe by quote, keep the first 3.
  const seen = new Set<string>();
  const out: ReviewItem[] = [];
  for (const r of ordered) {
    if (seen.has(r.quote)) continue;
    seen.add(r.quote);
    out.push(r);
    if (out.length === 3) break;
  }
  return out;
}

// True when a combo has unique local content and should stay indexed
// (and appear in the sitemap). Everything else is noindex/no-sitemap.
export function isComboEnriched(
  serviceSlug: string,
  locationSlug: string,
): boolean {
  return Boolean(comboDetails[`${serviceSlug}:${locationSlug}`]);
}

// ============================================================
// INDEX / LANDING PAGE COPY
// Headlines and copy for the index pages that list all services
// or all locations, plus the static About / FAQ / Contact /
// Reviews / Blog index pages. All editable from here.
// ============================================================
export const servicesIndexPage = {
  metaTitle: "Junk Removal Services in Jacksonville Beach",
  metaDescription:
    "Every junk removal service Haul Aboard offers across the Beaches — appliance, furniture, hot tub, estate cleanouts, construction debris & more. Same-day, free estimates.",
  eyebrow: "What we haul",
  h1: "Every kind of ",
  h1Accent: "junk.",
  lede: "From a single mattress to a full estate cleanout — we handle the lift, the haul, and the disposal. Below is everything we offer. If you don't see what you have, send a photo and we'll quote it.",
} as const;

export const serviceAreasIndexPage = {
  metaTitle: "Junk Removal Service Areas — The Jacksonville Beaches",
  metaDescription:
    "The towns Haul Aboard serves — Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra Beach, Ponte Vedra & Nocatee. Same-day service, free on-site estimates, licensed & insured.",
  eyebrow: "Where we work",
  h1: "All along ",
  h1Accent: "the Beaches.",
  lede: "From Atlantic Beach and Neptune Beach down through Jacksonville Beach to Ponte Vedra Beach, Ponte Vedra and Nocatee. Click your town for the neighborhoods we serve and the services we run there.",
  townsHeading: "Towns we serve",
  countiesHeading: "Counties",
} as const;

// ============================================================
// FAQ PAGE
// 10 general questions that come up across every service.
// Edit, add, or reorder freely.
// ============================================================
// ============================================================
// HOMEPAGE FAQ
// Rendered in a section on the homepage AND emitted as FAQPage
// JSON-LD from the same source, so the visible Q&A and the
// structured data never drift apart. The first question is the
// same-day one the August plan calls for.
// ============================================================
export const homepageFaq = {
  eyebrow: "Quick answers",
  title: "Questions we get ",
  titleAccent: "all the time.",
  items: [
    {
      q: "Can you come this afternoon?",
      a: "Often, yes. Same-day slots fill up, so the move is to call in the morning at (904) 875-7183. Catch us early and there's a real chance your junk is gone by dinner. Our crews run six days a week, Monday through Saturday, and you can book online any day of the week.",
    },
    {
      q: "How much does junk removal cost?",
      a: "Every estimate is free, and the price is flat before we lift a thing. Our minimum is $199, which covers a small pile or a single bulky item, and it scales from there based on how much space your stuff takes in the truck. No fuel surcharges, no surprise fees on the day.",
    },
    {
      q: "What do you take?",
      a: "Almost anything two people can carry. Furniture, mattresses, appliances, hot tubs, sheds, yard debris, construction debris, and whole garage, attic, and estate cleanouts. If you're not sure, send us a photo and we'll tell you straight.",
    },
    {
      q: "Do I have to move everything to the curb?",
      a: "No. Point us at it wherever it sits: upstairs bedroom, garage, backyard, lanai, shed. The lifting is our job, not yours.",
    },
    {
      q: "What areas do you serve?",
      a: "The Jacksonville Beaches — Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra Beach, Ponte Vedra and Nocatee, across Duval and St. Johns counties. We're locally owned and based in Jacksonville Beach.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes — fully licensed and insured. Haul Aboard is brand-new to the Beaches, but our owner also runs Junk Away, the top-rated junk removal company in Delaware (4.9★ across 300+ Google reviews and 2,600+ jobs), so you're getting a seasoned crew from day one.",
    },
  ],
} as const;

export const faqPage = {
  metaTitle: "Junk Removal FAQ — Jacksonville Beach",
  metaDescription:
    "Common questions about junk removal pricing, scheduling, what we take & how we work across the Beaches — answered by the Haul Aboard crew. Free estimates, same-day service.",
  eyebrow: "Common questions",
  h1: "Got questions? ",
  h1Accent: "We've got answers.",
  lede: "If you don't find your answer here, call us at (904) 875-7183 or send us a message — we respond next business day.",
  items: [
    {
      q: "How much does junk removal cost?",
      a: "Pricing depends on volume — how much space your junk takes up in our truck — and the labor needed to get it out. Our minimum is $199 (a small pile of stuff or a single couch) and the price scales from there. We always quote you flat upfront after a photo or walkthrough. No hidden fees, no surprises on the day.",
    },
    {
      q: "What areas do you serve?",
      a: "The Jacksonville Beaches — Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra Beach, Ponte Vedra and Nocatee. Duval County's beaches are our home base, and we cover the St. Johns County coast too.",
    },
    {
      q: "Do you offer same-day service?",
      a: "Often, yes. Same-day service is available 6 days a week depending on our crew's schedule. Call us in the morning for the best chance of a same-day slot.",
    },
    {
      q: "What do you take?",
      a: "Almost everything. Furniture, mattresses, appliances, hot tubs, sheds, fences, yard waste, construction debris, scrap metal, garage and attic cleanouts, estate cleanouts. If two people can carry it, we can take it.",
    },
    {
      q: "What WON'T you take?",
      a: "Wet paint (let it dry first and we'll take it), gasoline or other flammable liquids, asbestos, medical waste, and live ammunition. For hazardous materials we'll point you to the right Jacksonville Beach household hazardous waste collection site.",
    },
    {
      q: "Do I need to be home during pickup?",
      a: "Not if you don't want to be. As long as we have access and clear instructions, you can leave us to it. We'll send before/after photos so you know everything went well.",
    },
    {
      q: "How do you charge?",
      a: "Flat-rate per job, quoted upfront. Cash, check, all major credit cards, Venmo, and Zelle accepted. No surcharge for cards.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. Fully licensed in Jacksonville Beach, fully insured with workers comp and general liability. We provide certificates of insurance to property managers and landlords on request.",
    },
    {
      q: "What happens to the junk after you take it?",
      a: "We sort and route everything for the best end-of-life: donation when it's still usable (local Jacksonville Beach shelters and donation centers), recycling for scrap metal, copper, electronics, and clean cardboard, and licensed disposal facilities for the rest. Eco-friendly disposal is the default — not an upgrade.",
    },
    {
      q: "Can I get an estimate without scheduling a job?",
      a: "Yes. Free estimates always — no obligation. Send us a photo or schedule a 15-minute walkthrough. We give you a flat number and you decide.",
    },
  ],
} as const;

// ============================================================
// CONTACT PAGE
// Form labels, the service dropdown options (auto-pulled from
// `services` above), success/error messages.
// ============================================================
export const contactPage = {
  metaTitle: "Get a Free Junk Removal Estimate — Jacksonville Beach",
  metaDescription:
    "Free no-obligation junk removal estimate in 60 seconds. Tell us what you have, we'll get you a flat price. Or call (904) 875-7183.",
  eyebrow: "Free estimate",
  h1: "Get a flat quote ",
  h1Accent: "in 60 seconds.",
  lede: "Tell us what you have, attach a photo if you can, and we'll get back to you next business day. For urgent jobs, call us direct at (904) 875-7183.",
  // Form labels and helper text — change wording here, not in the form component.
  form: {
    nameLabel: "Your name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address or zip",
    serviceLabel: "What needs to go?",
    servicePlaceholder: "Select a service…",
    descriptionLabel: "Anything else we should know?",
    descriptionPlaceholder:
      "Volume, access, stairs, timeline — whatever helps us quote accurately.",
    photoLabel: "Photos (optional, up to 5)",
    submitLabel: "Get My Free Estimate",
    submittingLabel: "Sending…",
  },
  successHeading: "Thanks — we got it.",
  successBody:
    "We'll be in touch within one business day with a flat quote. For urgent jobs, call (904) 875-7183 — we usually answer.",
  errorBody:
    "Something went wrong on our end. Please call us at (904) 875-7183 or try again in a moment.",
} as const;

// ============================================================
// REVIEWS PAGE
// Dedicated page that mirrors the homepage reviews section
// at full size + a "leave a review" CTA pointing to Google.
// ============================================================
export const reviewsPage = {
  metaTitle: "Reviews — New at the Beaches, Proven in Delaware",
  metaDescription:
    "Haul Aboard is brand-new to Jacksonville Beach — so we haven't collected local reviews yet. See the track record our owner built at Junk Away, Delaware's top-rated junk removal company.",
  eyebrow: "Our track record",
  h1: "New here. ",
  h1Accent: "Not new to this.",
  lede: "Haul Aboard just launched at the Jacksonville Beaches, so we don't have local reviews yet — and we won't pretend otherwise. But our owner also runs Junk Away, the top-rated junk removal company in Delaware. Below are real, verbatim 5-star Google reviews of that crew — the exact standard we bring to Jax Beach. Be our first Beaches review and we'll earn it.",
  // Honest attribution line shown above the review grid.
  attribution:
    "Real 5-star Google reviews of Junk Away (Delaware) — same owner, same standards. Not Haul Aboard / Florida reviews.",
  leaveReviewLabel: "See Junk Away's reviews on Google →",
} as const;

// ============================================================
// BLOG INDEX PAGE
// Headlines for /blog. Individual posts are markdown files
// in /content/blog/ — see HOW-TO-EDIT.md for how to publish.
// ============================================================
// ============================================================
// PRICING PAGE  (/prices)
// ------------------------------------------------------------
// Ranks for "junk removal prices delaware" / "junk removal cost
// delaware" WITHOUT publishing job prices. It explains HOW pricing
// works and sells the free on-site estimate.
//
// PRICING RULE (important): the $199 minimum is the ONLY dollar
// figure we ever publish — it's deliberate, so people who won't pay
// the minimum self-select out. Never add other prices or ranges
// here or anywhere else on the site.
// ============================================================
export const pricingPage = {
  metaTitle: "Junk Removal Prices in Jacksonville Beach — How It Works",
  metaDescription:
    "How junk removal pricing works in Jacksonville Beach: what affects your quote, our free on-site estimates, and the flat, upfront price you get before we start. $199 minimum.",
  eyebrow: "Pricing",
  h1: "Junk removal prices ",
  h1Accent: "in Jacksonville Beach.",
  lede: "No games, no guessing. Here's exactly how we price a job, why our estimates are free, and how you get a flat number before we lift a thing.",
  sections: [
    {
      eyebrow: "How it works",
      title: "Priced by ",
      titleAccent: "volume and labor.",
      paragraphs: [
        "Junk removal is priced on two things: how much space your stuff takes up in our truck, and the labor it takes to get it out. That's the whole formula. There's no per-item nickel-and-diming, and no charge for the walk to the curb.",
        "Four things move the number. Volume — a single couch is a small slice of the truck; a full garage is most of a load. What the material is — appliances with refrigerant, mattresses, tires, and construction debris cost more to dispose of or recycle the right way. Labor and access — a curbside pile is quicker than a third-floor walk-up, a tight stairwell, or a hot tub that has to be cut apart before it can leave the yard. And the disposal or recycling fees the transfer station, recycler, or donation center charges us for the material.",
        "Every one of those is visible when we look at the job. That's why we look at the job.",
      ],
    },
    {
      eyebrow: "Free estimates",
      title: "Why we quote it ",
      titleAccent: "in person.",
      paragraphs: [
        "A photo hides a lot — what's behind the pile, how heavy it actually is, whether it fits through the door, what's underneath. Guessing over the phone is exactly how people end up with a 'surprise' when the truck shows up. We'd rather not do that to you.",
        "So for most jobs we come out, look at it, and hand you a real number. It's free, there's no obligation, and there's no pressure to book on the spot. For small, obvious jobs — a single couch, a mattress, one appliance — a photo is usually enough and we'll quote straight from that.",
      ],
    },
    {
      eyebrow: "No hidden fees",
      title: "You get the price ",
      titleAccent: "before we start.",
      paragraphs: [
        "Not after. Not once the truck is loaded and you're over a barrel. We quote you flat, you approve it, and only then does anything move.",
        "Stairs, long carries, and dismantling are already baked into the number we give you — they're not add-ons we spring later. If the job genuinely changes because you decide to add items, we tell you first and you approve the new number before we keep going.",
      ],
    },
    {
      eyebrow: "Our minimum",
      title: "It starts at ",
      titleAccent: "$199.",
      paragraphs: [
        "Our minimum is $199. That covers a small pile or a single item like a couch, and the price scales up from there based on how much room it takes in the truck and the labor involved.",
        "We publish the minimum on purpose. We'd rather be upfront than waste your afternoon — if it's below what you had in mind, you know before anyone drives anywhere. Everything above the minimum depends on the job, which is what the free estimate is for.",
      ],
    },
  ],
  faq: {
    eyebrow: "Common questions",
    title: "Pricing, ",
    titleAccent: "explained.",
    items: [
      {
        q: "How do you price junk removal?",
        a: "By volume — the space your items take up in our truck — plus the labor to get them out and the disposal or recycling fees for the material. We give you a flat number upfront, before any work starts.",
      },
      {
        q: "Do you charge for estimates?",
        a: "No. Estimates are always free and there's no obligation. We come look at the job, give you a flat price, and you decide. No fee, no pressure.",
      },
      {
        q: "Can you quote me over the phone?",
        a: "For small, clear-cut jobs — a single couch, a mattress, one appliance — a photo or a phone call is often enough. For anything bigger we'd rather see it in person. That's the only way to account for access, weight, and what's underneath the pile, and it's how we avoid surprises on the day.",
      },
      {
        q: "Is there a minimum charge?",
        a: "Yes — our minimum is $199. That covers a small pile or a single item, and pricing scales up from there based on volume and labor.",
      },
      {
        q: "Do you charge extra for stairs or long carries?",
        a: "No. Access, stairs, and dismantling are factored into the quote we give you upfront. The number we say is the number you pay.",
      },
      {
        q: "What affects the price the most?",
        a: "Volume, almost always — how much of the truck you fill. After that it's what the material is (appliances, mattresses, and construction debris cost more to dispose of responsibly) and how hard it is to get out of the space.",
      },
      {
        q: "When do I find out the price?",
        a: "Before we start. We quote you flat after seeing the job, you approve it, and only then do we load anything.",
      },
      {
        q: "How can I pay?",
        a: "Cash, check, all major credit cards, Venmo, and Zelle. No surcharge for cards.",
      },
    ],
  },
} as const;

export const blogIndexPage = {
  metaTitle: "Junk Removal Tips & Guides — Jacksonville Beach",
  metaDescription:
    "Practical guides on junk removal, estate cleanouts, eco-friendly disposal, and Jacksonville Beach-specific resources from the Haul Aboard team.",
  eyebrow: "Resources",
  h1: "Practical ",
  h1Accent: "guides.",
  lede: "Pricing, prep, and process — straight from the crew. Updated regularly.",
  emptyHeading: "Coming soon.",
  emptyBody:
    "We're publishing new articles regularly. Check back, or sign up for an estimate while you're here.",
} as const;
