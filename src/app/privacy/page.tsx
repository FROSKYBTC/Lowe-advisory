import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>

        <div className="prose-advisory mt-10">
          <p>
            This Privacy Policy describes how {site.name} ("we", "us", or "our")
            collects, uses, and protects information when you visit{" "}
            <a href={site.url}>{site.url}</a> ("the Site"). We are committed to
            protecting your privacy and handling your data responsibly.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email address,
              company, and message content when you submit our contact form or
              otherwise communicate with us.
            </li>
            <li>
              <strong>Usage data:</strong> anonymous analytics such as pages
              visited, device type, and general location, collected to help us
              improve the Site.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide our services.</li>
            <li>To improve our Site and content.</li>
            <li>To send relevant communications, where you have opted in.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes described here, or as required by law. Inquiry
            data is typically retained for up to 24 months after our last
            interaction.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use trusted third-party tools for hosting, email delivery, and
            analytics. These providers may process limited data on our behalf
            and have their own privacy practices. We do not sell your personal
            information to any third party.
          </p>

          <h2>Cookies</h2>
          <p>
            The Site uses minimal cookies for basic functionality and analytics.
            You can control cookies through your browser settings. Disabling
            cookies may affect some features of the Site.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            or delete your personal information. To exercise these rights,
            contact us at{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
