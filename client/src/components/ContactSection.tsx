/* ============================================================
   DESIGN: Soft Isometric World — Contact / Enroll Section
   Enrollment form + location info card
   Coral CTA, mint accents, cream background
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from "lucide-react";

const schedules = [
  { day: "Saturday", time: "9:00 AM – 12:00 PM", level: "Level 1" },
  { day: "Saturday", time: "1:00 PM – 4:00 PM", level: "Level 2" },
  { day: "Sunday", time: "9:00 AM – 12:00 PM", level: "Level 1" },
  { day: "Sunday", time: "1:00 PM – 4:00 PM", level: "Level 2" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    level: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF9F0 0%, #E8F8F7 100%)" }}
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
          <span className="inline-block bg-[#FFE8E8] text-[#FF6B6B] text-sm font-bold px-4 py-2 rounded-full mb-4">
            📩 Get In Touch
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#2D3436] mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Ready to Start Coding?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Fill in the form below and we'll get back to you within 24 hours to schedule your child's
            <strong className="text-[#FF6B6B]"> free trial class</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Enrollment form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#E8F8F7] flex items-center justify-center text-4xl">
                  🎉
                </div>
                <h3
                  className="text-2xl font-extrabold text-[#2D3436]"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Woohoo! We Got Your Message!
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for enrolling interest! Our team will contact you within 24 hours to
                  schedule your child's free trial class. 🐱
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#FF6B6B] text-white font-semibold text-sm hover:bg-[#e85555] transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <>
                <h3
                  className="text-xl font-bold text-[#2D3436] mb-6"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  🚀 Enroll for a Free Trial Class
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Daw Aye Aye"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Child's Name *</label>
                      <input
                        type="text"
                        name="childName"
                        value={form.childName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ko Aung Aung"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Child's Age *</label>
                      <input
                        type="number"
                        name="childAge"
                        value={form.childAge}
                        onChange={handleChange}
                        required
                        min="5"
                        max="16"
                        placeholder="e.g. 9"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 09 123 456 789"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Course Level</label>
                    <select
                      name="level"
                      value={form.level}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all bg-white"
                    >
                      <option value="">Not sure yet — help me choose</option>
                      <option value="level1">Level 1 — Beginners (Ages 6–10)</option>
                      <option value="level2">Level 2 — Explorers (Ages 10–14)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any questions or special requirements?"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B] transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-[#FF6B6B] text-white font-bold text-base shadow-lg hover:bg-[#e85555] transition-colors flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    <Send size={18} />
                    Send Enrollment Request 🚀
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center">
                    We'll respond within 24 hours. First trial class is completely FREE!
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Location */}
            <div className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFE8E8] flex items-center justify-center">
                  <MapPin size={20} className="text-[#FF6B6B]" />
                </div>
                <h4 className="font-bold text-[#2D3436]" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Our Location
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>ScratchKids Coding School</strong><br />
                No. 45, Insein Road,<br />
                Insein Township,<br />
                Yangon, Myanmar
              </p>
              <a
                href="https://maps.google.com/?q=Insein+Township+Yangon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#FF6B6B] hover:underline"
              >
                <MapPin size={12} /> View on Google Maps →
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F7] flex items-center justify-center">
                  <Phone size={20} className="text-[#4ECDC4]" />
                </div>
                <h4 className="font-bold text-[#2D3436]" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Contact Us
                </h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#4ECDC4]" />
                  <span>09 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#4ECDC4]" />
                  <span>09 987 654 321</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#4ECDC4]" />
                  <span>hello@scratchkids.mm</span>
                </div>
              </div>
            </div>

            {/* Class Schedule */}
            <div className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0E8FF] flex items-center justify-center">
                  <Clock size={20} className="text-[#9B59B6]" />
                </div>
                <h4 className="font-bold text-[#2D3436]" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Class Schedule
                </h4>
              </div>
              <div className="space-y-2">
                {schedules.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-[#2D3436]">{s.day}</span>
                      <span className="text-gray-400 ml-2">{s.time}</span>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded-full text-white font-semibold"
                      style={{ backgroundColor: i % 2 === 0 ? "#4ECDC4" : "#9B59B6" }}
                    >
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social / Viber */}
            <div className="bg-[#FFE66D] rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-[#2D3436] mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>
                💬 Chat with us on Viber!
              </p>
              <p className="text-xs text-gray-600">
                Send us a Viber message at <strong>09 123 456 789</strong> for the fastest response.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
