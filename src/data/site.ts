const origin = (import.meta.env.SITE || 'https://www.codeaxes.com').replace(/\/$/, '');
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
const siteUrl = `${origin}${base}`;

export const site = {
  name: 'Codeaxes',
  legalName: 'Codeaxes',
  tagline: 'Engineering ambitious digital products.',
  url: siteUrl,
  locale: 'en_US',
  email: 'hello@codeaxes.com',
  phone: '+1 (415) 555-0148',
  address: {
    line1: '548 Market Street',
    city: 'San Francisco',
    region: 'CA',
    postal: '94104',
    country: 'United States',
  },
  hours: 'Monday-Friday, 9:00-18:00 PT',
  social: {
    linkedin: 'https://www.linkedin.com/company/codeaxes',
    github: 'https://github.com/codeaxes',
    x: 'https://x.com/codeaxes',
    dribbble: 'https://dribbble.com/codeaxes',
  },
  kuroaxe: {
    name: 'Kuroaxe',
    // In-site link (works on localhost, previews and production).
    url: `${base}/kuroaxe`,
    // Full URL for structured data and plain-text mentions.
    absoluteUrl: `${siteUrl}/kuroaxe`,
    label: 'Marketing services by our partner brand',
  },
  cta: {
    primary: { label: 'Book consultation', href: '/contact' },
    secondary: { label: 'Explore our work', href: '/about/case-studies' },
  },
} as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.tagline,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: 'US',
  },
  sameAs: Object.values(site.social),
};
