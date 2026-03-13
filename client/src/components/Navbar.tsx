/* ============================================================
   DESIGN: Soft Isometric World — Navbar
   Sticky top nav with coral logo, clean links, CTA button
   ============================================================ */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform" style={{ backgroundColor: '#0c3969' }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'Baloo 2', cursive" }}>NGC</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-[#2D3436] text-base" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Next Gen <span className="text-[#0c3969]">Coders</span>
            </span>
            <p className="text-[10px] text-gray-400 font-medium -mt-0.5">Coding School · Insein</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium text-gray-600 hover:text-[#FF6B6B] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#FF6B6B] rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="px-5 py-2 rounded-full bg-[#FF6B6B] text-white text-sm font-semibold shadow-md hover:bg-[#e85555] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 pulse-glow-anim"
          >
            Enroll Now 🚀
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-orange-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-orange-100 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-base font-medium text-gray-700 hover:text-[#FF6B6B] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#FF6B6B] text-white text-sm font-semibold text-center shadow-md"
              >
                Enroll Now 🚀
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
