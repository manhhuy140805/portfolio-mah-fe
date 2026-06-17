"use client";

import { motion } from "framer-motion";
import { educationItems } from "@/src/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

export default function EducationTimeline() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Education & Journey
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={`${item.title}-${item.years}`} className="relative flex flex-col items-center sm:flex-row">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-background shadow-[0_0_15px_rgba(59,130,246,0.5)] sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2">
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                  </div>

                  {/* Content container */}
                  <div className={`w-full pl-12 sm:w-1/2 ${isEven ? 'sm:pl-0 sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'}`}>
                    <motion.article
                      initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                      className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-zinc-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl dark:hover:shadow-none"
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 dark:from-blue-500/5 dark:to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="relative z-10">
                        <div className={`mb-3 flex items-center gap-3 text-sm font-semibold text-blue-400 ${isEven ? 'sm:justify-end' : ''}`}>
                          <GraduationCap className="h-4 w-4" />
                          <span>{item.years}</span>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
