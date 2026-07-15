"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Rocket, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  setView: (view: string) => void;
}

export default function HeroSection({ setView }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 min-h-[55vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden cursor-glow-element"
    >
      {/* Floating Game shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] opacity-15 hidden md:block"
      >
        <Gamepad2 size={60} className="text-indigo-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[6%] opacity-15 hidden md:block"
      >
        <Rocket size={50} className="text-purple-400" />
      </motion.div>

      {/* Hero Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-bold tracking-widest text-indigo-400 bg-indigo-950/40 px-4.5 py-2 rounded-full border border-indigo-500/20 inline-block mb-6 uppercase backdrop-blur-sm shadow-inner">
          Senior Unity Game Architect
        </span>
      </motion.div>

      {/* Main Title */}
      <div className="relative inline-block select-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-6 uppercase"
        >
          Senior Unity <br /> Game Developer
        </motion.h1>

        {/* Character Illustration leaning on the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute pointer-events-none w-[105px] sm:w-[150px] lg:w-[300px] right-[-20%] sm:right-[-15%] lg:right-[-22%] -top-[23%] sm:-top-[4%] lg:-top-[32%] z-20"
        >
          <img
            src="/images/vsr1.png"
            alt="Character Illustration"
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6 uppercase"
      >
        10+ Years of Building Immersive Gaming Experiences
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-slate-400 text-sm sm:text-lg max-w-2xl leading-relaxed mb-10 font-light"
      >
        Specialized in multiplayer networking architectures, custom physics engines, mobile optimizations, AR/VR experiences, and multi-platform game deployment.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={() => setView("portfolio")}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-300 cursor-pointer group"
        >
          View Portfolio
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
