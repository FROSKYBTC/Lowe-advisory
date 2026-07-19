import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, operations, financial planning, go-to-market, leadership advisory, and business diagnostics — focused engagements for growing SMBs.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <AllServices />
      <Process />
      <Cta />
    </>
  );
}

function Header() {
  return (
    <section className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
          Services
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
          Practical help for the decisions that matter
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-600">
          Each engagement is tailored to your situation — but every one ends
          with clarity, a prioritized plan, and the support to make it real.
        </p>
      </Container>
    </section>
  );
}

function AllServices() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              id={s.slug}
              key={s.slug}
              className="scroll-mt-24 grid gap-8 border-b border-ink-100 pb-16 last:border-0 lg:grid-cols-12"
              style={{ paddingTop: i === 0 ? 0 : undefined }}
            >
              <div className="lg:col-span-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-amber-400">
                  <Icon name={s.icon as IconName} size={26} />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-navy-950">
                  {s.title}
                </h2>
                <p className="mt-3 text-ink-600">{s.summary}</p>
                <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    Ideal for
                  </p>
                  <p className="mt-1 text-sm text-amber-900">{s.idealFor}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                  What's included
                </h3>
                <ul className="mt-4 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-navy-100 text-navy-700">
                        <Icon name="check" size={13} />
                      </span>
                      <span className="text-ink-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The engagement"
          title="How a project unfolds"
          subtitle="Transparent from first call to final handoff. You always know where we are and why."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p) => (
            <div
              key={p.step}
              className="rounded-xl border border-ink-100 bg-white p-6 shadow-sm"
            >
              <div className="font-serif text-3xl font-semibold text-navy-200">
                {p.step}
              </div>
              <h3 className="mt-2 text-base font-semibold text-navy-950">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-2xl border border-navy-100 bg-navy-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-semibold text-navy-950">
            Not sure which fits?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-600">
            Start with a Business Diagnostic — a structured assessment that
            pinpoints your highest-impact moves. Or just tell us your situation
            and we'll recommend the right path.
          </p>
          <div className="mt-7">
            <Button href="/contact" size="lg" variant="primary">
              Let's Talk
              <Icon name="arrow-right" size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
