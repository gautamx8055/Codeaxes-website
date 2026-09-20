# Codeaxes website

Premium multi-page site for **Codeaxes**, *Engineering ambitious digital products.* Built with Astro, TypeScript, and Tailwind CSS.

The execution plan for this build lives in [`EXECUTION_PLAN.md`](./EXECUTION_PLAN.md).

## Setup

Requires Node.js 22.12 or later.

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:4321`.

```bash
npm run check    # TypeScript + Astro diagnostics
npm run build    # Production build
npm run preview  # Preview the Node adapter build
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
| `src/data/services.ts` | Thirteen service landing pages |
| `src/data/industries.ts` | Industries chapters |
| `src/data/technologies.ts` | Ecosystem + every technology page |
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

The `/careers` page is live: it reads open roles from `data/jobs.json` on each request. Your hiring web app publishes roles by calling the jobs API. Do not hard-code postings in page templates.

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

Optional: `slug`, `applyUrl` (https), `applyEmail`. Draft and closed roles stay off `/careers`. Filter lists with `GET /api/jobs?brand=codeaxes` or `?brand=kuroaxe`.

### Other endpoints

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/api/jobs` | No (open roles). Yes (all roles) | List |
| GET | `/api/jobs/[slug]` | No for open roles | Read one |
| PATCH | `/api/jobs/[slug]` | Yes | Update or close (`{ "status": "closed" }`) |
| DELETE | `/api/jobs/[slug]` | Yes | Remove |

The careers pages must run on the Node adapter so they can read new postings without a rebuild.

## Kuroaxe

Kuroaxe is an **external** partner link (`https://kuroaxe.com`) in navigation and footer. It is not an internal route. Update the URL in `src/data/site.ts`.

## Routes

- `/` Home
- `/services` and `/services/[slug]`
- `/about`, `/about/clients`, `/about/testimonials`, `/about/case-studies`, `/about/case-studies/[slug]`, `/about/industries`, `/about/technologies`, `/about/technologies/[slug]`
- `/contact`, `/faq`, `/careers`, `/careers/[slug]`
- `POST /api/chat`, `POST /api/contact`
- `GET|POST /api/jobs`, `GET|PATCH|DELETE /api/jobs/[slug]`

## Design tokens

Dark graphite/navy base with electric blue, violet, and cyan. Display type is Outfit; body is IBM Plex Sans; data labels are IBM Plex Mono. Tokens live in `src/styles/global.css`.

## Notes for production

- Point `site` in `astro.config.mjs` at the real domain.
- Wire `/api/contact` to email or a CRM. The current handler validates and acknowledges.
- Swap placeholder clients, quotes, and case studies.
- Deploy with a Node-capable host (`@astrojs/node`, standalone) so the API routes run. Static hosts still get all pages; chat falls back to local search if `/api/chat` is unavailable.
# Codeaxes-website
