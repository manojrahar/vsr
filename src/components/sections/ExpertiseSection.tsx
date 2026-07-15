import { motion } from "framer-motion";
import { Monitor, Smartphone, Cpu, ShieldAlert, Layers, Compass, Play, Server, HelpCircle } from "lucide-react";
import { useGameSystem } from "@/context/GameSystemContext";

export default function ExpertiseSection() {
  const { playHover } = useGameSystem();
  const expertises = [
    {
      icon: <Monitor size={22} className="text-blue-500" />,
      title: "Unity 3D Development",
      desc: "Creating complex 3D mechanics, dynamic cameras (Cinemachine), physics simulation, and custom shader visual effects."
    },
    {
      icon: <Smartphone size={22} className="text-indigo-500" />,
      title: "Unity 2D Development",
      desc: "Building highly polished pixel or vector platformers and puzzle games optimized for low-end mobile hardware."
    },
    {
      icon: <Server size={22} className="text-purple-500" />,
      title: "Multiplayer Systems",
      desc: "Authoritative server models, network sync, matchmaking, and multiplayer infrastructure using Photon and Mirror."
    },
    {
      icon: <Layers size={22} className="text-pink-500" />,
      title: "Augmented Reality (AR)",
      desc: "Interactive plane detection, virtual object sizing, and light estimation using Unity AR Foundation and ARKit."
    },
    {
      icon: <Compass size={22} className="text-amber-500" />,
      title: "Virtual Reality (VR)",
      desc: "Designing physics hand interactions, climbing structures, and optimized frame rates on standalone VR headsets."
    },
    {
      icon: <Play size={22} className="text-emerald-500" />,
      title: "Physics Simulations",
      desc: "Volumetric liquids, wind aerodynamics, soft bodies, and destructible meshes for realistic simulators."
    },
    {
      icon: <Cpu size={22} className="text-cyan-500" />,
      title: "Game AI & Pathfinding",
      desc: "Behavior trees, tactical coverage detection, and complex A* pathfinding systems in multi-tiered environments."
    },
    {
      icon: <ShieldAlert size={22} className="text-rose-500" />,
      title: "Performance Tuning",
      desc: "Memory leaks resolution, profiling draw calls reduction, custom build stripping, and garbage collection sweeps."
    },
    {
      icon: <HelpCircle size={22} className="text-teal-500" />,
      title: "Console Porting",
      desc: "Adapting input bindings, UI layouts, saving systems, and compliance guidelines for PlayStation, Xbox, and Switch."
    }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-6">

      <div className="relative text-center max-w-3xl mx-auto mb-12">
        {/* Character Illustration next to the title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 15 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute pointer-events-none hidden sm:block w-[130px] lg:w-[205px] -right-24 lg:-right-54 top-1/2 -translate-y-1/2 z-20"
        >
          <img
            src="/images/vsr6.png"
            alt="Character Illustration"
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          Technical Focus
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2">
          Core Game Engineering Areas
        </h2>
        <p className="text-slate-400 text-sm font-light mt-3 leading-relaxed">
          Delivering production-level implementations across diverse niches of engine development, optimization, and platform constraints.
        </p>
      </div>

      {/* Grid of expertise */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {expertises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -6, borderColor: "rgba(24, 110, 242, 0.3)" }}
            onMouseEnter={playHover}
            className="aspect-square sm:aspect-auto p-4 sm:p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-sm shadow-md hover:bg-slate-900/40 hover:shadow-indigo-950/20 transition-all duration-300 flex flex-col justify-center items-center text-center sm:justify-between sm:items-start sm:text-left hologram-card"
          >
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
              <div className="p-2 sm:p-3 bg-slate-950/60 border border-slate-900 rounded-xl inline-block mb-2 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-[13px] sm:text-base font-bold text-slate-100 mb-1 sm:mb-2">{item.title}</h3>
              <p className="hidden sm:block text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
