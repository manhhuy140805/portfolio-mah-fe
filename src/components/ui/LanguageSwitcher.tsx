"use client";

import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language?.startsWith("vi") ? "en" : "vi";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  if (!mounted) {
    return (
      <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
        <Globe size={16} className="opacity-70" />
        <span className="w-5 text-center">VI</span>
      </button>
    );
  }

  const isVi = i18n.language?.startsWith("vi");

  return (
    <button
      onClick={toggleLanguage}
      className="group flex h-9 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/10"
      aria-label="Toggle Language"
      title={`Switch to ${isVi ? "English" : "Vietnamese"}`}
    >
      <Globe 
        size={16} 
        className="text-zinc-500 transition-colors duration-300 group-hover:text-(--accent) dark:text-zinc-400 dark:group-hover:text-(--accent-cyan)" 
      />
      <span className="w-5 text-center transition-opacity duration-300">
        {isVi ? "VI" : "EN"}
      </span>
    </button>
  );
}
