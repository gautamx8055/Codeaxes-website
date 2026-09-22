# Coverflow, theme, and responsive plan

Constraint: do not change marketing copy in `src/data`. Restyle, rearrange, and add interaction only.

Reference: Wix template gallery. Center frame is live. Side frames are tilted. Click a side frame and it comes forward; the previous center takes that place. The stack also advances on its own. Tabs under the stack switch the set.

## Design

Simple tech studio, not a dark neon dashboard.

- Light canvas `#F5F6F8`, ink `#111827`, line `#E6E9EE`, accent `#1D4ED8`
- Dark canvas `#0C1016`, ink `#F4F6F9`, line `#2A3140`, accent `#60A5FA`
- Type stays Sora + Figtree
- One signature: the tilted product deck
- Strip axis rails, heavy orbs, and gradient headlines in light mode
- Theme follows `localStorage`, then `prefers-color-scheme`, default dark
- Scroll: short fade/rise reveals, header progress, deck pauses off-screen
- Motion: honor `prefers-reduced-motion` (no 3D, no autoplay)

## Phases

### Phase 1 — Theme tokens and toggle
CSS variables on `html[data-theme]`. Header toggle. Inline boot script to avoid a flash. Buttons and chrome use tokens so light/dark both work.

### Phase 2 — Cover deck
Reusable `CoverDeck` island: 3D coverflow, click-side-to-front, click-center to open the page, autoplay, pause on hover/focus, swipe, keyboard, tabs from `data-tab`.

### Phase 3 — Wire sections
Home: services, work, testimonials use the deck. Case studies, testimonials, and services index pages get the deck above existing lists so no page is lost.

### Phase 4 — Responsive
Stop horizontal page scroll. Services mega-menu must fit the viewport. Process steps stack before `xl`. Deck peeks instead of rotating off-screen under `768px`. Touch targets stay 44px.

### Phase 5 — Verify
`astro build`, then home / work / testimonials / services in light and dark at 375, 768, and 1280.
