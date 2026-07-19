import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Book a strategy call or send a message — we reply within one business day.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Let's talk about your business
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Tell us where you are and where you want to be. We'll reply within
            one business day — or book a call directly.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-navy-950">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-ink-500">
                  Fields marked with <span className="text-ink-400">*</span> are
                  required.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar — booking + details */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-amber-400">
                    <Icon name="sparkles" size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy-950">
                    Prefer to book directly?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    Grab a focused 30-minute strategy call on the calendar. Pick
                    a time that works for you.
                  </p>
                  <Button
                    href={site.bookingUrl}
                    external
                    size="md"
                    variant="secondary"
                    className="mt-5 w-full"
                  >
                    Book a Strategy Call
                    <Icon name="arrow-up-right" size={16} />
                  </Button>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-white p-7">
                  <h3 className="text-base font-semibold text-navy-950">
                    Other ways to reach us
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <ContactRow
                      icon="mail"
                      label="Email"
                      value={site.contactEmail}
                      href={`mailto:${site.contactEmail}`}
                    />
                    {site.phone && (
                      <ContactRow
                        icon="phone"
                        label="Phone"
                        value={site.phone}
                        href={site.phoneHref}
                      />
                    )}
                    <ContactRow
                      icon="map-pin"
                      label="Location"
                      value={site.location}
                      href={site.mapUrl}
                    />
                    {site.social.linkedin && (
                      <ContactRow
                        icon="linkedin"
                        label="LinkedIn"
                        value="Connect with us"
                        href={site.social.linkedin}
                      />
                    )}
                  </ul>
                </div>

                <div className="rounded-2xl bg-amber-50 p-7">
                  <p className="text-sm leading-relaxed text-amber-900">
                    <strong className="font-semibold">Response time:</strong>{" "}
                    most inquiries get a personal reply within one business day.
                    Existing clients get priority — reach your advisor directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-navy-50 text-navy-700">
        <Icon name={icon} size={18} />
      </span>
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-ink-400">
          {label}
        </div>
        <div className="text-sm font-medium text-navy-900">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3 rounded-md p-1 transition-colors hover:bg-ink-50"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-3 p-1">{content}</div>
      )}
    </li>
  );
}
