// ============================================================
// JSON-LD SCHEMA HELPERS
// ============================================================
// Generates structured-data objects that pages render via:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
//
// Schemas implemented (all approved by schema.org and used by
// Google's Rich Results Test):
//   - LocalBusiness  (homepage, About)
//   - Organization   (every page footer, via root)
//   - Service        (every service page)
//   - BreadcrumbList (every non-home page)
//   - FAQPage        (every page that has an FAQ section)
//   - Article        (every blog post)
//   - AggregateRating (attached to LocalBusiness)
// ============================================================

import {
  business,
  locations,
  services,
  type Service,
  type Location,
} from "./content";

const BASE_URL = `https://${business.domain}`;

// ----------------------------------------------
// LOCAL BUSINESS — the foundational schema. Drives
// the Google Knowledge Panel rich result.
// ----------------------------------------------
export function localBusinessSchema() {
  const areaServed = [
    ...locations.map((l) => ({ "@type": "City", name: l.name })),
    { "@type": "AdministrativeArea", name: "Duval County, FL" },
    { "@type": "AdministrativeArea", name: "St. Johns County, FL" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}#business`,
    name: "Haul Aboard Junk Removal",
    legalName: "Haul Aboard Junk Removal LLC",
    image: `${BASE_URL}/images/brand/logo.png`,
    logo: `${BASE_URL}/images/brand/logo.png`,
    url: BASE_URL,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    foundingDate: String(business.yearEstablished),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "15:00",
      },
    ],
    sameAs: [business.googleBusinessUrl, business.instagramUrl, business.facebookUrl],
    areaServed,
    // NOTE: no `aggregateRating` here on purpose. Haul Aboard is brand-new
    // and has no reviews of its own — publishing star-rating schema without
    // real reviews is a Google structured-data violation and would be
    // dishonest. Add an AggregateRating block here only once Haul Aboard has
    // genuine Google reviews (then wire business.reviewRating/reviewCount).
  };
}

// ----------------------------------------------
// ORGANIZATION — lighter than LocalBusiness, used
// site-wide so social profiles and the legal name
// appear consistently across every page.
// ----------------------------------------------
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#organization`,
    name: "Haul Aboard Junk Removal",
    legalName: "Haul Aboard Junk Removal LLC",
    url: BASE_URL,
    logo: `${BASE_URL}/images/brand/logo.png`,
    sameAs: [business.googleBusinessUrl, business.instagramUrl, business.facebookUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      email: business.email,
      contactType: "Customer Service",
      areaServed: "US-FL",
      availableLanguage: ["English"],
    },
  };
}

// ----------------------------------------------
// SERVICE — one per service page. Combined with the
// LocalBusiness as provider so search engines link
// the service to our business entity.
// ----------------------------------------------
export function serviceSchema(service: Service, location?: Location) {
  const name = location
    ? `${service.name} in ${location.nameWithState}`
    : service.name;
  const url = location
    ? `${BASE_URL}/services/${service.slug}/${location.slug}`
    : `${BASE_URL}/services/${service.slug}`;
  const areaServed = location
    ? [{ "@type": "City", name: location.name }]
    : locations.map((l) => ({ "@type": "City", name: l.name }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description: service.metaDescription,
    serviceType: service.name,
    provider: { "@id": `${BASE_URL}#business` },
    areaServed,
    url,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: business.minimumPrice,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: business.minimumPrice,
        unitText: "Minimum charge — flat-quote pricing scales by volume",
      },
      availability: "https://schema.org/InStock",
    },
  };
}

// ----------------------------------------------
// BREADCRUMB LIST — one per non-home page so search
// engines display a breadcrumb trail in results.
// ----------------------------------------------
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${BASE_URL}${c.url}`,
    })),
  };
}

// ----------------------------------------------
// FAQ PAGE — one per page that has an FAQ section.
// Fills the FAQ rich result accordion in search.
// ----------------------------------------------
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.a,
      },
    })),
  };
}

// ----------------------------------------------
// ARTICLE — one per blog post.
// ----------------------------------------------
export function articleSchema(post: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage
      ? `${BASE_URL}${post.featuredImage}`
      : `${BASE_URL}/images/brand/logo.png`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${BASE_URL}#organization` },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  };
}

// Convenience helper used by every page that wants to render JSON-LD
export function asScript(obj: unknown) {
  return {
    __html: JSON.stringify(obj).replace(/</g, "\\u003c"),
  };
}

// Re-export referenced types so service-only imports stay clean
export { services, locations };
