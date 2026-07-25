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
      <ClarityToExecution />
      <StatsStrip />
      <InflectionPoints />
      <ValueProps />
      <Services />
      <Process />
      <Testimonials />
      <TexasBanner />
      <CtaSection />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="home-option-three-palette relative overflow-hidden border-b border-navy-800 bg-navy-950">
      {/* Background image (home-hero.jpg), darkened for text legibility */}
      <Image
        src="/images/home-hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,21,44,0.92) 0%, rgba(7,21,44,0.82) 55%, rgba(7,21,44,0.72) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[90rem] lg:min-h-[32.5rem]">
        <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[32.5rem] lg:w-[52%] lg:px-12 lg:py-8 xl:pl-20 xl:pr-6">
          <div className="max-w-[39rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 sm:text-sm">
              {site.tagline}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.2rem] xl:text-[3.35rem]">
              <span className="lg:block">Your business</span>{" "}
              <span className="lg:block">outgrew the old</span>{" "}
              <span className="lg:block">way of running it.</span>
              <span className="mt-2 block text-amber-300 xl:whitespace-nowrap">
                Now build what&apos;s next.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 lg:text-[1.05rem]">
              Lowe Advisory helps owner-led businesses turn growth friction into a
              focused plan — so revenue, margins, and leadership capacity can move
              together.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                href={site.bookingUrl || "/contact"}
                size="lg"
                variant="secondary"
                className="whitespace-nowrap"
              >
                Start with a Strategy Call
                <Icon name="arrow-right" size={18} />
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="outline"
                className="home-hero-secondary whitespace-nowrap"
              >
                Explore Services
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── From clarity to execution ─────────────── */
function ClarityToExecution() {
  const steps = [
    {
      title: "Align the priorities",
      description:
        "Surface the constraint and align on the few moves that will move revenue, margins, and capacity.",
      image: "/images/home-priorities-presentation.jpg",
      alt: "Anastasia Lowe aligning business priorities during a leadership presentation",
    },
    {
      title: "Build the plan",
      description:
        "Translate strategy into a simple, accountable operating plan your team can execute with confidence.",
      image: "/images/home-workshop-whiteboard.jpg",
      alt: "Anastasia Lowe building an operating plan with business leaders at a whiteboard",
    },
    {
      title: "Lead the change",
      description:
        "Establish rhythm, reinforce progress, and remove barriers so results compound.",
      image: "/images/home-advisory-working-session.jpg",
      alt: "Anastasia Lowe leading a focused advisory working session",
    },
  ];

  return (
    <section aria-labelledby="clarity-heading" className="bg-white py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex items-center gap-5">
          <h2
            id="clarity-heading"
            className="shrink-0 font-serif text-3xl font-medium tracking-tight text-navy-950 sm:text-4xl"
          >
            From clarity to execution
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-amber-400 sm:block" />
        </div>

        <div className="mt-5 grid lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={
                index === 0
                  ? "pb-9 lg:pb-0 lg:pr-8"
                  : "border-t border-amber-300 py-9 lg:border-l lg:border-t-0 lg:px-8 lg:py-0"
              }
            >
              <div className="relative aspect-[1.7/1] overflow-hidden bg-navy-950">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-navy-950 sm:text-[1.65rem]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600 sm:text-[0.95rem]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
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
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image anchor */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/home-about.jpg?v=20260725"
                alt="Anastasia Lowe working alongside a business owner to clarify strategy"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          {/* Value props */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
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

/* ───────────────────── Texas banner ───────────────────── */
function TexasBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/home-texas-skyline.jpg"
        alt="Texas skyline representing Lowe Advisory's home market"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,21,44,0.92) 0%, rgba(7,21,44,0.70) 45%, rgba(7,21,44,0.45) 100%)",
        }}
      />
      <Container className="relative z-10 flex min-h-[20rem] items-center py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Proudly based in Texas
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Local roots. National reach.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            Headquartered in El Campo, we work with owner-led businesses across
            Texas and beyond — on-site where it helps, remote where it&apos;s
            faster.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-navy-200">
            <Icon name="map-pin" size={16} className="text-amber-300" />
            <span>{site.location}</span>
          </div>
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
              <Button href={site.bookingUrl || "/contact"} size="lg" variant="secondary">
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
