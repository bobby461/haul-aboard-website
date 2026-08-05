import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { business, contactPage } from "@/lib/content";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
  alternates: { canonical: "/contact" },
};

export default function ContactPageRoute() {
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
            Contact
          </nav>
          <h1>
            {contactPage.h1}
            <span className="accent">{contactPage.h1Accent}</span>
          </h1>
          <p className="lede">{contactPage.lede}</p>
        </section>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <div className="section-label">Free Estimate</div>
              <h2 className="section-title" style={{ marginBottom: 30 }}>
                Tell us what's <span className="accent">going.</span>
              </h2>
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <div className="contact-info-card">
                <div className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Or call direct
                </div>
                <a href={`tel:${business.phoneRaw}`} className="contact-phone-num" data-cta="phone-contact-aside">
                  {business.phone}
                </a>
                <div className="contact-hours">
                  <div>{business.hours.weekdays}</div>
                  <div>{business.hours.saturday}</div>
                  <div>{business.hours.sunday}</div>
                </div>
                <a href={`mailto:${business.email}`} className="contact-email">
                  {business.email}
                </a>
                <div className="contact-area">
                  <strong>Service area</strong>
                  <p>{business.serviceArea}</p>
                </div>
                <a
                  href={business.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-directions"
                  data-cta="directions-contact"
                >
                  Get directions →
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
