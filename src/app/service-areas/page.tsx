import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { locations, serviceAreasIndexPage } from "@/lib/content";

export const metadata: Metadata = {
  title: serviceAreasIndexPage.metaTitle,
  description: serviceAreasIndexPage.metaDescription,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndexPage() {
  const p = serviceAreasIndexPage;
  const towns = locations.filter((l) => l.kind === "town");
  const counties = locations.filter((l) => l.kind === "county");

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
            Service Areas
          </nav>
          <h1>
            {p.h1}
            <span className="accent">{p.h1Accent}</span>
          </h1>
          <p className="lede">{p.lede}</p>
        </section>

        <section className="other-areas">
          <div className="section-label">{p.townsHeading}</div>
          <h2 className="section-title">
            Towns we <span className="accent">serve.</span>
          </h2>
          <div className="areas-grid">
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/service-areas/${t.slug}`}
                className="area-link"
              >
                <span className="name">{t.name}</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="other-areas" style={{ background: "var(--bg)" }}>
          <div className="section-label">{p.countiesHeading}</div>
          <h2 className="section-title">
            Counties we <span className="accent">cover.</span>
          </h2>
          <div className="areas-grid">
            {counties.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="area-link"
              >
                <span className="name">{c.name}</span>
                <span className="arrow" aria-hidden="true">→</span>
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
