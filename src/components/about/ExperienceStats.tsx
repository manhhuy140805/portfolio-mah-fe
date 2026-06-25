"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { portfolioStats } from "@/src/lib/portfolio-data";
import AnimatedCounter from "@/src/components/ui/AnimatedCounter";

export default function ExperienceStats() {
  const { t } = useTranslation();

  return (
    <section className="relative border-y border-white/5 bg-zinc-50 dark:bg-white/2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <motion.article 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {t("about_page.experience.title_1")} <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t("about_page.experience.title_2")}</span> {t("about_page.experience.title_3")}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("about_page.experience.description")}
            </p>
          </motion.article>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {portfolioStats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-background p-8 text-center shadow-sm"
              >
                {/* Subtle background glow */}
                <div className="absolute -inset-2 bg-linear-to-tr from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl font-bold text-zinc-900 dark:text-white transition-all group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent sm:text-5xl" 
                  />
                  <p className="mt-3 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-600 dark:hover:group-hover:text-zinc-400">
                    {t(`hero.stats.${stat.id}.label`, { defaultValue: stat.label })}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
