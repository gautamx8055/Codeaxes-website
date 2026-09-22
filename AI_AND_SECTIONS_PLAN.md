# Codeaxes AI + section contrast

Constraint: do not change marketing copy in `src/data`. GitHub Pages is static, so the assistant must work well **without** the OpenAI API.

## Why the AI feels wrong today

The widget falls back to on-site search. `formatLocalAnswer` dumps the top document title plus a 420-character snippet. It does not answer the question, handle greetings, follow-ups, or “do you build X?”. Keyword scoring has no aliases (`app` ≠ `mobile`).

## Phase 1 — Realistic local assistant

- Intent router: greeting, identity, contact, pricing, careers, Kuroaxe, process, services list, specific service, work, stack, industry, thanks, off-topic.
- Alias map so “iOS app”, “chatbot”, “CI/CD” hit the right service.
- Compose a 2–5 sentence reply from published copy, then one next-step path (`/services/mobile-apps`).
- Use chat history for “tell me more” / “that one”.
- Keep the API path as an upgrade when `OPENAI_API_KEY` exists; same composer as fallback.
- Typing state in the widget so it feels like a reply, not a search dump.

## Phase 2 — Sections you can tell apart

- Add `tone` (`void` | `muted` | `ink`) and optional `index` on `Section`.
- Home: alternate canvases so three coverflows do not sit on the same gray band (services void, work ink, testimonials muted). Why/process/stack get their own surface and card treatment.
- Inner pages (service, case study, about, tech, industries, careers): drop same-looking `border-y` stripes in favor of alternating tones.

## Phase 3 — Verify

- Ask the widget: greeting, “do you build mobile apps?”, “which service for a startup?”, pricing, follow-up.
- Check home + a service page in light and dark: adjacent sections must read as different bands.
