/** @type {import('next').NextConfig} */

// React's dev runtime uses eval() for various debugging features
// (callstack reconstruction, fast refresh). Production builds never
// eval(). So we relax script-src in dev only — production stays strict.
const isDev = process.env.NODE_ENV !== "production";
const scriptSrcExtras = isDev ? "'unsafe-eval'" : "";

// CSP allows the third-party scripts the brief calls for:
// - GoogleTagManager / GA4
// - Cloudflare Turnstile (when enabled)
// - Housecall Pro (lead capture form embed on /contact)
//
// Elfsight entries were removed on 2026-05-21 when we moved off
// the reviews widget to a hand-coded review grid. No third-party
// JS for reviews anymore, so the CSP is tighter and faster.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${scriptSrcExtras} https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://*.housecallpro.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' data: https://fonts.gstatic.com;
  img-src 'self' data: blob: https:;
  connect-src 'self' https://api.resend.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googleapis.com https://*.gstatic.com https://*.googleusercontent.com https://*.housecallpro.com;
  frame-src 'self' https://www.google.com https://challenges.cloudflare.com https://*.housecallpro.com;
  child-src 'self' https://*.housecallpro.com;
  worker-src 'self' blob:;
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

// ============================================================
// 301 REDIRECTS — legacy URL recovery
// ------------------------------------------------------------
// The pre-Next.js site used a `/{service}-in-delaware-junk-away/`
// URL pattern. Those addresses were still ranking in Google but
// returning 404 after the migration, sending real searchers to
// dead ends and bleeding ranking equity. Each rule below sends
// the old URL to its closest live page with a PERMANENT (308)
// redirect so Google transfers the earned ranking to the new URL.
//
// Next normalizes the trailing slash first (e.g. `/foo/` -> `/foo`),
// so a single slash-less `source` catches both forms. Destinations
// were verified to return 200 on the live site before wiring.
// ============================================================
const legacyRedirects = [
  {
    source: "/appliance-removal-in-delaware-junk-away",
    destination: "/services/appliance-removal",
    permanent: true,
  },
  {
    source: "/furniture-removal-in-delaware-junk-away",
    destination: "/services/furniture-and-mattress-removal",
    permanent: true,
  },
  {
    source: "/hot-tub-removal-in-delaware-junk-away",
    destination: "/services/hot-tub-removal",
    permanent: true,
  },
  {
    // No dedicated "general junk removal" service page exists — the
    // homepage IS the general junk-removal page and targets that term.
    source: "/general-junk-removal-in-delaware-junk-away",
    destination: "/",
    permanent: true,
  },
  {
    source: "/commercial-junk-removal-in-delaware-junk-away",
    destination: "/services/commercial-office-cleanouts",
    permanent: true,
  },
  {
    // Playset / swing-set teardown is an outdoor-structure removal —
    // closest live page is Shed & Fence Removal.
    source: "/playset-swing-set-removal-in-delaware-junk-away",
    destination: "/services/shed-and-fence-removal",
    permanent: true,
  },
  {
    source: "/local-trusted-junk-removal-in-delaware-family-owned-junk-away",
    destination: "/",
    permanent: true,
  },
  {
    // Old WordPress-style /home/ landing page.
    source: "/home",
    destination: "/",
    permanent: true,
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only generates the qualities you whitelist here.
    // 75 is the default; 85 is what we use for the hero so it stays crisp.
    qualities: [75, 85],
  },
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
