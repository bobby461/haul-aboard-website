import Link from "next/link";
import { TrashCan, Box, Washer, Couch, Anchor } from "./BrandArt";
import { business, homepage } from "@/lib/content";

const SERVICE_ICONS = {
  trash: TrashCan,
  box: Box,
  washer: Washer,
  couch: Couch,
} as const;

// Poster-style hero from the brand board: cream paper, "We Haul It All!"
// as the headline, the fishing mascot to the right, honest trust badges,
// and an orange service-icon row + serving bar underneath.
export function Hero() {
  const h = homepage.hero;
  return (
    <section className="hero-poster">
      <div className="hero-poster-inner">
        {/* Eyebrow + slogan span the FULL width of the hero, above the
            two columns. That fills the dead space that used to sit to the
            right of the headline and lets "WE HAUL IT ALL!" run on one
            line at poster scale instead of stacking. */}
        <div className="hero-poster-head">
          <div className="hero-eyebrow">
            <Anchor className="hero-eyebrow-anchor" />
            {h.eyebrow}
          </div>
          <h1 className="hero-slogan">
            <span className="l1">{h.headline1}</span>{" "}
            <span className="l2">{h.headline2}</span>
          </h1>
        </div>

        <div className="hero-poster-copy">
          <p className="hero-lede">{h.lede}</p>

          <div className="hero-cta-row">
            <Link href="/contact" className="primary-cta" data-cta="estimate-hero">
              <div>
                <div className="label-sm">{h.primaryCtaSubLabel}</div>
                <div className="label-lg">{h.primaryCtaLabel}</div>
              </div>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a href={`tel:${business.phoneRaw}`} className="phone-cta" data-cta="phone-hero">
              <div className="num">{business.phone}</div>
              <div className="sub">{h.metaPhoneSub}</div>
            </a>
          </div>
        </div>

        <div className="hero-poster-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/mascot-fishing.svg"
            alt={h.mascot.alt}
            className="hero-mascot-img"
          />
        </div>

        {/* Badges get the full width of the hero so all three stay on one
            line at every desktop/tablet size instead of wrapping the last
            one onto a row by itself. */}
        <ul className="hero-badges">
          {h.badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Orange service-icon row (brand-board social post) */}
      <div className="service-row">
        {h.serviceRow.map((s) => {
          const Icon = SERVICE_ICONS[s.icon];
          return (
            <Link href={s.href} key={s.label} className="service-row-item">
              <span className="service-row-icon">
                <Icon />
              </span>
              <span className="service-row-label">{s.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="serving-bar">
        <Anchor className="serving-anchor" />
        {h.servingBar}
        <Anchor className="serving-anchor" />
      </div>
    </section>
  );
}
