import type { MetadataRoute } from "next";
import { business } from "@/lib/content";

// Auto-generated robots.txt. Vercel preview deployments use a
// noindex rule (they're at *.vercel.app domains, which we should
// keep out of search results). Production allows everything.
export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";
  const base = `https://${business.domain}`;

  if (isPreview) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /brand-kit.html is a private download page for the owner's
        // logo files — useful, but not something to put in search.
        disallow: ["/api/", "/_next/", "/brand-kit.html"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
