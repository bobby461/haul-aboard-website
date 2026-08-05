import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { homepage } from "@/lib/content";

export function ServicesPreview() {
  const s = homepage.servicesPreview;

  return (
    <section className="services" id="services">
      <div className="section-label">{s.eyebrow}</div>
      <h2 className="section-title">
        {s.title}
        <span className="accent">{s.titleAccent}</span>
      </h2>

      <div className="service-grid">
        {s.cards.map((card) => {
          const href = card.linkSlug
            ? `/services/${card.linkSlug}`
            : "/contact";
          return (
            <Link
              key={card.num}
              href={href}
              className="service-card"
              data-cta={`service-card-${card.num}`}
            >
              <SeoImage
                src={card.photo}
                alt={card.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="service-card-body">
                <div className="name">
                  {card.name.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </div>
                <div className="desc">{card.desc}</div>
                <span className="arrow-link">
                  {"ctaLabel" in card && card.ctaLabel
                    ? card.ctaLabel
                    : "Learn more"}{" "}
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
