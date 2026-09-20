import { site } from '../data/site';

export function withBase(path: string) {
  if (!path || /^(https?:|mailto:|tel:)/i.test(path)) return path;
  if (path.startsWith('#')) return path;
  const [pathname, hash] = path.split('#');
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return path;
  }
  const next = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const joined = `${base}${next}` || '/';
  return hash ? `${joined}#${hash}` : joined;
}

export function withoutBase(pathname: string) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || '/';
  }
  return pathname || '/';
}

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  const origin = site.url.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${suffix}`;
}

export function titleTemplate(page: string) {
  if (page === site.name) return `${site.name} | ${site.tagline}`;
  return `${page} | ${site.name}`;
}
