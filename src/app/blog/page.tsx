import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { SeoImage } from "@/components/SeoImage";
import { blogIndexPage } from "@/lib/content";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: blogIndexPage.metaTitle,
  description: blogIndexPage.metaDescription,
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPageRoute() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
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
            Resources
          </nav>
          <h1>
            {blogIndexPage.h1}
            <span className="accent">{blogIndexPage.h1Accent}</span>
          </h1>
          <p className="lede">{blogIndexPage.lede}</p>
        </section>

        <section className="blog-index">
          <div className="section-label">{blogIndexPage.eyebrow}</div>
          <h2 className="section-title">
            Read up <span className="accent">on the work.</span>
          </h2>

          {posts.length === 0 ? (
            <div className="blog-empty">
              <h3>{blogIndexPage.emptyHeading}</h3>
              <p>{blogIndexPage.emptyBody}</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="blog-card"
                  data-cta={`blog-card-${p.slug}`}
                >
                  <div className="blog-card-img">
                    <SeoImage
                      src={p.featuredImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-date">{formatPostDate(p.date)}</div>
                    <h3 className="blog-card-title">{p.title}</h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <span className="arrow-link" style={{ color: "var(--orange)" }}>
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <BigCta />
      </main>
      <Footer />
    </>
  );
}
