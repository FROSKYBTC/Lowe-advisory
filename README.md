# Lowe Advisory — Website

A modern, professional marketing site for **Lowe Advisory**, a strategy & operations consulting firm serving small and mid-sized businesses. Built for speed, SEO, and easy content editing.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

---

## ✅ What's built

| Page | Path | Notes |
|------|------|-------|
| Home | `/` | Hero, stats, value props, services, process, testimonials, CTA |
| Services | `/services` | All 6 services with deep-links, engagement process |
| About | `/about` | Founder bio, credentials, approach |
| Case Studies | `/case-studies` | 3 results stories with metrics |
| Contact | `/contact` | Validated form + Cal.com booking + contact details |
| Insights (blog) | `/insights` | Markdown-powered content hub |
| Individual articles | `/insights/[slug]` | 3 sample posts included |
| Privacy Policy | `/privacy` | |
| Terms of Service | `/terms` | |
| Custom 404 | any invalid URL | |

**Plus:** dynamic Open Graph image, sitemap.xml, robots.txt, JSON-LD structured data, mobile-first responsive design, accessibility (focus states, semantic HTML), SEO metadata on every page.

---

## 🚀 Quick start (local development)

### Prerequisites
- Node.js 20+ (built and tested on Node 24)
- npm 10+

### Run it
```bash
npm install        # first time only
npm run dev        # starts on http://localhost:3000
```

Other commands:
```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

---

## ✏️ Editing content — everything in one place

Almost all site content lives in **`src/lib/site.ts`**. Edit values there and the whole site updates. Look for `⚙️ EDIT ME` comments marking the fields that need your real details:

- `founder.name` — your name (currently `[Your Name]`)
- `founder.bio` — your background (2-3 paragraphs)
- `founder.credentials` — your credentials/qualifications
- `stats` — the numbers in the hero strip (use your real figures)
- `testimonials` — replace placeholder quotes with real ones
- `caseStudies` — replace sample stories with your real (anonymized) engagements

**Already set with your real details:**
- `contactEmail`: `loweadvisory@gmail.com`
- `phone`: `+1(324)888-6889`

### Add a blog post
Create a new markdown file in `src/content/posts/`:

```markdown
---
title: "Your Article Title"
description: "One-line summary for cards and SEO."
date: "2026-08-01"
category: "Strategy"
readTime: "4 min read"  # optional — auto-calculated if omitted
---

Your article content in **markdown**...
```

It automatically appears on `/insights` and gets its own page. Done.

### Edit navigation
Links in the header and footer live in `src/lib/nav.ts`.

### Change colors / fonts
The design system is in `src/app/globals.css` under `@theme`. Change the navy/amber/ink color scales there and it propagates everywhere.

---

## 📬 Contact form

The form at `/contact` posts to `/api/contact`, which:
1. Drops bot submissions via a hidden honeypot field.
2. Validates name/email/message.
3. Sends the inquiry to `loweadvisory@gmail.com` via **Resend**.

**Without a Resend API key**, the form clearly tells the visitor that email delivery is being configured. It never claims an inquiry was delivered when it was not.

**To enable real email delivery:**
1. Create a free account at [resend.com](https://resend.com).
2. Get your API key.
3. Copy `.env.example` → `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_xxx
   RESEND_FROM=Lowe Advisory <onboarding@resend.dev>
   CONTACT_TO_EMAIL=loweadvisory@gmail.com
   ```
   (To send from a `@loweadvisory.com` address, verify the domain in Resend. The `onboarding@resend.dev` address works for testing without verification.)

---

## 📅 Booking calls (Cal.com)

The "Book a Strategy Call" buttons link to `bookingUrl` in `site.ts`. The direct-booking panel remains hidden until a verified link is added; all other calls to action safely lead to the contact page. To make direct booking live:
1. Create a free account at [cal.com](https://cal.com).
2. Set up a 30-minute "Strategy Call" event type.
3. Update `bookingUrl` in `src/lib/site.ts` to your real link.

---

## ☁️ Deploying to Vercel (free)

This site is built to deploy on Vercel with zero config.

1. **Push to GitHub** (see below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as **Next.js**. Leave defaults.
4. Add environment variables (from `.env.example`) in the Vercel dashboard if you want email working.
5. Click **Deploy**. Done in ~60 seconds. You'll get a `your-app.vercel.app` URL.

### Connecting your domain (loweadvisory.com)

Once deployed and you're ready to go live:

1. In Vercel: **Project → Settings → Domains → Add** → enter `loweadvisory.com`.
2. Vercel shows you the exact DNS records to add.
3. In **GoDaddy** (where your domain is registered), go to the domain's DNS management and add the records Vercel shows. Typically:
   - **A record** `@` → Vercel's IP (e.g. `76.76.21.21`)
   - **CNAME** `www` → `cname.vercel-dns.com`
4. SSL is automatic. Allow up to 24h for DNS propagation (usually minutes).

**The old Ludicrous.cloud setup does not need to be deleted** — pointing DNS at Vercel simply routes traffic there instead. Keep the old setup in case you want to revert.

> ⚠️ DNS changes are made by you, in GoDaddy. Make them only when you're ready for the new site to be live.

---

## 🔒 Environment variables

| Variable | Purpose | Required? |
|----------|---------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO | Recommended |
| `RESEND_API_KEY` | Send contact form emails | Only for live email |
| `RESEND_FROM` | "From" address for emails | Only for live email |
| `CONTACT_TO_EMAIL` | Where inquiries are sent | Only for live email |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (`G-…`) | Optional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token | Optional |

Copy `.env.example` → `.env.local` locally. In Vercel, add them in the dashboard. **Never commit `.env.local`.**

---

## 📂 Project structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API route
│   ├── insights/[slug]/    # Dynamic blog post route
│   ├── opengraph-image.tsx # Dynamic social share image
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   └── ...                 # Page routes (one folder per page)
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Button, Container, Icon, SectionHeading
│   └── ContactForm.tsx
├── content/posts/          # Blog posts as markdown
└── lib/
    ├── site.ts             # ⭐ All site content — edit here
    ├── nav.ts              # Navigation links
    ├── posts.ts            # Markdown loader
    └── utils.ts            # Helpers
```

---

## ❓ Need help?

The two files you'll touch 90% of the time:
- `src/lib/site.ts` — content (name, services, bio, contact info)
- `src/content/posts/*.md` — blog articles

Everything else is working and shouldn't need changes for normal use.
