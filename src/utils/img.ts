const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

export function imgSrc(path: string): string {
  return `${baseUrl}${path}`;
}

export const base = baseUrl;
export const home = baseUrl || "/";
