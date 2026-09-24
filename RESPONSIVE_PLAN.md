# Header + responsive plan

Do not change marketing copy in `src/data`.

## Why the header disappears

`header.glass` uses Tailwind `sticky`, but unlayered `header { position: relative }` in `global.css` wins, and `html { overflow-x: clip }` also breaks sticky. The bar scrolls away and never comes back.

Fix: pin the chrome with `position: fixed`, keep an in-flow spacer so the page does not jump, hide on scroll down, show on scroll up.

## Phase 0 — Header on scroll up

- `header.glass` is `position: fixed; top: 0; width: 100%`.
- In-flow `.header-offset` matches the bar height (not the open mobile menu).
- Scroll down past ~48px: add `is-hidden` (`translateY(-100%)`).
- Scroll up, near the top, or with the mobile menu open: remove `is-hidden`.
- Keep `is-scrolled` glass treatment.
- `prefers-reduced-motion`: header stays visible.

## Phase 1 — Shell (320 / 390 / 768 / 1024)

- Tighter header padding, 44px tap targets, safe-area insets.
- Mobile nav stays a full-width overlay under the bar.
- Footer newsletter: `min-w-0` so the email field does not overflow.
- Chat: safe-area, panel fits `100vw - 1.5rem`, stays above the header z-index.

## Phase 2 — Home + coverflow

- Hero type: ~1.85rem on the smallest phones, then `sm` / `md` steps. `minmax(0, …)` columns already in place.
- Section / CTA titles step down on small screens.
- Coverflow: extra ≤479px geometry; category tabs scroll horizontally instead of wrapping into a tall stack.
- Process row: snap-scroll on small screens, 2-col tablet, 7-col desktop.

## Phase 3 — Inner pages

- Service workflow: 1 / 2 / 5 columns (`xl:grid-cols-5`), not 5-col from `md`.
- PageHero and section padding: `px-4` / `py-14` on small, existing `md`/`lg` above that.
- Forms, careers, contact already stack; keep inputs `w-full` and 44px-tall controls.

## Phase 4 — Verify

- 390×844 and 1280×800: home, a service page, contact.
- Scroll down (header hides) then up (header returns). Open mobile menu and confirm it stays.
- Coverflow still 3D; no new horizontal page scroll.
