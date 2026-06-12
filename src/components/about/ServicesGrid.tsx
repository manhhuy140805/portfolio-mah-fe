"use client";

import { motion } from "framer-motion";
import { serviceCards } from "@/src/lib/portfolio-data";
import { Sparkles, Zap, FileText, Code2 } from "lucide-react";

const iconMap = {
  "Visual Memory & Observation": Sparkles,
  "Agile Problem Solving": Zap,
  "Microsoft Word Mastery": FileText,
  "Full-Stack Development": Code2,
};

export default function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Core Competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-zinc-400"
          >
            The unique blend of skills I bring to every project.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service, index) => {
            const Icon = iconMap[service.title as keyof typeof iconMap] || Zap;
            
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400 shadow-inner transition-colors group-hover:bg-blue-400/10 group-hover:text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-sm font-semibold text-blue-400">
                    {service.metric}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
