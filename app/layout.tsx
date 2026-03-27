import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
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
      <body className={`${geist.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
