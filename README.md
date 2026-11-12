# Codeaxes website

Multi-page site for **Codeaxes**, *Enterprise engineering. Intelligent systems.* Built with Astro, TypeScript, and Tailwind CSS, with Kuroaxe at `/kuroaxe` on the same domain.

The execution plan for this build lives in [`EXECUTION_PLAN.md`](./EXECUTION_PLAN.md).
The November 2026 client catalogue update is documented in [`docs/client-update-plan.md`](./docs/client-update-plan.md).

## Setup

Requires Node.js 22.12 or later.

```bash
npm install
cp .env.example .env
npm run dev -- --background
```

Open `http://localhost:4321`.
If the port is occupied, use the address printed by Astro. Manage the background
server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and
`npm run astro -- dev stop`.

```bash
npm run check    # TypeScript + Astro diagnostics
npm run build    # Production build
npm run preview  # Preview the Node adapter build
npm run verify:catalogue # After build: source coverage, links, assistant, forms, filters (requires Python 3)
```

## Project structure

```
src/
  data/            # All replaceable marketing content
  components/      # Layout chrome, UI, visuals, islands
  layouts/         # BaseLayout (SEO, nav, footer, chat)
  lib/             # SEO helpers and Codeaxes AI search
  pages/           # Routes, including /api/chat and /api/contact
  styles/          # Design tokens and global CSS
public/            # Favicon and Open Graph artwork
```

## Editing content

You do not need to hunt through page templates for copy. Change these modules:

| File | What it drives |
| --- | --- |
| `src/data/site.ts` | Brand, contact, social, Kuroaxe URL |
| `src/data/navigation.ts` | Header and footer |
| `src/data/client-catalogue.json` | Client's six service groups, 31 services, 18 industry solution lists, ten practices, and 24 technology categories |
| `src/data/service-content.ts` | Descriptions, capabilities, and stacks for all service landing pages |
| `src/data/services.ts` | Service groups and shared catalogue helpers |
| `src/data/industries.ts` | Industry introductions and legacy anchors |
| `src/data/technologies.ts` | Existing detailed technology guides and catalogue name aliases |
| `src/data/service-redirects.json` | Previous service URLs and their current destinations |
| `src/data/case-studies.ts` | Case study index and detail pages |
| `src/data/clients.ts` | Client showcase |
| `src/data/testimonials.ts` | Testimonials page and home slider |
| `src/data/faqs.ts` | FAQ page + JSON-LD |
| `src/data/process.ts` | Discover → Scale |
| `src/data/why.ts` | Why Codeaxes |
| `src/data/about.ts` | About hub story |
| `src/data/knowledge.ts` | Corpus compiler for Codeaxes AI |

After edits, the corresponding pages and the chat assistant pick up the same source.

Placeholder case-study outcomes and testimonials are **illustrative**. Replace them with licensed client material before production.

## Codeaxes AI

Floating assistant on every page. It answers **in the chat only** from published site content. It does not auto-redirect.

1. Local fallback (always on): keyword search over `src/data/knowledge.ts`.
2. Optional API: `POST /api/chat` uses `OPENAI_API_KEY` when set. Keys stay server-side.

```
OPENAI_API_KEY=
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4o-mini
```

Any OpenAI-compatible endpoint works via `OPENAI_BASE_URL`. If the API is missing or fails, the widget uses on-site search.

## Careers and job postings

The `/careers` page is live: it reads open roles from `data/jobs.json`. GitHub Pages bakes that file in at deploy time. Your hiring web app can still publish roles through the jobs API on a Node host. Do not hard-code postings in page templates.

Set a secret in `.env`:

```
JOBS_API_KEY=replace-with-a-long-random-string
JOBS_APP_ORIGIN=https://your-hiring-app.example
```

`JOBS_APP_ORIGIN` is only needed if the hiring app runs in a browser on another origin. Server-side callers can ignore CORS.

### Create a role

`POST /api/jobs`

```
Authorization: Bearer JOBS_API_KEY
Content-Type: application/json
```

```json
{
  "title": "Senior Product Engineer",
  "brand": "codeaxes",
  "department": "Engineering",
  "location": "Remote, US",
  "employmentType": "full-time",
  "workplace": "remote",
  "summary": "Own delivery of product-critical web platforms with Codeaxes squads.",
  "description": "You will work across discovery, architecture, and production operations.",
  "responsibilities": ["Ship production features", "Review architecture and quality gates"],
  "requirements": ["Shipped multi-tenant or regulated software", "Clear written communication"],
  "compensation": "Competitive, role-dependent",
  "applyEmail": "hello@codeaxes.com",
  "status": "open"
}
```

`brand` is required: `codeaxes` or `kuroaxe`. It decides which careers section the role appears in.  
`employmentType`: `full-time` | `part-time` | `contract` | `internship`  
`workplace`: `remote` | `hybrid` | `onsite`  
`status`: `draft` | `open` | `closed` (defaults to `open`)

Optional: `slug`, `applyUrl` (https), `applyEmail`, `externalId`. Draft and closed roles stay off `/careers`. Send the HR portal's own job id as `externalId`. Publishing that same id again updates the role instead of adding a second card. Filter lists with `GET /api/jobs?brand=codeaxes` or `?brand=kuroaxe`.

### Other endpoints

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/api/jobs` | No (open roles). Yes (all roles) | List |
| GET | `/api/jobs/[slug]` | No for open roles | Read one |
| PATCH | `/api/jobs/[slug]` | Yes | Update or close (`{ "status": "closed" }`) |
| DELETE | `/api/jobs/[slug]` | Yes | Remove |

Live job create/update needs the Node adapter. GitHub Pages only serves the last built `data/jobs.json`.

## Kuroaxe

Kuroaxe is the partner brand hosted at `/kuroaxe` on the same domain. Its pages,
content, components, and styles are isolated in `src/pages/kuroaxe`, `src/kuroaxe`,
and `public/kuroaxe`. The Codeaxes catalogue update preserves those files and
the links between both brands. Site links also support the GitHub Pages base path.

## Routes

- `/` Home
- `/services` and `/services/[slug]`
- `/about`, `/about/clients`, `/about/testimonials`, `/about/case-studies`, `/about/case-studies/[slug]`, `/about/industries`, `/about/technologies`, `/about/technologies/[slug]`
- `/contact`, `/faq`, `/careers`, `/careers/[slug]`
- `POST /api/chat`, `POST /api/contact`, `POST /api/newsletter`
- `GET|POST /api/jobs`, `GET|PATCH|DELETE /api/jobs/[slug]`

## Design tokens

Dark graphite/navy base with electric blue, violet, and cyan. Display type is Outfit; body is IBM Plex Sans; data labels are IBM Plex Mono. Tokens live in `src/styles/global.css`.

## Notes for production

- Point `site` in `astro.config.mjs` at the real domain.
- `POST /api/contact` and `POST /api/newsletter` validate and append submissions to `data/inbox/`. GitHub Pages only serves the static site, so those routes run on `astro dev` and the Node server.
- Swap placeholder clients, quotes, and case studies.
- GitHub Pages serves the static site. Careers are built from `data/jobs.json` at deploy time. The jobs API still needs a Node host if you want live posting without a rebuild.
