import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { homepage } from "@/lib/content";

// Homepage "What we haul" section.
//
// These cards use their own `haul-*` classes rather than the shared
// `.service-card` styles, because those are still used by the city
// pages and /services. Changing them here would have changed those
// pages too.
export function ServicesPreview() {
  const s = homepage.servicesPreview;

  return (
    <section className="haul-section" id="services">
      <div className="haul-head">
        <div>
          <div className="section-label">{s.eyebrow}</div>
          <h2 className="section-title haul-title">
            {s.title}
            <span className="accent">{s.titleAccent}</span>
          </h2>
        </div>
        {"intro" in s && s.intro && <p className="haul-intro">{s.intro}</p>}
      </div>

      <div className="haul-grid">
        {s.cards.map((card) => {
          const href = card.linkSlug
            ? `/services/${card.linkSlug}`
            : "/contact";
          // The last card is a call to action, not a service, so it gets
          // the dark treatment and the button instead of a photo.
          const isCta = !card.linkSlug;
          const name = card.name.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ));

          return (
            <Link
              key={card.num}
              href={href}
              className={isCta ? "haul-card haul-card-cta" : "haul-card"}
              data-cta={`service-card-${card.num}`}
            >
              {!isCta && (
                <div className="haul-card-photo">
                  <SeoImage
                    src={card.photo}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition:
                        "focal" in card && card.focal
                          ? (card.focal as string)
                          : "center 50%",
                    }}
                  />
                </div>
              )}

              <div className="haul-card-body">
                <div className="haul-card-num">{card.num}</div>
                <h3 className="haul-card-name">
                  {name}
                  {"nameAccent" in card && card.nameAccent && (
                    <>
                      {" "}
                      <span className="accent">{card.nameAccent}</span>
                    </>
                  )}
                </h3>
                <p className="haul-card-desc">{card.desc}</p>
                {isCta ? (
                  <span className="haul-card-btn">
                    {"ctaLabel" in card && card.ctaLabel
                      ? card.ctaLabel
                      : "Get an estimate"}{" "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                ) : (
                  <span className="haul-card-link">
                    Learn more{" "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
