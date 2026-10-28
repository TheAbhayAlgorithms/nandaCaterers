import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { RelatedPages } from "@/components/ui/RelatedPages";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Nanda Caterers",
    };
  }

  return {
    title: `${post.title} | Nanda Caterers Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: "2026-01-15",
    author: {
      "@type": "Organization",
      name: "Nanda Caterers",
    },
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="flex flex-col w-full pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-maroon text-cream pt-28 pb-12 md:pt-36 md:pb-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="text-cream/70 justify-center mb-2 px-0"
          />

          <span className="inline-block px-3 py-1 rounded-full bg-saffron text-charcoal text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs text-cream/70 pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-warm mb-10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Consultation Callout in Article */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-cream border border-turmeric/40 text-center space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
            Planning Your Own Celebration?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 max-w-lg mx-auto">
            Let our senior culinary team bring these authentic flavors and seamless logistics to your upcoming wedding or event.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/quote" variant="primary" size="md">
              <span>Calculate Per-Plate Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/menu" variant="outline" size="md">
              <span>Explore Food Menus</span>
            </Button>
          </div>
        </div>

        {/* Next / Back Navigation */}
        <div className="mt-10 pt-6 border-t border-charcoal/10 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-maroon hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Packages & Menus"
        subtitle="Turn these concepts into a customized dining experience for your guests"
        links={[
          {
            title: "Royal Packages",
            description: "Silver, Gold, and Royal banqueting packages with per-plate pricing.",
            href: "/packages",
            tag: "Pricing",
          },
          {
            title: "Wedding Catering",
            description: "Grand wedding banquets with live counters, sweets & attentive stewards.",
            href: "/services/wedding",
            tag: "Flagship",
          },
          {
            title: "Interactive Pricing Wizard",
            description: "Calculate your estimated per-plate investment in 5 quick steps.",
            href: "/quote",
            tag: "Calculator",
          },
          {
            title: "Client Testimonials",
            description: "Read reviews from families and corporate clients across these cities.",
            href: "/testimonials",
            tag: "Reviews",
          },
        ]}
      />
    </article>
  );
}
