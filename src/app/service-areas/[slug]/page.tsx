import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { PageHero } from "@/components/PageHero";
import {
  LocalIntro,
  LocationServices,
  Testimonials,
  OtherAreas,
} from "@/components/LocationPageSections";
import {
  locations,
  getLocationBySlug,
  getLocationDetail,
  getLocationTestimonials,
} from "@/lib/content";
import {
  breadcrumbSchema,
  asScript,
} from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/service-areas/${loc.slug}` },
  };
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const detail = getLocationDetail(slug);
  const heroPhoto = detail?.hero?.photo ?? loc.heroPhoto;
  const lede = detail?.hero?.lede;

  // Real Google reviews for this area, replacing the old placeholder
  // testimonials. Keep the section's heading; swap in real review items.
  const testimonials = detail?.testimonials
    ? { ...detail.testimonials, items: getLocationTestimonials(loc) }
    : undefined;

  return (
    <>
      {/* LocalBusiness JSON-LD (with NAP, hours, service area, and the
          licensed & insured AggregateRating) is now emitted sitewide from the root
          layout, so every city page is snippet-eligible. This page keeps
          its own Breadcrumb schema. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
            { name: loc.nameWithState, url: `/service-areas/${loc.slug}` },
          ])
        )}
      />
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas" },
            { label: loc.name },
          ]}
          h1={`Junk Removal in `}
          h1Accent={loc.nameWithState + "."}
          lede={lede}
          photo={heroPhoto}
          stats={detail?.hero?.stats}
        />

        <LocalIntro data={detail?.localIntro} parentLocation={loc} />
        {detail?.guide && (
          <section className="local-guide-line">
            <p>
              {detail.guide.blurb}{" "}
              <Link href={detail.guide.href}>{detail.guide.anchor}</Link>.
            </p>
          </section>
        )}
        <LocationServices
          data={detail?.servicesPreview}
          locationSlug={loc.slug}
        />
        <Testimonials data={testimonials} />
        <OtherAreas data={detail?.otherAreas} />

        <BigCta
          pre={`Free, no-obligation estimates · ${loc.nameWithState}`}
        />
      </main>
      <Footer />
    </>
  );
}
