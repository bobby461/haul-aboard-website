import Link from "next/link";
import { homepage } from "@/lib/content";

// Homepage body-copy + internal-links block.
//
// 93% of the site's clicks land on the homepage while the service and
// city pages sit on page 4-7, so this section does two things: it puts
// the target keywords into genuine homepage copy, and it pushes link
// equity down to the pages we want ranking — with descriptive anchor
// text ("Junk removal in Neptune Beach, FL"), never "click here".

const SERVICE_LINKS: { href: string; label: string }[] = [
  { href: "/services/hot-tub-removal", label: "Hot tub removal in Jacksonville Beach" },
  {
    href: "/services/furniture-and-mattress-removal",
    label: "Furniture & mattress removal",
  },
  { href: "/services/appliance-removal", label: "Appliance removal in Jacksonville Beach" },
  { href: "/services/estate-cleanouts", label: "Estate cleanouts in Jacksonville Beach" },
  {
    href: "/services/construction-debris-removal",
    label: "Construction debris removal",
  },
  { href: "/services/garage-cleanouts", label: "Garage cleanouts in Jacksonville Beach" },
  { href: "/prices", label: "How our pricing works →" },
];

const AREA_LINKS: { href: string; label: string }[] = [
  { href: "/service-areas/jacksonville-beach", label: "Junk removal in Jacksonville Beach, FL" },
  { href: "/service-areas/neptune-beach", label: "Junk removal in Neptune Beach, FL" },
  { href: "/service-areas/atlantic-beach", label: "Junk removal in Atlantic Beach, FL" },
  { href: "/service-areas/ponte-vedra-beach", label: "Junk removal in Ponte Vedra Beach, FL" },
  { href: "/service-areas/ponte-vedra", label: "Junk removal in Ponte Vedra, FL" },
  { href: "/service-areas/nocatee", label: "Junk removal in Nocatee, FL" },
  { href: "/service-areas", label: "Every town we serve →" },
];

export function HomeSeoLinks() {
  const s = homepage.seoLinks;
  return (
    <section className="local-intro">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">{s.eyebrow}</div>
        <h2 className="section-title">
          {s.title}
          <span className="accent">{s.titleAccent}</span>
        </h2>

        <div className="local-intro-text" style={{ maxWidth: 860 }}>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="home-links-grid">
          <div>
            <h3 className="home-links-heading">{s.servicesHeading}</h3>
            <ul className="home-links-list">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="home-links-heading">{s.areasHeading}</h3>
            <ul className="home-links-list">
              {AREA_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
