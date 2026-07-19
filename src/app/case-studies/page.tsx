import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real engagement outcomes from Lowe Advisory, LLC — revenue growth, margin improvement, extended runway, and capital raised for SMB clients.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            Case Studies
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Outcomes, not just opinions
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            A few representative engagements. Client names are withheld for
            confidentiality; the results are real.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-12">
                  {/* Metrics panel */}
                  <div className="bg-navy-950 p-8 lg:col-span-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {cs.sector}
                    </span>
                    <p className="mt-2 text-sm text-navy-300">{cs.client}</p>
                    <div className="mt-6 space-y-5">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-serif text-3xl font-semibold text-white">
                            {m.value}
                          </div>
                          <div className="text-xs text-navy-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div className="p-8 lg:col-span-8">
                    <h2 className="text-xl font-semibold text-navy-950">
                      {cs.headline}
                    </h2>
                    <dl className="mt-6 space-y-5">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                          Challenge
                        </dt>
                        <dd className="mt-1 text-ink-700">{cs.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                          Approach
                        </dt>
                        <dd className="mt-1 text-ink-700">{cs.approach}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                          Result
                        </dt>
                        <dd className="mt-1 font-medium text-navy-900">
                          {cs.result}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Your story next?"
              title="Let's build the next case study together"
              subtitle="If you have a challenge worth solving, we'd like to hear about it."
            />
            <div className="mt-8 text-center">
              <Button href="/contact" size="lg" variant="secondary">
                Start a Conversation
                <Icon name="arrow-right" size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
