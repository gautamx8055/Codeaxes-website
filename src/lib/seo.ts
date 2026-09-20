import { site } from '../data/site';

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  return new URL(path, site.url).toString();
}

export function titleTemplate(page: string) {
  if (page === site.name) return `${site.name} | ${site.tagline}`;
  return `${page} | ${site.name}`;
}
