import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HomeSeoLinks } from "@/components/HomeSeoLinks";
import { BrandElementsStrip } from "@/components/BrandArt";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BigCta } from "@/components/BigCta";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { homepageFaq } from "@/lib/content";
import { faqSchema, asScript } from "@/lib/schema";

// Homepage-specific metadata. Without this the homepage fell back to
// the generic layout default ("Haul Aboard — the Beaches' Junk Removal
// Crew") — no target keyword, no hook. `title.absolute` bypasses the
// "%s | Haul Aboard" template so the brand isn't doubled.
export const metadata: Metadata = {
  title: {
    absolute: "Junk Removal in Jacksonville Beach, FL | Haul Aboard",
  },
  description:
    "Locally owned junk removal across the Jacksonville Beaches — Jax Beach, Neptune Beach, Atlantic Beach, Ponte Vedra & Nocatee. Same-day service, free on-site estimates, flat upfront pricing, licensed & insured. We haul it all.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Junk Removal in Jacksonville Beach, FL | Haul Aboard",
    description:
      "Locally owned Jacksonville Beach junk removal. Same-day service, free on-site estimates, flat pricing, licensed & insured. Call (904) 875-7183.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness + Organization JSON-LD now render sitewide from the
          root layout, so the homepage no longer repeats them. This FAQPage
          schema is generated from the same homepageFaq data the visible
          accordion below renders, so they can't drift apart. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          faqSchema(homepageFaq.items.map((i) => ({ q: i.q, a: i.a })))
        )}
      />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesPreview />
        <BrandElementsStrip />
        <ReviewsSection />
        <HomeSeoLinks />
        <section className="faq-section">
          <div className="section-label">{homepageFaq.eyebrow}</div>
          <h2 className="section-title">
            {homepageFaq.title}
            <span className="accent">{homepageFaq.titleAccent}</span>
          </h2>
          <FaqAccordion
            items={homepageFaq.items.map((i) => ({ q: i.q, a: i.a }))}
          />
        </section>
        <BigCta />
      </main>
      <Footer />
    </>
  );
}
