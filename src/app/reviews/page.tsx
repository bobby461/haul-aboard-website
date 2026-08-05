import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { business, reviewsPage, homepage } from "@/lib/content";

export const metadata: Metadata = {
  title: reviewsPage.metaTitle,
  description: reviewsPage.metaDescription,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPageRoute() {
  return (
    <>
      <Nav />
      <main>
        {/* `reviews-hero` modifier collapses the section to the size of
            its content (no big empty black slab) and centers the
            headline + lede so the layout doesn't read lopsided. */}
        <section className="page-hero reviews-hero">
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
            Reviews
          </nav>
          <h1>
            {reviewsPage.h1}
            <span className="accent">{reviewsPage.h1Accent}</span>
          </h1>
          <p className="lede">{reviewsPage.lede}</p>
        </section>

        {/* Haul Aboard is brand-new and has no reviews of its own yet, so
            there is no live review widget here. Instead we show real,
            verbatim 5-star Google reviews of the owner's Delaware company,
            Junk Away — each card is tagged "· Junk Away, DE" and an
            attribution line above the grid makes the source explicit.
            Swap this for a live Google/HCP widget once Haul Aboard has
            collected its own Florida reviews. */}
        <section className="reviews-section-body">
          <p className="reviews-attribution">{reviewsPage.attribution}</p>
          <div className="testimonial-grid reviews-testimonial-grid reviews-full-grid">
            {homepage.realReviews.map((rev, i) => (
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
              data-cta="leave-google-review"
            >
              {reviewsPage.leaveReviewLabel}
            </a>
          </div>
        </section>

        <BigCta />
      </main>
      <Footer />
    </>
  );
}
