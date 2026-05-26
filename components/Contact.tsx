'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  // Use custom hooks for theme and animated background
  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 9, // reduced count for contact form
    trailHeight: 'h-24 md:h-28',
    quickToSettings: {
      duration: 0.22,
      ease: 'power3.out'
    },
    colorAnimDuration: {
      dark: { base: 3.0, random: 0.6 },
      light: { base: 3.6, random: 0.9 }
    },
    driftSettings: {
      dark: { range: 300, offset: 150 },
      light: { range: 200, offset: 100 },
      duration: { base: 12, random: 4 }
    },
    repulsionSettings: {
      radius: { dark: 160, light: 130 },
      maxRepel: { dark: 100, light: 80 },
      power: 2
    }
  });

  // Handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

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
      {/* subtle light-mode vignette */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* animated trails layer */}
      <div ref={bgRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* form card */}
      <motion.div
        className="relative z-[3] card w-full max-w-2xl mx-auto px-4 sm:px-8 py-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur ring-1 ring-black/5 dark:ring-white/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h2 className="text-2xl font-bold">Let&apos;s build something great</motion.h2>
        <motion.p className="text-gray-600 dark:text-gray-300 mt-2">
          Tell us about your project and we&apos;ll get back within 24 hours.
        </motion.p>

        <motion.form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700"
          />
          <input
            name="company"
            placeholder="Company"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 md:col-span-2 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700"
          />
          <textarea
            name="message"
            required
            placeholder="Project details"
            rows={5}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 md:col-span-2 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700"
          />
          <div className="md:col-span-2 flex items-center gap-3">
            <motion.button
              type="submit"
              disabled={status==='sending' || status==='sent'}
              className="px-6 py-3 rounded-xl bg-brand-600 text-white disabled:opacity-60 shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-brand-400"
              whileHover={{ scale: status==='idle' ? 1.05 : 1, boxShadow: status==='idle' ? '0 4px 24px #f38c1740' : undefined }}
              whileTap={{ scale: 0.97 }}
              animate={
                status==='sent'
                  ? { scale: [1, 1.15, 1], backgroundColor: '#22c55e' }
                  : status==='error'
                  ? { x: [0, -8, 8, -8, 8, 0] }
                  : {}
              }
              transition={{ duration: status==='sent' ? 0.5 : 0.3 }}
              style={{ transform: status === 'sending' ? 'scale(0.97)' : undefined }}
              onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px #f38c17'}
              onBlur={e => e.currentTarget.style.boxShadow = ''}
            >
              <AnimatePresence mode="wait">
                {status==='sending' ? (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Sending…
                  </motion.span>
                ) : status==='sent' ? (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Sent ✔
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Send message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {status==='error' && (
                <motion.span
                  className="text-red-600"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Something went wrong. Try again.
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </motion.div>

      {/* cursor ring mount */}
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />
    </section>
  );
}