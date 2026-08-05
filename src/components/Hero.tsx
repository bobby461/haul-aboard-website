import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { business, homepage } from "@/lib/content";

// Multicolor Google "G" — official 4-color logo, served as inline SVG
// so it sits cleanly inside the white circle on the orange stat block.
function GoogleG() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.35 11.1H12v2.9h5.34c-.23 1.46-1.7 4.27-5.34 4.27-3.21 0-5.83-2.66-5.83-5.93 0-3.27 2.62-5.93 5.83-5.93 1.83 0 3.05.78 3.75 1.45l2.56-2.46C16.62 3.95 14.55 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.2 0 8.64-3.66 8.64-8.81 0-.59-.06-1.04-.14-1.49z"
        fill="#4285F4"
      />
      <path
        d="M3 12c0 1.45.34 2.82.95 4.04l3.34-2.59A5.93 5.93 0 0 1 6.17 12c0-.51.07-1 .19-1.46L3.02 7.95A8.96 8.96 0 0 0 3 12z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.34c1.62 0 2.71.7 3.33 1.28l2.43-2.37C16.36 3.95 14.5 3.06 12 3.06c-3.6 0-6.7 2.07-8.2 5.07l3.34 2.59c.79-2.36 3-4.38 5.86-4.38z"
        fill="#EA4335"
      />
      <path
        d="M12 20.94c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.78.55-1.83.93-3.12.93-2.39 0-4.42-1.58-5.14-3.78L3.51 16.3C5 19.16 8.27 20.94 12 20.94z"
        fill="#34A853"
      />
    </svg>
  );
}

// Icons used for the three orange stat blocks in the hero.
function StatIcon({ name }: { name: "google-g" | "check" | "hammer" }) {
  if (name === "google-g") {
    return (
      <span className="stat-icon icon-google" aria-hidden="true">
        <GoogleG />
      </span>
    );
  }
  if (name === "check") {
    return (
      <span className="stat-icon icon-check" aria-hidden="true">
        ✓
      </span>
    );
  }
  // hammer
  return (
    <span className="stat-icon icon-hammer" aria-hidden="true">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    </span>
  );
}

export function Hero() {
  const h = homepage.hero;
  return (
    <section className="hero">
      <div
        className="hero-photo"
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      >
        <SeoImage
          src={h.photo.src}
          alt={h.photo.alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-sunburst" aria-hidden="true" />

      {/* Vintage anchor emblem — floats top-right on wide screens */}
      <svg className="emblem hero-emblem" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="arcTop" d="M16,60 A44,44 0 0 1 104,60" />
          <path id="arcBot" d="M22,60 A38,38 0 0 0 98,60" />
        </defs>
        <circle className="disc" cx="60" cy="60" r="57" />
        <circle className="ring" cx="60" cy="60" r="50" />
        <text>
          <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
            HAUL ABOARD
          </textPath>
        </text>
        <text>
          <textPath href="#arcBot" startOffset="50%" textAnchor="middle">
            JAX BEACH · FL
          </textPath>
        </text>
        <path
          className="anchor-ico"
          transform="translate(42,42) scale(1.5)"
          d="M12 2a2 2 0 00-2 2c0 .74.4 1.38 1 1.72V7H8v2h3v9.94A7 7 0 015.07 13H7l-3-4-3 4h2.05A9 9 0 0012 21a9 9 0 009.95-8H24l-3-4-3 4h1.93A7 7 0 0113 18.94V9h3V7h-3V5.72c.6-.34 1-.98 1-1.72a2 2 0 00-2-2z"
        />
      </svg>

      <div>
        <div className="hero-badge-row">
          <span className="script-accent">We Haul It All!</span>
        </div>
        <div className="stat-row" aria-label="Trust signals">
          {h.stats.map((s, i) => (
            <div className="stat-block" key={i}>
              <div className="top">
                {s.top}
                {(s as { topIcon?: string }).topIcon === "star-gold" && (
                  <span className="star" aria-hidden="true">
                    ★
                  </span>
                )}
              </div>
              <div className="label">
                {s.labelIcon && <StatIcon name={s.labelIcon} />}
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <h1 className="headline">
          <span className="line connector">{h.headlineLine1}</span>
          <span className="line brand">{h.headlineBrand}</span>
          <span className="line">
            <span className="for-good">{h.headlineLine3}</span>
          </span>
        </h1>
      </div>

      <div className="meta-row">
        <div className="meta-block">
          <div className="label">{h.metaPitchLabel}</div>
          <div className="body">{h.metaPitchBody}</div>
        </div>

        <a
          href={`tel:${business.phoneRaw}`}
          className="phone-cta"
          data-cta="phone-hero"
        >
          <div className="label" style={{ marginBottom: 12 }}>
            {h.metaPhoneLabel}
          </div>
          <div className="num">{business.phone}</div>
          <div className="sub">{h.metaPhoneSub}</div>
        </a>

        <Link href="/contact" className="primary-cta" data-cta="estimate-hero">
          <div>
            <div className="label-sm">{h.primaryCtaSubLabel}</div>
            <div className="label-lg">{h.primaryCtaLabel}</div>
          </div>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
