import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqPage } from "@/lib/content";
import { faqSchema, breadcrumbSchema, asScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
  alternates: { canonical: "/faq" },
};

export default function FaqPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          faqSchema(faqPage.items.map((i) => ({ q: i.q, a: i.a })))
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
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
            FAQ
          </nav>
          <h1>
            {faqPage.h1}
            <span className="accent">{faqPage.h1Accent}</span>
          </h1>
          <p className="lede">{faqPage.lede}</p>
        </section>

        <section className="faq-section">
          <div className="section-label">{faqPage.eyebrow}</div>
          <h2 className="section-title">
            Got questions? <span className="accent">We've got answers.</span>
          </h2>
          <FaqAccordion items={faqPage.items.map((i) => ({ q: i.q, a: i.a }))} />
        </section>

        <BigCta />
      </main>
      <Footer />
    </>
  );
}
