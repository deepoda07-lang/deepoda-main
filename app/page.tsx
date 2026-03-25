"use client";

import { useState } from "react";
import {
  FileText, Image, RefreshCw, Scissors, Wand2, FileOutput,
  ArrowRight, CheckCircle2, Shield, Zap, Globe, Search,
  Edit3, Stamp, PenTool,
} from "lucide-react";

const allTools = [
  // PDF
  { icon: FileText,  title: "PDF Birleştir",     desc: "Birden fazla PDF'i tek belgeye birleştir.",         href: "https://tools.deepoda.com/pdf/merge",          badge: "Popüler", color: "bg-red-50 text-red-600",     cat: "PDF" },
  { icon: Scissors,  title: "PDF Böl",            desc: "İstediğin sayfa aralığını ayrı dosyaya çıkar.",    href: "https://tools.deepoda.com/pdf/split",          badge: null,      color: "bg-orange-50 text-orange-600", cat: "PDF" },
  { icon: Edit3,     title: "PDF Düzenle",        desc: "Sayfa sil, yeniden sırala, sürükle-bırak.",        href: "https://tools.deepoda.com/pdf/edit",           badge: null,      color: "bg-amber-50 text-amber-600",   cat: "PDF" },
  { icon: Stamp,     title: "PDF Filigran",       desc: "Sayfalarına GİZLİ, TASLAK gibi damga ekle.",      href: "https://tools.deepoda.com/pdf/watermark",      badge: "Yeni",    color: "bg-yellow-50 text-yellow-600", cat: "PDF" },
  { icon: PenTool,   title: "PDF İmzala",         desc: "İmzanı çiz ve PDF sayfasına göm.",                href: "https://tools.deepoda.com/pdf/sign",           badge: "Yeni",    color: "bg-rose-50 text-rose-600",     cat: "PDF" },
  { icon: FileOutput,title: "PDF → Word",         desc: "PDF dosyasını Word formatına dönüştür.",           href: "https://tools.deepoda.com/pdf/to-word",        badge: null,      color: "bg-pink-50 text-pink-600",     cat: "PDF" },
  // Görsel
  { icon: Image,     title: "Görsel Sıkıştır",    desc: "JPG, PNG, WEBP dosyalarını kaliteli küçült.",      href: "https://tools.deepoda.com/image/compress",     badge: "Popüler", color: "bg-blue-50 text-blue-600",     cat: "Görsel" },
  { icon: Wand2,     title: "Arka Plan Sil",      desc: "Yapay zeka ile arka planı tek tıkla kaldır.",      href: "https://tools.deepoda.com/image/remove-bg",    badge: "AI",      color: "bg-purple-50 text-purple-600", cat: "Görsel" },
  { icon: RefreshCw, title: "Format Dönüştür",    desc: "JPG ↔ PNG ↔ WEBP arasında anında dönüştür.",     href: "https://tools.deepoda.com/image/convert",      badge: null,      color: "bg-cyan-50 text-cyan-600",     cat: "Görsel" },
  // Dönüştür
  { icon: FileOutput,title: "Word → PDF",         desc: "DOCX dosyanı anında profesyonel PDF'e çevir.",    href: "https://tools.deepoda.com/convert/word-to-pdf", badge: null,     color: "bg-green-50 text-green-600",   cat: "Dönüştür" },
];

const CATS = ["Tümü", "PDF", "Görsel", "Dönüştür"] as const;

const steps = [
  { num: "01", title: "Dosyanı Seç",  desc: "Sürükle-bırak veya klasörden seç. Birden fazla dosya aynı anda." },
  { num: "02", title: "Araç Çalışır", desc: "İşlem tamamen tarayıcında gerçekleşir. Sunucuya hiçbir şey gönderilmez." },
  { num: "03", title: "İndir",        desc: "Hazır dosyan anında indirilir. Kayıt olmak gerekmez." },
];

const stats = [
  { value: "13",    label: "Ücretsiz Araç" },
  { value: "0 ₺",  label: "Ücret" },
  { value: "100%",  label: "Tarayıcıda" },
  { value: "GDPR",  label: "Uyumlu" },
];

export default function Home() {
  const [activeCat, setActiveCat] = useState<(typeof CATS)[number]>("Tümü");
  const [search, setSearch] = useState("");

  const filtered = allTools.filter((t) => {
    const matchCat = activeCat === "Tümü" || t.cat === activeCat;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
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
            {allTools.length} ücretsiz araç · Sunucu yok · Gizlilik garantili
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-up">
            İş süreçlerini<br />
            <span className="shimmer-text">otomatikleştir.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-100">
            PDF düzenle, görsel işle, dosya dönüştür — hepsi saniyeler içinde,
            hiç para ödemeden, verilerini sunucuya göndermeden.
          </p>

          {/* ── ARAMA KUTUSU ── */}
          <div className="relative max-w-xl mx-auto animate-fade-up delay-200">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Araç ara — PDF birleştir, arka plan sil…"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-10 border-y bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────── */}
      <section id="araclar" className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Tüm araçlar, tek platformda
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {allTools.length} araç, tamamı ücretsiz. Dosyaların asla sunucuya gitmez.
            </p>
          </div>

          {/* Kategori tabları */}
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
                {cat !== "Tümü" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({allTools.filter((t) => t.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Araç listesi */}
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
                        tool.badge === "AI" ? "bg-purple-600 text-white" :
                        tool.badge === "Yeni" ? "bg-emerald-500 text-white" :
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
                      Hemen Kullan <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">"{search}" için araç bulunamadı</p>
              <p className="text-sm mt-1">Farklı bir kelime dene</p>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-20 px-5 bg-gray-50 border-y">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3 adımda tamamla
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kayıt olmak yok, yazılım kurmak yok. Tarayıcını aç, işini bitir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
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
              Neden Deepoda?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Pek çok online araç dosyalarını sunucularına yükler. Deepoda bunu yapmaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Shield, title: "Tam Gizlilik",  desc: "Dosyaların yalnızca senin tarayıcında işlenir. Hiçbir sunucu görmez, hiçbir log tutulmaz.", color: "text-green-600 bg-green-50" },
              { Icon: Zap,    title: "Anında Sonuç",  desc: "İnternet hızına bağımlı değil. Tüm işlemler cihazının gücüyle gerçekleşir.",                color: "text-blue-600 bg-blue-50" },
              { Icon: Globe,  title: "Her Yerden",    desc: "Mac, Windows, Linux, telefon — herhangi bir cihazdan, işletim sisteminden çalışır.",        color: "text-purple-600 bg-purple-50" },
            ].map(({ Icon, title, desc, color }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-200 bg-white">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="py-20 px-5 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hemen başla. Kayıt gerekmez.
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Her gün binlerce kişi iş süreçlerini Deepoda ile hızlandırıyor.
          </p>
          <a
            href="https://tools.deepoda.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-blue-700 rounded-2xl hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg"
          >
            Tüm Araçları Gör <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-blue-200 text-sm">
            {["Ücretsiz", "Kayıt yok", "Sunucu yok", "GDPR uyumlu"].map((item) => (
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
