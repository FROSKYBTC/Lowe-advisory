import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on strategy, operations, and growth for small and mid-sized businesses — from Lowe Advisory.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            Insights
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Thinking that helps you decide
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Field-tested perspectives on strategy, operations, and growth —
            written for owners, not academics.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {featured && <FeaturedCard post={featured} />}
              {rest.length > 0 && (
                <>
                  <h2 className="mt-16 text-sm font-semibold uppercase tracking-wide text-ink-500">
                    More insights
                  </h2>
                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((p) => (
                      <PostCard key={p.slug} post={p} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}

function FeaturedCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all hover:border-navy-200 hover:shadow-lg lg:grid-cols-2"
    >
      <div className="relative min-h-[200px] bg-gradient-to-br from-navy-800 to-navy-950 p-8 lg:min-h-[280px]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(30rem 15rem at 70% 20%, rgba(217,162,62,0.3), transparent 60%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-between">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-navy-950">
            Featured
          </span>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
              {post.category}
            </span>
            <p className="mt-2 font-serif text-2xl font-semibold text-white">
              {post.title}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8">
        <div className="flex items-center gap-3 text-xs text-ink-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>•</span>
          <span>{post.readTime}</span>
        </div>
        <p className="mt-3 text-ink-700">{post.description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors group-hover:text-amber-600">
          Read article
          <Icon
            name="arrow-right"
            size={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md"
    >
      <span className="text-xs font-medium uppercase tracking-wider text-amber-600">
        {post.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-navy-950 group-hover:text-navy-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
        {post.description}
      </p>
      <div className="mt-5 flex items-center gap-3 text-xs text-ink-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>•</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-ink-200 bg-ink-50 px-6 py-16 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-600 shadow-sm">
        <Icon name="sparkles" size={22} />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-950">
        Insights coming soon
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-600">
        We're putting the finishing touches on our first articles. In the
        meantime, get in touch — we're happy to share thinking directly.
      </p>
      <Button href="/contact" size="md" variant="primary" className="mt-6">
        Get in touch
      </Button>
    </div>
  );
}
