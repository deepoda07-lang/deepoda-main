import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Deepoda hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Hakkımızda</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          <strong>Deepoda</strong>, PDF, görsel ve dosya işlemleri için ücretsiz online araçlar sunan bir platformdur.
        </p>
        <p>
          Tüm araçlarımız tamamen tarayıcıda çalışır. Dosyalarınız hiçbir zaman sunucularımıza gönderilmez.
          Bu sayede gizliliğiniz korunur ve internet bağlantısı dahi olmadan bazı araçları kullanabilirsiniz.
        </p>
        <p>
          Misyonumuz: Karmaşık yazılımlar kurmadan, hesap oluşturmadan, ücret ödemeden herkesin kullanabileceği
          pratik araçlar sunmak.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Teknoloji</h2>
        <p>
          Deepoda, Next.js ile geliştirilmiş ve Vercel üzerinde yayınlanmaktadır. Görsel işlemleri için
          WebAssembly ve Canvas API, PDF işlemleri için pdf-lib kütüphanesi kullanılmaktadır.
        </p>
      </div>
    </div>
  );
}
