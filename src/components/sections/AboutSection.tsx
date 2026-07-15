"use client";

import { motion } from "framer-motion";
import { Award, Zap, Code, Shield } from "lucide-react";

export default function AboutSection() {
  const virtues = [
    {
      icon: <Code size={20} className="text-blue-500" />,
      title: "Clean Architecture",
      desc: "Structuring projects using SOLID design patterns, dependency injection, and scriptable databases for extreme scalability."
    },
    {
      icon: <Zap size={20} className="text-amber-500" />,
      title: "High Performance",
      desc: "Optimizing profiling draw calls, memory leaks, garbage collection spikes, and utilizing Unity Job System and DOTS."
    },
    {
      icon: <Award size={20} className="text-purple-500" />,
      title: "AAA Experience",
      desc: "A decade of shipping gameplay mechanics, networking architectures, and cross-platform ports (PC, Console, VR, Mobile)."
    },
    {
      icon: <Shield size={20} className="text-emerald-500" />,
      title: "Reliable Backend",
      desc: "Integrating online services with PlayFab, LootLocker, Firebase, custom SQL databases, and secure player lobbies."
    }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-3">

      {/* Grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left Column: Profile Picture (1/3 of the width) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950/60 shadow-lg aspect-square lg:aspect-[4/5] flex items-center justify-center">
            <img
              src="/images/Vishambhar Singh Ranawat.jpeg"
              alt="Vishambhar Singh Ranawat"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay border gradient glow */}
            <div className="absolute inset-0 border-2 border-indigo-500/10 pointer-events-none rounded-2xl" />
          </div>
        </div>

        {/* Right Column: Bio Content + Virtues + Technologies (2/3 of the width) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                Profile Summary
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Vishambhar Singh Ranawat
              </h2>
            </div>

            <p className="text-slate-400 text-base font-light leading-relaxed">
              I am a Senior Unity Game Architect and Developer with over 10 years of experience designing, coding, and optimization of cross-platform game experiences. My approach blends physical aerodynamics and custom graphics pipelines with modular networking structures.
            </p>
            <p className="text-slate-400 text-base font-light leading-relaxed">
              Throughout my career, I have collaborated with publishers and AAA studios to engineer cover systems, vehicle controllers, procedural voxel destructions, and high-performance VR interactions. I focus on creating frameworks that empower creative vision without compromising on efficiency.
            </p>
          </div>

          {/* Virtues Grid inside the 2/3 column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {virtues.map((virtue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="p-4 rounded-xl bg-slate-900/20 border border-slate-900/40 backdrop-blur-sm shadow-md hover:border-slate-800 hover:bg-slate-900/30 transition-all duration-300"
              >
                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-slate-950/60 border border-slate-900 rounded-lg shrink-0">
                    {virtue.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">{virtue.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{virtue.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
}
