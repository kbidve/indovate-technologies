"use client";
import { useState, useEffect } from "react";

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  // Device preference
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
  // Local time (night: 7pm-7am)
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 7) return true;
  return false;
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(getInitialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="fixed z-[9999] top-4 right-4 md:right-3 md:top-4 p-2 ml-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.223 2.654-7.822 6.398-9.193a.75.75 0 01.908.911A7.501 7.501 0 0019.5 15.75a.75.75 0 01.911.908 9.72 9.72 0 01-1.659 2.344z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      )}
    </button>
  );
}
