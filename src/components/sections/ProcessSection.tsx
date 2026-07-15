import { motion } from "framer-motion";
import { MessageSquare, Layers, Code2, TestTube2, Rocket, RefreshCw } from "lucide-react";
import { useGameSystem } from "@/context/GameSystemContext";

export default function ProcessSection() {
  const { playHover } = useGameSystem();
  const steps = [
    {
      step: "01",
      title: "Concept",
      icon: <MessageSquare size={20} className="text-blue-400" />,
      desc: "Game mechanics planning, layout definition, systems architecture, and technical document drafting (GDD/TDD)."
    },
    {
      step: "02",
      title: "Prototype",
      icon: <Layers size={20} className="text-indigo-400" />,
      desc: "Rapid gameplay loop validation, controller physics tuning, grey-box levels testing, and network syncing tests."
    },
    {
      step: "03",
      title: "Development",
      icon: <Code2 size={20} className="text-purple-400" />,
      desc: "Production scripting, custom systems integration, graphics authored in URP/HDRP, and dependency architectures."
    },
    {
      step: "04",
      title: "Testing",
      icon: <TestTube2 size={20} className="text-pink-400" />,
      desc: "Rigorous profiling on hardware, regression tests, unit-testing networking lobbies, and bug fixes."
    },
    {
      step: "05",
      title: "Launch",
      icon: <Rocket size={20} className="text-emerald-400" />,
      desc: "Asset bundling, final compilation pipeline scripts, compliance checks, and publishing to Steam, Mobile, or Consoles."
    },
    {
      step: "06",
      title: "LiveOps",
      icon: <RefreshCw size={20} className="text-teal-400" />,
      desc: "Integrating post-launch analytics, player stats management, updating assets via Addressables, and patch updates."
    }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-6">

      <div className="relative text-center max-w-3xl mx-auto mb-12">
        {/* Character Illustration next to the title (left side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -15 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute pointer-events-none hidden sm:block w-[138px] lg:w-[215px] left-[-104px] lg:left-[-112px] top-1/2 -translate-y-1/2 z-20"
        >
          <img
            src="/images/vsr9.png"
            alt="Character Illustration"
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          Workflow Structure
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2">
          Development Process
        </h2>
        <p className="text-slate-400 text-sm font-light mt-3 leading-relaxed">
          How I take a game concept from high-level documents to a global live-ops system.
        </p>
      </div>

      {/* Horizontal / Vertical Timeline Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={playHover}
            className="relative p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-sm shadow-md group hover:border-indigo-500/20 hover:bg-slate-900/40 transition-all duration-300 hologram-card"
          >
            {/* Timeline Number indicator */}
            <div className="absolute top-4 right-4 text-3xl font-black tracking-tight text-slate-800/40 group-hover:text-indigo-500/25 transition-colors duration-300 font-sans">
              {item.step}
            </div>

            <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl inline-block mb-4">
              {item.icon}
            </div>

            <h3 className="text-base font-bold text-white mb-2 tracking-wide uppercase">{item.title}</h3>
            <p className="text-xs text-slate-405 leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
