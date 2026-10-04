import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { business, homepage } from "@/lib/content";

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

      <div>
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
          <div className="label">{h.metaPhoneLabel}</div>
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
