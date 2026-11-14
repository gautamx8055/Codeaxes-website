import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://www.codeaxes.com');
  const basePath = new URL(import.meta.env.BASE_URL, origin).pathname.replace(/\/?$/, '/');
  const sitemap = new URL('sitemap-index.xml', new URL(basePath, origin));
  const body = `User-agent: *
Allow: /
Disallow: ${basePath}api/
Disallow: ${basePath}careers/role
Disallow: ${basePath}kuroaxe/404

Sitemap: ${sitemap.href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
