"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/src/components/ui/SectionTitle";
import dynamic from "next/dynamic";

import AnimatedCounter from "@/src/components/ui/AnimatedCounter";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GithubActivity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const username = "manhhuy140805";

  return (
    <section className="relative border-b border-white/5 bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <SectionTitle
            eyebrow="My GitHub Activity"
            title="Code Contributions & Stats"
            description="A visual summary of my coding activity and open-source contributions."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-12"
        >
          {/* GitHub Calendar Card */}
          <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[var(--surface)]/40 p-6 md:p-10 shadow-lg backdrop-blur-sm transition-colors hover:border-white/20 flex justify-center">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              theme={{
                dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
            />
          </div>

          {/* GitHub Stats Cards (Using github-readme-stats API) */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/40 overflow-hidden shadow-lg backdrop-blur-sm transition-colors hover:border-white/20 flex flex-col justify-center p-8 gap-6 text-white text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <AnimatedCounter value={327} suffix="+" className="text-3xl font-bold text-[var(--accent-cyan)]" />
                  <span className="text-sm text-[var(--muted)] mt-1">Commits</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <AnimatedCounter value={10} suffix="+" className="text-3xl font-bold text-[#39d353]" />
                  <span className="text-sm text-[var(--muted)] mt-1">Projects</span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-2">Core Stack</h4>
                <p className="text-lg font-semibold tracking-wide bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                  NestJS • Next.js • PostgreSQL
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/40 overflow-hidden shadow-lg backdrop-blur-sm transition-colors hover:border-white/20 flex justify-center p-4">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=ffffff&text_color=9f9f9f&bg_color=00000000`}
                alt={`${username} Top Languages`}
                className="w-full max-w-[450px]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* GitHub Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105"
          >
            <FaGithub className="h-5 w-5" />
            View Full Profile on GitHub
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
