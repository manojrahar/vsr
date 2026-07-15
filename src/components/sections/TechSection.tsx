"use client";

import { motion } from "framer-motion";
import { SiUnity, SiFirebase, SiBlender, SiGit } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { FiCloud, FiGitBranch, FiCpu, FiMonitor } from "react-icons/fi";

export default function TechSection() {
  const technologies = [
    { name: "Unity Engine", icon: <SiUnity size={32} className="text-white" />, category: "Game Engine" },
    { name: "C# Scripting", icon: <div className="text-2xl font-black text-blue-450 tracking-tighter select-none">C#</div>, category: "Language" },
    { name: "Photon Fusion", icon: <FiCpu size={32} className="text-indigo-400" />, category: "Multiplayer" },
    { name: "Mirror Networking", icon: <FiCpu size={32} className="text-purple-400" />, category: "Multiplayer" },
    { name: "PlayFab SDK", icon: <FiCloud size={32} className="text-blue-500" />, category: "Backend" },
    { name: "Firebase Service", icon: <SiFirebase size={32} className="text-amber-500" />, category: "Backend" },
    { name: "Blender 3D", icon: <SiBlender size={32} className="text-orange-400" />, category: "Assets Creation" },
    { name: "Addressables System", icon: <TbBinaryTree size={32} className="text-emerald-400" />, category: "Asset Management" },
    { name: "Shader Graph", icon: <FiMonitor size={32} className="text-pink-400" />, category: "Graphics Pipeline" },
    { name: "Git VCS", icon: <SiGit size={32} className="text-rose-550" />, category: "Version Control" },
    { name: "Plastic SCM", icon: <FiGitBranch size={32} className="text-cyan-400" />, category: "Version Control" }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-6">

      <div className="relative text-center max-w-3xl mx-auto mb-12">
        {/* Character Illustration next to the title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 15 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute pointer-events-none hidden sm:block w-[138px] lg:w-[195px] -right-26 lg:-right-38 top-1/2 -translate-y-1/2 z-20"
        >
          <img
            src="/images/vsr4.png"
            alt="Character Illustration"
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          Toolbox & Pipeline
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2">
          Technologies & Software
        </h2>
        <p className="text-slate-400 text-sm font-light mt-3 leading-relaxed">
          Integrated tools, version controls, shader editors, and cloud services utilized in production.
        </p>
      </div>

      {/* Grid of technologies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            whileHover={{ y: -4, borderColor: "rgba(24, 110, 242, 0.4)", backgroundColor: "rgba(11, 18, 38, 0.6)" }}
            className="p-5 rounded-2xl bg-slate-905/30 border border-slate-900/80 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center text-center transition-all duration-200"
          >
            <div className="p-3.5 bg-slate-950/60 rounded-xl mb-4 border border-slate-900">
              {tech.icon}
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mb-1">{tech.name}</h3>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{tech.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
