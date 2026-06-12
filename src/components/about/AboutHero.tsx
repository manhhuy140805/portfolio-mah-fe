"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import aboutPreview from "@/src/UI/about.png";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px]">
        <div className="h-[400px] w-[600px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
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
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building digital <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  alt="About page visual reference"
                  src={aboutPreview}
                  placeholder="blur"
                  fill
                  className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            
            {/* Decorative background elements behind image */}
            <div className="absolute -inset-4 z-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
