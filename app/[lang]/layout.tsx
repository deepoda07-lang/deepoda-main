import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getDictionary, hasLocale, locales } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: {
      default: dict.meta.siteTitle,
      template: `%s | Deepoda`,
    },
    description: dict.meta.siteDescription,
    keywords: dict.meta.siteKeywords,
    alternates: {
      canonical: "/",
      languages: {
        "en": "https://deepoda.com",
        "tr": "https://deepoda.com/tr",
        "es": "https://deepoda.com/es",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar navDict={dict.navbar} lang={lang} />
      <main>{children}</main>
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-5">
          {/* Top section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs">⚡</span>
                deep<span className="text-blue-500">oda</span>
              </div>
              <p className="text-sm leading-relaxed">{dict.footer.tagline}</p>
            </div>

            {/* PDF Tools */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">{dict.footer.pdfTools}</h4>
              <ul className="space-y-2 text-sm">
                {[
                  [dict.tools.pdf.merge.title,     "/pdf/merge"],
                  [dict.tools.pdf.split.title,     "/pdf/split"],
                  [dict.tools.pdf.edit.title,      "/pdf/edit"],
                  [dict.tools.pdf.watermark.title, "/pdf/watermark"],
                  [dict.tools.pdf.sign.title,      "/pdf/sign"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Tools */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">{dict.footer.imageTools}</h4>
              <ul className="space-y-2 text-sm">
                {[
                  [dict.tools.image.compress.title,  "/image/compress"],
                  [dict.tools.image.removeBg.title,  "/image/remove-bg"],
                  [dict.tools.image.convert.title,   "/image/convert"],
                  [dict.tools.convert.wordToPdf.title, "/convert/word-to-pdf"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Tools */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">{dict.footer.videoTools}</h4>
              <ul className="space-y-2 text-sm">
                {[
                  [dict.tools.video.compress.title, "/video/compress"],
                  [dict.tools.video.trim.title,     "/video/trim"],
                  [dict.tools.video.toMp3.title,    "/video/to-mp3"],
                  [dict.tools.video.toGif.title,    "/video/to-gif"],
                  [dict.tools.video.merge.title,    "/video/merge"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">{dict.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                {([
                  [dict.footer.links.home,     lang === "en" ? "/" : `/${lang}`],
                  [dict.footer.links.about,    lang === "en" ? "/about" : `/${lang}/about`],
                  [dict.footer.links.contact,  lang === "en" ? "/contact" : `/${lang}/contact`],
                  [dict.footer.links.allTools, "https://tools.deepoda.com"],
                ] as [string, string][]).map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>{dict.footer.copyright}</p>
            <p className="text-gray-600">{dict.footer.privacy}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
