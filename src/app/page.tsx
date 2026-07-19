import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  site,
  services,
  processSteps,
  valueProps,
  stats,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ValueProps />
      <Services />
      <Process />
      <Testimonials />
      <CtaSection />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(217,162,62,0.10), transparent 60%), radial-gradient(50rem 28rem at 0% 10%, rgba(45,78,135,0.08), transparent 55%)",
        }}
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-navy-700 shadow-sm">
            <Icon name="sparkles" size={14} className="text-amber-500" />
            {site.tagline}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
            Turn business complexity into{" "}
            <span className="text-amber-500">clear, profitable action</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Lowe Advisory partners with small and mid-sized businesses to sharpen
            strategy, fix operations, and build the momentum to grow — with
            senior-level thinking and without the big-firm overhead.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" variant="secondary">
              Book a Strategy Call
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-500">
            No pressure, no obligation. A focused 30-minute conversation about
            your business.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── Stats strip ───────────────────── */
function StatsStrip() {
  return (
    <section className="border-y border-navy-800 bg-navy-950">
      <Container className="grid grid-cols-2 gap-px py-0 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-8 text-center sm:py-10">
            <div className="font-serif text-3xl font-semibold text-amber-400 sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-navy-300">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ───────────────────── Value props ───────────────────── */
function ValueProps() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Lowe Advisory"
          title="Senior counsel, built for growing businesses"
          subtitle="You don't need a hundred-slide deck. You need clear thinking, the right priorities, and someone who'll see it through with you."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Icon name="check-circle" size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-950">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── Services ───────────────────── */
function Services() {
  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Services that move the needle"
          subtitle="Focused engagements designed to deliver measurable outcomes — revenue, margin, runway, clarity."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group rounded-xl border border-ink-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-navy-950">
                <Icon name={s.icon as IconName} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {s.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors group-hover:text-amber-600">
                Learn more
                <Icon
                  name="arrow-right"
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── Process ───────────────────── */
function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from stuck to momentum"
          subtitle="No black boxes. Here's exactly what working together looks like."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="font-serif text-5xl font-semibold text-navy-100">
                {p.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy-950">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {p.description}
              </p>
              {i < processSteps.length - 1 && (
                <Icon
                  name="arrow-right"
                  size={20}
                  className="absolute -right-3 top-8 hidden text-navy-200 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── Testimonials ───────────────────── */
function Testimonials() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Trusted by founders and owners"
          subtitle="Real results from real engagements. (Profiles kept anonymous at client request.)"
          dark
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-navy-800 bg-navy-900 p-7"
            >
              <Icon name="quote" size={28} className="text-amber-400" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-200">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-800 pt-4">
                <div className="font-medium text-white">{t.name}</div>
                <div className="text-xs text-navy-400">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── CTA ───────────────────── */
function CtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(40rem 20rem at 80% 0%, rgba(217,162,62,0.18), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to find your next move?
            </h2>
            <p className="mt-4 text-navy-300">
              Let's have a focused conversation about your business — where you
              are, where you want to be, and the fastest path between them.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg" variant="secondary">
                Book a Strategy Call
                <Icon name="arrow-right" size={18} />
              </Button>
              <Button
                href={`mailto:${site.contactEmail}`}
                size="lg"
                variant="outline"
                className="border-navy-700 bg-transparent text-white hover:bg-navy-800 hover:border-navy-600"
              >
                <Icon name="mail" size={18} />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
