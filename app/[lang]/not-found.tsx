import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

const TOOLS = [
  { icon: "📄", label: "Merge PDF",          href: "https://tools.deepoda.com/pdf/merge" },
  { icon: "🗜️", label: "Compress Image",     href: "https://tools.deepoda.com/image/compress" },
  { icon: "🪄", label: "Remove Background",  href: "https://tools.deepoda.com/image/remove-bg" },
  { icon: "🎬", label: "Compress Video",     href: "https://tools.deepoda.com/video/compress" },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[20rem] font-black text-gray-100 dark:text-gray-800/60 leading-none">
          404
        </span>
      </div>
      {/* Subtle blobs */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 dark:shadow-blue-900">
          <Zap className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Try one of our free tools instead.
        </p>

        {/* Tool shortcuts */}
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
          Popular free tools
        </p>
        <div className="grid grid-cols-2 gap-2.5 w-full mb-10">
          {TOOLS.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-50 dark:hover:shadow-blue-950 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all group"
            >
              <span className="text-xl">{tool.icon}</span>
              <span className="leading-tight text-left">{tool.label}</span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <a
            href="https://tools.deepoda.com"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            All tools →
          </a>
        </div>
      </div>
    </div>
  );
}
