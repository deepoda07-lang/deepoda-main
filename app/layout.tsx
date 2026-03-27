import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Deepoda – Online Tools to Simplify Your Workflow",
    template: "%s | Deepoda",
  },
  description:
    "Merge PDFs, compress images, remove backgrounds and more. In seconds, free, right in your browser. Your data never leaves your device.",
  keywords: ["merge pdf", "compress image", "remove background", "online tools", "free"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-white text-gray-900`}>
        <Navbar />
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
                <p className="text-sm leading-relaxed">
                  Free online tool platform. All processing happens in your browser — data never leaves your device.
                </p>
              </div>

              {/* PDF Tools */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">PDF Tools</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Merge PDF", "/pdf/merge"],
                    ["Split PDF", "/pdf/split"],
                    ["Edit PDF", "/pdf/edit"],
                    ["PDF Watermark", "/pdf/watermark"],
                    ["Sign PDF", "/pdf/sign"],
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
                <h4 className="text-white font-semibold text-sm mb-4">Image Tools</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Compress Image", "/image/compress"],
                    ["Remove Background", "/image/remove-bg"],
                    ["Convert Format", "/image/convert"],
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

              {/* Video Tools */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Video Tools</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Compress Video", "/video/compress"],
                    ["Trim Video", "/video/trim"],
                    ["Video → MP3", "/video/to-mp3"],
                    ["Video → GIF", "/video/to-gif"],
                    ["Merge Videos", "/video/merge"],
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
                <h4 className="text-white font-semibold text-sm mb-4">Deepoda</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Contact", "/contact"],
                    ["All Tools", "https://tools.deepoda.com"],
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

            {/* Bottom line */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p>© 2025 Deepoda · All processing in your browser · GDPR compliant</p>
              <p className="text-gray-600">Your data never leaves your device.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
