"use client";

import { useState } from "react";
import {
  FileText, Image, RefreshCw, Scissors, Wand2, FileOutput,
  ArrowRight, CheckCircle2, Shield, Zap, Globe, Search,
  Edit3, Stamp, PenTool,
  Video, Music, Film, Link, VolumeX, RotateCw,
  Lock, LockOpen,
} from "lucide-react";
import type { getDictionary } from "@/lib/dictionaries";

type Dict = Awaited<ReturnType<typeof getDictionary>>;

interface Props {
  dict: Dict;
  lang: string;
}

export default function HomeClient({ dict, lang }: Props) {
  const d = dict.home;
  const tools = dict.tools;

  const allTools = [
    // PDF
    { icon: FileText,   ...tools.pdf.merge,     href: "https://tools.deepoda.com/pdf/merge",           color: "bg-red-50 text-red-600",      cat: dict.home.categories.pdf },
    { icon: Scissors,   ...tools.pdf.split,      href: "https://tools.deepoda.com/pdf/split",           color: "bg-orange-50 text-orange-600", cat: dict.home.categories.pdf },
    { icon: Edit3,      ...tools.pdf.edit,       href: "https://tools.deepoda.com/pdf/edit",            color: "bg-amber-50 text-amber-600",   cat: dict.home.categories.pdf },
    { icon: Stamp,      ...tools.pdf.watermark,  href: "https://tools.deepoda.com/pdf/watermark",       color: "bg-yellow-50 text-yellow-600", cat: dict.home.categories.pdf },
    { icon: PenTool,    ...tools.pdf.sign,       href: "https://tools.deepoda.com/pdf/sign",            color: "bg-rose-50 text-rose-600",     cat: dict.home.categories.pdf },
    { icon: FileOutput, ...tools.pdf.toWord,     href: "https://tools.deepoda.com/pdf/to-word",         color: "bg-pink-50 text-pink-600",     cat: dict.home.categories.pdf },
    { icon: Lock,       ...tools.pdf.lock,       href: "https://tools.deepoda.com/pdf/lock",            color: "bg-slate-50 text-slate-600",   cat: dict.home.categories.pdf },
    { icon: LockOpen,   ...tools.pdf.unlock,     href: "https://tools.deepoda.com/pdf/unlock",          color: "bg-slate-50 text-slate-600",   cat: dict.home.categories.pdf },
    { icon: Scissors,   ...tools.pdf.crop,       href: "https://tools.deepoda.com/pdf/crop",            color: "bg-orange-50 text-orange-600", cat: dict.home.categories.pdf },
    { icon: Edit3,      ...tools.pdf.formFill,   href: "https://tools.deepoda.com/pdf/form-fill",       color: "bg-teal-50 text-teal-600",     cat: dict.home.categories.pdf },
    { icon: PenTool,    ...tools.pdf.annotate,   href: "https://tools.deepoda.com/pdf/annotate",        color: "bg-violet-50 text-violet-600", cat: dict.home.categories.pdf },
    // Image
    { icon: Image,      ...tools.image.compress, href: "https://tools.deepoda.com/image/compress",      color: "bg-blue-50 text-blue-600",     cat: dict.home.categories.image },
    { icon: Wand2,      ...tools.image.removeBg, href: "https://tools.deepoda.com/image/remove-bg",     color: "bg-purple-50 text-purple-600", cat: dict.home.categories.image },
    { icon: RefreshCw,  ...tools.image.convert,  href: "https://tools.deepoda.com/image/convert",       color: "bg-cyan-50 text-cyan-600",     cat: dict.home.categories.image },
    { icon: Stamp,      ...tools.image.watermark,href: "https://tools.deepoda.com/image/watermark",     color: "bg-indigo-50 text-indigo-600", cat: dict.home.categories.image },
    { icon: Edit3,      ...tools.image.addText,  href: "https://tools.deepoda.com/image/add-text",      color: "bg-sky-50 text-sky-600",       cat: dict.home.categories.image },
    // Convert
    { icon: FileOutput, ...tools.convert.wordToPdf,     href: "https://tools.deepoda.com/convert/word-to-pdf",     color: "bg-green-50 text-green-600",    cat: dict.home.categories.convert },
    { icon: FileOutput, ...tools.convert.excelToPdf,    href: "https://tools.deepoda.com/convert/excel-to-pdf",    color: "bg-emerald-50 text-emerald-600", cat: dict.home.categories.convert },
    { icon: FileOutput, ...tools.convert.htmlToPdf,     href: "https://tools.deepoda.com/convert/html-to-pdf",     color: "bg-teal-50 text-teal-600",      cat: dict.home.categories.convert },
    { icon: FileOutput, ...tools.convert.markdownToPdf, href: "https://tools.deepoda.com/convert/markdown-to-pdf", color: "bg-lime-50 text-lime-600",       cat: dict.home.categories.convert },
    // Video
    { icon: Video,    ...tools.video.compress, href: "https://tools.deepoda.com/video/compress", color: "bg-violet-50 text-violet-600",   cat: dict.home.categories.video },
    { icon: Scissors, ...tools.video.trim,     href: "https://tools.deepoda.com/video/trim",     color: "bg-fuchsia-50 text-fuchsia-600", cat: dict.home.categories.video },
    { icon: Music,    ...tools.video.toMp3,    href: "https://tools.deepoda.com/video/to-mp3",   color: "bg-pink-50 text-pink-600",       cat: dict.home.categories.video },
    { icon: RefreshCw,...tools.video.convert,  href: "https://tools.deepoda.com/video/convert",  color: "bg-indigo-50 text-indigo-600",   cat: dict.home.categories.video },
    { icon: Film,     ...tools.video.toGif,    href: "https://tools.deepoda.com/video/to-gif",   color: "bg-sky-50 text-sky-600",         cat: dict.home.categories.video },
    { icon: Link,     ...tools.video.merge,    href: "https://tools.deepoda.com/video/merge",    color: "bg-blue-50 text-blue-600",       cat: dict.home.categories.video },
    { icon: VolumeX,  ...tools.video.mute,     href: "https://tools.deepoda.com/video/mute",     color: "bg-slate-50 text-slate-600",     cat: dict.home.categories.video },
    { icon: RotateCw, ...tools.video.rotate,   href: "https://tools.deepoda.com/video/rotate",   color: "bg-cyan-50 text-cyan-600",       cat: dict.home.categories.video },
  ];

  const CATS = [
    d.categories.all,
    d.categories.pdf,
    d.categories.image,
    d.categories.convert,
    d.categories.video,
  ];

  const [activeCat, setActiveCat] = useState(d.categories.all);
  const [search, setSearch] = useState("");

  const filtered = allTools.filter((t) => {
    const matchCat = activeCat === d.categories.all || t.cat === activeCat;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-5">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {allTools.length} {d.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-up">
            {d.hero.heading1}<br />
            <span className="shimmer-text">{d.hero.heading2}</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-100">
            {d.hero.description}
          </p>

          {/* ── SEARCH BOX ── */}
          <div className="relative max-w-xl mx-auto animate-fade-up delay-200">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={d.search.placeholder}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-10 border-y bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: String(allTools.length), label: d.stats.tools },
              { value: "$0",   label: d.stats.cost },
              { value: "100%", label: d.stats.inBrowser },
              { value: "GDPR", label: d.stats.gdpr },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────── */}
      <section id="tools" className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {d.toolsSection.heading}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {allTools.length} {d.toolsSection.description}
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCat === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
                {cat !== d.categories.all && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({allTools.filter((t) => t.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tool list */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((tool) => {
                const Icon = tool.icon;
                return (
                  <a
                    key={tool.href}
                    href={tool.href}
                    className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
                  >
                    {tool.badge && (
                      <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        tool.badge === "AI" || tool.badge === "IA" ? "bg-purple-600 text-white" :
                        tool.badge === "New" || tool.badge === "Yeni" || tool.badge === "Nuevo" ? "bg-emerald-500 text-white" :
                        "bg-blue-600 text-white"
                      }`}>
                        {tool.badge}
                      </span>
                    )}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 mt-auto pt-2 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.toolCard.useNow} <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">{d.toolsSection.noResults} &ldquo;{search}&rdquo;</p>
              <p className="text-sm mt-1">{d.toolsSection.noResultsHint}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-5 bg-gray-50 border-y">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {d.howItWorks.heading}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {d.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.howItWorks.steps.map((step) => (
              <div key={step.num} className="relative text-center md:text-left">
                <div className="inline-flex w-12 h-12 rounded-2xl bg-blue-600 text-white text-sm font-bold items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DEEPODA ──────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {d.whyDeepoda.heading}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {d.whyDeepoda.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.whyDeepoda.features.map(({ title, desc }, i) => {
              const icons = [Shield, Zap, Globe];
              const colors = ["text-green-600 bg-green-50", "text-blue-600 bg-blue-50", "text-purple-600 bg-purple-50"];
              const Icon = icons[i];
              return (
                <div key={title} className="p-6 rounded-2xl border border-gray-200 bg-white">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${colors[i]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="py-20 px-5 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {d.cta.heading}
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            {d.cta.description}
          </p>
          <a
            href="https://tools.deepoda.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-blue-700 rounded-2xl hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg"
          >
            {d.cta.button} <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-blue-200 text-sm">
            {d.cta.badges.map((item: string) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
