"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

export default function ProjectGrid({ projects, onViewDetails }: ProjectGridProps) {
  // Container variants to coordinate children staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 relative z-10">
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-slate-900/20 border border-slate-900/60 rounded-2xl backdrop-blur-sm"
        >
          <p className="text-slate-400 text-lg">No projects match your search or filter criteria.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
          >
            Clear filters
          </button>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full"
              >
                <ProjectCard project={project} onViewDetails={onViewDetails} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
