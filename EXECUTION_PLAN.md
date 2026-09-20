# Codeaxes Website, Execution Plan

**Product:** Multi-page technology-services platform for Codeaxes  
**Stack:** Astro (npm) · TypeScript · Tailwind CSS · content collections + centralized data  
**Quality bar:** Premium digital-product studio, not a generic agency template

This document is the build contract for the site. Implementation follows it in order.

---

## 1. Design thesis

Codeaxes engineers the **axes** of a digital product: strategy, design, systems, quality, and intelligence. The visual language is a **coordinate system**, fine grids, labeled axes, glowing data points, and living system diagrams, not rounded SaaS cards or loud neon gradients.

### Palette (named tokens)

| Token | Hex | Role |
| --- | --- | --- |
| `void` | `#070B14` | Page base (graphite-navy) |
| `ink` | `#0C1220` | Raised surfaces |
| `slate` | `#141C2C` | Cards / panels |
| `line` | `#243044` | Hairline rules, grid |
| `mist` | `#9AA8C0` | Secondary text |
| `paper` | `#E8EDF7` | Primary text |
| `axis` | `#4D8EFF` | Electric blue, primary accent |
| `signal` | `#7C6CFF` | Violet, secondary accent |
| `pulse` | `#2EE9D0` | Cyan, CTA / live data |
| `warn` | `#F3B562` | Form warnings |
| `danger` | `#F07178` | Errors |

Glassmorphism is reserved for the sticky nav, chat panel, and a few overlays. Body surfaces stay matte and structured.

### Typography

| Role | Face | Use |
| --- | --- | --- |
| Display | **Outfit** | Heroes, section titles (geometric, editorial scale) |
| Body | **IBM Plex Sans** | Long-form, UI, navigation |
| Data | **IBM Plex Mono** | Labels, metrics, code-inspired details, process ticks |

### Signature (the one memorable device)

**The Axes Mesh**, an animated technical diagram of intersecting product axes with moving data points. It appears as the homepage hero visual and is echoed (static or reduced) on service and technology pages. Process steps use a real sequence (Discover → Scale), not decorative numbering elsewhere.

### Motion

- One orchestrated moment per view (hero mesh, timeline, or accordion).
- Hover: 180–280ms, color/opacity/translate only.
- `prefers-reduced-motion: reduce` freezes the mesh and disables auto-sliders.
- Logo strip pauses on hover, focus, and reduced motion.

### Anti-patterns (explicitly banned)

- Inter-on-black-plus-acid-green “AI startup” look
- Excessive rounded cards, loud mesh gradients, fake client metrics
- Lorem ipsum, emoji-as-icons, invented pricing or case-study numbers presented as facts
- Auto-redirecting the chat agent to other pages

---

## 2. Information architecture & URLs

All routes are static-friendly, lowercase, hyphenated.

| Page | URL |
| --- | --- |
| Home | `/` |
| Services hub | `/services` |
| AI Automation | `/services/ai-automation` |
| Mobile Apps | `/services/mobile-apps` |
| SaaS Development | `/services/saas-development` |
| PaaS Development | `/services/paas-development` |
| QA Testing | `/services/qa-testing` |
| Custom Development | `/services/custom-development` |
| Product Development | `/services/product-development` |
| About hub | `/about` |
| Our Clients | `/about/clients` |
| Testimonials | `/about/testimonials` |
| Case Studies index | `/about/case-studies` |
| Case study detail | `/about/case-studies/[slug]` |
| Industries | `/about/industries` |
| Technologies hub | `/about/technologies` |
| Technology detail | `/about/technologies/[slug]` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Kuroaxe | External: `https://kuroaxe.com` (new tab, `rel="noopener noreferrer"`) |

**Chat APIs (not prerendered):**

- `POST /api/chat`, Codeaxes AI
- `POST /api/contact`, project enquiry

---

## 3. Content model (single source of truth)

All marketing copy lives in TypeScript/JSON/Markdown under `src/data` and `src/content` so pages stay thin and the AI agent can search the same corpus.

```
src/data/
  site.ts              # brand, contact, social, kuroaxe, CTAs
  navigation.ts        # header, footer, mega-menus
  services.ts          # 7 services + page sections
  industries.ts        # 9 industries
  technologies.ts      # 31 technologies in 6 categories
  clients.ts
  testimonials.ts
  process.ts           # Discover → Scale
  faqs.ts              # categorized FAQ
  knowledge.ts         # compiled search documents for Codeaxes AI

src/content/case-studies/
  *.md                 # ≥6 case studies with frontmatter
```

**Case studies (minimum six):**

1. SaaS, multi-tenant analytics platform  
2. Healthcare, care-ops and patient portal  
3. Fintech, onboarding and risk operations  
4. Ecommerce, storefront + inventory intelligence  
5. Logistics, routing and exception control  
6. Education, learning platform  
7. Enterprise operations (optional seventh)

Placeholder outcomes are labeled as **illustrative** in data (`outcomeDisclaimer`) so the chat agent never presents them as audited client results.

---

## 4. Component architecture

Astro components are default (zero JS). Interactive pieces are TypeScript islands with `client:load` / `client:visible` / `client:idle` only.

### Layout & chrome

- `layouts/BaseLayout.astro`, skip link, SEO, JSON-LD, fonts, chat mount
- `components/chrome/Header.astro` + `NavIsland.ts`, sticky nav, mega menus, mobile drawer
- `components/chrome/Footer.astro`, sitemap columns, Kuroaxe partner label, newsletter CTA
- `components/seo/Seo.astro` + JSON-LD helpers (Organization, Service, FAQPage, CaseStudy)

