"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, Download, ArrowUpRight, Copy, CheckCircle2 } from "lucide-react";
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
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080616] text-foreground selection:bg-[#2F2FE4] selection:text-foreground pb-16 font-sans flex items-center">
      {/* Abstract Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#2F2FE4] opacity-[0.05] blur-[100px]" />
        <div className="absolute right-[-5%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#4db8ff] opacity-[0.04] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[35rem] w-[35rem] rounded-full bg-[#162E93] opacity-[0.06] blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 lg:px-8 w-full">
        
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">
          
          {/* Left Column: Text & Context */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center lg:sticky lg:top-32 pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-medium tracking-wide text-green-400 backdrop-blur-md mb-6 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for Frontend Roles
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Let's <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500">connect.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-5 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md"
            >
              Looking for a dedicated developer to join your team? I'm open to discussing opportunities and collaborations.
            </motion.p>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="w-full lg:w-[58%]">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              
              {/* Email Card (Full width on right side) */}
              <motion.div 
                variants={itemVariants}
                className="group relative sm:col-span-2 rounded-[1.5rem] border border-[var(--line)] bg-white/[0.02] p-6 overflow-hidden backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-[var(--line)] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F2FE4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div className="h-10 w-10 rounded-full bg-[var(--line)] border border-[var(--line)] flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <Mail size={18} />
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-[var(--line)] hover:bg-[var(--line)] hover:text-foreground px-3 py-1.5 rounded-full border border-[var(--line)] transition-all"
                  >
                    {copied ? <CheckCircle2 size={14} className="text-green-400" /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy Email"}
                  </button>
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">Have a project in mind?</p>
                  <a href="mailto:trandinhmanhhuy05@gmail.com" className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 group/link break-all sm:break-normal">
                    trandinhmanhhuy05<br className="sm:hidden"/>@gmail.com
                    <ArrowUpRight size={24} className="text-zinc-500 dark:text-zinc-500 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-foreground shrink-0 hidden sm:block" />
                  </a>
                </div>
              </motion.div>

              {/* Resume Card */}
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-[1.5rem] border border-[var(--line)] bg-gradient-to-br from-[#2F2FE4]/20 to-[#4db8ff]/10 p-6 overflow-hidden backdrop-blur-sm transition-all hover:border-[#4db8ff]/30 flex flex-col items-center justify-center text-center min-h-[160px]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(77,184,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center gap-3 w-full h-full justify-center">
                  <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Download size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Resume / CV</h3>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-1">View & Download</p>
                  </div>
                </a>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-[1.5rem] border border-[var(--line)] bg-white/[0.02] p-6 overflow-hidden backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-[var(--line)] flex flex-col justify-between min-h-[160px]"
              >
                <div className="relative z-10 h-10 w-10 rounded-full bg-[var(--line)] border border-[var(--line)] flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-6 group-hover:scale-110 group-hover:bg-[var(--line)] group-hover:text-foreground transition-all">
                  <MapPin size={18} />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">Local Time / Location</p>
                  <h3 className="text-lg font-bold text-foreground">Da Nang, VN</h3>
                </div>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full border border-[var(--line)] opacity-50 transition-transform duration-700 group-hover:scale-150 pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full border border-[var(--line)] opacity-30 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-[1.5rem] border border-[var(--line)] bg-white/[0.02] p-6 overflow-hidden backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-[var(--line)] flex flex-col justify-between min-h-[160px]"
              >
                <div className="relative z-10 h-10 w-10 rounded-full bg-[var(--line)] border border-[var(--line)] flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-6 group-hover:scale-110 group-hover:bg-[var(--line)] group-hover:text-foreground transition-all">
                  <Phone size={18} />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">Direct Line</p>
                  <a href="tel:+84326149986" className="text-lg font-bold text-foreground hover:text-[#4db8ff] transition-colors">
                    +84 326 149 986
                  </a>
                </div>
              </motion.div>

              {/* Socials Card */}
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-[1.5rem] border border-[var(--line)] bg-white/[0.02] p-6 overflow-hidden backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-[var(--line)] flex flex-col justify-between min-h-[160px]"
              >
                <div className="relative z-10 h-10 w-10 rounded-full bg-[var(--line)] border border-[var(--line)] flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-4 group-hover:scale-110 group-hover:bg-[var(--line)] group-hover:text-foreground transition-all">
                  <FiGithub size={18} />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-2">Social Profiles</p>
                  <div className="flex gap-2">
                    <a 
                      href="https://linkedin.com/in/manhhuy140805" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[var(--line)] border border-[var(--line)] py-2.5 px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-[#0a66c2] hover:text-foreground hover:border-[#0a66c2] transition-all"
                    >
                      <FiLinkedin size={14} /> <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/manhhuy140805" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[var(--line)] border border-[var(--line)] py-2.5 px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all"
                    >
                      <FiGithub size={14} /> <span className="hidden sm:inline">GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
