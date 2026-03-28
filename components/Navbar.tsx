"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavDict {
  howItWorks: string;
  tools: string;
  about: string;
  contact: string;
  useTools: string;
}

interface Props {
  navDict: NavDict;
  lang: string;
}

const LOCALES = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar({ navDict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Build locale-prefixed path
  const prefix = lang === "en" ? "" : `/${lang}`;

  // Switch locale: strip current locale prefix then add new one
  function switchLocale(targetLang: string) {
    let base = pathname;
    for (const loc of ["tr", "es"]) {
      if (base === `/${loc}`) { base = "/"; break; }
      if (base.startsWith(`/${loc}/`)) { base = base.slice(loc.length + 1); break; }
    }
    const newPath = targetLang === "en" ? base : `/${targetLang}${base}`;
    router.push(newPath);
    setLangOpen(false);
  }

  const currentLocale = LOCALES.find((l) => l.code === lang) ?? LOCALES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={prefix || "/"} className="flex items-center gap-2 font-bold text-xl">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </span>
          <span className="text-gray-900 dark:text-gray-100">deep<span className="text-blue-600">oda</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href={`${prefix}/#how-it-works`} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {navDict.howItWorks}
          </Link>
          <Link href={`${prefix}/#tools`} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {navDict.tools}
          </Link>
          <Link href={`${prefix}/about`} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {navDict.about}
          </Link>
          <Link href={`${prefix}/contact`} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {navDict.contact}
          </Link>
        </nav>

        {/* Right: CTA + Language switcher */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span>{currentLocale.flag}</span>
              <span className="font-medium">{currentLocale.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
                {LOCALES.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => switchLocale(locale.code)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      locale.code === lang ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>{locale.flag}</span>
                    <span>{locale.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://tools.deepoda.com"
            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
          >
            {navDict.useTools}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden glass border-t px-5 py-4 flex flex-col gap-2">
          <Link href={`${prefix}/#how-it-works`} className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>{navDict.howItWorks}</Link>
          <Link href={`${prefix}/#tools`} className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>{navDict.tools}</Link>
          <Link href={`${prefix}/about`} className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>{navDict.about}</Link>
          <Link href={`${prefix}/contact`} className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>{navDict.contact}</Link>

          {/* Mobile language switcher */}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            {LOCALES.map((locale) => (
              <button
                key={locale.code}
                onClick={() => { switchLocale(locale.code); setOpen(false); }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  locale.code === lang
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{locale.flag}</span>
                <span>{locale.label}</span>
              </button>
            ))}
          </div>

          <a
            href="https://tools.deepoda.com"
            className="mt-2 px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-xl text-center"
          >
            {navDict.useTools}
          </a>
        </div>
      )}
    </header>
  );
}
