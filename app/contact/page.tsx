import type { Metadata } from "next";
import { Mail, MessageSquare, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Deepoda.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fill out the form for suggestions, bug reports, or collaboration inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {[
              { Icon: MessageSquare, title: "General Support",  desc: "For questions about our tools.",               color: "text-blue-600 bg-blue-50" },
              { Icon: Bug,           title: "Bug Report",       desc: "Found an issue? Let us know.",                 color: "text-red-500 bg-red-50" },
              { Icon: Mail,          title: "Collaboration",    desc: "For integration or advertising proposals.",    color: "text-purple-600 bg-purple-50" },
            ].map(({ Icon, title, desc, color }) => (
              <div key={title} className="p-5 rounded-2xl border border-gray-200 bg-white flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>General Support</option>
                  <option>Bug Report</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
