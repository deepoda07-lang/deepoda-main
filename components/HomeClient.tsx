"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FileText, Image, RefreshCw, Scissors, Wand2, FileOutput,
  ArrowRight, CheckCircle2, Shield, Zap, Globe, Search,
  Edit3, Stamp, PenTool, Video, Music, Film, Link,
  VolumeX, RotateCw, Lock, LockOpen, ChevronRight, Sparkles,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";
import type { getDictionary } from "@/lib/dictionaries";

type Dict = Awaited<ReturnType<typeof getDictionary>>;
interface Props { dict: Dict; lang?: string; }

/* ── Animated stat card ─────────────────────────────── */
function StatCard({ value, label, animated, end, suffix }: {
  value?: string; label: string; animated?: boolean; end?: number; suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-1 px-4 py-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm"
    >
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
        {animated && end != null
          ? <AnimatedCounter end={end} suffix={suffix ?? "+"} />
          : value}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">{label}</div>
    </motion.div>
  );
}

/* ── Tool card ──────────────────────────────────────── */
function ToolCard({ icon: Icon, title, desc, href, color, badge, useNow }: {
  icon: React.ElementType; title: string; desc: string; href: string;
  color: string; badge?: string | null; useNow: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-50 dark:hover:shadow-blue-950/30 transition-colors duration-300"
    >
      {badge && (
        <span className={cn(
          "absolute top-3.5 right-3.5 text-[10px] font-bold px-2 py-0.5 rounded-full",
          badge === "AI" || badge === "IA" ? "bg-purple-600 text-white" :
          badge === "New" || badge === "Yeni" || badge === "Nuevo" ? "bg-emerald-500 text-white" :
          "bg-blue-600 text-white"
        )}>
          {badge}
        </span>
      )}
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", color)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 pt-2 border-t border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
        {useNow} <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </motion.a>
  );
}

