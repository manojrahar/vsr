import { motion } from "framer-motion";
import { useGameSystem } from "@/context/GameSystemContext";

interface FilterBarProps {
  activeFilter: string;
  onChangeFilter: (filter: string) => void;
}

const FILTERS = [
  "All",
  "Casual",
  "Kids",
  "Endless",
  "2D",
  "3D",
  "Action"
];

export default function FilterBar({ activeFilter, onChangeFilter }: FilterBarProps) {
  const { playHover, playClick, unlockAchievement } = useGameSystem();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-6">
      <div className="flex flex-wrap gap-2.5 justify-center items-center p-2 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => {
                playClick();
                onChangeFilter(filter);
                unlockAchievement("filter");
              }}
              onMouseEnter={playHover}
              className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-colors duration-300 z-10 cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-gradient-to-r from-neon-orange to-neon-red rounded-xl -z-10 shadow-lg shadow-neon-orange/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
