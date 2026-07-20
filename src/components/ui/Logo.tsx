import Image from "next/image";

/**
 * Lowe Advisory — Logo Mark
 *
 * Concept: An Adobe-created geometric "L" with an amber ascent line —
 * practical direction and progress from a strong foundation.
 *
 * Colors:
 *   Navy   #0d1830  — the L stroke (authority, depth)
 *   Amber  #d9a23e  — the chevron (growth, optimism, distinction)
 *
 * The mark is a single SVG that adapts to its container via `size`.
 * On dark backgrounds, pass variant="light" to render the L in white.
 */

type LogoProps = {
  size?: number;
  /** "dark" = navy L (for light backgrounds), "light" = white L (for dark backgrounds) */
  variant?: "dark" | "light";
  className?: string;
  title?: string;
};

export function LogoMark({
  size = 32,
  variant = "dark",
  className,
  title = "Lowe Advisory",
}: LogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-sm ${
        variant === "light" ? "ring-1 ring-white/15" : "ring-1 ring-navy-100"
      } ${className ?? ""}`}
      role="img"
      aria-label={title}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/lowe-advisory-icon.png"
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/**
 * Full lockup: logo mark + wordmark "Lowe Advisory".
 * Use in headers/footers where there's room for the full brand.
 */
export function LogoLockup({
  size = 32,
  variant = "dark",
  className,
}: {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-950";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} variant={variant} />
      <span className={`font-serif text-lg font-semibold tracking-tight ${wordColor}`}>
        Lowe<span className="text-amber-500"> Advisory</span>
      </span>
    </span>
  );
}
