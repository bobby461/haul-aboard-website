import Link from "next/link";
import { SeoImage } from "./SeoImage";
import { FaqAccordion } from "./FaqAccordion";
import type { LocationDetail, Location } from "@/lib/content";
import { services, locations, business } from "@/lib/content";

// Section components for /service-areas/[slug]. Each is a no-op
// if its data isn't populated.

export function LocalIntro({
  data,
  parentLocation,
}: {
  data: LocationDetail["localIntro"];
  parentLocation: Location;
}) {
  if (!data) return null;
  const isCounty = parentLocation.kind === "county";

  return (
    <section className="local-intro">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="local-intro-grid">
        <div className="local-intro-text">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="neighborhoods-card">
          {isCounty && data.townsHeading && data.towns ? (
            <>
              <h3>{data.townsHeading}</h3>
              <ul className="neighborhoods-list">
                {data.towns.map((t) => (
                  <li key={t.name}>
                    {t.slug ? (
                      <Link href={`/service-areas/${t.slug}`}>{t.name}</Link>
                    ) : (
                      t.name
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : data.neighborhoodsHeading && data.neighborhoods ? (
            <>
              <h3>{data.neighborhoodsHeading}</h3>
              <ul className="neighborhoods-list">
                {data.neighborhoods.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

// Real recent jobs in this town. The phone number in the closing line
// becomes a tap-to-call link.
export function RecentJobs({ data }: { data: LocationDetail["recentJobs"] }) {
  if (!data || data.jobs.length === 0) return null;
  return (
    <section className="recent-jobs">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      {/* Newer weeks first, then the original week below them. */}
      {data.newerWeeks?.map((w) => (
        <div key={w.intro} style={{ marginBottom: 48 }}>
          <p className="recent-jobs-intro">{w.intro}</p>
          <RecentJobsList jobs={w.jobs} />
          <RecentJobsClosing text={w.closing} />
        </div>
      ))}

      {data.intro && <p className="recent-jobs-intro">{data.intro}</p>}
      <RecentJobsList jobs={data.jobs} />
      <RecentJobsClosing text={data.closing} />
    </section>
  );
}

function RecentJobsList({
  jobs,
}: {
  jobs: NonNullable<LocationDetail["recentJobs"]>["jobs"];
}) {
  return (
    <ul className="recent-jobs-list">
      {jobs.map((j) => (
        <li key={j.title} className="recent-job">
          <h3>{j.title}</h3>
          <p>{j.text}</p>
          <JobPhotos photos={j.photos} />
        </li>
      ))}
    </ul>
  );
}

function RecentJobsClosing({ text }: { text?: string }) {
  const closingParts = text?.split(business.phone);
  if (!closingParts) return null;
  return (
    <p className="recent-jobs-closing">
      {closingParts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <a href={`tel:${business.phoneRaw}`} data-cta="recent-jobs-call">
              {business.phone}
            </a>
          )}
          {part}
        </span>
      ))}
    </p>
  );
}

// Photo strip for a recent job. Real before/after shots, shown in
// square frames because the originals are phone portraits.
export function JobPhotos({
  photos,
}: {
  photos?: { src: string; alt: string; label?: string; focal?: string }[];
}) {
  if (!photos || photos.length === 0) return null;
  return (
    <div className="job-photos" data-count={photos.length}>
      {photos.map((p) => (
        <figure key={p.src} className="job-photo">
          <div className="job-photo-img">
            <SeoImage
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 900px) 45vw, 20vw"
              style={{
                objectFit: "cover",
                objectPosition: p.focal ?? "center 50%",
              }}
            />
          </div>
          {p.label && <figcaption>{p.label}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function LocationServices({
  data,
  locationSlug,
}: {
  data: LocationDetail["servicesPreview"];
  locationSlug: string;
}) {
  if (!data) return null;
  return (
    <section className="services">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="service-grid">
        {data.featuredSlugs.map((slug, idx) => {
          const svc = services.find((s) => s.slug === slug);
          if (!svc) return null;
          // Each card links to the city+service combo page
          // (e.g. /services/hot-tub-removal/wilmington) so users
          // land on the most-local-relevant content.
          return (
            <Link
              key={slug}
              href={`/services/${slug}/${locationSlug}`}
              className="service-card"
              data-cta={`location-service-${slug}`}
            >
              <SeoImage
                src={svc.heroPhoto.src}
                alt={svc.heroPhoto.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="num">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="name">{svc.name}</div>
                <span className="arrow-link">Learn more →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function Testimonials({ data }: { data: LocationDetail["testimonials"] }) {
  if (!data || !data.items || data.items.length === 0) return null;
  return (
    <section className="testimonials">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="testimonial-grid">
        {data.items.map((t, i) => (
          <div className="testimonial" key={i}>
            <div className="stars" aria-label={`${t.rating} stars`}>
              {"★".repeat(Math.max(0, Math.min(5, t.rating)))}
            </div>
            <div className="quote">{t.quote}</div>
            <div className="meta">
              <span className="name">{t.name}</span>
              {t.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// City-specific FAQ. Same markup as the service-page FaqSection so the
// two look identical. The FAQPage JSON-LD is emitted by the page, not
// here, so the schema and the visible answers stay in one data source.
export function LocationFaq({ data }: { data: LocationDetail["faq"] }) {
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

export function OtherAreas({ data }: { data: LocationDetail["otherAreas"] }) {
  if (!data) return null;
  return (
    <section className="other-areas">
      <div className="section-label">{data.eyebrow}</div>
      <h2 className="section-title">
        {data.title}
        <span className="accent">{data.titleAccent}</span>
      </h2>

      <div className="areas-grid">
        {data.slugs.map((slug) => {
          const loc = locations.find((l) => l.slug === slug);
          if (!loc) return null;
          return (
            <Link
              key={slug}
              href={`/service-areas/${slug}`}
              className="area-link"
            >
              <span className="name">{loc.name}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
