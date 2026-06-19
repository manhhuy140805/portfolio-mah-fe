"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Button from "@/src/components/ui/Button";
import { portfolioStats } from "@/src/lib/portfolio-data";
import profileImage from "@/public/images/dev/anh-nua-nguoi.png";
import Typewriter from "@/src/components/ui/Typewriter";
import AnimatedCounter from "@/src/components/ui/AnimatedCounter";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60 invert dark:invert-0"
      >
        <source src="/backgroud/bg-black-animation.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] lg:h-181.5 max-w-6xl items-center gap-12 px-6 pt-16 pb-0 lg:py-0 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10">
          {/* Glowing Orb Background */}
          <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-sky-300 dark:bg-(--accent-cyan) opacity-30 blur-[100px] animate-pulse-glow"></div>
          
          <p className="animate-fade-in-up inline-flex rounded-md bg-(--surface-cream) px-3 py-2 text-sm font-semibold uppercase text-zinc-950" style={{ animationDelay: '0s' }}>
            {t("hero.role")}
          </p>
          <h1 className="animate-fade-in-up mt-4 max-w-3xl text-4xl sm:text-5xl font-bold leading-tight text-zinc-900 dark:text-white md:text-6xl" style={{ animationDelay: '0.1s' }}>
            Mạnh Huy
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>
          <div className="animate-fade-in-up mt-2 h-12 sm:h-8 max-w-2xl text-sm sm:text-base leading-6 sm:leading-8 text-(--accent) dark:text-(--accent-cyan) font-medium md:text-lg" style={{ animationDelay: '0.3s' }}>
            <Typewriter 
              phrases={[
                t("hero.typing_1"),
                t("hero.typing_2"),
                t("hero.typing_3")
              ]} 
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2500}
            />
          </div>
          <div className="animate-fade-in-up mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3" style={{ animationDelay: '0.4s' }}>
            <Button href="/contact">{t("hero.hire")}</Button>
            <Button href="/projects" variant="secondary">
              {t("hero.explore")}
            </Button>
          </div>
          <div className="animate-fade-in-up mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" style={{ animationDelay: '0.5s' }}>
            {portfolioStats.map((stat) => (
              <div
                className="group rounded-lg border border-black/10 bg-(--surface-cream) p-3 sm:p-4 text-zinc-950 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-(--accent)/20 dark:hover:shadow-(--accent-cyan)/20"
                key={stat.id}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={t(`hero.stats.${stat.id}.suffix`, { defaultValue: stat.suffix })} 
                  className="text-2xl sm:text-3xl font-bold" 
                />
                <p className="mt-1 text-xs leading-4 sm:leading-5 text-zinc-600">
                  {t(`hero.stats.${stat.id}.label`, { defaultValue: stat.label })}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center items-end h-87.5 sm:h-112.5 lg:h-full w-full mt-10 lg:mt-0">
          {/* Background Text */}
          <div className="animate-fade-in-up pointer-events-none absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ animationDelay: '0.8s' }}>
            <div className="animate-float-bg whitespace-nowrap text-[32px] sm:text-[50px] lg:text-[60px] font-black text-zinc-900/10 dark:text-white/10 tracking-tight">
              WEB DEVELOPER
            </div>
          </div>
          
          <Image
            alt="Mạnh Huy"
            className="animate-fade-in-up relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: '0.6s' }}
            placeholder="blur"
            priority
            src={profileImage}
          />

          {/* Foreground Outline Text */}
          <div className="animate-fade-in-up pointer-events-none absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 z-20" style={{ animationDelay: '1.0s' }}>
            <div 
              className="animate-float-fg whitespace-nowrap text-[32px] sm:text-[50px] lg:text-[60px] font-black text-transparent tracking-tight" 
              style={{ WebkitTextStroke: '2px var(--hero-outline, rgba(255, 255, 255, 0.7))' }}
            >
              WEB DEVELOPER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
