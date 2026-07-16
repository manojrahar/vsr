import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink, Info, Lock } from "lucide-react";
import { useGameSystem } from "@/context/GameSystemContext";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { playHover, playClick, unlockAchievement } = useGameSystem();
  // Define Framer Motion variants for premium coordinated hover effects
  const cardVariants = {
    initial: { y: 0, scale: 1, boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)" },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const overlayVariants = {
    initial: { opacity: 0.85 },
    hover: { opacity: 0.95, transition: { duration: 0.4 } }
  } as const;

  const buttonsVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
  } as const;

  const metaVariants = {
    initial: { y: 0 },
    hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onMouseEnter={playHover}
      onClick={() => {
        playClick();
        if (project.id === "14" && project.webglUrl) {
          window.open(project.webglUrl, "_blank", "noopener,noreferrer");
          unlockAchievement("webgl");
        } else {
          onViewDetails(project);
        }
      }}
      className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-800/80 hover:border-neon-orange/30 hover:shadow-lg hover:shadow-neon-orange/5 bg-slate-950 flex flex-col justify-end pt-6 px-6 pb-7 sm:pb-6 group cursor-pointer transition-all duration-300 hologram-card"
    >
      {/* Background Gameplay Image */}
      <motion.div variants={imageVariants} className="absolute inset-0 z-0">
        <img
          src={`${project.thumbnail}?v=2`}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </motion.div>
 
      {/* Dark Gradient Overlay */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 z-10"
      />
 
      {/* Content Container */}
      <div className="relative z-20 w-full flex flex-col">
        {/* Project Meta Badges */}
        <motion.div
          variants={metaVariants}
          className="flex flex-wrap gap-1.5 mb-3 max-sm:!translate-y-[-10px]"
        >
          <span className="text-[10.7px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-neon-orange/15 text-neon-orange border border-neon-orange/25 backdrop-blur-sm">
            {project.engine.split(" ")[0]}
          </span>
          {project.platform.map((plat) => (
            <span
              key={plat}
              className="text-[10.7px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50 backdrop-blur-sm"
            >
              {plat}
            </span>
          ))}
        </motion.div>
 
        {/* Project Title */}
        <h3 className="text-[21.4px] sm:text-xl font-bold text-white tracking-wide leading-tight group-hover:text-indigo-200 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
 
 
 
        {/* Action Buttons (slide upward on hover) */}
        <motion.div
          variants={buttonsVariants}
          className="flex gap-2.5 w-full mt-1 max-sm:!opacity-100 max-sm:!translate-y-0"
        >
          {project.id !== "14" && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playClick();
                onViewDetails(project);
              }}
              onMouseEnter={playHover}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#0c1e3f] hover:bg-[#122b5c] text-white text-[12.8px] sm:text-xs font-bold py-2.5 px-4 rounded-xl border border-blue-900 hover:border-blue-700 transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <Info size={14} />
              Know More
            </button>
          )}
 
          {project.webglUrl ? (
            <a
              href={project.webglUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                playClick();
                unlockAchievement("webgl");
              }}
              onMouseEnter={playHover}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-neon-orange to-neon-red hover:from-neon-orange/90 hover:to-neon-red/90 text-white text-[12.8px] sm:text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-neon-orange/10 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <ExternalLink size={14} />
              Play WebGL
            </a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900/40 text-slate-650 text-[12.8px] sm:text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-800/80 cursor-not-allowed select-none"
            >
              <Lock size={12} className="text-slate-600" />
              WebGL Coming Soon
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
