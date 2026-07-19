import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact form handler.
 *
 * In production, set RESEND_API_KEY + a verified domain (or onboarding address).
 * Without keys, submissions are logged server-side so the site still works in
 * preview — but no email is actually sent. See README → "Contact form".
 */
export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, role, topic, message, company_website } = body;

  // Honeypot: if the hidden field is filled, silently drop (bot).
  if (company_website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Validation
  const errors: string[] = [];
  if (!name || !name.trim()) errors.push("Name is required.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("A valid email is required.");
  if (!message || message.trim().length < 10)
    errors.push("Please include a message of at least 10 characters.");
  if (errors.length) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
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

  // No API key → log and acknowledge (preview/dev mode).
  if (!apiKey) {
    console.log("[contact] (no RESEND_API_KEY) submission:", payload);
    return NextResponse.json(
      { ok: true, note: "Logged (no email provider configured)." },
      { status: 200 },
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
        from: process.env.RESEND_FROM || `Lowe Advisory <onboarding@resend.dev>`,
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
      return NextResponse.json(
        { error: "Could not send message. Please try emailing us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 },
    );
  }
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
      <p style="color:#6b7280;margin:0 0 20px;font-size:13px">Submitted via loweadvisory.com</p>
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
