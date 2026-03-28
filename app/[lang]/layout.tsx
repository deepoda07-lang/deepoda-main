import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <ThemeProvider>
      <Navbar navDict={dict.navbar} lang={lang} />
      <main>{children}</main>
      <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 font-bold text-lg text-white mb-4">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/50">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                </span>
                deep<span className="text-blue-400">oda</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 mb-5">{dict.footer.tagline}</p>
              <div className="flex gap-2">
                <a href="https://tools.deepoda.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-medium hover:bg-blue-600/20 transition-colors">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  Tools
                </a>
              </div>
            </div>

            {/* PDF Tools */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{dict.footer.pdfTools}</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  [dict.tools.pdf.merge.title,     "/pdf/merge"],
                  [dict.tools.pdf.split.title,     "/pdf/split"],
                  [dict.tools.pdf.edit.title,      "/pdf/edit"],
                  [dict.tools.pdf.watermark.title, "/pdf/watermark"],
                  [dict.tools.pdf.sign.title,      "/pdf/sign"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Tools */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{dict.footer.imageTools}</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  [dict.tools.image.compress.title,    "/image/compress"],
                  [dict.tools.image.removeBg.title,    "/image/remove-bg"],
                  [dict.tools.image.convert.title,     "/image/convert"],
                  [dict.tools.convert.wordToPdf.title, "/convert/word-to-pdf"],
                  [dict.tools.convert.excelToPdf.title,"/convert/excel-to-pdf"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Tools */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{dict.footer.videoTools}</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  [dict.tools.video.compress.title, "/video/compress"],
                  [dict.tools.video.trim.title,     "/video/trim"],
                  [dict.tools.video.toMp3.title,    "/video/to-mp3"],
                  [dict.tools.video.toGif.title,    "/video/to-gif"],
                  [dict.tools.video.merge.title,    "/video/merge"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={`https://tools.deepoda.com${path}`} className="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{dict.footer.company}</h4>
              <ul className="space-y-2.5 text-sm">
                {([
                  [dict.footer.links.home,     lang === "en" ? "/" : `/${lang}`],
                  [dict.footer.links.about,    lang === "en" ? "/about" : `/${lang}/about`],
                  [dict.footer.links.contact,  lang === "en" ? "/contact" : `/${lang}/contact`],
                  [dict.footer.links.allTools, "https://tools.deepoda.com"],
                ] as [string, string][]).map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
            </div>
            <p>{dict.footer.privacy}</p>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
