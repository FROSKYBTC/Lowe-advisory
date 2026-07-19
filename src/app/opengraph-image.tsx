import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0d1830 0%, #1d3157 50%, #152544 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,162,62,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <path
                d="M12 8 L12 40 L36 40"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 22 L27 13 L36 22"
                stroke="#d9a23e"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27 13 L27 30"
                stroke="#d9a23e"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", color: "white", fontSize: "30px", fontWeight: 600 }}>
            Lowe <span style={{ color: "#d9a23e", marginLeft: "8px" }}>Advisory</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              color: "#d9a23e",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Strategy & Operations Consulting
          </div>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Turn complexity into clear, profitable action
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "22px",
          }}
        >
          <div style={{ display: "flex" }}>For growing small & mid-sized businesses</div>
          <div style={{ display: "flex" }}>loweadvisory.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
