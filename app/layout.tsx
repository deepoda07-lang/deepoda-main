import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Deepoda – Akıllı Online Araçlar",
    template: "%s | Deepoda",
  },
  description:
    "PDF, görsel ve dosya işlemleri için ücretsiz online araçlar. Tarayıcıda çalışır, verileriniz güvende.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className={`${geist.className} bg-white min-h-full flex flex-col`}>
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
            <Link href="/" className="font-bold text-xl text-blue-600">deepoda</Link>
            <nav className="flex gap-4 text-sm font-medium text-gray-600">
              <Link href="/hakkimizda" className="hover:text-blue-600 transition-colors">Hakkımızda</Link>
              <Link href="/iletisim" className="hover:text-blue-600 transition-colors">İletişim</Link>
              <a
                href="https://tools.deepoda.com"
                className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Araçları Kullan
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 text-center text-sm text-gray-400">
          <p>© 2025 Deepoda · Tüm hakları saklıdır</p>
        </footer>
      </body>
    </html>
  );
}
