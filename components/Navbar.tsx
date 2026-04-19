"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe, Menu, X, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const langRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close lang dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const prefix = lang === "en" ? "" : `/${lang}`;

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

  const navLinks = [
    { href: `${prefix}/#how-it-works`, label: navDict.howItWorks },
    { href: `${prefix}/#tools`,        label: navDict.tools },
    { href: `${prefix}/about`,         label: navDict.about },
    { href: `${prefix}/contact`,       label: navDict.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        {/* ── Pill navbar ────────────────────────────────── */}
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
            scrolled
              ? "bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg shadow-black/5"
              : "bg-white/50 dark:bg-gray-950/50 backdrop-blur-md border border-white/30 dark:border-white/5"
          )}
        >
          {/* Logo */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-2.5 font-bold text-xl shrink-0 group"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md shadow-indigo-200 dark:shadow-indigo-900 group-hover:scale-105 transition-transform shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                <path d="M4 3h9c7 0 11 4.5 11 9s-4 9-11 9H4V3zm5 4.5v9h4c3.5 0 6-2.2 6-4.5s-2.5-4.5-6-4.5H9z"/>
              </svg>
            </span>
            <span className="text-gray-900 dark:text-white">
              deep<span className="text-indigo-600 dark:text-indigo-400">oda</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-1.5">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLocale.flag} {currentLocale.label}</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", langOpen && "rotate-180")} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-100 dark:border-gray-700 shadow-xl py-1 z-50">
                  {LOCALES.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => switchLocale(locale.code)}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                        locale.code === lang
                          ? "text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                      )}
                    >
                      <span className="text-base">{locale.flag}</span>
                      <span>{locale.label}</span>
                      {locale.code === lang && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://tools.deepoda.com"
              className="ml-1 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-200 dark:shadow-indigo-900 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {navDict.useTools}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* ── Mobile menu ────────────────────────────────── */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                {LOCALES.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => { switchLocale(locale.code); setMobileOpen(false); }}
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                      locale.code === lang
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20"
                    )}
                  >
                    <span>{locale.flag}</span>
                    <span>{locale.label}</span>
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>

            <a
              href="https://tools.deepoda.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-200 dark:shadow-indigo-900"
            >
              {navDict.useTools}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
