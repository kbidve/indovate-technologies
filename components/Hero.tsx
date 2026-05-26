'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';
import NeonSquaresBackground from '@/components/NeonSquaresBackground';

export default function Hero() {
  const textRef = useRef<HTMLDivElement | null>(null);

  // Use custom hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 12,
    trailHeight: 'h-28 md:h-32'
  });

  // hero text intro
  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-gray-900 dark:via-black dark:to-[#0f1115]
      "
    >
      {/* Light-mode vignette to add depth without harshness */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* Animated trails container */}
      <div ref={bgRef} className="absolute inset-0 z-[1] overflow-hidden" />

      {/* Neon squares background */}
      <NeonSquaresBackground />

      {/* Smooth gradient overlays for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent dark:from-black/30 dark:via-black/10 dark:to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-100 dark:to-[#0f1115] z-[3] pointer-events-none" />

      {/* Hero Text */}
      <div
        ref={textRef}
        className="relative z-[4] flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-[0_1px_0_rgba(255,255,255,0.2)] dark:drop-shadow-lg">
          Your Complete IT Partner for{' '}
          <span className="text-brand-700 dark:text-brand-400">Digital Success.</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-gray-200 max-w-prose">
          From web and app development to debugging, hosting, maintenance, SEO, ERP, and AI/LLM training,
          our expert team delivers comprehensive IT solutions tailored for your business success.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="/contact"
            className="
              px-6 py-3 rounded-xl text-white font-medium inline-flex items-center gap-2 shadow-md transition-transform
              bg-brand-700 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400
              dark:bg-brand-600 dark:hover:bg-brand-500
            "
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            Start a Project <FaArrowRight />
          </motion.a>
        </div>
      </div>

      {/* holder where the tiny cursor ring gets mounted */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[5] pointer-events-none" />
    </section>
  );
}