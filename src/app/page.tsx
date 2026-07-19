import Link from "next/link";
import Image from "next/image";
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
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <InflectionPoints />
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
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-navy-700 shadow-sm">
            <Icon name="sparkles" size={14} className="text-amber-500" />
            {site.tagline}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-5xl lg:text-[4.1rem]">
            Your business outgrew the old way of running it.
            <span className="block text-amber-500">Now build what&apos;s next.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Lowe Advisory helps owner-led businesses turn growth friction into a
            focused plan — so revenue, margins, and leadership capacity can move
            together.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" variant="secondary">
              Start with a Strategy Call
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <p className="mt-5 text-sm text-ink-500">A focused 30-minute conversation. No pitch deck, no pressure.</p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-4 rounded-[2rem] bg-amber-200/25 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-navy-800 bg-navy-950 p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-navy-800 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">The first 90 days</p>
                  <p className="mt-1 font-serif text-xl font-semibold text-white">Clarity before complexity</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-navy-950"><Icon name="compass" size={20} /></span>
              </div>
              <div className="space-y-5 py-6">
                {[
                  ["01", "Find the constraint", "Identify what is really slowing growth or draining margin."],
                  ["02", "Choose the few moves", "Build a sequence your team can execute with confidence."],
                  ["03", "Create operating rhythm", "Put owners, measures, and momentum behind the plan."],
                ].map(([number, title, copy]) => (
                  <div key={number} className="flex gap-4">
                    <span className="font-serif text-xl font-semibold text-amber-400">{number}</span>
                    <div><h2 className="font-sans text-sm font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-relaxed text-navy-300">{copy}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-navy-700 bg-white/5 px-4 py-3 text-sm text-navy-200">
                Direct principal involvement from diagnosis through execution.
              </div>
            </div>
          </div>
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

/* ────────────────── Inflection points ────────────────── */
function InflectionPoints() {
  const points = [
    "Revenue has grown, but the business feels harder to run.",
    "Your team is busy, yet the important work keeps slipping.",
    "The next market, hire, or investment decision carries real weight.",
  ];

  return (
    <section className="bg-amber-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Built for an inflection point</p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">When a smart business needs a sharper operating model.</h2>
            <div className="relative mt-8 aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/team-strategy-session.jpg"
                alt="Lowe Advisory leading a business strategy session"
                fill
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, calc(100vw - 2.5rem)"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="grid gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-4 rounded-lg border border-amber-200/80 bg-white/70 px-5 py-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-amber-400"><Icon name="check" size={14} /></span>
                <p className="text-base leading-relaxed text-navy-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
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

// Reviews shown as screenshots (real photos of actual reviews).
const screenshotReviews = [
  {
    src: "/images/client-review-isla-hayes.jpg",
    alt: "Review from Isla Hayes, client of Lowe Advisory",
    name: "Isla Hayes",
  },
  {
    src: "/images/client-review-richard-kensington.jpg",
    alt: "Review from Richard Kensington, client of Lowe Advisory",
    name: "Richard Kensington",
  },
];

// Reviews shown as text cards (verbatim words from real clients, with their photo).
const textReviews = [
  {
    name: "Avelino R.",
    role: "Business Owner",
    photo: "/images/avelino-r-headshot.jpg",
    quote:
      "I had an excellent experience working with this business consulting company. From the very beginning, they took the time to understand my business, my goals, and the challenges I was facing. Their professionalism, knowledge, and practical advice gave me the confidence and direction I needed to move my business forward.",
    highlight:
      "They didn't just offer generic solutions — they provided strategies tailored to my business that made a real difference.",
  },
  {
    name: "James M.",
    role: "Business Owner",
    photo: "/images/james-m-headshot.jpg",
    quote:
      "Working with this business consulting company has been one of the best decisions I've made for my business. From our first conversation, I could tell they genuinely cared about helping me succeed, not just offering advice. Their knowledge, professionalism, and attention to detail gave me a fresh perspective on my business.",
    highlight:
      "They helped me identify areas for growth, improve my planning, and make more confident business decisions.",
  },
];

function Testimonials() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Real words from real clients"
          subtitle="Authentic reviews from business owners Lowe Advisory has worked with."
          dark
        />

        {/* Reviews — screenshot + text, 2×2 grid on desktop */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {screenshotReviews.map((r) => (
            <figure
              key={r.src}
              className="group flex flex-col overflow-hidden rounded-xl border border-navy-800 bg-navy-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-navy-950">
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 32rem, calc(100vw - 2.5rem)"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="flex items-center gap-2 px-5 py-3.5 text-sm text-navy-300">
                <Icon name="check-circle" size={15} className="text-amber-400" />
                <span className="font-medium text-white">{r.name}</span>
                <span className="text-navy-500">· Verified client</span>
              </figcaption>
            </figure>
          ))}

          {/* Avelino R. — text review card */}
          {textReviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col justify-between rounded-xl border border-navy-800 bg-gradient-to-br from-navy-900 to-navy-950 p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Icon name="quote" size={28} className="text-amber-400" />
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d9a23e" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy-200">
                  {r.quote}
                </blockquote>
                {r.highlight && (
                  <blockquote className="mt-3 border-l-2 border-amber-400 pl-3 text-sm font-medium italic leading-relaxed text-amber-100">
                    {r.highlight}
                  </blockquote>
                )}
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-800 pt-4">
                <span className="relative h-12 w-12 flex-none overflow-hidden rounded-full ring-2 ring-amber-400/60">
                  <Image
                    src={r.photo}
                    alt={`${r.name}, verified client`}
                    fill
                    sizes="3rem"
                    className="object-cover object-center"
                  />
                </span>
                <div>
                  <div className="text-sm font-medium text-white">{r.name}</div>
                  <div className="text-xs text-navy-400">{r.role}</div>
                </div>
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
