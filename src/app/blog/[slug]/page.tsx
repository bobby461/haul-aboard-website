import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BigCta } from "@/components/BigCta";
import { SeoImage } from "@/components/SeoImage";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, asScript } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(articleSchema(post))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={asScript(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Resources", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ])
        )}
      />
      <Nav />
      <main>
        <section className="page-hero blog-post-hero">
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
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
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
            <Link href="/blog">Resources</Link>
            <span className="sep">/</span>
            {post.title}
          </nav>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            {formatPostDate(post.date)} · {post.author}
          </div>
        </section>

        <article
          className="blog-post-body"
          // bodyHtml is generated from author-controlled markdown (gray-matter
          // + marked). Markdown source is in /content/blog/*.md and edited
          // only by the site owner — no user-submitted content reaches this.
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        <BigCta />
      </main>
      <Footer />
    </>
  );
}
