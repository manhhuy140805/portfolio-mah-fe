"use client";

import { Mail, Phone, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full border-y border-white/5 bg-black py-16 lg:py-24 overflow-hidden">
      {/* 2/3 Width Video Background on the Right */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-2/3 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover"
        >
          <source src="/backgroud/Random-Dot-Patterns.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 items-center">
        
        {/* Left: Text & Primary Actions */}
        <div className="flex flex-col items-start text-left relative z-10 rounded-3xl bg-black/60 p-6 backdrop-blur-md sm:p-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--accent-cyan)/30 bg-(--accent-cyan)/10 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--accent-cyan) opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-(--accent-cyan)"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-(--accent-cyan)">
              {t("contact.status")}
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("contact.title_1")} <br className="hidden lg:block" />
            <span className="bg-linear-to-r from-(--accent-cyan) to-blue-500 bg-clip-text text-transparent">
              {t("contact.title_2")}
            </span>
          </h2>
          
          <p className="mb-8 max-w-lg text-lg text-zinc-400">
            {t("contact.description")}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:trandinhmanhhuy05@gmail.com" 
              className="group flex h-14 items-center gap-3 rounded-full bg-(--accent-cyan) px-8 font-bold text-black transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <Mail className="h-5 w-5" />
              {t("contact.email")}
            </a>
            <a 
              href="/Tran-Dinh-Manh-Huy-CV.pdf" 
              target="_blank"
              className="group flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 font-bold text-white transition-all hover:bg-white/20 hover:border-white/40"
            >
              <Download className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-white" />
              {t("contact.resume")}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#39d353]" /> {t("contact.fast_response")}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#39d353]" /> {t("contact.available")}
            </div>
          </div>
        </div>

        {/* Right: Quick Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          
          {/* Email Card */}
          <a href="mailto:trandinhmanhhuy05@gmail.com" className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-(--accent-cyan)/50 hover:bg-[#1a1a1c] hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-(--accent-cyan)/20 blur-2xl transition-all group-hover:bg-(--accent-cyan)/40"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-(--accent-cyan) group-hover:text-black">
              <Mail className="h-5 w-5" />
            </div>
            <div className="relative z-10 w-full overflow-hidden">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contact.cards.email.label")}</p>
              <p className="mt-1 truncate font-semibold text-zinc-200">trandinhmanhhuy05@gmail.com</p>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 -translate-x-4 text-zinc-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-(--accent-cyan) group-hover:opacity-100" />
          </a>

          {/* Phone Card */}
          <a href="tel:+84326149986" className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-[#39d353]/50 hover:bg-[#1a1a1c] hover:shadow-[0_10px_30px_rgba(57,211,83,0.1)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#39d353]/20 blur-2xl transition-all group-hover:bg-[#39d353]/40"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-[#39d353] group-hover:text-black">
              <Phone className="h-5 w-5" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contact.cards.phone.label")}</p>
              <p className="mt-1 font-semibold text-zinc-200">+84 326 149 986</p>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 -translate-x-4 text-zinc-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-[#39d353] group-hover:opacity-100" />
          </a>

          {/* LinkedIn Card */}
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-[#0a66c2]/50 hover:bg-[#1a1a1c] hover:shadow-[0_10px_30px_rgba(10,102,194,0.1)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0a66c2]/20 blur-2xl transition-all group-hover:bg-[#0a66c2]/40"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-[#0a66c2] group-hover:text-white">
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contact.cards.linkedin.label")}</p>
              <p className="mt-1 font-semibold text-zinc-200">{t("contact.cards.linkedin.desc")}</p>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 -translate-x-4 text-zinc-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-[#0a66c2] group-hover:opacity-100" />
          </a>

          {/* Github Card */}
          <a href="https://github.com/manhhuy140805" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-white/50 hover:bg-[#1a1a1c] hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl transition-all group-hover:bg-white/40"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-white group-hover:text-black">
              <FaGithub className="h-5 w-5" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t("contact.cards.github.label")}</p>
              <p className="mt-1 font-semibold text-zinc-200">{t("contact.cards.github.desc")}</p>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 -translate-x-4 text-zinc-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
          </a>

        </div>
      </div>
    </section>
  );
}
