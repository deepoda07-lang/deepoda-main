import Link from "next/link";
import { FileQuestion, ArrowLeft, ExternalLink } from "lucide-react";

const popularTools = [
  { label: "Merge PDF",          href: "https://tools.deepoda.com/pdf/merge" },
  { label: "Compress Image",     href: "https://tools.deepoda.com/image/compress" },
  { label: "Remove Background",  href: "https://tools.deepoda.com/image/remove-bg" },
  { label: "Compress Video",     href: "https://tools.deepoda.com/video/compress" },
];

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
          <FileQuestion className="w-12 h-12 text-blue-400" />
        </div>
        <p className="text-7xl font-black text-gray-100 select-none leading-none">404</p>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Page not found</h1>
      <p className="text-gray-500 text-center max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <div className="mb-10 w-full max-w-xs">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 text-center">Popular tools</p>
        <div className="flex flex-col gap-2">
          {popularTools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all group"
            >
              {tool.label}
              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-400" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <span className="text-gray-300">·</span>
        <a href="https://tools.deepoda.com" className="text-sm text-blue-600 hover:underline font-medium">
          Browse all tools →
        </a>
      </div>
    </div>
  );
}
