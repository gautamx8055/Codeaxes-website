/**
 * Kuroaxe lives under /kuroaxe on the Codeaxes domain
 * (e.g. https://www.codeaxes.com/kuroaxe/services).
 *
 * Pages, content and components author paths as if Kuroaxe were at the site
 * root ("/services", "/contact", "/#work"). Run them through `kx()` to get the
 * real URL with the deploy base and the /kuroaxe prefix.
 */
export const KUROAXE_PREFIX = "/kuroaxe";

const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

/** Origin of the whole site, e.g. https://www.codeaxes.com */
export const ORIGIN = (import.meta.env.SITE || "https://www.codeaxes.com").replace(/\/$/, "");

/** Path prefix for every Kuroaxe URL, e.g. "/kuroaxe" (or "/base/kuroaxe"). */
export const MOUNT = `${BASE}${KUROAXE_PREFIX}`;

/** Prefix a Kuroaxe-local path ("/services", "/#work", "/") with the mount path. */
export function kx(path: string): string {
  if (!path || /^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  if (path === MOUNT || path.startsWith(`${MOUNT}/`) || path.startsWith(`${MOUNT}#`)) return path;
  const next = path.startsWith("/") ? path : `/${path}`;
  return `${MOUNT}${next === "/" ? "" : next}` || "/";
}

/** Strip the mount path from a pathname, giving the Kuroaxe-local path ("/services"). */
export function fromMount(pathname: string): string {
  if (pathname === MOUNT || pathname.startsWith(`${MOUNT}/`)) {
    return pathname.slice(MOUNT.length) || "/";
  }
  return pathname || "/";
}

/** Prefix a path that lives in the Codeaxes (parent site) root, e.g. "/" or "/contact". */
export function codeaxesPath(path = "/"): string {
  const next = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${next}` || "/";
}

/** Absolute URL for a Kuroaxe-local path, e.g. https://www.codeaxes.com/kuroaxe/services */
export function kxAbsolute(path: string): string {
  return `${ORIGIN}${kx(path)}`;
}
