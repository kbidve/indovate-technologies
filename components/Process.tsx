'use client';

import { FaLightbulb, FaPenNib, FaCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';

const STEPS = [
  { icon: FaLightbulb, title: 'Discover', desc: 'Goals, users, scope, success metrics.' },
  { icon: FaPenNib, title: 'Design', desc: 'Wireframes → polished UI with interactions.' },
  { icon: FaCode, title: 'Develop', desc: 'Accessible, performant, SEO-ready code.' },
  { icon: FaRocket, title: 'Launch', desc: 'Deploy, monitor, iterate, and support.' },
];

export default function Process() {
  // Use custom hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 12,
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
        id="process"
        className="relative z-[3] p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Process</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We follow a proven methodology to deliver exceptional results, from initial concept to final launch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-brand-100 dark:bg-brand-900/30 rounded-full">
                <step.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* cursor ring mount */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />
    </section>
  );
}