/**
 * ───────────────────────────────────────────────────────────────────────────
 *  LOWE ADVISORY — SITE CONFIG
 * ───────────────────────────────────────────────────────────────────────────
 *  This is the SINGLE place to edit your site's content. Change a value here
 *  and it updates everywhere on the site automatically.
 *
 *  → Items marked  ⚙️ EDIT ME  need your real details. Replace the placeholder
 *    text and the whole site updates. No need to touch any other file.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** ⚙️ EDIT ME — the firm's public name */
  name: "Lowe Advisory",

  /** ⚙️ EDIT ME — one-line tagline shown in the header + hero */
  tagline: "Strategy & Operations Consulting for Growing Businesses",

  /** ⚙️ EDIT ME — the live domain once DNS is pointed. Used for SEO + sitemap. */
  url: "https://loweadvisory.com",

  /** ⚙️ EDIT ME — short SEO meta description (~150 chars) */
  description:
    "Lowe Advisory helps small and mid-sized businesses sharpen strategy, fix operations, and grow with confidence. Practical, senior-level consulting — without the big-firm overhead.",

  /** ✅ Set — where the form submissions + inquiries are sent */
  contactEmail: "loweadvisory@gmail.com",

  /** ⚙️ EDIT ME — your Cal.com / Calendly booking link (set up later). */
  bookingUrl: "https://cal.com/lowe-advisory",

  /** ⚙️ EDIT ME — shown in footer / contact. City, State or "Remote / Worldwide". */
  location: "United States · Remote & On-site",

  /** ✅ Set — phone shown publicly. tel: links use the digits-only form. */
  phone: "+1(324)888-6889",
  /** Machine-readable tel: link (digits only). */
  phoneHref: "tel:+13248886889",

  /** ⚙️ EDIT ME — founded year for the footer + about. */
  foundedYear: 2024,

  social: {
    /** ⚙️ EDIT ME — set to "" to hide each link */
    linkedin: "https://www.linkedin.com/company/lowe-advisory",
    twitter: "",
    instagram: "",
  },

  /** ⚙️ EDIT ME — the principal/founder. Who runs the firm. */
  founder: {
    name: "[Your Name]", // ⚙️ EDIT ME
    title: "Founder & Principal Advisor",
    // ⚙️ EDIT ME — replace with your real bio (2-3 short paragraphs).
    bio: `I'm [Your Name], founder of Lowe Advisory. For over a decade I've helped small and mid-sized business owners turn complexity into clarity — cutting through the noise to find the few decisions that actually move the needle.

My work sits at the intersection of strategy and operations: where to compete, how to grow, what to fix first. I've guided founders through fundraising readiness, built operating plans from scratch, streamlined delivery, and helped leadership teams get unstuck at critical inflection points.

I work with a limited number of clients at a time so each engagement gets senior attention end to end — no junior hand-offs, no recycled playbooks. Just clear thinking and outcomes you can measure.`,
    // ⚙️ EDIT ME — credentials, e.g. ["Former McKinsey", "MBA, Wharton", "CPA"]
    credentials: [
      "10+ years advising SMB founders",
      "Strategy, operations & finance background",
      "Hands-on operator, not just advisor",
    ],
  },
} as const;

/**
 * Services — the firm's offerings.
 * ⚙️ EDIT ME — rename, reorder, or add/remove items. Keep 3–6 for a clean grid.
 */
export const services = [
  {
    slug: "growth-strategy",
    title: "Growth Strategy",
    icon: "compass",
    summary:
      "Find your next wave of growth and build the plan to capture it — markets, positioning, and the few bets worth making.",
    bullets: [
      "Market & competitive positioning",
      "Revenue model and pricing",
      "12-month growth roadmap",
    ],
    idealFor:
      "Businesses that have hit a plateau or are entering a new market.",
  },
  {
    slug: "operations-optimization",
    title: "Operations Optimization",
    icon: "gauge",
    summary:
      "Find the bottlenecks draining margin and time. Streamline delivery so you can scale without breaking what works.",
    bullets: [
      "Process mapping & bottleneck analysis",
      "Cost reduction without cutting muscle",
      "Team structure & accountability",
    ],
    idealFor:
      "Teams stretched thin, quality slipping, or margins under pressure.",
  },
  {
    slug: "financial-planning",
    title: "Financial Planning & Analysis",
    icon: "chart",
    summary:
      "Get the numbers telling the truth. Build forecasts, dashboards, and the financial clarity to make confident decisions.",
    bullets: [
      "Operating budgets & cash forecasts",
      "KPI dashboards leadership trusts",
      "Fundraising & investor readiness",
    ],
    idealFor: "Owners flying blind or preparing to raise capital.",
  },
  {
    slug: "go-to-market",
    title: "Go-To-Market Strategy",
    icon: "target",
    summary:
      "Launch the right way. Define your ideal customer, sharpen the message, and align sales + marketing to convert.",
    bullets: [
      "Ideal customer profile & segmentation",
      "Messaging & positioning",
      "Sales process design",
    ],
    idealFor: "New products, new segments, or stalled pipelines.",
  },
  {
    slug: "leadership-advisory",
    title: "Leadership Advisory",
    icon: "people",
    summary:
      "A trusted sounding board for the decisions that keep you up at night — strategy, hiring, hard calls.",
    bullets: [
      "Monthly advisory sessions",
      "Hiring & org design support",
      "Board & stakeholder communication",
    ],
    idealFor: "Founders and CEOs who want senior counsel without a full hire.",
  },
  {
    slug: "turnaround-diagnostics",
    title: "Business Diagnostics",
    icon: "magnifier",
    summary:
      "Not sure where to start? A structured assessment of where you stand and the highest-impact moves to make.",
    bullets: [
      "Full-business health assessment",
      "Prioritized opportunity roadmap",
      "90-day action plan",
    ],
    idealFor: "Owners who know something needs to change but aren't sure what.",
  },
] as const;

