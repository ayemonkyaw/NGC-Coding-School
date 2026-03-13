/* ============================================================
   DESIGN: Soft Isometric World — Gallery / How It Works
   Steps timeline + mascot image + achievement image
   ============================================================ */

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    emoji: "📝",
    title: "Register & Free Trial",
    desc: "Sign up online or visit us in Insein. Your child attends a free trial class to find the right level.",
    color: "#FF6B6B",
    bg: "#FFE8E8",
  },
  {
    step: "02",
    emoji: "🐱",
    title: "Meet Scratch & Start Coding",
    desc: "Kids are introduced to the Scratch cat, the interface, and their first coding blocks in a welcoming classroom.",
    color: "#4ECDC4",
    bg: "#E8F8F7",
  },
  {
    step: "03",
    emoji: "🎮",
    title: "Build Projects Week by Week",
    desc: "Each week, students complete a new mini-project — animations, games, quizzes — growing their skills step by step.",
    color: "#9B59B6",
    bg: "#F0E8FF",
  },
  {
    step: "04",
    emoji: "🏆",
    title: "Graduate & Showcase",
    desc: "At the end of the course, students present their final project at our graduation showcase and receive a certificate!",
    color: "#E67E22",
    bg: "#FFF3E0",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#F0E8FF] text-[#9B59B6] text-sm font-bold px-4 py-2 rounded-full mb-4">
            🗺️ How It Works
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#2D3436] mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Your Child's Coding Journey
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From their very first block of code to a standing ovation at graduation — here's what the journey looks like.
          </p>
        </motion.div>

        {/* Two-column: steps + images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5 items-start"
              >
                {/* Step number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white shadow-md"
                    style={{ backgroundColor: step.color, fontFamily: "'Baloo 2', cursive" }}
                  >
                    {step.emoji}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 mt-2" style={{ backgroundColor: step.color + "44" }} />
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-4 -mt-1"
                  style={{ backgroundColor: step.bg }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: step.color }}
                    >
                      Step {step.step}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-[#2D3436] mb-1"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Images stacked */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433110016/dkSjAW3zAGrezvQCHvKYkV/scratch-cat-mascot-KDJ4RouAYZvvCjhGGhAFRW.webp"
                  alt="Scratch cat mascot"
                  className="w-full rounded-3xl shadow-xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433110016/dkSjAW3zAGrezvQCHvKYkV/kids-achievement-eYXN4A2ZeJu2fsc39MbMNB.webp"
                  alt="Kids achievement and graduation"
                  className="w-full rounded-3xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
