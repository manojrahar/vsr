"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Lenis from "lenis";
import { projectsData, Project } from "@/data/projects";

// Layout & Global Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import ProjectGrid from "@/components/ProjectGrid";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";

// Home Page Sections
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TechSection from "@/components/sections/TechSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";


import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  // Portfolio-specific state
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page to 1 when filter/query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);


  // Reference to Lenis scroll instance
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Filter & Search computation
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.platform.some(
          (p) => p.toLowerCase() === activeFilter.toLowerCase()
        ) ||
        project.genre.toLowerCase() === activeFilter.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.engine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Featured Projects (select 3 for the home page showcase)
  const featuredProjects = useMemo(() => {
    return projectsData.slice(0, 3);
  }, []);

  const projectsPerPage = 9;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [filteredProjects, currentPage]);

  // Sync tab state with URL path on mount and back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/portfolio") {
        setActiveTab("portfolio");
      } else if (path.startsWith("/portfolio/")) {
        const slug = path.replace("/portfolio/", "");
        const proj = projectsData.find((p) => p.slug === slug);
        if (proj) {
          setSelectedProject(proj);
          setActiveTab("case-study");
        } else {
          setActiveTab("portfolio");
        }
      } else {
        setActiveTab("home");
      }
    };

    // Auto-clear legacy browser URL hashes (like #home or #portfolio) cleanly
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Switch tab and scroll to top smoothly
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const newPath = tabId === "home" ? "/" : `/${tabId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("case-study");
    const newPath = `/portfolio/${project.slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden flex flex-col justify-between text-slate-100 selection:bg-indigo-650/40 selection:text-indigo-200">

      {/* Ambient glowing highlights */}
      <div className="ambient-glow" />
      <div className="ambient-glow-2" />

      {/* Sticky Header Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Switcher with transition animations */}
      <div className="flex-1 w-full max-w-7xl mx-auto py-6 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 md:space-y-24 relative"
            >
              {/* Faded background hero banner watermark spanning from navbar top down to HUD ribbon */}
              <div className="absolute top-[-115px] left-1/2 -translate-x-1/2 w-screen h-[550px] sm:h-[630px] md:h-[680px] lg:h-[750px] xl:h-[780px] -z-10 opacity-[0.10] select-none pointer-events-none overflow-hidden">
                <img
                  src="/images/HeroBanner.webp"
                  alt="Hero Background Banner"
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom gradient fade-out to blend flush into page body background */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A19] to-transparent" />
              </div>

              {/* 1. Hero Section */}
              <HeroSection setView={handleTabChange} />

              {/* Sleek Minimalist Game HUD Ribbon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full border-y border-slate-900/80 bg-slate-950/40 backdrop-blur-sm py-5.5 relative overflow-hidden select-none"
              >
                {/* Horizontal grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#09122c_1px,transparent_1px)] bg-[size:40px_100%] opacity-25 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-slate-400 tracking-[0.18em] uppercase text-center w-full">
                  <div className="hidden md:flex items-center gap-2 text-neon-orange shrink-0">
                    <span>[+]</span>
                    <span className="w-12 h-[1px] bg-gradient-to-r from-neon-orange to-transparent" />
                  </div>

                  <p className="flex-1 text-center font-extrabold leading-relaxed text-slate-100 text-lg sm:text-xl md:text-[22px] max-w-5xl mx-auto tracking-wide">
                    I manage the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-red font-black uppercase">complete game development lifecycle</span>, from <span className="text-white font-black underline decoration-neon-orange/40 decoration-2 underline-offset-4">designing 2D & 3D assets</span> to developing <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-red font-black uppercase">polished, production-ready games</span>.
                  </p>

                  <div className="hidden md:flex items-center gap-2 text-neon-red shrink-0">
                    <span className="w-12 h-[1px] bg-gradient-to-l from-neon-red to-transparent" />
                    <span>[+]</span>
                  </div>
                </div>
              </motion.div>

              {/* 2. Stats Section */}
              <StatsSection />

              {/* 3. About Section */}
              <AboutSection />

              {/* 4. Core Expertise */}
              <ExpertiseSection />

              {/* 5. Technologies Grid */}
              <TechSection />

              {/* 6. Process Stepper */}
              <ProcessSection />

              {/* 7. Featured Projects Section */}
              <section className="px-6 space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                    Showcase
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2">
                    Featured Games
                  </h2>
                </div>

                <ProjectGrid projects={featuredProjects} onViewDetails={handleViewDetails} />

                <div className="flex justify-center">
                  <button
                    onClick={() => handleTabChange("portfolio")}
                    className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800/80 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl border border-slate-800/80 hover:border-slate-750 transition-all cursor-pointer group"
                  >
                    View All Projects
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* 8. Testimonials slider (Hidden) */}
              {/* <TestimonialsSection /> */}

              {/* 9. Premium CTA Banner */}
              <div className="px-6">
                <section className="py-12 md:py-20 max-w-6xl mx-auto text-center relative rounded-3xl overflow-hidden bg-slate-950/45 border border-white/15 backdrop-blur-md shadow-2xl">
                  {/* Subtle background image watermark */}
                  <div className="absolute inset-0 z-0 opacity-[0.12] select-none pointer-events-none">
                    <img
                      src="/images/Let'sBuildYouNextGame.webp"
                      alt="CTA Background Banner"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-6 max-w-3xl mx-auto relative z-10 px-6">
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                      Let's Build Your <br /> Next Game
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
                      Interested in high performance systems, responsive gameplay mechanics, or low-latency multiplayer setups? Let's connect and discuss your team's objectives.
                    </p>

                  </div>
                </section>
              </div>
            </motion.div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="text-center max-w-4xl mx-auto px-6 pt-12 pb-6">
                <span className="block text-xs font-bold tracking-widest text-indigo-400 uppercase mb-2">
                  Project Archive
                </span>
                <div className="relative inline-block">
                  <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
                    Unity Portfolio
                  </h1>
                  {/* Floating character illustration beside the heading */}
                  <div className="absolute hidden sm:block pointer-events-none w-[110px] lg:w-[290px] right-[-100px] lg:right-[-360px] -top-[30%] lg:-top-[130%] z-20 select-none">
                    <img
                      src="/images/vsr8.png"
                      alt="Portfolio Character Illustration"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
                  Search and filter interactive gameplay systems, mechanics showcases, graphics shaders, and multi-device ports.
                </p>
              </div>

              {/* Filtering Toolbar */}
              <div className="space-y-4">
                <SearchBar searchQuery={searchQuery} onChangeQuery={setSearchQuery} />
                <FilterBar activeFilter={activeFilter} onChangeFilter={setActiveFilter} />
              </div>

              {/* Active Portfolio showcase */}
              <ProjectGrid projects={paginatedProjects} onViewDetails={handleViewDetails} />

              {/* Arcade Style Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 pt-6 pb-12 select-none">
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
                      else window.scrollTo(0, 0);
                    }}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-850 hover:border-slate-700 transition-all duration-200 cursor-pointer"
                  >
                    Prev
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
                          else window.scrollTo(0, 0);
                        }}
                        className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                          currentPage === pageNum
                            ? "bg-gradient-to-r from-orange-500 to-red-500 border-orange-500 text-white shadow-md shadow-orange-500/20"
                            : "bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
                      else window.scrollTo(0, 0);
                    }}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-850 hover:border-slate-700 transition-all duration-200 cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}
            </motion.div>
          )}


          {activeTab === "case-study" && selectedProject && (
            <motion.div
              key="case-study"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCaseStudy
                project={selectedProject}
                onBack={() => handleTabChange("portfolio")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Element */}
      <Footer />
    </div>
  );
}
