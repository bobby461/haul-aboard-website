import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { FaqAccordion } from "./FaqAccordion";
import type { ServiceDetail } from "@/lib/content";
import { services } from "@/lib/content";

// Group of section components used by both /services/[slug] and the
// city+service combo page. Each takes a slice of ServiceDetail and
// short-circuits to null if its data isn't populated yet.

export function WhatWeHandle({ data }: { data: ServiceDetail["whatWeHandle"] }) {
  if (!data) return null;
  return (
    <section className="what-we-haul">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="what-we-haul-grid">
        <div className="what-we-haul-text">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div>
          <div
            className="section-label"
            style={{ fontSize: 11, marginBottom: 16 }}
          >
            {data.includesEyebrow}
          </div>
          <ul className="haul-list">
            {data.includesList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PhotoBanner({ data }: { data: ServiceDetail["banner"] }) {
  if (!data) return null;
  return (
    <div className="photo-banner">
      <div className="photo-banner-img">
        <SeoImage
          src={data.photo.src}
          alt={data.photo.alt}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: data.photo.focal ?? "center 25%",
          }}
        />
      </div>
      <div className="photo-banner-text">
        {data.text}
        <span className="accent">{data.textAccent}</span>
      </div>
    </div>
  );
}

export function HowItWorks({ data }: { data: ServiceDetail["howItWorks"] }) {
  if (!data) return null;
  return (
    <section className="how-it-works">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="steps-grid">
        {data.steps.map((s) => (
          <div className="step" key={s.num}>
            <div className="step-number">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingBlock({ data }: { data: ServiceDetail["pricing"] }) {
  if (!data) return null;
  return (
    <section className="pricing-block">
      <div className="pricing-grid">
        <div>
          <div className="section-label">{data.eyebrow}</div>
          <h2 className="section-title">
            {data.title}
            <span className="accent">{data.titleAccent}</span>
          </h2>
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="pricing-cta-card">
          <div className="pre">{data.cardPre}</div>
          <div className="lg">
            {data.cardLg.split("\n").map((l, i, arr) => (
              <span key={i}>
                {l}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </div>
          <Link href="/contact" className="btn-white" data-cta="estimate-pricing">
            Get My Free Estimate →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedServices({ data }: { data: ServiceDetail["related"] }) {
  if (!data) return null;
  return (
    <section className="related">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="related-grid">
        {data.slugs.map((slug) => {
          const svc = services.find((s) => s.slug === slug);
          if (!svc) return null;
          return (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="related-card"
            >
              <SeoImage
                src={svc.heroPhoto.src}
                alt={svc.heroPhoto.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="name">{svc.name}</div>
              <span className="arrow-link">Learn more →</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function FaqSection({ data }: { data: ServiceDetail["faq"] }) {
  if (!data) return null;
  return (
    <section className="faq-section">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>
      <FaqAccordion items={data.items} />
    </section>
  );
}
