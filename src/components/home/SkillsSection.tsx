"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { designSkills, developmentSkills } from "@/src/lib/portfolio-data";
import { 
  SiReact, SiNextdotjs, SiNestjs, SiDotnet, SiTypescript, 
  SiKotlin, SiPostgresql, 
  SiMongodb, SiFirebase, SiTailwindcss, SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

const iconMap: Record<string, React.ReactNode> = {
  "react": <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  "nextjs": <SiNextdotjs className="w-5 h-5 text-white" />,
  "nestjs": <SiNestjs className="w-5 h-5 text-[#E0234E]" />,
  "aspnet": <SiDotnet className="w-5 h-5 text-[#512BD4]" />,
  "typescript": <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
  "csharp": <TbBrandCSharp className="w-6 h-6 text-[#239120]" />,
  "java": <FaJava className="w-5 h-5 text-[#f89820]" />,
  "kotlin": <SiKotlin className="w-5 h-5 text-[#7F52FF]" />,
  "sqlserver": <DiMsqlServer className="w-6 h-6 text-[#CC292B]" />,
  "postgresql": <SiPostgresql className="w-5 h-5 text-[#4169E1]" />,
  "mongodb": <SiMongodb className="w-5 h-5 text-[#47A248]" />,
  "firebase": <SiFirebase className="w-5 h-5 text-[#FFCA28]" />,
  "tailwind": <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  "figma": <SiFigma className="w-5 h-5 text-[#F24E1E]" />
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Combine and duplicate skills for continuous marquee effect
  const allSkills = [...developmentSkills, ...designSkills];
  // Duplicate twice so the marquee is long enough to loop seamlessly
  const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="relative border-b border-white/5 bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-cyan)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <SectionTitle
            eyebrow="My Tech Stack"
            title="Tools & Technologies I Work With"
            description="A comprehensive list of technologies I use to bring ideas to life."
          />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full group mt-16">
        {/* Left and right fade gradients for smooth entering/exiting */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        {/* First Marquee Row (Moving Left) */}
        <motion.div
          className="flex flex-nowrap gap-4 py-4"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((skill, index) => (
            <div
              key={`${skill.id}-${index}-row1`}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-[var(--surface)]/50 px-6 py-3 shadow-sm backdrop-blur-md transition-colors hover:bg-[var(--surface)] hover:border-white/20"
            >
              {iconMap[skill.id] || (
                <span 
                  className={`w-2.5 h-2.5 rounded-full ${
                    skill.category === "Frontend" ? "bg-blue-400" :
                    skill.category === "Backend" ? "bg-purple-400" :
                    skill.category === "Database" ? "bg-orange-400" :
                    skill.category === "Design" ? "bg-pink-400" :
                    skill.category === "Language" ? "bg-yellow-400" :
                    "bg-green-400"
                  }`}
                />
              )}
              <span className="text-base font-medium text-white/90">
                {skill.name}
              </span>
              <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-xs text-[var(--muted)]">
                {skill.level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Marquee Row (Moving Right - Optional, reversed) */}
      <div className="relative flex overflow-hidden w-full mt-4">
        <motion.div
          className="flex flex-nowrap gap-4 py-4"
          animate={{ x: ["-33.333333%", "0%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.reverse().map((skill, index) => (
            <div
              key={`${skill.id}-${index}-row2`}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-[var(--surface)]/50 px-6 py-3 shadow-sm backdrop-blur-md transition-colors hover:bg-[var(--surface)] hover:border-white/20"
            >
              {iconMap[skill.id] || (
                <span 
                  className={`w-2.5 h-2.5 rounded-full ${
                    skill.category === "Frontend" ? "bg-blue-400" :
                    skill.category === "Backend" ? "bg-purple-400" :
                    skill.category === "Database" ? "bg-orange-400" :
                    skill.category === "Design" ? "bg-pink-400" :
                    skill.category === "Language" ? "bg-yellow-400" :
                    "bg-green-400"
                  }`}
                />
              )}
              <span className="text-base font-medium text-white/90">
                {skill.name}
              </span>
              <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-xs text-[var(--muted)]">
                {skill.level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
