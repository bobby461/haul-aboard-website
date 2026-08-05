import type { MetadataRoute } from "next";
import {
  services,
  locations,
  business,
  isComboEnriched,
} from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

// Auto-generated sitemap. Adding a new service to content.ts, a
// new location, or a new blog post in /content/blog/ adds it here
// without code changes.
//
// Vercel will serve this at https://<domain>/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/prices`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reviews`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Service detail pages
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Location detail pages — town pages slightly higher than counties
  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/service-areas/${l.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: l.kind === "town" ? 0.85 : 0.75,
  }));

  // City × service combo pages. Only ENRICHED combos (those with unique
  // hand-written local content in content.ts) are indexable, so only
  // those belong in the sitemap. The remaining ~225 are noindex and are
  // deliberately excluded — a sitemap should list only indexable URLs.
  const comboPages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const l of locations) {
      if (!isComboEnriched(s.slug, l.slug)) continue;
      comboPages.push({
        url: `${base}/services/${s.slug}/${l.slug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  }

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date || today,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...comboPages,
    ...blogPages,
  ];
}
