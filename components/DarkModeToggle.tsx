"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const THEME_STORAGE_KEY = "indovate-theme";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    // Default theme is dark when no user preference exists.
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextThemeIsDark ? "dark" : "light",
    );

    setIsDark(nextThemeIsDark);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="
        fixed bottom-5 right-5 z-[70]
        flex h-11 w-11 items-center justify-center rounded-full
        border border-brand-300/60 bg-white/85 text-brand-600 shadow-soft backdrop-blur-xl
        transition duration-300 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-brand-300
        dark:border-yellow-300/60 dark:bg-ai-panel/85 dark:text-yellow-300
        lg:bottom-auto lg:right-6 lg:top-[18px]
      "
    >
      {isDark ? <FaMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
    </button>
  );
}