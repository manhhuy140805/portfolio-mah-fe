"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/src/components/ui/Button";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { serviceCards } from "@/src/lib/portfolio-data";
import { Code, Network, Puzzle, BookOpen, Zap } from "lucide-react";

const icons = {
  "Web Development": <Code className="w-6 h-6" />,
  "System Analysis & Design": <Network className="w-6 h-6" />,
  "Problem Solving": <Puzzle className="w-6 h-6" />,
  "Continuous Learning": <BookOpen className="w-6 h-6" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative border-b border-white/5 bg-[var(--background)] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--accent)] opacity-20 blur-[100px]"></div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:gap-16 px-6 py-16 lg:py-28 lg:grid-cols-[1fr_1.2fr] items-center">
        {/* Left Column: Title & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <SectionTitle
            description="Focused on building scalable applications, learning modern technologies, and solving real-world problems through code."
            eyebrow="About Me"
            title="Building solutions that are robust, scalable, and user-centric"
          />
          <div className="mt-10">
            <Button href="/about" variant="secondary" className="group">
              More About Me
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                →
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Service Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2"
        >
          {serviceCards.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]/40 p-8 shadow-lg backdrop-blur-sm transition-colors hover:bg-[var(--surface)]/80 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[var(--accent-cyan)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white">
                  {icons[service.title as keyof typeof icons] || <Zap className="w-6 h-6" />}
                </div>
                <span className="text-sm font-semibold tracking-wider text-[var(--muted)] group-hover:text-white transition-colors">
                  {service.metric}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
