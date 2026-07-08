"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      title={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      <span className="text-lg">
        {language === "ar" ? "🇸🇦" : "🇬🇧"}
      </span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {language === "ar" ? "EN" : "AR"}
      </span>
    </button>
  );
}
