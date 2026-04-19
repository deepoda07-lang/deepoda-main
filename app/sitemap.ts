import type { MetadataRoute } from "next";

const BASE_URL = "https://deepoda.com";
const locales = ["en", "tr", "es"];

function pageUrl(lang: string, path: string) {
  return lang === "en" ? `${BASE_URL}${path}` : `${BASE_URL}/${lang}${path}`;
}

function localizedUrl(path: string): MetadataRoute.Sitemap {
  const alternateLanguages = Object.fromEntries(
    locales.map((lang) => [lang, pageUrl(lang, path)])
  );

  return locales.map((lang) => ({
    url: pageUrl(lang, path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
    alternates: { languages: alternateLanguages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact"];
  return pages.flatMap(localizedUrl);
}
