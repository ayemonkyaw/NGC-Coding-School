/* ============================================================
   DESIGN: Soft Isometric World — Testimonials Section
   Parent review cards with star ratings
   ============================================================ */

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daw Khin Myat",
    role: "Parent of Ko Aung (Level 1)",
    avatar: "👩",
    quote: "My son was nervous at first, but the teachers were so patient and encouraging. Now he talks about Scratch every day and has already built 3 games!",
    stars: 5,
    color: "#FFE8E8",
    accent: "#FF6B6B",
  },
  {
    name: "U Kyaw Zin",
    role: "Parent of Ma Thida (Level 2)",
    avatar: "👨",
    quote: "The small class size means my daughter gets real attention. She went from zero coding knowledge to building an animated story in just 8 weeks. Incredible!",
    stars: 5,
    color: "#E8F8F7",
    accent: "#4ECDC4",
  },
  {
    name: "Daw Su Su",
    role: "Parent of Ko Min (Level 3)",
    avatar: "👩‍💼",
    quote: "The graduation showcase was the highlight of the year. My son presented his game to the whole family and was so proud. ScratchKids gave him real confidence.",
    stars: 5,
    color: "#F0E8FF",
    accent: "#9B59B6",
  },
  {
    name: "U Myo Thant",
    role: "Parent of Ma Ei (Level 1)",
    avatar: "🧑",
    quote: "Very convenient location in Insein. The classroom is clean, safe, and well-equipped. The teachers clearly love what they do. Highly recommend!",
    stars: 5,
    color: "#FFF3E0",
    accent: "#E67E22",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#FFF3E0] text-[#E67E22] text-sm font-bold px-4 py-2 rounded-full mb-4">
            💬 Parent Reviews
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#2D3436] mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Don't just take our word for it — hear from the families who have seen the transformation firsthand.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 card-hover flex flex-col gap-4"
              style={{ backgroundColor: t.color }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-base">
                {"⭐".repeat(t.stars)}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ backgroundColor: t.accent + "33" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2D3436]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}
        >
          <h3
            className="text-2xl lg:text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            🎉 Join 200+ Happy Kids in Insein!
          </h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Your child's coding adventure starts with a single block. Book their free trial class today
            and watch them discover the creator inside.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-full bg-white text-[#FF6B6B] font-bold text-base shadow-xl hover:shadow-2xl transition-shadow"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Book Free Trial Class Now →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
