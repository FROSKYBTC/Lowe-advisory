# Design QA — Lowe Advisory Home, Option 1

## Evidence

- Source visual truth: `/Users/froskybtc/.codex/generated_images/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/call_Y0ACbFeoYkL3FLJZ5OiUw0Bf.png`
- Desktop implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-1/design-qa-implementation-desktop.jpg`
- Mobile implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-1/design-qa-implementation-mobile.jpg`
- Side-by-side desktop comparison: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-1/design-qa-comparison-desktop.jpg`
- Route and state: `/`, signed-out public homepage, default state
- Desktop viewport: 1440 × 1024 CSS px, device pixel ratio 1
- Mobile viewport: 390 × 844 CSS px, device pixel ratio 1
- Source pixels: 1487 × 1058, normalized to 1440 × 1024 for the comparison
- Desktop implementation pixels: 1440 × 1024
- Mobile implementation pixels: 390 × 844
- Density normalization: source resized to the implementation viewport at 1×; implementation captured at 1×

## Required Fidelity Surfaces

- Fonts and typography: Passed. The existing serif display face and sans-serif interface face preserve the selected concept’s hierarchy, weights, line height, letter spacing, and headline wrapping at the target desktop viewport. Mobile wrapping remains balanced and legible.
- Spacing and layout rhythm: Passed after one iteration. The final header, split hero, CTA row, image seam, and two-image editorial strip align closely with the source. Desktop and mobile document widths equal their viewport widths.
- Colors and visual tokens: Passed. The implementation keeps the established Lowe Advisory navy, warm white, gray, and restrained amber tokens with accessible foreground contrast.
- Image quality and asset fidelity: Passed. Three dedicated, identity-consistent meeting assets reproduce the source art direction. They are optimized JPEGs rendered through `next/image` with responsive `sizes`, meaningful alt text, crop-safe focal points, and no placeholders or code-drawn substitutes.
- Copy and content: Passed. The eyebrow, headline, supporting paragraph, navigation, and both CTA labels match the selected visual. The hero presentation screen intentionally uses a non-readable abstract strategy diagram instead of mock-generated claims or embedded filler text.

## Full-View Comparison

The final side-by-side comparison shows the same information hierarchy, dominant split composition, hero proportions, warm-white/navy/amber balance, founder-led presentation focus, and supporting two-image strip. The implementation preserves the existing live navigation and booking behavior while matching the selected concept’s visible homepage structure.

## Focused Region Comparison

A separate crop was not required. The 2880 × 1024 side-by-side file preserves the header, headline, CTA row, hero image crop, and supporting-image crops at sufficient resolution to judge the critical details directly.

## Comparison History

### Iteration 1

- [P2] Desktop header container was narrower than the selected concept.
  - Evidence: the first implementation placed the logo and booking CTA materially farther inward than the source.
  - Fix: expanded the header container to `max-w-[85rem]`.
- [P2] Decorative background mark created horizontal overflow at mobile and desktop widths.
  - Evidence: mobile measured 454 px document width in a 390 px viewport; desktop measured 1568 px in a 1440 px viewport.
  - Fix: anchored the background mark inside the viewport and reduced its mobile width.
- [P2] Hero CTA text wrapped and the hero ran taller than the source.
  - Evidence: the primary CTA wrapped at desktop and the supporting image strip appeared too low in the first capture.
  - Fix: added non-wrapping CTA labels, refined the hero type scale and padding, and removed the extra note not present in the source.

### Post-Fix Evidence

- Desktop width: 1440 px viewport, 1440 px document.
- Mobile width: 390 px viewport, 390 px document.
- Header outer alignment now matches the source’s wide desktop frame.
- Hero CTAs remain one line at desktop and readable stacked controls on mobile.
- The final side-by-side comparison contains no remaining actionable P0, P1, or P2 mismatch.

## Interaction and Runtime Checks

- Mobile menu opened with `aria-expanded="true"`.
- Selecting `Services` from the mobile menu navigated to `/services`.
- Primary and secondary CTA destinations were present and correct.
- Production-mode local build rendered without a browser error overlay; production server output was clean.
- `npm run lint`: passed.
- `npm run build`: passed.

## Follow-Up Polish

- [P3] The source mock uses a subtle photographic fade at the hero seam, while the implementation uses a clean edge so the real photo remains crisp and predictable across responsive crops.

## Final Result

final result: passed
