import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { PageHero } from "@/components/PageHero";
import {
  WhatWeHandle,
  PhotoBanner,
  HowItWorks,
  PricingBlock,
  RelatedServices,
  FaqSection,
} from "@/components/ServicePageSections";
import {
  services,
  getServiceBySlug,
  getServiceDetail,
} from "@/lib/content";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  asScript,
} from "@/lib/schema";

// Static-generate one page per service slug at build time.
// Adding a new service to content.ts gives you a new page automatically.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const detail = getServiceDetail(slug);
  const heroPhoto = detail?.hero?.photo ?? svc.heroPhoto;
  const lede = detail?.hero?.lede ?? svc.heroLede;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(serviceSchema(svc))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: svc.name, url: `/services/${svc.slug}` },
          ])
        )}
      />
      {detail?.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={asScript(faqSchema(detail.faq.items))}
        />
      )}
      <Nav />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: svc.name },
          ]}
          h1={detail?.hero?.h1 ?? svc.h1}
          h1Accent={` ${detail?.hero?.h1Accent ?? svc.h1Accent}`}
          lede={lede}
          photo={heroPhoto}
        />

        <WhatWeHandle data={detail?.whatWeHandle} />
        <PhotoBanner data={detail?.banner} />
        <HowItWorks data={detail?.howItWorks} />
        <PricingBlock data={detail?.pricing} />
        <RelatedServices data={detail?.related} />
        <FaqSection data={detail?.faq} />

        <BigCta
          pre={`Free, no-obligation estimates · ${svc.name}`}
        />
      </main>
      <Footer />
    </>
  );
}
