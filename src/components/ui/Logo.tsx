/**
 * Lowe Advisory — Logo Mark
 *
 * Concept: Bold "L" (the firm's initial) with an upward chevron rising
 * from inside the L — growth emerging from a strong foundation.
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
  const lStroke = variant === "light" ? "#ffffff" : "#0d1830";
  const chevronStroke = "#d9a23e";
  const id = `logo-${variant}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={chevronStroke} stopOpacity="1" />
          <stop offset="100%" stopColor={chevronStroke} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      {/* The L */}
      <path
        d="M12 8 L12 40 L36 40"
        stroke={lStroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Upward chevron rising from inside the L */}
      <path
        d="M18 22 L27 13 L36 22"
        stroke={`url(#${id})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Stem of the arrow, continuing upward momentum */}
      <path
        d="M27 13 L27 30"
        stroke={`url(#${id})`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
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
