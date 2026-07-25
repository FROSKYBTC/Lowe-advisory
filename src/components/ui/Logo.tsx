import Image from "next/image";

/**
 * Lowe Advisory — Logo
 *
 * Uses the official horizontal logo lockup (icon + wordmark combined):
 *   - logo-horizontal-transparent.png  → transparent background (header)
 *   - logo-horizontal-solid.png        → solid background (use on dark/colored)
 *
 * The transparent PNG reads correctly on both light and dark backgrounds
 * because the wordmark is navy/gray, not pure black or white.
 */

const LOGO_TRANSPARENT = "/images/logo/logo-horizontal-transparent.png";
const LOGO_SOLID = "/images/logo/logo-horizontal-solid.png";

type LogoProps = {
  /** Height of the logo in px. Width scales automatically (aspect ratio preserved). */
  height?: number;
  /** "transparent" = transparent bg (header). "solid" = solid bg (dark sections). */
  variant?: "transparent" | "solid";
  className?: string;
  priority?: boolean;
};

export function Logo({
  height = 36,
  variant = "transparent",
  className,
  priority = false,
}: LogoProps) {
  const src = variant === "solid" ? LOGO_SOLID : LOGO_TRANSPARENT;
  // Source is 1344×326 → ratio ≈ 4.12:1 (transparent) / 1536×1024 → 1.5:1 (solid)
  const aspect = variant === "solid" ? 1536 / 1024 : 1344 / 326;
  const width = Math.round(height * aspect);

  return (
    <Image
      src={src}
      alt="Lowe Advisory"
      width={width}
      height={height}
      priority={priority}
      className={`inline-block h-auto ${className ?? ""}`}
      style={{ height }}
    />
  );
}

/**
 * Compact icon-only mark for tight spaces (favicon-adjacent, mobile).
 * Falls back to the solid logo scaled down.
 */
export function LogoMark({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo/logo-horizontal-solid.png"
      alt="Lowe Advisory"
      width={size}
      height={size}
      className={`inline-block ${className ?? ""}`}
    />
  );
}
