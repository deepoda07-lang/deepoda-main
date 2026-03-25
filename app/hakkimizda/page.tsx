import type { Metadata } from "next";
import { ArrowRight, Target, Heart, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Deepoda nedir, ne yapar, neden var?",
};

export default function HakkimizdaPage() {
  return (
    <div className="pt-28 pb-24 px-5">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            İnsanların işini<br />
            <span className="text-blue-600">kolaylaştırmak için buradayız.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Deepoda, günlük dijital işlemlerini dakikalar yerine saniyeler içinde tamamlamana yardım eden ücretsiz bir araç platformudur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { Icon: Target, title: "Misyon", desc: "Teknik bilgi gerektirmeden herkesin kullanabileceği, güvenli ve hızlı araçlar sunmak.", color: "text-blue-600 bg-blue-50" },
            { Icon: Heart, title: "Değerler", desc: "Gizlilik birinci önceliğimiz. Dosyalarınız tarayıcınızdan asla çıkmaz.", color: "text-red-500 bg-red-50" },
            { Icon: Code2, title: "Teknoloji", desc: "WebAssembly, Canvas API ve modern kütüphaneler ile sunucusuz mimari.", color: "text-purple-600 bg-purple-50" },
          ].map(({ Icon, title, desc, color }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-200 bg-white">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Neden var olduk?</h2>
          <p>
            PDF birleştirmek için uygulama kurmak, görsel sıkıştırmak için reklam dolu sitelere dosya yüklemek ya da
            format dönüştürmek için hesap açmak zorunda kalmak gereksiz bir zaman kaybıdır.
          </p>
          <p>
            Deepoda bu sorunu çözmek için tasarlandı. Tüm araçlarımız tarayıcıda çalışır;
            dosyalarınız hiçbir zaman sunucuya gönderilmez. Bu hem güvenliğinizi korur hem de
            işlemi çok daha hızlı yapar.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Nasıl sürdürülebilir?</h2>
          <p>
            Temel araçlar sonsuza kadar ücretsiz kalacak. Platform, ileri düzey özellikler için
            opsiyonel Pro plan ve Google AdSense ile kendini finanse eder.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-blue-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Hemen dene</h3>
          <p className="text-blue-200 mb-6">Kayıt olmadan, ücretsiz, şimdi.</p>
          <a
            href="https://tools.deepoda.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Araçları Kullan <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
