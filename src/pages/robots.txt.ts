import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://gautamx8055.github.io');
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}sitemap-index.xml`, origin);
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap.href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
