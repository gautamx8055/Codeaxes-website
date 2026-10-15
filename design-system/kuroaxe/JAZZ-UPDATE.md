# Kuroaxe | Jazz theme update

Visual-system rebuild. **Copy is frozen.** Same routes, same sections, same words.

## Theme

Kuroaxe after dark: a jazz set, not a gilt salon.

- Black is the room
- White is the spotlight
- Turquoise is the wash (replaces wine)
- Yellow is the brass hit (CTAs, highlighter)
- Orange is the script shout and doodle
- Dark orange is a rare secondary hit

Jazz = **syncopation**: a tight grid, then one late element (script word, overlapping still, highlighter). Call-and-response: dark band, then white band. Spend the collage on hero, work, about, and the closing CTA. Keep services, form, and legal clean.

## Tokens

| Token | Hex | Role |
|---|---|---|
| Turquoise | `#20D9C2` | Wash, fills, links, icons |
| Orange | `#FF6B35` | Script, doodles, hover |
| Dark orange | `#FF8A3D` | Secondary hits |
| Yellow | `#EBFF3D` | Primary CTA, stats, highlighter |
| Black | `#111111` | Stage, type on light, footer |
| White | `#FFFFFF` | Spotlight sections, cards |

- Headlines / labels / buttons: **Sora** 600–800
- Body / nav: **Inter** 400–600
- Solo: **Caveat Brush** on one existing headline line (e.g. `into momentum.`), in orange
- Primary button: yellow pill, black label
- Focus: yellow on dark, turquoise on light

## Signature

**Brass underline**: an orange marker stroke under the Caveat Brush line. Work plates are collage cards. Stills are stage collages, not lacquer frames.

## Motion

- Hero: brass underline draws
- Ticker: walking bass
- Lookbook: keep **one desktop pin** (copy still says the folio turns sideways)
- Cards: short stagger
- Reduced motion: no pin, no draw, final state readable

## Content freeze

Do not edit `src/content/**`, CTA labels, nav, form fields, FAQs, 404, privacy/terms, or hardcoded page sentences.

## Build order

1. Tokens, fonts, buttons, header/footer
2. Collage stills + brass underline
3. Home
4. Services, about, contact, 404
5. Motion + reduced motion
6. Contrast and 375 / 768 / 1024 / 1440
