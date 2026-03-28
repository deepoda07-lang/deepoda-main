import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Deepoda – Online Tools to Simplify Your Workflow",
    template: "%s | Deepoda",
  },
  description:
    "Merge PDFs, compress images, remove backgrounds and more. In seconds, free, right in your browser.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const locale = h.get("x-locale") ?? "en";

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})()` }} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#2563eb" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1d4ed8" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Deepoda" />
      </head>
      <body className={`${geist.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ServiceWorkerRegister />
        {children}
      </body>
      <GoogleAnalytics gaId="G-EZPCYPSQ3T" />
    </html>
  );
}
