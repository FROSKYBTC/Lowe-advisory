import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  const socials: { icon: IconName; href: string; label: string }[] = [
    { icon: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
    { icon: "twitter", href: site.social.twitter, label: "Twitter / X" },
  ].filter((s) => s.href) as { icon: IconName; href: string; label: string }[];

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 20V6l8-3 8 3v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 20v-6h6v6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                Lowe Advisory, <span className="text-amber-400">LLC</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              {site.tagline}. Helping owners turn complexity into clarity and
              intention into growth.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-navy-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-800 pt-6 text-sm text-navy-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            {site.phone && (
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            )}
            <a
              href={`mailto:${site.contactEmail}`}
              className="hover:text-white"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
