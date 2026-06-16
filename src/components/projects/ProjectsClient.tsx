"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import ProjectList from "@/src/components/projects/ProjectList";
import { portfolioProjects } from "@/src/lib/portfolio-data";
import { Sparkles } from "lucide-react";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web App", "E-Commerce", "Dashboard", "Landing Page"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  // Interactive Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const background = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(47,47,228,0.08), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Spotlight that follows cursor */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 hidden sm:block"
        style={{ background }}
      />

      {/* Dynamic Background Elements */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden z-0">
        <div className="absolute top-[-10%] h-[500px] w-[800px] animate-pulse-glow rounded-full bg-[var(--accent)]/10 blur-[120px]" />
        <div className="absolute right-[-5%] top-[20%] h-[300px] w-[400px] animate-float-bg rounded-full bg-[var(--accent-cyan)]/10 blur-[100px]" />
        <div className="absolute left-[-5%] top-[40%] h-[400px] w-[400px] animate-float-fg rounded-full bg-[var(--accent-warm)]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent-cyan)] shadow-[0_0_20px_rgba(47,47,228,0.2)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>Our Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Transforming ideas into <br className="hidden sm:block" />
            <motion.span 
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent)] to-[var(--accent-warm)] bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              exceptional digital experiences
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            A curated gallery of SaaS, mobile, commerce, and dashboard interfaces designed for performance, aesthetics, and user engagement.
          </motion.p>
        </div>

        {/* Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 p-2 backdrop-blur-md hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors duration-500">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-xl bg-[var(--accent)]/40 shadow-[0_0_15px_rgba(47,47,228,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-16"
        >
          <ProjectList projects={filteredProjects} />
        </motion.div>
      </div>
    </main>
  );
}
