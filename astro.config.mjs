// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import serviceRedirects from './src/data/service-redirects.json' with { type: 'json' };

// Production serves Codeaxes at the domain root and Kuroaxe at /kuroaxe:
//   https://www.codeaxes.com/          -> Codeaxes
//   https://www.codeaxes.com/kuroaxe/  -> Kuroaxe (src/pages/kuroaxe)
// The GitHub Pages preview overrides these with SITE_URL and BASE_PATH (see .github/workflows/deploy.yml).
const siteUrl = (process.env.SITE_URL || 'https://www.codeaxes.com').replace(/\/$/, '');
const basePath = process.env.BASE_PATH || '/';

// The Node adapter normally keeps redirects in its server manifest. GitHub
// Pages publishes only dist/client, so its sub-path preview also needs HTML
// redirect files. Run this after the adapter's config hook.
/** @type {import('astro').AstroIntegration} */
const staticPreviewRedirects = {
  name: 'static-preview-redirects',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({ build: { redirects: true } });
    },
  },
};

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  redirects: Object.fromEntries(Object.entries(serviceRedirects).map(([oldSlug, target]) => [
    `/services/${oldSlug}`,
    { status: 301, destination: `${basePath === '/' ? '' : basePath.replace(/\/$/, '')}/services${target ? `/${target}` : ''}` },
  ])),
  // Netlify sets NETLIFY=true during its builds; everywhere else (own server, local) uses the Node adapter.
  adapter: process.env.NETLIFY ? netlify() : node({ mode: 'standalone' }),
  integrations: [
    ...(basePath !== '/' && !process.env.NETLIFY ? [staticPreviewRedirects] : []),
    sitemap({
      customPages: [`${siteUrl}${basePath === '/' ? '' : basePath.replace(/\/$/, '')}/careers`],
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
