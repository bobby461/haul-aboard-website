"use client";

import Link from "next/link";
import { useState } from "react";
import { business, navigation, services, locations } from "@/lib/content";

// Top navigation. Two of the items in `navigation.primary` open
// dropdowns:
//   - Services → all 17 services
//   - Service Areas → all 14 locations (towns + counties)
// On desktop the dropdown opens on hover and on focus (keyboard).
// On mobile the same item turns into a collapsible sub-section.

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        {/* Text wordmark logo. Bobby: to use the real brand-board logo
            instead, drop a transparent PNG at /public/images/brand/logo.png
            and swap this block back to a next/image <Image>. */}
        <Link href="/" className="logo logo-wordmark" aria-label="Haul Aboard Junk Removal — home">
          <span className="logo-line1">
            HAUL <span className="logo-accent">ABOARD</span>
          </span>
          <span className="logo-line2">Junk Removal</span>
        </Link>

        <ul className="nav-links" role="menubar">
          {navigation.primary.map((item) => {
            const dropdown = "dropdown" in item ? item.dropdown : undefined;
            if (dropdown === "services") {
              return (
                <li
                  key={item.href}
                  className="nav-item-with-dropdown"
                  role="none"
                >
                  <Link href={item.href} role="menuitem" className="nav-trigger">
                    {item.label}
                    <span className="nav-caret" aria-hidden="true">▾</span>
                  </Link>
                  <div className="nav-dropdown" role="menu" aria-label="Services">
                    <div className="nav-dropdown-grid nav-dropdown-grid-3">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          role="menuitem"
                        >
                          {s.navLabel}
                        </Link>
                      ))}
                    </div>
                    <div className="nav-dropdown-footer">
                      <Link href="/services">View all services →</Link>
                    </div>
                  </div>
                </li>
              );
            }
            if (dropdown === "locations") {
              const towns = locations.filter((l) => l.kind === "town");
              const counties = locations.filter((l) => l.kind === "county");
              return (
                <li
                  key={item.href}
                  className="nav-item-with-dropdown"
                  role="none"
                >
                  <Link href={item.href} role="menuitem" className="nav-trigger">
                    {item.label}
                    <span className="nav-caret" aria-hidden="true">▾</span>
                  </Link>
                  <div className="nav-dropdown" role="menu" aria-label="Service areas">
                    <div className="nav-dropdown-section">
                      <div className="nav-dropdown-heading">Towns</div>
                      <div className="nav-dropdown-grid nav-dropdown-grid-3">
                        {towns.map((t) => (
                          <Link
                            key={t.slug}
                            href={`/service-areas/${t.slug}`}
                            role="menuitem"
                          >
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="nav-dropdown-section">
                      <div className="nav-dropdown-heading">Counties</div>
                      <div className="nav-dropdown-grid nav-dropdown-grid-2">
                        {counties.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/service-areas/${c.slug}`}
                            role="menuitem"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="nav-dropdown-footer">
                      <Link href="/service-areas">View all service areas →</Link>
                    </div>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.href} role="none">
                <Link href={item.href} role="menuitem">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-right">
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a
            href={`tel:${business.phoneRaw}`}
            className="call-now"
            data-cta="phone-nav"
          >
            <span className="phone-icon" aria-hidden="true"></span>
            Call Now
          </a>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navigation.primary.map((item) => {
          const dropdown = "dropdown" in item ? item.dropdown : undefined;
          if (dropdown === "services") {
            const open = openMobileSection === "services";
            return (
              <div key="services" className="mobile-menu-group">
                <button
                  className={`mobile-menu-trigger ${open ? "open" : ""}`}
                  aria-expanded={open}
                  onClick={() =>
                    setOpenMobileSection(open ? null : "services")
                  }
                >
                  {item.label}
                  <span className="mobile-caret" aria-hidden="true">▾</span>
                </button>
                {open && (
                  <div className="mobile-menu-sublist">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={closeMobile}
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                    <Link href="/services" onClick={closeMobile} className="mobile-menu-all">
                      View all services →
                    </Link>
                  </div>
                )}
              </div>
            );
          }
          if (dropdown === "locations") {
            const open = openMobileSection === "locations";
            return (
              <div key="locations" className="mobile-menu-group">
                <button
                  className={`mobile-menu-trigger ${open ? "open" : ""}`}
                  aria-expanded={open}
                  onClick={() =>
                    setOpenMobileSection(open ? null : "locations")
                  }
                >
                  {item.label}
                  <span className="mobile-caret" aria-hidden="true">▾</span>
                </button>
                {open && (
                  <div className="mobile-menu-sublist">
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/service-areas/${l.slug}`}
                        onClick={closeMobile}
                      >
                        {l.name}
                      </Link>
                    ))}
                    <Link
                      href="/service-areas"
                      onClick={closeMobile}
                      className="mobile-menu-all"
                    >
                      View all service areas →
                    </Link>
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link key={item.href} href={item.href} onClick={closeMobile}>
              {item.label}
            </Link>
          );
        })}
        <Link href="/contact" onClick={closeMobile} className="mobile-menu-all">
          Get My Free Estimate
        </Link>
      </div>
    </>
  );
}
