"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  isStringVal?: string;
  sysName: string;
}

function StatItem({ value, suffix = "", label, isStringVal, sysName }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    if (isStringVal) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out function
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, isStringVal]);

  return (
    <div
      ref={ref}
      className="relative p-8 rounded-2xl bg-[#080f24]/30 border border-slate-800/80 hover:border-neon-orange/40 hover:shadow-lg hover:shadow-neon-orange/5 backdrop-blur-sm text-center flex flex-col justify-center items-center overflow-hidden transition-all duration-500 group select-none hologram-card"
    >
      {/* Tactical Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-700/60 group-hover:border-neon-orange/80 transition-colors duration-300" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-700/60 group-hover:border-neon-orange/80 transition-colors duration-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-700/60 group-hover:border-neon-orange/80 transition-colors duration-300" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-700/60 group-hover:border-neon-orange/80 transition-colors duration-300" />

      {/* Pulsing blinking diagnostic tag */}
      <div className="absolute top-2.5 right-3 flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
        <span className="text-[7.5px] font-mono tracking-widest text-slate-400">{sysName}</span>
      </div>

      <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-2 text-neon-glow-cyan group-hover:scale-105 transition-transform duration-300">
        {isStringVal ? isStringVal : `${count}${suffix}`}
      </div>
      <p className="text-[11px] sm:text-xs text-slate-400 font-bold tracking-widest uppercase">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatItem value={10} suffix="+" label="Years Experience" sysName="SYS_EXP_01" />
        <StatItem value={70} suffix="+" label="Projects Delivered" sysName="SYS_PRJ_70" />
        <StatItem value={50} suffix="+" label="Clients Served" sysName="SYS_CLI_50" />
        <StatItem value={100} isStringVal="Millions" label="Players Reached" sysName="SYS_PLY_M" />
      </div>
    </section>
  );
}
