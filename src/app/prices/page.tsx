import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { pricingPage } from "@/lib/content";
import {
  faqSchema,
  breadcrumbSchema,
  asScript,
} from "@/lib/schema";

// /prices — targets "junk removal prices delaware" / "junk removal cost
// delaware" by explaining HOW pricing works rather than publishing job
// prices. The $199 minimum is the only dollar figure on the site (see
// the note on `pricingPage` in content.ts).

export const metadata: Metadata = {
  title: pricingPage.metaTitle,
  description: pricingPage.metaDescription,
  alternates: { canonical: "/prices" },
};

export default function PricesPage() {
  return (
    <>
      {/* LocalBusiness JSON-LD is now sitewide (root layout). This page keeps
          its own FAQPage + Breadcrumb schema. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          faqSchema(pricingPage.faq.items.map((i) => ({ q: i.q, a: i.a })))
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Junk Removal Prices", url: "/prices" },
          ])
        )}
      />
      <Nav />
      <main>
        <section className="page-hero">
          <div
            className="page-hero-photo"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              background: "var(--ink)",
            }}
            aria-hidden="true"
          />
          <div
            className="page-hero-overlay"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            Prices
          </nav>
          <h1>
            {pricingPage.h1}
            <span className="accent">{pricingPage.h1Accent}</span>
          </h1>
          <p className="lede">{pricingPage.lede}</p>
        </section>

        {pricingPage.sections.map((s, i) => (
          <section className="local-intro" key={i}>
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="section-label">{s.eyebrow}</div>
              <h2 className="section-title">
                {s.title}
                <span className="accent">{s.titleAccent}</span>
              </h2>
              <div className="local-intro-text">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Internal links to the pages a price-shopper most often wants next */}
        <section className="local-intro">
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div className="section-label">Popular jobs</div>
            <h2 className="section-title">
              What are you <span className="accent">getting rid of?</span>
            </h2>
            <div className="local-intro-text">
              <p>
                Pricing works the same way across every job we do — here are the
                ones people ask about most:{" "}
                <Link href="/services/hot-tub-removal">
                  hot tub removal in Jacksonville Beach
                </Link>
                ,{" "}
                <Link href="/services/furniture-and-mattress-removal">
                  furniture and mattress removal
                </Link>
                ,{" "}
                <Link href="/services/appliance-removal">appliance removal</Link>
                ,{" "}
                <Link href="/services/estate-cleanouts">estate cleanouts</Link>,{" "}
                <Link href="/services/garage-cleanouts">garage cleanouts</Link>,
                and{" "}
                <Link href="/services/construction-debris-removal">
                  construction debris removal
                </Link>
                .
              </p>
              <p>
                We serve the Jacksonville Beaches, including{" "}
                <Link href="/service-areas/jacksonville-beach">
                  junk removal in Jacksonville Beach
                </Link>
                ,{" "}
                <Link href="/service-areas/neptune-beach">junk removal in Neptune Beach</Link>,{" "}
                <Link href="/service-areas/ponte-vedra-beach">junk removal in Ponte Vedra Beach</Link>,
                and{" "}
                <Link href="/service-areas/nocatee">
                  junk removal in Nocatee
                </Link>
                . Want the full picture?{" "}
                <Link href="/blog/how-much-does-junk-removal-cost-in-jacksonville-beach">
                  Read our guide to junk removal costs in Jacksonville Beach
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-label">{pricingPage.faq.eyebrow}</div>
          <h2 className="section-title">
            {pricingPage.faq.title}
            <span className="accent">{pricingPage.faq.titleAccent}</span>
          </h2>
          <FaqAccordion
            items={pricingPage.faq.items.map((i) => ({ q: i.q, a: i.a }))}
          />
        </section>

        <BigCta pre="Free, no-obligation estimates · Flat price before we start" />
      </main>
      <Footer />
    </>
  );
}
