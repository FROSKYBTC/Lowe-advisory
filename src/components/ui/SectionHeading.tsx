import { cn } from "@/lib/utils";

/** Standard centered section heading with an eyebrow label. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            dark ? "text-amber-400" : "text-amber-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-navy-300" : "text-ink-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
