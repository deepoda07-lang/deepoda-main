import { FileText, Image, RefreshCw, Scissors, Wand2, FileOutput, ArrowRight, CheckCircle2, Shield, Zap, Globe } from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "PDF Birleştir",
    desc: "Birden fazla PDF'i tek belgeye dönüştür. Sıralama senin elinde.",
    href: "https://tools.deepoda.com/pdf/merge",
    badge: "Popüler",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Scissors,
    title: "PDF Böl",
    desc: "İstediğin sayfa aralığını ayrı dosyaya çıkar.",
    href: "https://tools.deepoda.com/pdf/split",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Image,
    title: "Görsel Sıkıştır",
    desc: "JPG, PNG, WEBP dosyalarını kalite kaybetmeden küçült.",
    href: "https://tools.deepoda.com/image/compress",
    badge: "Popüler",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Wand2,
    title: "Arka Plan Sil",
    desc: "Yapay zeka ile görseldeki arka planı tek tıkla kaldır.",
    href: "https://tools.deepoda.com/image/remove-bg",
    badge: "AI",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: RefreshCw,
    title: "Format Dönüştür",
    desc: "JPG ↔ PNG ↔ WEBP arasında anında dönüştür.",
    href: "https://tools.deepoda.com/image/convert",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: FileOutput,
    title: "Word → PDF",
    desc: "DOCX dosyanı anında profesyonel PDF'e çevir.",
    href: "https://tools.deepoda.com/convert/word-to-pdf",
    color: "bg-green-50 text-green-600",
  },
];

const steps = [
  { num: "01", title: "Dosyanı Seç", desc: "Sürükle-bırak veya klasörden seç. Birden fazla dosya aynı anda." },
  { num: "02", title: "Araç Çalışır", desc: "İşlem tamamen tarayıcında gerçekleşir. Sunucuya hiçbir şey gönderilmez." },
  { num: "03", title: "İndir", desc: "Hazır dosyan anında indirilir. Kayıt olmak gerekmez." },
];

const stats = [
  { value: "0 ₺", label: "Ücret" },
  { value: "0s", label: "Kayıt Zorunluluğu" },
  { value: "100%", label: "Tarayıcıda" },
  { value: "GDPR", label: "Uyumlu" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-5">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Tamamen ücretsiz · Sunucu yok · Gizlilik garantili
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-up">
            İş süreçlerini<br />
            <span className="shimmer-text">otomatikleştir.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-100">
            PDF düzenle, görsel işle, dosya dönüştür — hepsi saniyeler içinde,
            hiç para ödemeden, verilerini sunucuya göndermeden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <a
              href="https://tools.deepoda.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Araçları Kullan
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#araclar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white border border-gray-200 hover:border-gray-300 text-gray-700 rounded-2xl shadow-sm transition-all hover:scale-[1.02]"
            >
              Tüm Araçlar
            </a>
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

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="nasil-calisir" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
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

      {/* ── TOOLS GRID ───────────────────────────────────── */}
      <section id="araclar" className="py-24 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tüm araçlar, tek platformda
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Her araç bağımsız çalışır. Birini kullanırken diğerini beklemene gerek yok.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.href}
                  href={tool.href}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
                >
                  {tool.badge && (
                    <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white">
                      {tool.badge}
                    </span>
                  )}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Hemen Kullan <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://tools.deepoda.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-gray-900 hover:bg-gray-800 text-white rounded-2xl transition-all hover:scale-[1.02]"
            >
              Tüm Araçlara Git
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY DEEPODA ──────────────────────────────────── */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Deepoda?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Pek çok online araç dosyalarını sunucularına yükler. Deepoda bunu yapmaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Shield,
                title: "Tam Gizlilik",
                desc: "Dosyaların yalnızca senin tarayıcında işlenir. Hiçbir sunucu görmez, hiçbir log tutulmaz.",
                color: "text-green-600 bg-green-50",
              },
              {
                Icon: Zap,
                title: "Anında Sonuç",
                desc: "İnternet hızına bağımlı değil. Tüm işlemler cihazının gücüyle gerçekleşir.",
                color: "text-blue-600 bg-blue-50",
              },
              {
                Icon: Globe,
                title: "Her Yerden",
                desc: "Mac, Windows, Linux, telefon — herhangi bir cihazdan, herhangi bir işletim sisteminden çalışır.",
                color: "text-purple-600 bg-purple-50",
              },
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
            Yüzlerce kullanıcı her gün iş süreçlerini Deepoda ile hızlandırıyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tools.deepoda.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-blue-700 rounded-2xl hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg"
            >
              Araçları Kullan <ArrowRight className="w-5 h-5" />
            </a>
          </div>
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