/**
 * The engagement process — shown on Home + Services.
 */
export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your business, goals, and the real challenges beneath the symptoms.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description:
      "I map the situation, pressure-test assumptions, and identify the few levers with the highest impact.",
  },
  {
    step: "03",
    title: "Roadmap",
    description:
      "You get a clear, prioritized plan — what to do, in what order, and what to deliberately ignore.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "I stay in the boat with you — advising, unblocking, and keeping momentum through implementation.",
  },
] as const;

/**
 * ⚙️ EDIT ME — results / case studies. Replace with real (anonymized) stories.
 */
export const caseStudies = [
  {
    slug: "scaling-services-firm",
    client: "Professional Services Firm",
    sector: "B2B Services",
    headline: "From stalled growth to 40% revenue lift in 9 months",
    challenge:
      "A 35-person services firm had flat revenue for two years despite a strong market. Margins were eroding and the founders were stretched thin.",
    approach:
      "Refocused the offering on their most profitable segment, rebuilt pricing, and restructured delivery to remove a critical owner-bottleneck.",
    result:
      "Revenue grew 40% in 9 months, gross margin improved 12 points, and the founders reclaimed two days a week of capacity.",
    metrics: [
      { value: "+40%", label: "Revenue growth" },
      { value: "+12pts", label: "Gross margin" },
      { value: "9 mo", label: "To results" },
    ],
  },
  {
    slug: "saas-cash-runway",
    client: "B2B SaaS Startup",
    sector: "Technology",
    headline: "Extended runway by 8 months and closed a seed round",
    challenge:
      "A pre-seed SaaS company was 5 months from running out of cash, with muddled positioning and no clear path to raise.",
    approach:
      "Built a 12-month operating plan, sharpened the ICP and pitch, and restructured the forecast into something investors could trust.",
    result:
      "Extended runway by 8 months through cost discipline, then closed a $1.8M seed round at improved terms.",
    metrics: [
      { value: "+8 mo", label: "Runway added" },
      { value: "$1.8M", label: "Seed raised" },
      { value: "14 wks", label: "To close" },
    ],
  },
  {
    slug: "manufacturer-margins",
    client: "Family-Owned Manufacturer",
    sector: "Manufacturing",
    headline: "Restored 9 points of margin in a commoditizing market",
    challenge:
      "A third-generation manufacturer was losing margin to cheaper competitors and couldn't see where the money was going.",
    approach:
      "Implemented product-level costing, pruned unprofitable SKUs, and refocused sales on higher-margin custom work.",
    result:
      "Net margin improved 9 points within a year, and the team gained a dashboard they actually use to steer the business.",
    metrics: [
      { value: "+9pts", label: "Net margin" },
      { value: "-22%", label: "SKU count" },
      { value: "1 yr", label: "To results" },
    ],
  },
] as const;

/**
 * Why-choose-us value props. Shown on Home.
 */
export const valueProps = [
  {
    title: "Senior attention, end to end",
    description:
      "You work directly with the principal — no junior hand-offs, no recycled decks. Every engagement gets senior thinking from first call to final deliverable.",
  },
  {
    title: "Strategy you can actually execute",
    description:
      "Beautiful slides don't grow businesses. Every recommendation comes with a concrete, sequenced plan and the support to see it through.",
  },
  {
    title: "Built for SMB budgets",
    description:
      "Big-firm thinking without the big-firm overhead. Focused engagements sized to what a growing business can actually absorb.",
  },
  {
    title: "Outcomes, not output",
    description:
      "We measure success in your results — revenue, margin, runway — not in hours billed or deliverables shipped.",
  },
] as const;

/** Stats shown in the hero/social-proof strip. ⚙️ EDIT ME to your real numbers. */
export const stats = [
  { value: "10+", label: "Years of advisory experience" },
  { value: "50+", label: "Businesses advised" },
  { value: "$40M+", label: "Capital helped raise" },
  { value: "100%", label: "Senior-led engagements" },
] as const;

/** Testimonials. ⚙️ EDIT ME — replace with real quotes (anonymized is fine). */
export const testimonials = [
  {
    quote:
      "Lowe Advisory gave us clarity we'd been chasing for two years. Within a quarter we knew exactly where to focus, and the numbers followed.",
    name: "Founder, B2B Services",
    role: "$8M ARR company",
  },
  {
    quote:
      "Sharp, practical, and genuinely invested. The operating plan we built together is still the backbone of how we run the business.",
    name: "CEO, SaaS Startup",
    role: "Post-seed, 25 employees",
  },
  {
    quote:
      "We'd worked with bigger firms before. The value per dollar here was in a different league — and the advice actually fit our scale.",
    name: "Owner, Manufacturing",
    role: "Third-generation family business",
  },
] as const;
