"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 max-w-[85rem] items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Logo height={34} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.bookingUrl || "/contact"} size="sm" variant="secondary">
            Book a Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-ink-100 bg-white transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-ink-700 hover:bg-navy-50"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={site.bookingUrl || "/contact"}
            variant="secondary"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Button>
        </Container>
      </div>
    </header>
  );
}
