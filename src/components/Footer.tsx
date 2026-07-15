"use client";

import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-[#050A19] border-t border-slate-900/80 mt-12 sm:mt-0 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider uppercase text-center sm:text-left">
          © {new Date().getFullYear()} Vishambhar Singh Ranawat • All Rights Reserved.
        </p>



        {/* Back-To-Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-900 hover:border-indigo-500/30 text-slate-400 hover:text-white cursor-pointer transition-all flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
        >
          Back To Top
          <ChevronUp size={16} />
        </motion.button>

      </div>
    </footer>
  );
}
