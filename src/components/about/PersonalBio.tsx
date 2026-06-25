"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Button from "@/src/components/ui/Button";

export default function PersonalBio() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-linear-to-b from-(--surface)/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-50 dark:bg-white/2 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative background glow inside the card */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-(--accent)/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column: Avatar & Contact */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              {/* Circular Avatar */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-white/10 shadow-[0_0_50px_rgba(47,47,228,0.3)] mx-auto lg:mx-0 group">
                <Image 
                  src="/images/dev/anh-cv.png" 
                  alt="Trần Đình Mạnh Huy" 
                  fill 
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 rounded-full border border-zinc-300 dark:border-white/20 z-10 pointer-events-none" />
              </div>

              {/* Name & Title */}
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">Trần Đình Mạnh Huy</h2>
                <p className="text-lg text-(--accent-cyan) font-medium">{t("about_page.bio.role")}</p>
              </div>
              
              <div className="w-full h-px bg-zinc-200 dark:bg-white/10" />

              {/* Contact Links */}
              <div className="flex flex-col gap-4 text-zinc-600 dark:text-gray-400 text-sm w-full">
                <a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-(--accent-cyan) shrink-0" /> {t("about_page.bio.location")}
                </a>
                <a href="mailto:trandinhmannhuy05@gmail.com" className="flex items-center justify-center lg:justify-start gap-3 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-(--accent-cyan) shrink-0" /> trandinhmannhuy05@gmail.com
                </a>
                <a href="https://github.com/manhhuy140805" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5 text-(--accent-cyan) shrink-0" /> manhhuy140805
                </a>
                <a href="https://linkedin.com/in/manhhuy140805" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5 text-(--accent-cyan) shrink-0" /> manhhuy140805
                </a>
              </div>

              {/* Action Button */}
              <div className="w-full pt-4">
                <Button href="/Tran-Dinh-Manh-Huy-CV-Intern.pdf" target="_blank" className="w-full flex justify-center py-4 bg-zinc-100 dark:bg-(--surface) text-zinc-900 dark:text-white hover:bg-(--accent) hover:text-white border border-zinc-200 dark:border-white/10 shadow-lg group">
                  <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" /> {t("about_page.bio.download_cv")}
                </Button>
              </div>
            </div>

            {/* Right Column: Bio & Details */}
            <div className="flex-1 space-y-12">
              
              {/* Profile Summary */}
              <div className="space-y-4 text-zinc-600 dark:text-gray-400 leading-relaxed text-lg">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-(--accent-cyan)" />
                  <h3 className="text-zinc-900 dark:text-white font-bold text-2xl">{t("about_page.bio.profile_summary")}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: t("about_page.bio.p1") }}></p>
                <p>{t("about_page.bio.p2")}</p>
              </div>

              {/* Personal Details Grid */}
              <div>
                <h3 className="text-zinc-900 dark:text-white font-bold text-2xl mb-6">{t("about_page.bio.quick_details")}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-(--accent-cyan) font-medium mb-1">{t("about_page.bio.availability_label")}</span>
                    <span className="text-zinc-900 dark:text-white font-semibold">{t("about_page.bio.availability_value")}</span>
                  </div>
                  <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-(--accent-cyan) font-medium mb-1">{t("about_page.bio.education_label")}</span>
                    <span className="text-zinc-900 dark:text-white font-semibold">{t("about_page.bio.education_value")}</span>
                  </div>
                  <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-(--accent-cyan) font-medium mb-1">{t("about_page.bio.languages_label")}</span>
                    <span className="text-zinc-900 dark:text-white font-semibold">{t("about_page.bio.languages_value")}</span>
                  </div>
                  <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-(--accent-cyan) font-medium mb-1">{t("about_page.bio.interests_label")}</span>
                    <span className="text-zinc-900 dark:text-white font-semibold">{t("about_page.bio.interests_value")}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
