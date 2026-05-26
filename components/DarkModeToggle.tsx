"use client";

import { useEffect, useState } from "react";

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("theme");

  if (stored === "dark") return true;
  if (stored === "light") return false;

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialDark = getInitialDarkMode();

    setDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={() => setDark((prev) => !prev)}
      style={{
        position: "fixed",
        top: "18px",
        right: "24px",
        zIndex: 99999,
        width: "44px",
        height: "44px",
        borderRadius: "9999px",
        border: dark
          ? "1px solid rgba(250, 204, 21, 0.6)"
          : "1px solid rgba(249, 115, 22, 0.6)",
        backgroundColor: dark ? "#111827" : "#ffffff",
        color: dark ? "#facc15" : "#f97316",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      {dark ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#facc15"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f97316"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
