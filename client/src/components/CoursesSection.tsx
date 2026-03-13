/* ============================================================
   DESIGN: Soft Isometric World — Courses Section
   Three course cards with Scratch-themed colors and badges
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Star, CheckCircle2 } from "lucide-react";

const courses = [
  {
    level: "Level 1",
    emoji: "🐱",
    title: "Scratch Beginners",
    subtitle: "First Steps in Coding",
    age: "Ages 6–10",
    duration: "2 Months",
    classSize: "Max 8 Kids",
    color: "#4ECDC4",
    bgColor: "#E8F8F7",
    badgeColor: "#4ECDC4",
    price: "200,000 MMK",
    perMonth: "/ course",
    highlights: [
      "Meet the Scratch Cat mascot",
      "Drag-and-drop coding blocks",
      "Create your first animation",
      "Build a simple interactive story",
      "Share projects with classmates",
      "Certificate of completion",
    ],
    tags: ["Motion", "Looks", "Sound"],
    tagColors: ["#4A90E2", "#9B59B6", "#E67E22"],
  },
  {
    level: "Level 2",
    emoji: "🎮",
    title: "Scratch Explorers",
    subtitle: "Games & Animations",
    age: "Ages 10–14",
    duration: "2 Months",
    classSize: "Max 8 Kids",
    color: "#FF6B6B",
    bgColor: "#FFE8E8",
    badgeColor: "#FF6B6B",
    price: "250,000 MMK",
    perMonth: "/ course",
    popular: true,
    highlights: [
      "Design multi-level games",
      "Use variables and loops",
      "Add scoring systems",
      "Create animated characters",
      "Build a full platformer game",
      "Graduation showcase event",
    ],
    tags: ["Events", "Control", "Variables"],
    tagColors: ["#E67E22", "#F39C12", "#27AE60"],
  },
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden shadow-lg card-hover"
      style={{ backgroundColor: course.bgColor }}
    >
      {/* Popular badge */}
      {course.popular && (
        <div className="absolute top-4 right-4 z-10 bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ⭐ Most Popular
        </div>
      )}

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
            style={{ backgroundColor: course.color }}
          >
            {course.emoji}
          </div>
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: course.badgeColor }}
            >
              {course.level}
            </span>
            <h3
              className="text-xl font-extrabold text-[#2D3436] mt-1"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              {course.title}
            </h3>
            <p className="text-sm text-gray-500">{course.subtitle}</p>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600">
            <span>🎂</span> {course.age}
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600">
            <Clock size={12} /> {course.duration}
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600">
            <Users size={12} /> {course.classSize}
          </div>
        </div>

        {/* Scratch topic tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {course.tags.map((tag, i) => (
            <span
              key={tag}
              className="text-xs font-semibold text-white px-2.5 py-1 rounded-full"
              style={{ backgroundColor: course.tagColors[i] }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {course.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: course.color }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span
              className="text-2xl font-extrabold"
              style={{ color: course.color, fontFamily: "'Baloo 2', cursive" }}
            >
              {course.price}
            </span>
            <span className="text-sm text-gray-400 ml-1">{course.perMonth}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold shadow-md transition-opacity hover:opacity-90"
            style={{ backgroundColor: course.color, fontFamily: "'Baloo 2', cursive" }}
          >
            Join Class →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FFE8E8] text-[#FF6B6B] text-sm font-bold px-4 py-2 rounded-full mb-4">
            🎓 Our Courses
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#2D3436] mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Pick Your Coding Adventure
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Two levels designed to grow with your child — from their very first block of code
            to building full games and interactive apps with Scratch. Each course is 2 months.
          </p>
        </motion.div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          🎁 First trial class is <strong className="text-[#FF6B6B]">FREE</strong> — no commitment needed!
          Each course is <strong>2 months</strong> of intensive learning. Classes run every Saturday & Sunday at our Insein campus.
        </motion.p>
      </div>
    </section>
  );
}
