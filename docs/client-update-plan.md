# Codeaxes client catalogue update

Source: client-provided “Services of Codeaxes” brief, received 12 November 2026.

## Scope

Update Codeaxes at the domain root. Preserve Kuroaxe at `/kuroaxe`, its content,
styling, navigation, and the existing links between the brands. Retain Codeaxes'
current design language and responsive layouts.

## Implementation plan

- [x] Replace the 13-service flat catalogue with the client's six groups and all
  31 services, in the supplied order and spelling. Provide a landing page for
  every service, grouped navigation, homepage summaries, and grouped enquiry options.
- [x] Replace the nine-industry directory with all 18 supplied industries and
  their complete enterprise solution lists. Add the ten cross-industry practices.
- [x] Publish all 24 technology categories, retaining every supplied technology,
  subgroup, and ecosystem. Keep existing technology articles available and link
  matching catalogue entries to them. Do not manufacture detailed articles for
  technologies for which the client supplied only a name.
- [x] Update homepage and About positioning, catalogue counts, metadata, FAQs,
  assistant knowledge, and internal service references to the new taxonomy.
- [x] Preserve previous service URLs with redirects to the relevant current
  service or category. Preserve useful old industry and technology anchor links.
- [x] Run Astro checks and the production build; verify the rendered catalogue
  against the source brief, internal links, redirects, service selection,
  assistant answers, catalogue filtering, and Kuroaxe routes.
- [x] Visually review desktop and mobile layouts. Browser capture recovered on
  resume; desktop and 390px mobile layouts were reviewed in Chrome.

## Content decisions

The brief specifies names and catalogue entries, not approved long-form copy.
Service descriptions explain the scope without inventing customers, results,
certifications, partnerships, pricing, or delivery guarantees. Technology ecosystem
listings describe technical scope and do not imply vendor partnership status.

Legacy blockchain, game development, and 2D animation services are no longer
promoted as separate services. Their old URLs will lead to the new catalogue;
blockchain tools remain in the technology stack as requested by the client.

## Verification results

- Astro diagnostics: zero errors, warnings, or hints.
- Default production build: passed.
- GitHub Pages build using `SITE_URL=https://gautamx8055.github.io` and
  `BASE_PATH=/Codeaxes-website`: passed, including all 13 HTML redirect fallbacks.
- Exact source-brief comparison: all names and ordering match, including
  31 services, 120 industry solutions, ten shared practices, and 367 technology
  entries across 24 categories. Technology subgroups also match the brief.
- Built HTML verification: catalogue content, canonical service URLs, enquiry
  optgroups, no-JavaScript content availability, internal pages, and fragments
  passed for production and repository-path preview builds.
- Production Node server smoke check: 41 key routes returned 200, including all
  31 new services and both brands' main pages. All 13 legacy URLs returned 301
  with the intended destination.
- Behavior checks: all 31 services route correctly in the local assistant and
  pass enquiry validation; service references resolve; search, empty states,
  punctuation handling, and navigation resets pass.
- Kuroaxe source, pages, and public assets were not edited.
- Visual review: desktop service cards, industry solutions, and technology
  groups fit their layouts. At 390px, homepage services, catalogue cards,
  technology chips, long service titles, and contact fields fit the viewport.
- Live browser interactions: service search returned the expected match;
  category jumps reset the search; technology search found Qiskit; the contact
  selector exposed all six groups and accepted an advanced engineering service.
- Fixed a navigation issue found during mobile review: same-page service-group
  links now close the menu and restore page scrolling. The menu label also
  reflects its open state. Verified the corrected interaction in Chrome.
- Verified navigation from Codeaxes to Kuroaxe and back to Codeaxes on the same
  localhost domain. The preview is open on the Codeaxes homepage.

Repeat the automated catalogue checks with `npm run build` followed by
`npm run verify:catalogue` (Node.js and Python 3 required).

The brief supplies catalogue labels rather than approved long-form service copy.
The new explanatory descriptions are ready for the client's editorial review.

## Follow-up: matching brand headers

Both brands now use a shared full-width header based on the supplied reference:
logo at the left, navigation and an outlined Contact Us action at the right,
working search, and a link to the other brand. Codeaxes keeps its white surface
with blue/green accents; Kuroaxe keeps charcoal with yellow/turquoise accents.

Wide dropdowns have a vertical category rail, a divider, and three columns of
links with gradient underlines. Opening and closing use fade/slide transitions,
with staggered link entry and support for reduced motion. The mobile version
uses nested animated accordions, accessible controls, and scrollable panels.

Chrome review covered desktop and 390px mobile layouts for both brands, keyboard
category selection, Escape, search, and service navigation. Astro diagnostics,
production build, catalogue/link checks, and rapid animation reversal checks pass.
