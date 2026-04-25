const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

export function url(path: string): string {
  if (!path.startsWith("/")) path = "/" + path;
  return BASE + path;
}

export function withoutBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const stripped = pathname.slice(BASE.length);
    return stripped.startsWith("/") ? stripped : "/" + stripped;
  }
  return pathname;
}