/* ── Main component ─────────────────────────────────── */
export default function HomeClient({ dict }: Props) {
  const d = dict.home;
  const tools = dict.tools;
  const [activeCat, setActiveCat] = useState(d.categories.all);
  const [search, setSearch] = useState("");

  const allTools = [
    { icon: FileText,   ...tools.pdf.merge,     href: "https://tools.deepoda.com/pdf/merge",           color: "bg-red-50 text-red-600 dark:bg-red-900/30",          cat: d.categories.pdf },
    { icon: Scissors,   ...tools.pdf.split,      href: "https://tools.deepoda.com/pdf/split",           color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30",  cat: d.categories.pdf },
    { icon: Edit3,      ...tools.pdf.edit,       href: "https://tools.deepoda.com/pdf/edit",            color: "bg-amber-50 text-amber-600 dark:bg-amber-900/30",     cat: d.categories.pdf },
    { icon: Stamp,      ...tools.pdf.watermark,  href: "https://tools.deepoda.com/pdf/watermark",       color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30",  cat: d.categories.pdf },
    { icon: PenTool,    ...tools.pdf.sign,       href: "https://tools.deepoda.com/pdf/sign",            color: "bg-rose-50 text-rose-600 dark:bg-rose-900/30",        cat: d.categories.pdf },
    { icon: FileOutput, ...tools.pdf.toWord,     href: "https://tools.deepoda.com/pdf/to-word",         color: "bg-pink-50 text-pink-600 dark:bg-pink-900/30",        cat: d.categories.pdf },
    { icon: Lock,       ...tools.pdf.lock,       href: "https://tools.deepoda.com/pdf/lock",            color: "bg-slate-50 text-slate-600 dark:bg-slate-800/50",     cat: d.categories.pdf },
    { icon: LockOpen,   ...tools.pdf.unlock,     href: "https://tools.deepoda.com/pdf/unlock",          color: "bg-slate-50 text-slate-600 dark:bg-slate-800/50",     cat: d.categories.pdf },
    { icon: Scissors,   ...tools.pdf.crop,       href: "https://tools.deepoda.com/pdf/crop",            color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30",  cat: d.categories.pdf },
    { icon: Edit3,      ...tools.pdf.formFill,   href: "https://tools.deepoda.com/pdf/form-fill",       color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30",        cat: d.categories.pdf },
    { icon: PenTool,    ...tools.pdf.annotate,   href: "https://tools.deepoda.com/pdf/annotate",        color: "bg-violet-50 text-violet-600 dark:bg-violet-900/30",  cat: d.categories.pdf },
    { icon: Image,      ...tools.image.compress, href: "https://tools.deepoda.com/image/compress",      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30",        cat: d.categories.image },
    { icon: Wand2,      ...tools.image.removeBg, href: "https://tools.deepoda.com/image/remove-bg",     color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30",  cat: d.categories.image },
    { icon: RefreshCw,  ...tools.image.convert,  href: "https://tools.deepoda.com/image/convert",       color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30",        cat: d.categories.image },
    { icon: Stamp,      ...tools.image.watermark,href: "https://tools.deepoda.com/image/watermark",     color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30",  cat: d.categories.image },
    { icon: Edit3,      ...tools.image.addText,  href: "https://tools.deepoda.com/image/add-text",      color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30",           cat: d.categories.image },
    { icon: FileOutput, ...tools.convert.wordToPdf,     href: "https://tools.deepoda.com/convert/word-to-pdf",     color: "bg-green-50 text-green-600 dark:bg-green-900/30",    cat: d.categories.convert },
    { icon: FileOutput, ...tools.convert.excelToPdf,    href: "https://tools.deepoda.com/convert/excel-to-pdf",    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30", cat: d.categories.convert },
    { icon: FileOutput, ...tools.convert.htmlToPdf,     href: "https://tools.deepoda.com/convert/html-to-pdf",     color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30",      cat: d.categories.convert },
    { icon: FileOutput, ...tools.convert.markdownToPdf, href: "https://tools.deepoda.com/convert/markdown-to-pdf", color: "bg-lime-50 text-lime-600 dark:bg-lime-900/30",       cat: d.categories.convert },
    { icon: Video,    ...tools.video.compress, href: "https://tools.deepoda.com/video/compress", color: "bg-violet-50 text-violet-600 dark:bg-violet-900/30",    cat: d.categories.video },
    { icon: Scissors, ...tools.video.trim,     href: "https://tools.deepoda.com/video/trim",     color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30", cat: d.categories.video },
    { icon: Music,    ...tools.video.toMp3,    href: "https://tools.deepoda.com/video/to-mp3",   color: "bg-pink-50 text-pink-600 dark:bg-pink-900/30",          cat: d.categories.video },
    { icon: RefreshCw,...tools.video.convert,  href: "https://tools.deepoda.com/video/convert",  color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30",    cat: d.categories.video },
    { icon: Film,     ...tools.video.toGif,    href: "https://tools.deepoda.com/video/to-gif",   color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30",             cat: d.categories.video },
    { icon: Link,     ...tools.video.merge,    href: "https://tools.deepoda.com/video/merge",    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30",          cat: d.categories.video },
    { icon: VolumeX,  ...tools.video.mute,     href: "https://tools.deepoda.com/video/mute",     color: "bg-slate-50 text-slate-600 dark:bg-slate-800/50",       cat: d.categories.video },
    { icon: RotateCw, ...tools.video.rotate,   href: "https://tools.deepoda.com/video/rotate",   color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30",          cat: d.categories.video },
  ];

  const CATS = [d.categories.all, d.categories.pdf, d.categories.image, d.categories.convert, d.categories.video];

  const filtered = allTools.filter((t) => {
    const matchCat = activeCat === d.categories.all || t.cat === activeCat;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-12 px-5">
        {/* Gradient blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-br from-blue-400/25 via-purple-400/20 to-pink-400/15 rounded-full blur-3xl" />
          <div className="absolute top-10 right-[-10%] w-96 h-96 bg-purple-300/20 dark:bg-purple-800/20 rounded-full blur-3xl" />
          <div className="absolute top-40 left-[-5%] w-72 h-72 bg-blue-300/20 dark:bg-blue-800/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {allTools.length} {d.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-gray-900 dark:text-white"
          >
            {d.hero.heading1}<br />
            <span className="shimmer-text">{d.hero.heading2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {d.hero.description}
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={d.search.placeholder}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100/50 dark:shadow-none text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-base transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="py-8 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <StatCard animated end={50000} suffix="+" label={d.stats.filesProcessed} />
            <StatCard value={String(allTools.length)} label={d.stats.tools} />
            <StatCard value="$0" label={d.stats.cost} />
            <StatCard value="100%" label={d.stats.inBrowser} />
            <StatCard value="GDPR" label={d.stats.gdpr} />
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────── */}
      <section id="tools" className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {d.toolsSection.heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {allTools.length} {d.toolsSection.description}
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                  activeCat === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {cat}
                {cat !== d.categories.all && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({allTools.filter((t) => t.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((tool, i) => (
                <motion.div
                  key={tool.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                >
                  <ToolCard {...tool} useNow={d.toolCard.useNow} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">{d.toolsSection.noResults} &ldquo;{search}&rdquo;</p>
              <p className="text-sm mt-1">{d.toolsSection.noResultsHint}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-5 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {d.howItWorks.heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {d.howItWorks.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white text-sm font-bold flex items-center justify-center mb-4 shadow-md shadow-blue-200 dark:shadow-blue-900">
                  {step.num}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                {i < d.howItWorks.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 dark:text-gray-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DEEPODA ──────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {d.whyDeepoda.heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {d.whyDeepoda.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.whyDeepoda.features.map(({ title, desc }, i) => {
              const icons = [Shield, Zap, Globe];
              const gradients = [
                "from-green-500 to-emerald-600",
                "from-blue-500 to-blue-700",
                "from-purple-500 to-violet-600",
              ];
              const Icon = icons[i];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-none transition-shadow duration-300"
                >
                  <div className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br text-white shadow-md",
                    gradients[i]
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 text-center"
          >
            {/* bg decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {d.cta.heading}
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
                {d.cta.description}
              </p>
              <a
                href="https://tools.deepoda.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-blue-700 rounded-2xl hover:bg-blue-50 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-xl"
              >
                {d.cta.button} <ArrowRight className="w-5 h-5" />
              </a>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-blue-100 text-sm">
                {d.cta.badges.map((item: string) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-300" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
