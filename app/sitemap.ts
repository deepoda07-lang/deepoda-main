import type { MetadataRoute } from "next";

const BASE_URL = "https://deepoda.com";
const locales = ["en", "tr", "es"];

function localizedUrl(path: string) {
  return locales.map((lang) => ({
    url: lang === "en" ? `${BASE_URL}${path}` : `${BASE_URL}/${lang}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact"];
  return pages.flatMap(localizedUrl);
}
