// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://codeaxes.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      customPages: ['https://codeaxes.com/careers'],
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
