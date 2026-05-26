'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';

const QUOTES = [
  { name: 'Faizel L.', role: 'Founder, Apisec', text: 'Smooth process and a gorgeous site. Performance is top-notch.' },
  { name: 'Thalraj G.', role: 'MD, Artificio', text: 'They delivered fast, and the SEO uplift was immediate.' },
  { name: 'Hamza Betraoui', role: 'Founder & CEO, Belsio', text: 'Great communication, clean design, measurable results.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.4 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 18 } }
};

export default function Testimonials() {
  // Use custom hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 12,
    trailHeight: 'h-24 md:h-28',
    quickToSettings: {
      duration: 0.22,
      ease: 'power3.out'
    },
    driftSettings: {
      dark: { range: 360, offset: 180 },
      light: { range: 240, offset: 120 },
      duration: { base: 11, random: 5 }
    }
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-gray-900 dark:via-black dark:to-[#0f1115]
        p-1
      "
    >
      {/* light-mode vignette for depth */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* animated background trails */}
      <div ref={bgRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* content */}
      <motion.div
        className="relative z-[3] card p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur ring-1 ring-black/5 dark:ring-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={cardVariants}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUOTES.map((quote, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <FaQuoteLeft className="text-brand-500 text-2xl mb-4" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 italic">
                &ldquo;{quote.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{quote.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{quote.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* cursor ring mount */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />
    </section>
  );
}