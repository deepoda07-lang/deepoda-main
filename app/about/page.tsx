import type { Metadata } from "next";
import { ArrowRight, Target, Heart, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "What is Deepoda, what does it do, and why does it exist?",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-5">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            We're here to make<br />
            <span className="text-blue-600">your work easier.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Deepoda is a free tool platform that helps you complete everyday digital tasks in seconds instead of minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { Icon: Target, title: "Mission",    desc: "Provide fast, secure tools that anyone can use without technical knowledge.", color: "text-blue-600 bg-blue-50" },
            { Icon: Heart,  title: "Values",     desc: "Privacy is our top priority. Your files never leave your browser.",           color: "text-red-500 bg-red-50" },
            { Icon: Code2,  title: "Technology", desc: "Serverless architecture powered by WebAssembly, Canvas API, and modern libraries.", color: "text-purple-600 bg-purple-50" },
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
          <h2 className="text-2xl font-bold text-gray-900">Why we exist</h2>
          <p>
            Having to install an app just to merge a PDF, upload files to ad-filled websites to compress an image,
            or create an account just to convert a format — these are unnecessary time sinks.
          </p>
          <p>
            Deepoda was designed to solve exactly this. All our tools run in the browser;
            your files are never sent to a server. This keeps you secure and makes
            the whole process significantly faster.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">How we sustain this</h2>
          <p>
            Core tools will stay free forever. The platform finances itself through
            an optional Pro plan for advanced features and Google AdSense.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-blue-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Try it now</h3>
          <p className="text-blue-200 mb-6">No sign-up, free, right now.</p>
          <a
            href="https://tools.deepoda.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Browse Tools <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
