"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/src/types/project.type";

type ProjectDetailClientProps = {
  project: Project;
};

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when interacting with iframe to prevent scroll chaining
  useEffect(() => {
    if (isInteractive) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isInteractive]);

  return (
    <main className="min-h-screen bg-[var(--background)] pb-24 pt-32 text-white">
      {/* Dynamic Background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden z-0">
        <div className="absolute top-[-10%] h-[500px] w-[800px] animate-pulse-glow rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        <div className="absolute right-[-5%] top-[20%] h-[300px] w-[400px] animate-float-bg rounded-full bg-[var(--accent-cyan)]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-sm text-[var(--accent-cyan)] font-medium mb-3">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20">{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{project.title}</h1>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-warm)] text-white font-medium transition-colors shadow-[0_0_15px_rgba(47,47,228,0.4)]">
                  Visit Live Site <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-colors">
                  <FaGithub className="h-4 w-4" /> Source
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Cover Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-12 w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl group"
        >
          {project.imageUrl ? (
            <Image 
              src={project.imageUrl} 
              alt={`${project.title} cover`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-w-6xl) 100vw, 1152px"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-zinc-900 to-[var(--accent-cyan)]/20 flex items-center justify-center">
              {/* Optional placeholder pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-sm z-10">Cover Image Placeholder</p>
            </div>
          )}
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-60" />
        </motion.div>

        {/* Introduction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.description}
            </p>
            {/* Placeholder for more context - you can add this to your data later */}
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              This project required a deep dive into complex user flows, optimizing performance, and ensuring a visually stunning interface that aligns perfectly with modern design standards.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl">
            {project.role && (
              <div>
                <h3 className="text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-widest mb-2">My Role</h3>
                <p className="text-zinc-200 font-medium">{project.role}</p>
              </div>
            )}
            {project.outcome && (
              <div>
                <h3 className="text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-widest mb-2">Outcome</h3>
                <p className="text-zinc-200 font-medium">{project.outcome}</p>
              </div>
            )}
            <div>
              <h3 className="text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-widest mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-black/40 border border-white/10 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Preview Embed (Browser Mockup) */}
        {project.demoUrl ? (
          <div className="relative mt-32 group">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-3">Live Interactive Demo</h2>
              <p className="text-zinc-400">Experience the product directly from this page.</p>
            </div>
            {/* Dynamic Glowing Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isInteractive ? 0.4 : 0.15 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 top-24 -inset-x-4 rounded-[2rem] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-cyan)] to-[var(--accent)] blur-2xl transition-all duration-500" 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-md z-10"
            >
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex h-6 w-full max-w-sm items-center justify-center rounded-md bg-black/30 px-3 text-[11px] text-zinc-500 font-mono truncate">
                {project.demoUrl.replace("https://", "").replace("http://", "")}
              </div>
            </div>
            {/* Iframe */}
            <div 
              ref={iframeContainerRef}
              className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-zinc-950 overflow-hidden"
              onMouseLeave={() => setIsInteractive(false)}
            >
              {!isInteractive && (
                <div 
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer"
                  onClick={() => {
                    setIsInteractive(true);
                    iframeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <span className="rounded-full bg-[var(--accent)]/90 px-6 py-2.5 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                    Click to Interact
                  </span>
                </div>
              )}
              <iframe 
                src={project.demoUrl} 
                className="absolute top-0 left-0 border-none origin-top-left"
                style={{
                  width: "150%",
                  height: "150%",
                  transform: "scale(0.666667)",
                  pointerEvents: isInteractive ? "auto" : "none",
                }}
                title={`${project.title} live preview`}
                loading="lazy"
              />
            </div>
          </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-32 flex aspect-[16/9] w-full flex-col items-center justify-center rounded-2xl border border-white/10 border-dashed bg-white/5"
          >
             <p className="text-zinc-400">No live preview available.</p>
             <p className="text-sm text-zinc-500">Image gallery coming soon.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
