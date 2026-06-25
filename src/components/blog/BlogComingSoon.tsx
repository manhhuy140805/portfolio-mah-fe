"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen, PenTool, Coffee } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BlogComingSoon() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#030712] flex flex-col items-center justify-center relative overflow-hidden px-6 font-sans">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Floating Animated Orbs - Adjusted colors for Blog context (green/teal vibe) */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-125 h-125 bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%] w-150 h-150 bg-teal-500/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] w-100 h-100 bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-white/3 border border-zinc-300 dark:border-white/8 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-zinc-700 dark:text-gray-300 tracking-wide uppercase">{t("coming_soon.blog.eyebrow")}</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 dark:from-white via-emerald-600 dark:via-emerald-100 to-zinc-900 dark:to-white drop-shadow-sm">
            {t("coming_soon.title_1")}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 whitespace-nowrap">
            {t("coming_soon.title_2")}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t("coming_soon.blog.description")}
        </motion.p>

        {/* Floating Icons to represent blog */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6 mb-12"
        >
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-zinc-200 dark:border-white/5 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] backdrop-blur-xl">
            <BookOpen className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-zinc-200 dark:border-white/5 shadow-[0_0_30px_-10px_rgba(20,184,166,0.2)] backdrop-blur-xl -translate-y-4">
            <PenTool className="w-8 h-8 text-teal-400" />
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-zinc-200 dark:border-white/5 shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] backdrop-blur-xl">
            <Coffee className="w-8 h-8 text-cyan-400" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link 
            href="/" 
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white font-medium transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t("coming_soon.back_home")}
          </Link>
          
          <Link href="/projects" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-8 py-4 text-base justify-center shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)] transition-shadow">
              {t("coming_soon.explore_projects")}
            </Button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
