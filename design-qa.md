# Design QA — Lowe Advisory Home, Option 2

## Evidence

- Source visual truth: `/Users/froskybtc/.codex/generated_images/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/call_MwkJue1bi7BrqqoO7yZjDCCz.png`
- Desktop implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2/design-qa-implementation-desktop-final.jpg`
- Mobile implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2/design-qa-implementation-mobile.jpg`
- Mobile section implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2/design-qa-implementation-mobile-section.jpg`
- Side-by-side desktop comparison: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2/design-qa-comparison-desktop.jpg`
- Route and state: `/`, signed-out public homepage, default state
- Desktop viewport: 1440 × 1024 CSS px, device pixel ratio 1
- Mobile viewport: 390 × 844 CSS px, device pixel ratio 1
- Source pixels: 1487 × 1058, normalized to 1440 × 1024 for comparison
- Desktop implementation pixels: 1440 × 1024
- Mobile implementation pixels: 390 × 844
- Density normalization: source resized to the 1440 × 1024 implementation viewport at 1×; implementation captured at 1×

## Required Fidelity Surfaces

- Fonts and typography: Passed. The existing Lowe Advisory serif and sans-serif families reproduce the selected concept’s display/body hierarchy. The desktop headline uses the same four-line structure, the amber closing line stays intact, and the mobile treatment wraps without clipping.
- Spacing and layout rhythm: Passed after two iterations. The final hero height is 530 px, the “From clarity to execution” section begins at 611 px, the three editorial columns share consistent image, heading, copy, and divider rhythm, and document width equals viewport width at desktop and mobile sizes.
- Colors and visual tokens: Passed. Warm white, deep navy, restrained amber, light-gray body copy, and fine gold rules map cleanly to the selected concept and retain accessible contrast.
- Image quality and asset fidelity: Passed. The hero and three supporting scenes use real raster assets with a consistent founder-led consulting art direction. The newly generated priorities presentation is a 1672 × 941 optimized JPEG. All four images use `next/image`, responsive `sizes`, crop-safe object positioning, and descriptive alt text.
- Copy and content: Passed. The eyebrow, four-line headline, CTA labels, section title, and all three step titles/descriptions match the selected visual’s meaning and structure.

## Full-View Comparison

The final 2880 × 1024 side-by-side comparison shows matching hierarchy, headline wrapping, hero height, left-to-right image fade, amber accent treatment, and the same three-column “Align / Build / Lead” narrative. The implementation keeps the site’s real navigation and booking destinations while reproducing the selected homepage direction.

## Focused Region Comparison

A separate focused crop was not required. The full-resolution side-by-side preserves the header, headline, CTA row, hero transition, section heading, card dividers, image crops, and supporting copy at sufficient scale to judge the critical fidelity surfaces. Mobile was checked separately at the hero and card-section positions.

## Comparison History

### Iteration 1

- [P2] Hero height and headline wrapping changed the above-the-fold composition.
  - Evidence: the first implementation measured about 650 px tall and forced the amber closing line onto two lines, while the source hero was about 534 px with a single-line amber close.
  - Fix: reduced the desktop type scale and vertical gaps, widened the copy track, and set a 32.5rem desktop hero target.

### Iteration 2

- [P2] The hero photograph occupied only half the canvas with a hard seam.
  - Evidence: the intermediate implementation started the photograph at the 720 px midpoint; the source begins the image near the left-center and fades it beneath the copy.
  - Fix: expanded the desktop photo to 65% of the hero width, positioned it behind the copy, and added the restrained warm-white transparency transition visible in the source.
- [P2] Desktop headline line breaks differed from the selected visual.
  - Evidence: the intermediate headline grouped “Your business outgrew” on one line instead of the source’s “Your business / outgrew the old / way of running it.”
  - Fix: applied the source line structure at desktop while preserving natural wrapping below the desktop breakpoint.

### Post-Fix Evidence

- Desktop document width: 1440 px in a 1440 px viewport.
- Mobile document width: 390 px in a 390 px viewport.
- Final hero height: 529.8 px.
- Final section start: 610.8 px.
- Headline: four source-aligned lines with the amber closing line intact.
- Hero and all three card images loaded with non-zero natural widths.
- No actionable P0, P1, or P2 mismatch remains.

## Interaction and Runtime Checks

- Mobile menu opened and returned a `Close menu` control, then closed and returned the `Open menu` control.
- Primary CTA points to the configured Google appointment schedule.
- Secondary CTA points to `/services`.
- Desktop and mobile layouts have no horizontal overflow.
- Production-mode local page rendered without an error overlay and all above-the-fold images loaded.
- `npm run lint`: passed.
- `npm run build`: passed.

## Follow-Up Polish

- [P3] The persistent production header is roughly 14 px taller than the generated concept’s header. Keeping the established site header avoids an unrelated global navigation change.
- [P3] The source mock’s hero screen contains a detailed operating-plan slide, while the approved site photograph uses a tasteful abstract strategy diagram. The replacement preserves credibility by avoiding generated readable claims.

## Final Result

final result: passed
