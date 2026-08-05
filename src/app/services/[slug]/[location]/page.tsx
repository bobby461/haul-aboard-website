import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { PageHero } from "@/components/PageHero";
import { SeoImage } from "@/components/SeoImage";
import {
  WhatWeHandle,
  PhotoBanner,
  HowItWorks,
  PricingBlock,
  FaqSection,
} from "@/components/ServicePageSections";
import {
  services,
  locations,
  getServiceBySlug,
  getLocationBySlug,
  getServiceDetail,
  getLocationDetail,
  getComboDetail,
  isComboEnriched,
} from "@/lib/content";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  asScript,
} from "@/lib/schema";

// City + service combo pages: /services/[slug]/[location]
// One page is generated for every (service × location) pair (238
// total). By default a combo reuses the parent service's body with
// the town name woven into the H1/intro — which Google treats as
// thin/duplicate. So:
//   • Combos WITHOUT hand-written local content (comboDetails in
//     content.ts) are rendered `noindex, follow` and kept out of the
//     sitemap. They still work + pass link equity, but stop dragging
//     the site's quality signal and let the strong parent service +
//     town pages rank instead.
//   • Enriched combos (a comboDetails entry exists) get a unique,
//     locally-written intro, stay indexable, and appear in the sitemap.
// See SEO-NOTES-FOR-BOBBY.md and `comboDetails` in content.ts.

export function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const s of services) {
    for (const l of locations) {
      params.push({ slug: s.slug, location: l.slug });
    }
  }
  return params;
}

type Params = { params: Promise<{ slug: string; location: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, location } = await params;
  const svc = getServiceBySlug(slug);
  const loc = getLocationBySlug(location);
  if (!svc || !loc) return {};
  const enriched = isComboEnriched(slug, location);
  return {
    // Template ("%s | Haul Aboard") adds the brand — don't repeat it here.
    title: `${svc.name} in ${loc.nameWithState}`,
    description: enriched
      ? `${svc.name} in ${loc.nameWithState} by Haul Aboard — a local Jacksonville Beach crew. Same-day service, free on-site estimates, licensed, insured & locally owned.`
      : `${svc.name} in ${loc.nameWithState}. ${svc.metaDescription}`,
    alternates: { canonical: `/services/${svc.slug}/${loc.slug}` },
    // Thin, non-enriched combos: keep out of the index (still followed).
    robots: enriched ? undefined : { index: false, follow: true },
  };
}

export default async function ComboPage({ params }: Params) {
  const { slug, location } = await params;
  const svc = getServiceBySlug(slug);
  const loc = getLocationBySlug(location);
  if (!svc || !loc) notFound();

  const sDetail = getServiceDetail(slug);
  const lDetail = getLocationDetail(location);
  const combo = getComboDetail(slug, location);
  // Prefer the combo's own town+service FAQ (enriched wave-1 pages) so the
  // visible accordion and the FAQPage schema match the local page; fall back
  // to the parent service's generic FAQ otherwise.
  const faqData = combo?.faq ?? sDetail?.faq;
  const heroPhoto = sDetail?.hero?.photo ?? svc.heroPhoto;
  const baseLede = sDetail?.hero?.lede ?? svc.heroLede;
  const localizedLede = `${baseLede} Now serving ${loc.nameWithState} and surrounding areas.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(serviceSchema(svc, loc))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: svc.name, url: `/services/${svc.slug}` },
            { name: loc.name, url: `/services/${svc.slug}/${loc.slug}` },
          ])
        )}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={asScript(faqSchema(faqData.items))}
        />
      )}
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: svc.name, href: `/services/${svc.slug}` },
            { label: loc.name },
          ]}
          h1={`${svc.name} in `}
          h1Accent={loc.nameWithState + "."}
          lede={localizedLede}
          photo={heroPhoto}
        />

        {/* Unique, hand-written local content — only on enriched combos.
            This is what makes the page genuinely differentiated (and
            indexable) rather than a templated duplicate. */}
        {combo && (
          <section className="local-intro">
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="section-label">Local service</div>
              <h2 className="section-title">{combo.localIntro.heading}</h2>
              <div className="local-intro-text">
                {combo.localIntro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        <WhatWeHandle data={sDetail?.whatWeHandle} />
        <PhotoBanner data={sDetail?.banner} />
        <HowItWorks data={sDetail?.howItWorks} />
        <PricingBlock data={sDetail?.pricing} />

        {/* A real review from a customer in or near this town, when the
            review data genuinely has one. */}
        {combo?.review && (
          <section className="testimonials">
            <div className="section-label">What the neighbors say</div>
            <div className="testimonial-grid" style={{ maxWidth: 720, margin: "0 auto" }}>
              <div className="testimonial">
                <div className="stars" aria-label={`${combo.review.rating} stars`}>
                  {"★".repeat(Math.max(0, Math.min(5, combo.review.rating)))}
                </div>
                <div className="quote">{combo.review.quote}</div>
                <div className="meta">
                  <span className="name">{combo.review.name}</span>
                  {combo.review.details}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sibling combos in the same town — internal linking for SEO */}
        <SiblingCombos
          currentServiceSlug={svc.slug}
          locationSlug={loc.slug}
          locationName={loc.nameWithState}
        />

        <FaqSection data={faqData} />

        <BigCta
          pre={`Free estimates · ${svc.name} · ${loc.nameWithState}`}
        />
      </main>
      <Footer />
    </>
  );
}

// 3 sibling-service combos in the SAME location. Adds internal-link
// density that helps the long-tail combo pages rank.
function SiblingCombos({
  currentServiceSlug,
  locationSlug,
  locationName,
}: {
  currentServiceSlug: string;
  locationSlug: string;
  locationName: string;
}) {
  const otherServices = services
    .filter((s) => s.slug !== currentServiceSlug)
    .slice(0, 3);
  if (otherServices.length === 0) return null;

  return (
    <section className="related">
      <div className="section-label">Other services in {locationName}</div>
      <h2 className="section-title">
        We handle <span className="accent">all of it.</span>
      </h2>

      <div className="related-grid">
        {otherServices.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}/${locationSlug}`}
            className="related-card"
          >
            <SeoImage
              src={s.heroPhoto.src}
              alt={s.heroPhoto.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="name">{s.name}</div>
            <span className="arrow-link">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
