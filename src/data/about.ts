import { catalogueCounts } from './catalogue';

export const aboutStory = {
  eyebrow: 'About Codeaxes',
  title: 'Enterprise engineering across the digital and physical world.',
  lede: 'Codeaxes brings together AI First, Product Engineering, Enterprise, Experience Design, Digital Engineering, and Advanced Engineering to build connected products, platforms, and intelligent operations.',
  body: [
    'Ambitious software fails in the gaps: a strategy that never reaches the codebase, a beautiful interface on a brittle service, an automation no one can audit. We were built to close those gaps.',
    'Our teams sit on the same axis, discovery, systems design, implementation, and quality, so the product that ships is the product operations can actually run. We work with founders shipping a first platform and with enterprises replacing software that can no longer carry the business.',
    'Kuroaxe is our partner brand for marketing services. Engineering stays at Codeaxes; go-to-market work lives there, with a clean handoff when both are needed.',
  ],
  stats: [
    { value: String(catalogueCounts.services), label: 'services across six connected disciplines' },
    { value: String(catalogueCounts.industries), label: 'industries in our solutions catalogue' },
    { value: String(catalogueCounts.technologyCategories), label: 'categories in our technology ecosystem' },
  ],
};
