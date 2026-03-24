const tools = [
  { icon: "📄", title: "PDF Araçları", desc: "Birleştir, böl, dönüştür", href: "https://tools.deepoda.com/pdf" },
  { icon: "🗜️", title: "Görsel Sıkıştır", desc: "JPG, PNG, WEBP küçült", href: "https://tools.deepoda.com/image/compress" },
  { icon: "🪄", title: "Arka Plan Sil", desc: "AI ile otomatik silme", href: "https://tools.deepoda.com/image/remove-bg" },
  { icon: "🔄", title: "Format Dönüştür", desc: "JPG ↔ PNG ↔ WEBP", href: "https://tools.deepoda.com/image/convert" },
  { icon: "📋", title: "Word → PDF", desc: "DOCX'i PDF'e çevir", href: "https://tools.deepoda.com/convert/word-to-pdf" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Ücretsiz Online Araçlar,<br />
          <span className="text-blue-600">Tarayıcında Çalışır</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          PDF, görsel ve dosya işlemlerini saniyeler içinde yap. Dosyaların sunucuya gitmez — tamamen özel ve güvenli.
        </p>
        <a
          href="https://tools.deepoda.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
        >
          Araçları Keşfet →
        </a>
      </section>

      {/* Tool grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
          Öne Çıkan Araçlar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all bg-white"
            >
              <span className="text-3xl">{t.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{t.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{t.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Feature list */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Neden Deepoda?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🔒", title: "100% Gizlilik", desc: "Dosyaların sunucuya gitmez, tarayıcında işlenir." },
              { icon: "⚡", title: "Hızlı", desc: "Yükleme yok, üye olmak yok. Anında kullan." },
              { icon: "🆓", title: "Ücretsiz", desc: "Tüm temel araçlar tamamen ücretsiz." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
