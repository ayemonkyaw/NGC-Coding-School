/* ============================================================
   DESIGN: Soft Isometric World — Footer
   Dark charcoal background, coral accents, clean layout
   ============================================================ */

import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2D3436] text-white">
      {/* Wave top */}
      <div className="pointer-events-none -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#FFF9F0" />
        </svg>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#0c3969' }}>
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Baloo 2', cursive" }}>NGC</span>
              </div>
              <div>
                <span className="font-bold text-xl" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Next Gen <span style={{ color: '#0c3969' }}>Coders</span>
                </span>
                <p className="text-xs text-gray-400">Coding School · Insein, Yangon</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Empowering the next generation of creators and problem-solvers through the joy of
              Scratch coding. Every child deserves to build something amazing.
            </p>
            <div className="flex gap-3 mt-5">
              {["📘", "📸", "💬"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base hover:bg-[#FF6B6B] transition-colors"
                  title={["Facebook", "Instagram", "Viber"][i]}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Courses", href: "#courses" },
                { label: "Why Us", href: "#why-us" },
                { label: "How It Works", href: "#gallery" },
                { label: "Enroll Now", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-gray-400 hover:text-[#FF6B6B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="mt-0.5 text-[#4ECDC4] flex-shrink-0" />
                <span>No. 45, Insein Road, Insein Township, Yangon</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-[#4ECDC4] flex-shrink-0" />
                <span>09 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-[#4ECDC4] flex-shrink-0" />
                <span>hello@scratchkids.mm</span>
              </li>
            </ul>

            {/* Scratch badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
              <span className="text-xl">🐱</span>
              <div>
                <p className="text-xs font-bold text-white">Scratch Curriculum</p>
                <p className="text-xs text-gray-400">MIT Media Lab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2024 ScratchKids Coding School. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart size={12} className="text-[#FF6B6B]" /> for kids in Insein, Yangon
          </p>
        </div>
      </div>
    </footer>
  );
}
