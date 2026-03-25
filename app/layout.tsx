import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Deepoda – İş Süreçlerini Kolaylaştıran Online Araçlar",
    template: "%s | Deepoda",
  },
  description:
    "PDF birleştir, görsel sıkıştır, arka plan sil ve daha fazlası. Saniyeler içinde, ücretsiz, tarayıcıda. Verileriniz asla sunucuya gitmez.",
  keywords: ["pdf birleştir", "görsel sıkıştır", "arka plan sil", "online araçlar", "ücretsiz"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${geist.className} bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-5">
            {/* Üst kısım */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              {/* Marka */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs">⚡</span>
                  deep<span className="text-blue-500">oda</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Ücretsiz online araç platformu. Tüm işlemler tarayıcında, veriler sunucuya gitmiyor.
                </p>
              </div>

              {/* PDF Araçları */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">PDF Araçları</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["PDF Birleştir", "/pdf/merge"],
                    ["PDF Böl", "/pdf/split"],
                    ["PDF Düzenle", "/pdf/edit"],
                    ["PDF Filigran", "/pdf/watermark"],
                    ["PDF İmzala", "/pdf/sign"],
                  ].map(([label, path]) => (
                    <li key={path}>
                      <a href={`https://tools.deepoda.com${path}`} className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Görsel & Dönüştür */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Görsel Araçları</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Görsel Sıkıştır", "/image/compress"],
                    ["Arka Plan Sil", "/image/remove-bg"],
                    ["Format Dönüştür", "/image/convert"],
                    ["Word → PDF", "/convert/word-to-pdf"],
                  ].map(([label, path]) => (
                    <li key={path}>
                      <a href={`https://tools.deepoda.com${path}`} className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Şirket */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Deepoda</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Ana Sayfa", "/"],
                    ["Hakkımızda", "/hakkimizda"],
                    ["İletişim", "/iletisim"],
                    ["Tüm Araçlar", "https://tools.deepoda.com"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alt çizgi */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p>© 2025 Deepoda · Tüm işlemler tarayıcınızda · GDPR uyumlu</p>
              <p className="text-gray-600">Verileriniz asla sunucuya gitmez.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
