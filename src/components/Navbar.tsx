import { motion } from "framer-motion";
import { Gamepad2, Volume2, VolumeX } from "lucide-react";
import { useGameSystem, SoundSynth } from "@/context/GameSystemContext";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const { isMuted, toggleMute, playHover, playClick } = useGameSystem();

  const links = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" }
  ];

  return (
    <nav className="sticky top-0 w-full z-40 bg-[#050A19]/70 backdrop-blur-md border-b border-slate-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 h-18 flex items-center justify-between gap-4">

        {/* Logo/Brand */}
        <button
          onClick={() => {
            playClick();
            setActiveTab("home");
          }}
          onMouseEnter={playHover}
          className="flex items-center gap-2.5 text-white hover:text-indigo-400 transition-colors cursor-pointer group flex-shrink-0"
        >
          <div className="p-2 rounded-xl bg-gradient-to-r from-neon-pink to-indigo-600 shadow-md shadow-indigo-600/10 group-hover:scale-105 transition-transform">
            <Gamepad2 size={20} />
          </div>
          <div className="text-left">
            <span className="hidden sm:block text-sm font-black tracking-widest uppercase leading-none">
              Vishambhar Singh Ranawat
            </span>
            <span className="block sm:hidden text-[13.3px] font-black tracking-widest uppercase leading-none">
              Vishambhar Singh
            </span>
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
              Unity Architect
            </span>
          </div>
        </button>


        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="flex gap-1 md:gap-2">
            {links.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    playClick();
                    setActiveTab(link.id);
                  }}
                  onMouseEnter={playHover}
                  className={`relative px-2.5 py-2 text-[11.4px] md:text-sm font-semibold rounded-xl uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                    link.id === "home" ? "hidden sm:block" : "block"
                  } ${isActive ? "text-white" : "text-slate-400 hover:text-orange-500"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl -z-10 shadow-lg shadow-orange-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Glowing Speaker Mute Toggle */}
          <button
            onClick={() => {
              // Toggle and trigger a click sound immediately if unmuting
              toggleMute();
              if (isMuted) {
                // We are unmuting, play trigger sound
                setTimeout(() => SoundSynth.playClick(), 50);
              }
            }}
            onMouseEnter={playHover}
            className={`p-2 rounded-xl border transition-all duration-300 active:scale-95 cursor-pointer shadow-sm ${
              isMuted
                ? "bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                : "bg-neon-orange/10 border-neon-orange/30 text-neon-orange hover:bg-neon-orange/20 hover:border-neon-orange/50 hover:shadow-md hover:shadow-neon-orange/10"
            }`}
            title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="animate-pulse" />}
          </button>
        </div>

      </div>
    </nav>
  );
}
