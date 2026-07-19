/** Primary navigation — edit here to update header + footer + sitemap. */
export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  Services: [
    { label: "Growth Strategy", href: "/services#growth-strategy" },
    { label: "Operations", href: "/services#operations-optimization" },
    { label: "Financial Planning", href: "/services#financial-planning" },
    { label: "Go-To-Market", href: "/services#go-to-market" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
