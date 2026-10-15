# Kuroaxe | Master design system

Source of truth for the jazz-stage site. Palette and type follow the studio board.

## Position

Kuroaxe is a premium creative growth partner. The **words** stay house-serious. The **stage** is black, white, and turquoise: collage stills, yellow hits, orange script.

## Tokens

| Name | Hex | Role |
|---|---|---|
| Turquoise | `#20D9C2` | Wash, fills, icons, links |
| Orange | `#FF6B35` | Script, doodles, hover shout |
| Dark orange | `#FF8A3D` | Secondary hits |
| Yellow | `#EBFF3D` | CTA pills, stats, highlighter marks |
| Black / ink | `#111111` | Type, dark bands, footer |
| White | `#FFFFFF` | Spotlight sections, cards |

Usage: turquoise leads the wash, then white, black, orange, yellow.

## Type

- Display / kickers / buttons: **Sora** 600–800
- Body / nav: **Inter** 400–600
- Script: **Caveat Brush** on one existing headline line (e.g. `into momentum.`), orange

## Signature

1. Split hero: Sora thesis + Caveat Brush second line in orange, collage still
2. Pinned horizontal lookbook (desktop) as collage plates
3. Six discipline cards on white
4. Yellow pill CTAs

## Motion

GSAP ScrollTrigger. Max one pin on home (the lookbook). Honor `prefers-reduced-motion`.
