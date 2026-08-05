import { business, homepage } from "@/lib/content";

// Homepage reviews block — two stacked slabs:
//   1. Dark "header" with the eyebrow + headline + Google rating
//   2. Light "body" with three hand-picked review cards + CTA
// The split keeps the headline reading like a section header rather
// than getting buried inside a long dark block. Full set lives at
// /reviews. We dropped the Elfsight widget on 2026-05-21 — hand-coded
// cards work every time, load instantly, and get indexed for SEO.
export function ReviewsSection() {
  const r = homepage.reviewsSection;
  const featured = homepage.realReviews.slice(0, 3);

  return (
    <>
      <section className="reviews-section-header" id="reviews">
        <div className="section-label">{r.eyebrow}</div>
        <h2 className="section-title">
          {r.title}
          <span style={{ color: "var(--orange)" }}>{r.titleAccent}</span>
          {r.titleAfter}
        </h2>
        {"intro" in r && r.intro ? (
          <p className="reviews-intro">{r.intro}</p>
        ) : null}
        <div
          className="reviews-rating-display"
          aria-label={`${business.sister.reviewRating} stars from ${business.sister.reviewCount}+ Google reviews at our Delaware company, ${business.sister.name}`}
        >
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="num">{business.sister.reviewRating}</span>
          <span className="from">
            {business.sister.reviewCount}+ reviews at {business.sister.name},{" "}
            {business.sister.region}
          </span>
        </div>
      </section>

      <section className="reviews-section-body">
        <div className="testimonial-grid reviews-testimonial-grid">
          {featured.map((rev, i) => (
            <figure className="testimonial-light" key={i}>
              <div className="stars" aria-label={`${rev.rating} star rating`}>
                {"★".repeat(rev.rating)}
              </div>
              <blockquote className="quote">{rev.quote}</blockquote>
              <figcaption className="meta">
                <span className="name">{rev.name}</span>
                {rev.details}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href={business.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="google-reviews-out"
          >
            {r.ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
