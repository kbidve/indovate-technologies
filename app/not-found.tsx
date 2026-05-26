'use client';

import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';

export default function NotFound() {
  // Use custom hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 10, // calm on 404
    trailHeight: 'h-24 md:h-28',
    quickToSettings: {
      duration: 0.22,
      ease: 'power3.out'
    }
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-gray-900 dark:via-black dark:to-[#0f1115]
      "
    >
      {/* subtle vignette */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* animated trails */}
      <div ref={bgRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* content */}
      <div className="container-tight py-24 text-center relative z-[3]">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-4 py-2 rounded-xl bg-brand-600 text-white shadow-md hover:scale-105 transition"
        >
          Go Home
        </a>
      </div>

      {/* cursor ring mount */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />
    </section>
  );
}