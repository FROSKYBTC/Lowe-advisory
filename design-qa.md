# Design QA — Lowe Advisory Home, Option 2 Layout + Option 3 Colors

## Evidence

- Layout source visual: `/Users/froskybtc/.codex/generated_images/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/call_MwkJue1bi7BrqqoO7yZjDCCz.png`
- Color source visual: `/Users/froskybtc/.codex/generated_images/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/call_kloTZNfRvfuSKpS0aXOvvXLw.png`
- Desktop implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2-option-3-colors/design-qa-implementation-desktop-final-loaded.jpg`
- Mobile implementation: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2-option-3-colors/design-qa-implementation-mobile.jpg`
- Three-way desktop comparison: `/Users/froskybtc/.codex/visualizations/2026/07/19/019f7a3f-9edc-7500-b5d4-b16dd31b2bc1/lowe-advisory-option-2-option-3-colors/design-qa-comparison-desktop.jpg`
- Route and state: `/`, signed-out public homepage, default state
- Desktop viewport: 1440 × 1024 CSS px, device pixel ratio 1
- Mobile viewport: 390 × 844 CSS px, device pixel ratio 1
- Source pixels: both references are 1487 × 1058 and were normalized to 1440 × 1024
- Implementation pixels: 1440 × 1024 desktop and 390 × 844 mobile
- Density normalization: reference images resized to the 1× desktop implementation dimensions

## Required Fidelity Surfaces

- Fonts and typography: Passed. The Option 2 hierarchy and four-line desktop headline remain unchanged, while white and amber text now reproduce Option 3’s dark-hero treatment. Mobile wrapping is balanced and unclipped.
- Spacing and layout rhythm: Passed. Hero height, content alignment, CTA spacing, and the three-column “From clarity to execution” section preserve Option 2’s structure. Desktop and mobile document widths equal their viewport widths.
- Colors and visual tokens: Passed. The header and hero use deep navy, the wordmark and navigation reverse to white, the eyebrow and closing headline use amber, supporting copy uses pale navy, and both CTAs match Option 3’s filled/outlined pairing.
- Image quality and asset fidelity: Passed. The hero uses a real meeting photograph with a navy overlay; the supporting presentation images remain sharp and consistently graded. No placeholder or code-drawn image substitute is present.
- Copy and content: Passed. Homepage copy, navigation, CTA labels, and the three advisory-step descriptions remain coherent and unchanged.

## Full-View Comparison

The 4320 × 1024 three-way comparison places the Option 2 layout, Option 3 palette reference, and final implementation together. The implementation clearly retains Option 2’s hero-and-three-card structure while adopting Option 3’s navy canvas, white typography, amber accents, white logo treatment, and gold-outlined secondary CTA.

## Focused Region Comparison

A separate crop was not required because the three-way comparison preserves the header, hero text, buttons, and first section at readable resolution. Mobile was captured separately to verify the dark header, hero contrast, CTA stacking, and responsive image crop.

## Comparison History

### Iteration 1

- [P1] The secondary hero CTA became unreadable.
  - Evidence: its outline variant retained a white fill while the new palette changed its label to white, producing an apparently blank control.
  - Impact: the Services conversion path was visually unavailable.
  - Fix: added a homepage-scoped secondary CTA treatment with a transparent fill, white label, amber border, and restrained light hover fill.

### Post-Fix Evidence

- Secondary CTA computed colors: white text, transparent background, amber border.
- Header computed background: `rgba(7, 21, 44, 0.94)`.
- Hero computed background token: navy-950.
- Mobile menu computed background: `rgb(7, 21, 44)` with 90% white navigation text.
- Desktop document width: 1440 px in a 1440 px viewport.
- Mobile document width: 390 px in a 390 px viewport.
- `/about` retains its original light header and unfiltered logo, confirming the color treatment is homepage-scoped.
- No actionable P0, P1, or P2 mismatch remains.

## Interaction and Runtime Checks

- Mobile menu opened with a visible `Close menu` control and returned to `Open menu` after closing.
- Primary booking CTA and secondary Services CTA remain real links.
- Homepage and `/about` were checked at mobile width with no horizontal overflow.
- Hero and above-the-fold presentation images loaded with non-zero natural widths.
- Production-mode local page rendered without an error overlay.
- `npm run lint`: passed.
- `npm run build`: passed.

## Follow-Up Polish

- [P3] Option 3’s concept uses a multi-image collage, while this hybrid intentionally preserves Option 2’s simpler hero and three-card structure as requested.

## Final Result

final result: passed
