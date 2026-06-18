"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Download, ArrowUpRight, Copy, CheckCircle2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React, { useState } from "react";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("trandinhmanhhuy05@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground pb-16 font-sans flex items-center pt-24 lg:pt-0">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-[10%] right-[10%] h-60 w-60 rounded-full bg-(--accent-cyan) opacity-15 dark:opacity-10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[20%] h-60 w-60 rounded-full bg-(--accent) opacity-15 dark:opacity-10 blur-[100px] animate-float-bg" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column: Text & Context */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-(--accent-cyan)/30 bg-(--accent-cyan)/10 px-4 py-2 text-sm font-semibold tracking-wide text-(--accent-cyan) dark:text-[#4db8ff] backdrop-blur-md mb-8 w-fit shadow-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-(--accent-cyan) animate-pulse"></span>
              Available for New Opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-4"
            >
              Let's build <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-cyan)">
                something great.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg mb-8"
            >
              Whether you have a project in mind, a role to fill, or just want to chat about tech—I'm always open to connecting.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <span className="text-[10px] font-bold text-zinc-500">You</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-linear-to-br from-(--accent) to-(--accent-cyan) flex items-center justify-center text-white font-bold text-base">
                     M
                  </div>
                </div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Ready to collaborate.
                </p>
            </motion.div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="w-full lg:w-[55%]">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            >
              
              {/* Email Card (Full width) */}
              <motion.div 
                variants={itemVariants}
                className="group relative sm:col-span-2 rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 overflow-hidden backdrop-blur-2xl shadow-xl dark:shadow-none transition-all hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-linear-to-br from-(--accent)/5 via-transparent to-(--accent-cyan)/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-800 dark:text-zinc-200 shadow-sm backdrop-blur-md">
                    <Mail size={20} />
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-white/10 hover:bg-zinc-100 dark:hover:bg-white/20 px-3 py-2 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all"
                  >
                    {copied ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Start a conversation</p>
                  <a href="mailto:trandinhmanhhuy05@gmail.com" className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground flex items-center gap-2 group/link break-all sm:break-normal hover:text-(--accent) transition-colors">
                    trandinhmanhhuy05<br className="sm:hidden"/>@gmail.com
                    <ArrowUpRight size={20} className="text-zinc-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-(--accent) shrink-0 hidden sm:block transition-all" />
                  </a>
                </div>
              </motion.div>

              {/* Resume Card */}
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-3xl border border-transparent bg-linear-to-br from-(--accent) to-(--accent-cyan) p-6 overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-45"
              >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center gap-3 w-full h-full justify-center text-white">
                  <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300 border border-white/30">
                    <Download size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Resume / CV</h3>
                    <p className="text-xs text-white/80 mt-1 font-medium">Click to download</p>
                  </div>
                </a>
              </motion.div>

              {/* Grid for smaller items */}
              <div className="grid grid-rows-2 gap-4 lg:gap-6">
                {/* Location Card */}
                <motion.div 
                  variants={itemVariants}
                  className="group relative rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 overflow-hidden backdrop-blur-xl shadow-lg dark:shadow-none transition-all hover:bg-white/80 dark:hover:bg-white/10 flex items-center gap-4 h-full"
                >
                  <div className="h-10 w-10 rounded-xl bg-(--accent)/10 text-(--accent) flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-0.5">Location</p>
                    <h3 className="text-sm font-bold text-foreground">Da Nang, VN</h3>
                  </div>
                </motion.div>

                {/* Socials Row */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
                  <motion.a 
                    variants={itemVariants}
                    href="https://linkedin.com/in/manhhuy140805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 overflow-hidden backdrop-blur-xl shadow-lg dark:shadow-none transition-all hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] flex flex-col items-center justify-center gap-1.5 h-full text-zinc-700 dark:text-zinc-300"
                  >
                    <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a 
                    variants={itemVariants}
                    href="https://github.com/manhhuy140805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 overflow-hidden backdrop-blur-xl shadow-lg dark:shadow-none transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex flex-col items-center justify-center gap-1.5 h-full text-zinc-700 dark:text-zinc-300"
                  >
                    <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold">GitHub</span>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
