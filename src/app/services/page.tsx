import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { SeoImage } from "@/components/SeoImage";
import { services, servicesIndexPage } from "@/lib/content";

export const metadata: Metadata = {
  title: servicesIndexPage.metaTitle,
  description: servicesIndexPage.metaDescription,
  alternates: { canonical: "/services" },
};

// Index page that lists every service we offer. Auto-generates
// from the `services` array — adding a new service to content.ts
// adds a card here without code changes.
export default function ServicesIndexPage() {
  const p = servicesIndexPage;
  return (
    <>
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
            Services
          </nav>
          <h1>
            {p.h1}
            <span className="accent">{p.h1Accent}</span>
          </h1>
          <p className="lede">{p.lede}</p>
        </section>

        <section className="services" style={{ padding: "100px 40px" }}>
          <div className="section-label">{p.eyebrow}</div>
          <h2 className="section-title">
            We handle <span className="accent">all of it.</span>
          </h2>

          <div className="service-grid">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-card"
                data-cta={`services-index-${s.slug}`}
              >
                <SeoImage
                  src={s.heroPhoto.src}
                  alt={s.heroPhoto.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="name">{s.name}</div>
                  <div className="desc">{s.metaDescription}</div>
                  <span className="arrow-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <BigCta />
      </main>
      <Footer />
    </>
  );
}
