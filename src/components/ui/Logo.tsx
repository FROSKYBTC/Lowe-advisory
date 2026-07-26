import Image from "next/image";

/**
 * Lowe Advisory — Adobe Option 4
 *
 * The approved Adobe concept is supplied as a square presentation board. The
 * emblem is framed from that original artwork, while the wordmark is rendered
 * as live text so it remains sharp and readable in responsive navigation.
 */

const OPTION_FOUR_ARTWORK = "/images/logo/logo-option-4.png";

type LogoProps = {
  /** Height of the complete lockup in px. */
  height?: number;
  /** Use the solid variant on dark backgrounds. */
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
  return (
    <span
      className={`brand-logo brand-logo--${variant} inline-flex items-center gap-[0.34em] ${className ?? ""}`}
      style={{ height, fontSize: height }}
      role="img"
      aria-label="Lowe Advisory"
    >
      <span
        aria-hidden="true"
        className="relative aspect-square h-full shrink-0 overflow-hidden rounded-[0.22em] bg-white shadow-[0_0_0_1px_rgba(13,24,48,0.08)]"
      >
        <Image
          src={OPTION_FOUR_ARTWORK}
          alt=""
          width={1536}
          height={1536}
          priority={priority}
          sizes={`${height}px`}
          className="absolute max-w-none"
          style={{
            width: "310%",
            height: "310%",
            left: "-105%",
            top: "-69%",
          }}
        />
      </span>

      <span aria-hidden="true" className="flex min-w-0 flex-col justify-center">
        <span className="brand-logo__primary font-serif text-[0.68em] font-semibold leading-[0.72] tracking-[0.025em] text-navy-950">
          LOWE
        </span>
        <span className="brand-logo__secondary mt-[0.3em] text-[0.215em] font-semibold leading-none tracking-[0.34em] text-navy-600">
          ADVISORY
        </span>
      </span>
    </span>
  );
}

export function LogoMark({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-[22%] bg-white shadow-[0_0_0_1px_rgba(13,24,48,0.08)] ${className ?? ""}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Lowe Advisory"
    >
      <Image
        src={OPTION_FOUR_ARTWORK}
        alt=""
        width={1536}
        height={1536}
        sizes={`${size}px`}
        className="absolute max-w-none"
        style={{
          width: "310%",
          height: "310%",
          left: "-105%",
          top: "-69%",
        }}
      />
    </span>
  );
}
