import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { SeoImage } from "@/components/SeoImage";
import { aboutPage, business } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  alternates: { canonical: "/about" },
};

// Long-form About page. The two narrative sections come straight
// from the build brief. To rewrite, edit `aboutPage` in content.ts.
export default function AboutPage() {
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
            }}
          >
            <SeoImage
              src={aboutPage.heroPhoto.src}
              alt={aboutPage.heroPhoto.alt}
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
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
            About
          </nav>
          <h1>
            {aboutPage.h1}{" "}
            <span className="accent">{aboutPage.h1Accent}</span>
          </h1>
        </section>

        <section className="local-intro">
          {aboutPage.sections.map((s, i) => (
            <div key={i} style={{ maxWidth: 760, margin: "0 auto 60px" }}>
              <div className="section-label">{s.heading}</div>
              {s.paragraphs.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: 18,
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  {p}
                </p>
              ))}
              {"photoAfter" in s && s.photoAfter && (
                <figure style={{ margin: "40px 0 0", textAlign: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 480,
                      margin: "0 auto",
                      aspectRatio: "2 / 3",
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <SeoImage
                      src={s.photoAfter.src}
                      alt={s.photoAfter.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 760px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <figcaption
                    style={{
                      fontSize: 15,
                      fontStyle: "italic",
                      color: "#666",
                      marginTop: 12,
                    }}
                  >
                    {s.photoAfter.caption}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </section>

        <BigCta pre={aboutPage.closingCtaPre} />
      </main>
      <Footer />
    </>
  );
}

// Reference business so its NAP info is consistently exported even
// from pages that don't render it directly — keeps tree-shaking honest.
void business;
