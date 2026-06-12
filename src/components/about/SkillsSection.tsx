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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      
      <div className="grid gap-5">
        {skills.map((skill, index) => {
          const value = skill.value ?? 70;
          return (
            <div key={skill.id} className="group">
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-zinc-300 transition-colors group-hover:text-white">{skill.name}</span>
                <span className="text-zinc-500">{value}%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: delayOffset + index * 0.05, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          );
        })}
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
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-zinc-400"
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
            <div className="relative hidden min-h-[160px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center sm:flex">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
               <h4 className="relative z-10 text-lg font-semibold text-white">Always Learning</h4>
               <p className="relative z-10 mt-2 max-w-[250px] text-sm text-zinc-400">
                 Technology moves fast. I spend time every week exploring new frameworks and tools.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
