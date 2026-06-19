"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/src/i18n/config";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div 
        className="transition-opacity duration-300"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {children}
      </div>
    </I18nextProvider>
  );
}
