"use client";

import { motion } from "framer-motion";
import { designSkills, developmentSkills } from "@/src/lib/portfolio-data";

type Skill = {
  id: string;
  name: string;
  value?: number;
};

type SkillGroupProps = {
  title: string;
  skills: Skill[];
  delayOffset?: number;
};

function SkillGroup({ skills, title, delayOffset = 0 }: SkillGroupProps) {
  if (!skills.length) return null;

  return (
    <div className="group/card relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8 transition-colors duration-500 hover:bg-zinc-100 dark:hover:bg-white/[0.04]">
      {/* Subtle corner glow */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[60px] group-hover/card:bg-[var(--accent-cyan)]/20 transition-colors duration-700 pointer-events-none" />

      <div className="mb-8 flex items-center gap-4 relative z-10">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-wide sm:text-xl">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-cyan)]/40 via-white/5 to-transparent" />
      </div>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delayOffset + index * 0.05, ease: "easeOut" }}
            className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 hover:border-[var(--accent-cyan)]/40 hover:bg-zinc-200 dark:hover:bg-[var(--surface)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(77,184,255,0.3)] cursor-default overflow-hidden"
          >
            {/* Inner hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent-cyan)]/10 group-hover:to-[var(--accent)]/10 transition-colors duration-500" />
            
            {/* Glowing dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-white/20 group-hover:bg-[var(--accent-cyan)] transition-colors duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_var(--accent-cyan)] relative z-10" />
            
            {/* Text */}
            <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300 text-sm font-medium relative z-10">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const frontendSkills = developmentSkills.filter(s => s.category === 'Frontend');
  const backendSkills = developmentSkills.filter(s => s.category === 'Backend');
  const languageSkills = developmentSkills.filter(s => s.category === 'Language');
  const databaseSkills = developmentSkills.filter(s => s.category === 'Database');
  const stylingSkills = developmentSkills.filter(s => s.category === 'Styling');

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
          >
            A constantly evolving toolkit of modern web technologies and design systems.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <SkillGroup title="Frontend" skills={frontendSkills} />
            <SkillGroup title="Backend" skills={backendSkills} delayOffset={0.2} />
            <SkillGroup title="Languages" skills={languageSkills} delayOffset={0.4} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <SkillGroup title="Database" skills={databaseSkills} delayOffset={0.1} />
            <SkillGroup title="Styling & Design" skills={[...stylingSkills, ...designSkills]} delayOffset={0.3} />
            
            {/* Soft glowing decoration */}
            <div className="relative hidden min-h-[160px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.02] p-8 text-center sm:flex">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
               <h4 className="relative z-10 text-lg font-semibold text-zinc-900 dark:text-white">Always Learning</h4>
               <p className="relative z-10 mt-2 max-w-[250px] text-sm text-zinc-600 dark:text-zinc-400">
                 Technology moves fast. I spend time every week exploring new frameworks and tools.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
