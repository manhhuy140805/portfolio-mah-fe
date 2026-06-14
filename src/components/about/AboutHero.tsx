"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import aboutPreview from "@/src/UI/about.png";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-2 pb-16 lg:pt-20 lg:pb-24">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Floating Animated Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[var(--accent)]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[var(--accent-warm)]/40 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[40%] w-[350px] h-[350px] bg-[var(--accent-cyan)]/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)]" />
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building digital <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent)] bg-clip-text text-transparent">
                experiences
              </span>{" "}
              with purpose.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-lg text-lg leading-8 text-zinc-400"
            >
              I am a 3rd-year IT student passionate about turning complex problems into elegant, scalable web applications. Combining design sensibilities with robust engineering to create seamless user journeys.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/projects">See My Work</Button>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Image container with glow and tilt effect */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[3/4] lg:aspect-[4/5] group">
                <Image
                  alt="About page visual reference"
                  src={aboutPreview}
                  placeholder="blur"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105 brightness-125 contrast-[1.15] saturate-150"
                />
                <div className="absolute inset-0 bg-[var(--accent-cyan)]/10 mix-blend-overlay pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
            
            {/* Decorative background elements behind image */}
            <div className="absolute -inset-4 z-0 rounded-2xl bg-gradient-to-tr from-[var(--accent)]/20 via-[var(--accent-cyan)]/20 to-transparent opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
