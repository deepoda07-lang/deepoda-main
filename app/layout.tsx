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
        <footer className="bg-gray-950 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 font-bold text-lg text-white">
                <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs">⚡</span>
                deep<span className="text-blue-500">oda</span>
              </div>
              <p className="text-sm text-center">
                Tüm işlemler tarayıcınızda gerçekleşir · Verileriniz sunucuya gitmez · GDPR uyumlu
              </p>
              <p className="text-sm">© 2025 Deepoda</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
