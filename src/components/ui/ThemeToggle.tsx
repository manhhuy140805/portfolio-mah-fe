"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        setTimeout(() => window.location.reload(), 100);
      }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
