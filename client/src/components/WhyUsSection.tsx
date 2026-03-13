/* ============================================================
   DESIGN: Soft Isometric World — Why Us Section
   Feature grid with icons + classroom illustration
   Coral/mint/yellow accent colors, wave dividers
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    emoji: "🐱",
    title: "Scratch-Certified Curriculum",
    desc: "Our lessons follow MIT's Scratch framework — the world's most popular coding platform for kids, trusted by 100M+ learners globally.",
    color: "#FF6B6B",
    bg: "#FFE8E8",
  },
  {
    emoji: "👩‍🏫",
    title: "Passionate, Trained Teachers",
    desc: "Our instructors are experienced educators who specialize in making complex ideas simple, fun, and accessible for every child.",
    color: "#4ECDC4",
    bg: "#E8F8F7",
  },
  {
    emoji: "👥",
    title: "Small Class Sizes",
    desc: "With a maximum of 6–8 students per class, every child gets personal attention and the confidence to ask questions freely.",
    color: "#9B59B6",
    bg: "#F0E8FF",
  },
  {
    emoji: "🎮",
    title: "Project-Based Learning",
    desc: "Kids don't just learn theory — they build real games, animations, and stories they can share with family and friends.",
    color: "#E67E22",
    bg: "#FFF3E0",
  },
  {
    emoji: "📍",
    title: "Conveniently in Insein",
    desc: "Located in the heart of Insein Township, Yangon — easy to reach by bus, car, or on foot from surrounding neighborhoods.",
    color: "#27AE60",
    bg: "#E8F8EE",
  },
  {
    emoji: "🏆",
    title: "Graduation Showcase",
    desc: "Every course ends with a showcase event where students present their projects to parents, building confidence and pride.",
    color: "#FFE66D",
    bg: "#FFFDE8",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 card-hover"
      style={{ backgroundColor: feature.bg }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm"
        style={{ backgroundColor: feature.color + "33" }}
      >
        {feature.emoji}
      </div>
      <h3
        className="text-lg font-bold text-[#2D3436] mb-2"
        style={{ fontFamily: "'Baloo 2', cursive" }}
      >
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF9F0 0%, #F0FFF9 100%)" }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E8F8F7] text-[#4ECDC4] text-sm font-bold px-4 py-2 rounded-full mb-4">
            💚 Why ScratchKids?
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#2D3436] mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Learning That Feels Like Play
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We believe every child is a natural creator. Our school gives them the tools, the space,
            and the encouragement to build something amazing.
          </p>
        </motion.div>

        {/* Two-column: features + illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Feature grid — 3 cols on left */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

          {/* Illustration on right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-25"
                style={{ background: "radial-gradient(circle, #4ECDC4, #FF6B6B)" }}
              />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433110016/dkSjAW3zAGrezvQCHvKYkV/scratch-coding-class-dEk5G2fEpHNFyHb2kxiDRC.webp"
                alt="Scratch coding classroom at ScratchKids Insein"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-5 w-full border-l-4 border-[#FF6B6B]"
            >
              <p className="text-sm text-gray-600 italic leading-relaxed mb-3">
                "My daughter used to be shy about technology. After just 4 weeks at ScratchKids,
                she built her own game and couldn't stop showing it to everyone!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFE8E8] flex items-center justify-center text-lg">
                  👩
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2D3436]">Daw Khin Myat</p>
                  <p className="text-xs text-gray-400">Parent of Level 1 student</p>
                </div>
                <div className="ml-auto text-[#FFE66D] text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
