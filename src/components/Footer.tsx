import Link from "next/link";
import { business } from "@/lib/content";

// Site-wide footer. Beyond the legal line, this is the site's main
// internal-linking surface: it appears on every page and points at the
// service + city pages with descriptive, keyword-rich anchor text
// (never "click here"). It also repeats the NAP (name/address/phone),
// hours, and rating consistently on every page, which is what local
// search wants to see.
//
// Links are hand-picked rather than auto-generated from the full
// services/locations arrays so the footer stays a curated shortlist of
// the pages we actually want to rank, not a 30-link dump.

const FOOTER_SERVICES: { href: string; label: string }[] = [
  { href: "/services/hot-tub-removal", label: "Hot Tub Removal" },
  {
    href: "/services/furniture-and-mattress-removal",
    label: "Furniture & Mattress Removal",
  },
  { href: "/services/appliance-removal", label: "Appliance Removal" },
  { href: "/services/estate-cleanouts", label: "Estate Cleanouts" },
  { href: "/services/hoarder-cleanouts", label: "Hoarder Cleanouts" },
  {
    href: "/services/construction-debris-removal",
    label: "Construction Debris Removal",
  },
  { href: "/services/garage-cleanouts", label: "Garage Cleanouts" },
  { href: "/services/basement-cleanouts", label: "Basement Cleanouts" },
  { href: "/services", label: "All Junk Removal Services →" },
];

const FOOTER_AREAS: { href: string; label: string }[] = [
  { href: "/service-areas/jacksonville-beach", label: "Junk Removal Jacksonville Beach, FL" },
  { href: "/service-areas/neptune-beach", label: "Junk Removal Neptune Beach, FL" },
  { href: "/service-areas/atlantic-beach", label: "Junk Removal Atlantic Beach, FL" },
  { href: "/service-areas/ponte-vedra-beach", label: "Junk Removal Ponte Vedra Beach, FL" },
  { href: "/service-areas/ponte-vedra", label: "Junk Removal Ponte Vedra, FL" },
  { href: "/service-areas/nocatee", label: "Junk Removal Nocatee, FL" },
  { href: "/service-areas", label: "All Service Areas →" },
];

const FOOTER_COMPANY: { href: string; label: string }[] = [
  { href: "/prices", label: "Junk Removal Prices" },
  { href: "/about", label: "About Haul Aboard" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Guides & Resources" },
  { href: "/contact", label: "Get a Free Estimate" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-heading">Haul Aboard</div>
          <p className="footer-text">
            Locally owned junk removal serving the Jacksonville Beaches — Jax
            Beach, Neptune Beach, Atlantic Beach, Ponte Vedra &amp; Nocatee.
            Same-day service, free on-site estimates, and a flat price before we
            start.
          </p>
          <a className="footer-phone" href={`tel:${business.phoneRaw}`}>
            {business.phone}
          </a>
          <a className="footer-link-plain" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          <div className="footer-text">
            {business.hours.weekdays}
            <br />
            {business.hours.saturday} <span className="accent">·</span>{" "}
            {business.hours.sunday}
          </div>
          <div className="footer-text">
            <span className="accent">★</span> Run by the same owner as{" "}
            {business.sister.name}, {business.sister.region}&apos;s top-rated
            junk removal crew
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Services</div>
          <ul className="footer-list">
            {FOOTER_SERVICES.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Service Areas</div>
          <ul className="footer-list">
            {FOOTER_AREAS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Company</div>
          <ul className="footer-list">
            {FOOTER_COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-row">
        <div>
          © {year} Haul Aboard Junk Removal LLC{" "}
          <span className="accent">·</span> Jacksonville Beach Owned &amp; Operated
        </div>
        <div>
          Licensed <span className="accent">·</span> Insured{" "}
          <span className="accent">·</span> {business.phone}
        </div>
      </div>
    </footer>
  );
}
