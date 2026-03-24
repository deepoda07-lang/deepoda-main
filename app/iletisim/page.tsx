import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Deepoda ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">İletişim</h1>
      <p className="text-gray-500 mb-8">
        Öneri, hata bildirimi veya iş birliği için bize ulaşabilirsiniz.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ornek@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
          <textarea
            rows={5}
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Mesajınız..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