### Shared UI

- `Button`, `Section`, `PageHero`, `CtaBand`, `Accordion`, `LogoStrip`
- `CaseStudyCard`, `ServiceCard`, `TechChip`, `QuoteBlock`
- Visuals: `AxesMesh`, `DashboardFrame`, `DeviceStack`, `ArchitectureLayers`, `QaPipeline`, `LifecycleOrbit` (SVG, no stock photos)

### Interactive islands

- `ChatWidget`, floating Codeaxes AI
- `ContactForm`, validation, error/success, privacy note
- `FaqSearch`, category + query + URL hash anchors
- `CaseStudyFilters`, industry / service search
- `TestimonialSlider`, keyboard, pause, reduced-motion static
- `ProcessTimeline`, horizontal on desktop, stacked on mobile

---

## 5. Page compositions (must feel different)

| Surface | Composition idea |
| --- | --- |
| Home | Cinematic mesh + editorial sections + process diagram |
| Services hub | Scroll story / interactive grid linking all seven |
| AI Automation | Connected workflow diagram as hero |
| Mobile Apps | Device mockups, OS split |
| SaaS | Dashboard product frame, tenancy/billing narrative |
| PaaS | Layered platform architecture |
| QA | Pipeline / quality-gate visual |
| Custom Development | Spec-sheet + systems integration |
| Product Development | Lifecycle from idea to scale |
| About | Company story, capability axes |
| Clients | Editorial logo showcase with engagement type |
| Testimonials | Large quotes + optional video placeholders |
| Case studies | Filterable index; documentary detail pages |
| Industries | Long-form chapters, not a logo wall |
| Technologies | Ecosystem map by category |
| Tech detail | Spec layout: what / why / fit / limits / related |
| Contact | Split: headline + form + what-happens-next |
| FAQ | Search-first accordion with shareable hashes |

Every service page includes: unique hero, explanation, problems, capabilities, process, industries, stack, use cases, benefits, related case studies, FAQ, CTA.

---

## 6. Codeaxes AI

**Purpose:** Answer from **published site content only**. Never auto-navigate.

1. Build-time (or import) knowledge corpus from services, industries, technologies, FAQs, case studies, testimonials, company copy.
2. Client widget: floating button, panel, welcome copy, suggested prompts, loading/retry/error, clear conversation, keyboard (Esc, focus trap when open).
3. `POST /api/chat` tries optional server LLM (`OPENAI_API_KEY` or compatible). Prompt is grounded in retrieved chunks. Keys never ship to the browser.
4. If the API is missing, fails, or returns empty: **local fallback search** (token overlap / heading boost) runs in the widget.
5. Responses may include optional markdown-style internal links. No `window.location` redirects.
6. Unknowns: say so and offer Contact. Do not invent pricing, results, capabilities, or policies.

---

## 7. Technical build sequence

### Phase 0, Plan (this file)

Lock IA, tokens, content model, and page list.

### Phase 1, Scaffold

- `npm create astro@latest` (minimal, strict TypeScript) in this folder
- Tailwind CSS v4 via Vite plugin
- `@astrojs/sitemap`
- Node adapter for API routes; pages remain prerendered
- Path aliases `@/*` → `src/*`
- `site: https://codeaxes.com` (replaceable)

### Phase 2, Design system & data

- Global CSS tokens, grid background, focus rings, reduced-motion
- All `src/data` modules and case-study collection schema
- README content-editing notes

### Phase 3, Chrome

- Header (desktop mega-menu + mobile menu)
- Footer + Kuroaxe external treatment
- SEO component, robots.txt, sitemap, Open Graph defaults

### Phase 4, Pages

Implement in this order so templates reuse immediately:

1. Layout + Home  
2. Services hub + `[slug]` template  
3. About hub, clients, testimonials  
4. Case studies index + `[slug]`  
5. Industries, technologies hub + `[slug]`  
6. Contact, FAQ  

### Phase 5, Chat & forms

- Knowledge compiler
- Chat widget + `/api/chat`
- Contact form + `/api/contact` (validate server-side; success state even if persistence is a stub)

### Phase 6, Quality

- `astro check` + production `astro build`
- Keyboard, skip link, form labels, contrast
- Browser pass: home, one service, case study, FAQ search, contact validation, chat fallback, mobile nav, Kuroaxe `target="_blank"`

---

## 8. SEO & accessibility checklist

- Unique title + meta description per page  
- Canonical + Open Graph + Twitter tags  
- JSON-LD: Organization (global), Service, FAQPage, Article/CaseStudy  
- `robots.txt` + sitemap  
- Semantic landmarks, skip link, visible `:focus-visible`  
- `scroll-padding-top` so sticky nav does not cover focus  
- Chat button does not fully obscure focused controls  
- Images: SVG/CSS mockups; any raster via `astro:assets` + lazy loading  

---

## 9. Definition of done

- All routes in §2 exist and are linked from nav/footer  
- Kuroaxe is external only  
- Content is replaceable from `src/data` and `src/content`  
- Codeaxes AI answers in-chat with local fallback  
- README documents setup, structure, content edits, and AI config  
- Site builds cleanly and feels like one design language with distinct page compositions  

---

## 10. Implementation notes for engineers

- Prefer Astro islands over a React SPA. Hydrate only chat, nav drawer, forms, filters, sliders.  
- Keep copy specific and operational; no “synergy / next-gen AI” filler.  
- Illustrative metrics must be obviously placeholder in source data.  
- Newsletter footer can collect email client-side with the same validation pattern as contact (no fake ESP).  
