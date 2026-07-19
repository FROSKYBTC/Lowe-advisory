import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { mainNav } from "@/lib/nav";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(50rem 25rem at 70% 0%, rgba(217,162,62,0.10), transparent 60%), radial-gradient(40rem 20rem at 0% 20%, rgba(45,78,135,0.08), transparent 55%)",
        }}
      />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-serif text-7xl font-semibold text-navy-100 sm:text-8xl">
          404
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          This page took a different direction
        </h1>
        <p className="mt-4 max-w-md text-ink-600">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="md" variant="primary">
            Back to Home
            <Icon name="arrow-right" size={16} />
          </Button>
          <Button href="/contact" size="md" variant="outline">
            Contact Us
          </Button>
        </div>
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-navy-600 hover:text-amber-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
