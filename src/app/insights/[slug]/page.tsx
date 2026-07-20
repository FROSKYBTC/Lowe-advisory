import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getAllPosts, getPost } from "@/lib/posts";
import { formatDate, cn } from "@/lib/utils";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [site.founder.name],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: site.founder.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        {/* Header */}
        <header className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-14 sm:py-20">
          <Container className="max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-amber-600"
            >
              <Icon name="arrow-right" size={15} className="rotate-180" />
              All insights
            </Link>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
              <span className="font-medium uppercase tracking-wide text-amber-600">
                {post.category}
              </span>
              <span aria-hidden>•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              {post.description}
            </p>
          </Container>
        </header>

        {/* Body */}
        <div className="py-14 sm:py-16">
          <Container className="max-w-3xl">
            <div
              className={cn("prose-advisory")}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Author card */}
            <div className="mt-14 flex items-center gap-4 rounded-xl border border-ink-100 bg-ink-50 p-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-navy-900 font-serif text-lg font-semibold text-amber-400">
                AL
              </span>
              <div>
                <p className="font-medium text-navy-950">{site.founder.name}</p>
                <p className="text-sm text-ink-500">{site.founder.title}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-navy-950 p-8 text-center">
              <h2 className="text-xl font-semibold text-white">
                Facing a decision like this?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy-300">
                Let's talk through your specific situation. A focused call can
                change how you see the problem.
              </p>
              <Button
                href={site.bookingUrl || "/contact"}
                size="md"
                variant="secondary"
                className="mt-5"
              >
                Book a Strategy Call
                <Icon name="arrow-right" size={16} />
              </Button>
            </div>
          </Container>
        </div>
      </article>
    </>
  );
}
