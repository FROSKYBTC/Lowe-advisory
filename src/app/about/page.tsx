import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.founder.name}, ${site.founder.title} at ${site.name}. ${site.description}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { founder } = site;
  const bioParagraphs = founder.bio
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                About
              </span>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                Strategy built on real operating experience
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
                {site.name} exists for a simple reason: growing businesses
                deserve the same caliber of strategic thinking as the giants —
                without the overhead, the jargon, or the disconnect between
                advice and execution.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FounderPortrait name={founder.name} />
            </div>
          </div>
        </Container>
      </section>

      {/* Founder bio */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-2xl font-semibold text-navy-950">
                  {founder.name}
                </h2>
                <p className="mt-1 text-amber-600">{founder.title}</p>
                <ul className="mt-6 space-y-3">
                  {founder.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Icon
                        name="check-circle"
                        size={16}
                        className="mt-0.5 flex-none text-navy-600"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-5 text-lg leading-relaxed text-ink-700">
                {bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Approach / values */}
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <Value
                  title="Clarity first"
                  body="If we can't explain it simply, we don't understand it well enough yet."
                />
                <Value
                  title="Bias to action"
                  body="Recommendations you can act on this week — not next quarter."
                />
                <Value
                  title="Skin in the game"
                  body="Your outcomes are the metric. We measure success by your results."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-2xl bg-navy-950 px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-semibold text-white">
              Let's see if we're a fit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-navy-300">
              The best way to know if Lowe Advisory can help is a 30-minute
              conversation. No pitch — just a genuine look at your situation.
            </p>
            <div className="mt-7">
              <Button href="/contact" size="lg" variant="secondary">
                Book a Strategy Call
                <Icon name="arrow-right" size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
      <h3 className="text-base font-semibold text-navy-950">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

function FounderPortrait({ name }: { name: string }) {
  return (
    <figure className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-navy-950 shadow-xl">
      <Image
        src="/images/anastasia-lowe-professional.png"
        alt={`${name}, Founder and Principal Advisor at Lowe Advisory`}
        fill
        priority
        sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, calc(100vw - 2.5rem)"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/50 to-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(13,24,48,0.48), transparent)",
        }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white">
        {name} · Founder & Principal Advisor
      </figcaption>
    </figure>
  );
}
