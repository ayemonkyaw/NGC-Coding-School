/* ============================================================
   DESIGN: Soft Isometric World — Hero Section
   Two-column split: left headline + CTA, right illustration
   Floating decorative elements, wave bottom divider
   ============================================================ */

import { motion } from "framer-motion";
import { Star, Rocket, Lightbulb, Code2 } from "lucide-react";

const floatingItems = [
  { icon: "⭐", top: "15%", left: "5%", delay: 0, size: "text-2xl" },
  { icon: "🚀", top: "70%", left: "8%", delay: 0.5, size: "text-3xl" },
  { icon: "💡", top: "25%", right: "5%", delay: 1, size: "text-2xl" },
  { icon: "🎮", top: "65%", right: "8%", delay: 0.3, size: "text-3xl" },
  { icon: "✨", top: "45%", left: "3%", delay: 0.8, size: "text-xl" },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #FFE8E8 40%, #E8F8F7 100%)" }}
    >
      {/* Floating background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "400px", height: "400px",
            background: "radial-gradient(circle, #FF6B6B, transparent)",
            top: "-100px", right: "-100px",
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: "300px", height: "300px",
            background: "radial-gradient(circle, #4ECDC4, transparent)",
            bottom: "50px", left: "-80px",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "200px", height: "200px",
            background: "radial-gradient(circle, #FFE66D, transparent)",
            top: "30%", left: "45%",
          }}
        />
      </div>

      {/* Floating emoji decorations */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} pointer-events-none select-none`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 rounded-full px-4 py-2 w-fit shadow-sm"
            >
              <span className="text-lg">🐱</span>
              <span className="text-sm font-semibold" style={{ color: '#0c3969' }}>Next Gen Coders — Scratch Academy</span>
              <span className="text-sm text-gray-500">· Insein, Yangon</span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-[#2D3436]"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                Where Kids
                <br />
                <span className="text-[#FF6B6B]">Learn to Code</span>
                <br />
                <span className="text-[#4ECDC4]">& Create!</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              At <strong style={{ color: '#0c3969' }}>Next Gen Coders</strong>, children aged 6–14 discover the magic of programming through
              Scratch — building games, animations, and interactive stories in a fun, supportive classroom in <strong>Insein, Yangon</strong>.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "200+", label: "Happy Students" },
                { value: "2", label: "Course Levels" },
                { value: "5★", label: "Parent Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-extrabold text-[#FF6B6B]"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="px-8 py-3.5 rounded-full bg-[#FF6B6B] text-white font-bold text-base shadow-lg hover:bg-[#e85555] transition-colors"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                🚀 Enroll Now — It's Free to Try!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#courses")}
                className="px-8 py-3.5 rounded-full bg-white border-2 border-[#4ECDC4] text-[#4ECDC4] font-bold text-base shadow-sm hover:bg-[#4ECDC4] hover:text-white transition-colors"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                See Courses ✨
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow circle behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #FF6B6B, #FFE66D)" }}
              />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433110016/dkSjAW3zAGrezvQCHvKYkV/hero-kids-coding-3JF3XVyj6HUjp32PzojHjH.webp"
                alt="Kids learning Scratch coding"
                className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Floating badges on image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 z-20"
            >
              <span className="text-2xl">🎮</span>
              <div>
                <p className="text-xs font-bold text-[#2D3436]">Build Games!</p>
                <p className="text-xs text-gray-400">with Scratch</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-[#FFE66D] rounded-2xl shadow-xl p-3 flex items-center gap-2 z-20"
            >
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-xs font-bold text-[#2D3436]">Ages 6–14</p>
                <p className="text-xs text-gray-600">All Levels</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
