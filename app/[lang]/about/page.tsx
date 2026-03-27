import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Target, Heart, Code2 } from "lucide-react";
import { getDictionary, hasLocale } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.about;
  const cardIcons = [Target, Heart, Code2];
  const cardColors = [
    "text-blue-600 bg-blue-50",
    "text-red-500 bg-red-50",
    "text-purple-600 bg-purple-50",
  ];

  return (
    <div className="pt-28 pb-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {d.hero.heading1}<br />
            <span className="text-blue-600">{d.hero.heading2}</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">{d.hero.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {d.cards.map(({ title, desc }, i) => {
            const Icon = cardIcons[i];
            return (
              <div key={title} className="p-6 rounded-2xl border border-gray-200 bg-white">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${cardColors[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed mb-16">
          <h2 className="text-2xl font-bold text-gray-900">{d.whyExist.heading}</h2>
          <p>{d.whyExist.p1}</p>
          <p>{d.whyExist.p2}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">{d.howSustain.heading}</h2>
          <p>{d.howSustain.p1}</p>
        </div>

        <div className="p-8 rounded-2xl bg-blue-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">{d.cta.heading}</h3>
          <p className="text-blue-200 mb-6">{d.cta.description}</p>
          <a
            href="https://tools.deepoda.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            {d.cta.button} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
