# Fonts and coverflow plan

Constraint: do not change marketing copy in `src/data`. Restyle only.

## Why this pass

The current pair (Sora + Figtree, body 400, headings 600) feels thin and stylized. The deck still reads as a left-stacked card pile with Previous/Next chrome, not the Wix template gallery: a large center product frame, clearly tilted left and right wings, and quiet tabs under the stack.

## Phase 1 — Simple heavier type

One family, already in the repo, not Sora/Figtree:

- Display and body: IBM Plex Sans
- Labels and counters: IBM Plex Mono
- Body `500`, headings `700`, buttons and nav `600`
- Tighter heading tracking (`-0.02em`), no extra body tracking

IBM Plex is a workhorse tech face: readable, even weights, no display-font theatrics.

## Phase 2 — Wix-style deck geometry

Rebuild `CoverDeck` so it matches the reference, not a playing-card stack:

- Landscape product frames (about 16:10) with a small browser chrome bar
- Center card largest and facing the camera
- Left cards `rotateY(+)` and right cards `rotateY(-)`, both wings visible
- Soft oval shadow under the cluster
- Category tabs under the stage, small, active underlined
- Previous/Next leave the visual chrome (keyboard, swipe, and autoplay stay)
- Deck can break out of the `max-w-6xl` column so the wings have room

Behavior stays the same: click a side frame to bring it forward, click the center link to open the page, autoplay, pause on hover/focus/off-screen, tabs filter the set.

## Phase 3 — Card faces

Services and case studies fill the frame with the existing product visuals so each card reads as a site screenshot, not a caption card. Testimonials keep the quote as the frame content. Captions overlay the bottom of the preview.

## Phase 4 — Verify

Home, services, case studies, and testimonials. Light and dark. 375 / 768 / 1280. Confirm both wings, tabs under the stack, and heavier type.
