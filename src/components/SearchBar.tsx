import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useGameSystem } from "@/context/GameSystemContext";

interface SearchBarProps {
  searchQuery: string;
  onChangeQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, onChangeQuery }: SearchBarProps) {
  const { playHover, unlockAchievement } = useGameSystem();
  return (
    <div className="w-full max-w-xl mx-auto px-4 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative flex items-center bg-slate-900/40 border border-slate-800/80 focus-within:border-indigo-500/50 rounded-2xl p-1.5 backdrop-blur-md transition-all duration-300 shadow-inner group"
      >
        <div className="pl-3.5 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-200">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            const val = e.target.value;
            onChangeQuery(val);
            if (val.trim().length > 1) {
              unlockAchievement("search");
            }
          }}
          onFocus={playHover}
          placeholder="Search game titles, engines, or technologies..."
          className="w-full bg-transparent border-0 outline-0 py-2.5 px-3 text-sm text-slate-200 placeholder-slate-500 focus:ring-0"
        />
        {searchQuery && (
          <button
            onClick={() => onChangeQuery("")}
            className="p-2 text-slate-400 hover:text-slate-200 cursor-pointer rounded-xl hover:bg-slate-800/40 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </motion.div>
    </div>
  );
}
