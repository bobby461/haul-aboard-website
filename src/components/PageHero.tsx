import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { business } from "@/lib/content";

// Compact hero used by every page that isn't the homepage:
// service, location, blog, about, faq, contact, reviews.
//
// Renders breadcrumbs, an H1 (with optional accent span), an
// optional lede paragraph, optional location-style stats, and
// the standard "Get My Free Estimate / Call Now" CTA pair.

export type PageHeroProps = {
  breadcrumbs: { label: string; href?: string }[];
  h1: string;
  h1Accent?: string;
  lede?: string;
  photo: { src: string; alt: string; focal?: string };
  stats?: { num: string; label: string }[]; // 3 items, location-page style
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function PageHero({
  breadcrumbs,
  h1,
  h1Accent,
  lede,
  photo,
  stats,
  ctaPrimary = {
    label: "Get My Free Estimate →",
    href: "/contact",
  },
  ctaSecondary = {
    label: "Call Now",
    href: `tel:${business.phoneRaw}`,
  },
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-photo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <SeoImage
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          style={{
            objectFit: "cover",
            objectPosition: photo.focal ?? "center 25%",
          }}
        />
      </div>
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
        {breadcrumbs.map((c, i) => (
          <span key={i}>
            {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            {i < breadcrumbs.length - 1 && <span className="sep">/</span>}
          </span>
        ))}
      </nav>

      <h1>
        {h1}
        {h1Accent && <span className="accent">{h1Accent}</span>}
      </h1>

      {lede && <p className="lede">{lede}</p>}

      {stats && stats.length > 0 && (
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div className="hero-stat" key={i}>
              <span className="num">{s.num}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="hero-cta-row">
        <Link
          href={ctaPrimary.href}
          className="btn-primary"
          data-cta="estimate-page-hero"
        >
          {ctaPrimary.label}
        </Link>
        <a
          href={ctaSecondary.href}
          className="btn-secondary"
          data-cta="phone-page-hero"
        >
          {ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
