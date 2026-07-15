"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Calendar, Cpu, Layers, Trophy, Wrench, X, ChevronLeft, ChevronRight, Lock } from "lucide-react";

interface ProjectCaseStudyProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectCaseStudy({ project, onBack }: ProjectCaseStudyProps) {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [imageAspects, setImageAspects] = useState<Record<string, 'portrait' | 'landscape'>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const allImages = [
    ...(project.galleryBanner && !failedImages[project.galleryBanner] ? [project.galleryBanner] : []),
    ...project.gallery.filter(img => !failedImages[img])
  ];

  const handlePrevImage = () => {
    if (!activeLightboxImage || allImages.length <= 1) return;
    const currentIndex = allImages.indexOf(activeLightboxImage);
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setActiveLightboxImage(allImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!activeLightboxImage || allImages.length <= 1) return;
    const currentIndex = allImages.indexOf(activeLightboxImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setActiveLightboxImage(allImages[nextIndex]);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxImage) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") setActiveLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxImage]);

  const handleImageError = (imgUrl: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [imgUrl]: true
    }));
  };

  useEffect(() => {
    setImageAspects({});
    project.gallery.forEach((imgUrl) => {
      const img = new window.Image();
      img.src = imgUrl;
      img.onload = () => {
        setImageAspects((prev) => ({
          ...prev,
          [imgUrl]: img.width > img.height ? 'landscape' : 'portrait'
        }));
      };
    });
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full relative z-10 space-y-10 pb-16 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* 1. Large Banner Section - Brightened overlay, subtitle description removed */}
      <div className="relative w-full h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden border border-slate-905 shadow-2xl mt-4">
        <img
          src={`${project.banner}?v=2`}
          alt={`${project.title} Banner`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Lightened dulling overlays for enhanced image visibility */}
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A19] via-transparent to-slate-950/25" />

        {/* Back Button (Floating on Banner) */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-neon-orange hover:bg-slate-900 transition-all text-xs font-bold uppercase tracking-wider text-slate-200 cursor-pointer shadow-lg"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </button>

        {/* Genre Type Badge (Floating Top Right on Banner, solid orange gradient background) */}
        <span className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-orange to-neon-red shadow-lg text-xs font-black uppercase tracking-wider text-white border border-transparent">
          {project.genre}
        </span>

        {/* Banner Content (Bottom Positioned) */}
        <div className="absolute bottom-6 left-4 right-4 sm:bottom-10 sm:left-6 sm:right-6 md:left-12 md:right-12 z-25">
          <h1 className="text-[38.5px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* 2. Structured Information Grid: Text 4/7 (cols-7) and Images 3/7 (cols-5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Specifications, Challenges, Highlights (Text Panel on Left, taking 4/7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Specifications Card (Top Left) */}
          <div className="p-7 rounded-2xl bg-slate-905/40 border border-slate-900/80 backdrop-blur-md space-y-6 shadow-md">
            <div className="border-b border-slate-900 pb-3">
              <h3 className="text-[19.3px] sm:text-lg font-bold text-white uppercase tracking-wider">
                Project Specifications
              </h3>
            </div>

            <div className="flex flex-row justify-between items-center gap-4 w-full">
              {/* Left Side: Parameters list */}
              <div className="space-y-5 flex-1 w-full">
                <div className="flex gap-4">
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl text-neon-orange h-11 w-11 flex items-center justify-center shrink-0">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="text-[12.8px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Game Engine</div>
                    <div className="text-[17.1px] sm:text-base font-bold text-slate-200 mt-1.5">{project.engine}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl text-neon-orange h-11 w-11 flex items-center justify-center shrink-0">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-[12.8px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Target Platforms</div>
                    <div className="text-[17.1px] sm:text-base font-bold text-slate-200 mt-1.5">{project.platform.join(", ")}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl text-neon-orange h-11 w-11 flex items-center justify-center shrink-0">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <div className="text-[12.8px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Genre</div>
                    <div className="text-[17.1px] sm:text-base font-bold text-slate-200 mt-1.5">{project.genre}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl text-neon-orange h-11 w-11 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-[12.8px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Duration</div>
                    <div className="text-[17.1px] sm:text-base font-bold text-slate-200 mt-1.5">{project.duration}</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Circular radial gradient play button (matching the drawing) */}
              <div className="flex justify-center items-center shrink-0 sm:pr-4">
                {project.webglUrl ? (
                  <motion.a
                    href={project.webglUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{
                      y: [0, -22, 0],
                      boxShadow: [
                        "0 0 0 0px rgba(255, 90, 0, 0.6)",
                        "0 0 0 16px rgba(255, 90, 0, 0)",
                        "0 0 0 0px rgba(255, 90, 0, 0.6)"
                      ]
                    }}
                    transition={{
                      y: {
                        duration: 1.0,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col justify-center items-center gap-1.5 text-white font-black text-xs sm:text-sm uppercase tracking-wider h-24 w-24 sm:h-32 sm:w-32 rounded-full cursor-pointer border border-white/20 shrink-0 select-none group/play"
                    style={{
                      background: "radial-gradient(circle at center, #ff8243 0%, #ff5a00 50%, #ff2400 100%)"
                    }}
                  >
                    <ExternalLink size={16} className="group-hover/play:scale-110 transition-transform duration-200" />
                    <span>Play WebGL</span>
                  </motion.a>
                ) : (
                  <div className="flex flex-col justify-center items-center gap-1 bg-slate-900/65 text-slate-500 font-bold text-[10px] sm:text-xs uppercase tracking-wider h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-slate-800 cursor-not-allowed text-center px-1.5 select-none">
                    <Lock size={14} className="text-slate-600 mb-0.5" />
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-slate-900 pt-6 space-y-4">
              <div className="flex items-center gap-2 text-[12.8px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">
                <Wrench size={12} />
                Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[12.8px] sm:text-xs font-bold rounded bg-slate-950/60 border border-slate-850 text-slate-350"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-6">
            <div className="p-7 rounded-2xl bg-slate-905/30 border border-slate-900/80 backdrop-blur-sm space-y-4 shadow-sm hover:border-slate-800 transition-colors duration-250">
              <h3 className="text-[19.3px] md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-neon-orange rounded-sm"></span>
                The Challenge
              </h3>
              <p className="text-[15px] md:text-base text-slate-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-905/30 border border-slate-900/80 backdrop-blur-sm space-y-4 shadow-sm hover:border-slate-800 transition-colors duration-250">
              <h3 className="text-[19.3px] md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-neon-red rounded-sm"></span>
                The Solution
              </h3>
              <p className="text-[15px] md:text-base text-slate-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features & Responsibilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4.5">
              <h4 className="text-[19.3px] md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-neon-orange rounded-sm"></span>
                Features
              </h4>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-slate-200 text-[15px] md:text-base font-normal flex items-start gap-3">
                    <span className="text-neon-orange mt-1.5 shrink-0 select-none">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4.5">
              <h4 className="text-[19.3px] md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-neon-red rounded-sm"></span>
                Responsibilities
              </h4>
              <ul className="space-y-4">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="text-slate-200 text-[15px] md:text-base font-normal flex items-start gap-3">
                    <span className="text-neon-red mt-1.5 shrink-0 select-none">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Gameplay Gallery (Right Side Panel, taking 3/7 - lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4 p-6 rounded-2xl bg-slate-905/30 border border-slate-900/80 backdrop-blur-sm shadow-md">
            <h4 className="text-[19.3px] md:text-xl font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-3">
              Gameplay Gallery
            </h4>
            {project.galleryBanner && (
              <div 
                onClick={() => setActiveLightboxImage(project.galleryBanner)}
                className="w-full flex justify-center items-start rounded-xl overflow-hidden border border-slate-900 bg-slate-950 group shadow-sm hover:border-slate-800 transition-all duration-300 mb-4 cursor-zoom-in"
              >
                <img
                  src={`${project.galleryBanner}?v=2`}
                  alt={`${project.title} Gallery Banner`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((img, index) => {
                if (failedImages[img]) {
                  return null;
                }
                const aspect = imageAspects[img] || 'portrait';
                const isLandscape = aspect === 'landscape';
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveLightboxImage(img)}
                    className={`relative rounded-xl overflow-hidden border border-slate-900 bg-slate-950/40 group shadow-sm hover:border-slate-800 transition-all duration-300 cursor-zoom-in ${
                      isLandscape ? "col-span-2 w-full" : "w-full"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      onError={() => handleImageError(img)}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-full max-h-full flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 md:p-3 transition-colors border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer z-55 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <img
                src={activeLightboxImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg border border-white/10"
              />

              {/* Right Arrow Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 md:p-3 transition-colors border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer z-55 shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxImage(null);
                }}
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
