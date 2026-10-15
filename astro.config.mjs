// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// Production serves Codeaxes at the domain root and Kuroaxe at /kuroaxe:
//   https://www.codeaxes.com/          -> Codeaxes
//   https://www.codeaxes.com/kuroaxe/  -> Kuroaxe (src/pages/kuroaxe)
// The GitHub Pages preview overrides these with SITE_URL and BASE_PATH (see .github/workflows/deploy.yml).
const siteUrl = (process.env.SITE_URL || 'https://www.codeaxes.com').replace(/\/$/, '');
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  // Netlify sets NETLIFY=true during its builds; everywhere else (own server, local) uses the Node adapter.
  adapter: process.env.NETLIFY ? netlify() : node({ mode: 'standalone' }),
  integrations: [
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
