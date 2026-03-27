"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </span>
          <span className="text-gray-900">deep<span className="text-blue-600">oda</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/#how-it-works" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            How It Works
          </Link>
          <Link href="/#tools" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Tools
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            About
          </Link>
          <Link href="/contact" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://tools.deepoda.com"
            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
          >
            Use Tools →
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
          <Link href="/#how-it-works" className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/#tools" className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>Tools</Link>
          <Link href="/about" className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>Contact</Link>
          <a
            href="https://tools.deepoda.com"
            className="mt-2 px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-xl text-center"
          >
            Use Tools →
          </a>
        </div>
      )}
    </header>
  );
}
