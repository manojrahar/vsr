"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[index];

  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">

      <div className="mb-10">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          References
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2">
          Industry Endorsements
        </h2>
      </div>

      {/* Testimonial slider card */}
      <div className="relative min-h-[260px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-md shadow-2xl relative w-full flex flex-col justify-center items-center"
          >
            {/* Quote Icon decorative */}
            <div className="absolute top-6 left-6 text-slate-800/40">
              <Quote size={40} />
            </div>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-6 font-light max-w-2xl italic">
              "{current.quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-650 flex items-center justify-center text-xs font-bold text-white shadow-md">
                {current.avatar}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-100">{current.name}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  {current.role} @ <span className="text-indigo-450">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === i ? "bg-indigo-500 w-5" : "bg-slate-850 hover:bg-slate-700"
                }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}
