import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const allowedTopics = new Set([
  "Growth strategy",
  "Operations / efficiency",
  "Financial planning / fundraising",
  "Go-to-market",
  "Leadership advisory",
  "Something else",
]);

const rateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>();

/**
 * Contact form handler.
 *
 * In production, set RESEND_API_KEY + a verified domain (or onboarding address).
 * Without keys, submissions are logged server-side so the site still works in
 * preview — but no email is actually sent. See README → "Contact form".
 */
export async function POST(request: Request) {
  const rateLimit = checkRateLimit(getClientIp(request));
  if (rateLimit.limited) {
    return jsonResponse(
      { error: "Too many messages. Please wait a few minutes and try again." },
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) },
    );
  }

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: "Request is too large." }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: "Request is too large." }, 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  if (
    !parsedBody ||
    typeof parsedBody !== "object" ||
    Array.isArray(parsedBody)
  ) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const body = parsedBody as Record<string, unknown>;
  const name = getString(body.name).trim();
  const email = getString(body.email).trim();
  const company = getString(body.company).trim();
  const role = getString(body.role).trim();
  const topic = getString(body.topic).trim();
  const message = getString(body.message).trim();
  const companyWebsite = getString(body.company_website).trim();

  // Honeypot: if the hidden field is filled, silently drop (bot).
  if (companyWebsite) {
    return jsonResponse({ ok: true }, 200);
  }

  // Validation
  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (name.length > 120) errors.push("Name is too long.");
  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  )
    errors.push("A valid email is required.");
  if (company.length > 160) errors.push("Company is too long.");
  if (role.length > 160) errors.push("Role is too long.");
  if (!allowedTopics.has(topic)) errors.push("Please choose a valid topic.");
  if (message.length < 10)
    errors.push("Please include a message of at least 10 characters.");
  if (message.length > 5000) errors.push("Message is too long.");
  if (errors.length) {
    return jsonResponse({ error: errors.join(" ") }, 422);
  }

  const payload = {
    name,
    email,
    company: company || "—",
    role: role || "—",
    topic: topic || "General",
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.contactEmail;

  // No provider configured: do not imply that a lead was delivered.
  if (!apiKey) {
    return jsonResponse(
      {
        error: `Email delivery is being configured. Please contact us directly at ${site.contactEmail}.`,
      },
      503,
    );
  }

  // Send via Resend.
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || `Lowe Advisory, LLC <onboarding@resend.dev>`,
        to,
        reply_to: email,
        subject: `New inquiry — ${topic || "Contact form"}`,
        text: formatPlainText(payload),
        html: formatHtml(payload),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return jsonResponse(
        { error: "Could not send message. Please try emailing us directly." },
        502,
      );
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return jsonResponse(
      { error: "Something went wrong. Please email us directly." },
      500,
    );
  }
}

function getString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function getClientIp(request: Request): string {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for") ||
    request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(ip: string): {
  limited: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();

  if (rateLimitStore.size > 1_000) {
    for (const [key, value] of rateLimitStore) {
      if (value.resetAt <= now) rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function formatPlainText(p: {
  name: string;
  email: string;
  company: string;
  role: string;
  topic: string;
  message: string;
}): string {
  return [
    `New inquiry from ${p.name}`,
    ``,
    `Topic:    ${p.topic}`,
    `Email:    ${p.email}`,
    `Company:  ${p.company}`,
    `Role:     ${p.role}`,
    ``,
    `Message:`,
    p.message,
  ].join("\n");
}

function formatHtml(p: {
  name: string;
  email: string;
  company: string;
  role: string;
  topic: string;
  message: string;
}): string {
  const row = (k: string, v: string) =>
    `<tr><td style="color:#6b7280;padding:4px 16px 4px 0;vertical-align:top;font-size:13px">${k}</td><td style="color:#111827;font-size:13px">${v}</td></tr>`;
  return `
    <div style="font-family:ui-sans-serif,system-ui,Arial,sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#0d1830;margin:0 0 4px">New inquiry from ${escapeHtml(p.name)}</h2>
      <p style="color:#6b7280;margin:0 0 20px;font-size:13px">Submitted via loweadvisorytx.com</p>
      <table style="border-collapse:collapse;margin:0 0 20px">
        ${row("Topic", escapeHtml(p.topic))}
        ${row("Email", escapeHtml(p.email))}
        ${row("Company", escapeHtml(p.company))}
        ${row("Role", escapeHtml(p.role))}
      </table>
      <p style="color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px">${escapeHtml(p.message)}</p>
    </div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
