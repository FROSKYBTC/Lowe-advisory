import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>

        <div className="prose-advisory mt-10">
          <p>
            These Terms of Service ("Terms") govern your use of{" "}
            <a href={site.url}>{site.url}</a> (the "Site"), operated by{" "}
            {site.name} ("we", "us", or "our"). By accessing the Site, you agree
            to these Terms.
          </p>

          <h2>Use of the Site</h2>
          <p>
            The Site and its content are provided for general informational
            purposes. You agree to use the Site lawfully and not to misuse,
            disrupt, or attempt to gain unauthorized access to any part of it.
          </p>

          <h2>Professional Services</h2>
          <p>
            Content on this Site is not professional advice tailored to your
            specific circumstances. Any consulting engagement is governed by a
            separate written agreement. Nothing on this Site creates an
            advisor-client relationship until such an agreement is signed.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, and
            design — is the property of {site.name} or its licensors and is
            protected by applicable intellectual property laws. You may not
            reproduce or redistribute content without written permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites we do not
            control. We are not responsible for the content or practices of
            those sites.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the Site or reliance on its content.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time. Continued use of the Site
            after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
