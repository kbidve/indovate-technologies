'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';

const CLIENTS = [
  { name: 'Client 1', img: '/Images/Apisec_Logo.svg' },
  { name: 'Client 2', img: '/Images/artificio_logo.svg' },
  { name: 'Client 3', img: '/Images/Belsio_logo.svg' },
  { name: 'Client 4', img: '/Images/fluence_logo.svg' },
  { name: 'Client 5', img: '/Images/Apisec_Logo.svg' },
  { name: 'Client 6', img: '/Images/artificio_logo.svg' },
  { name: 'Client 7', img: '/Images/Belsio_logo.svg' },
  { name: 'Client 8', img: '/Images/fluence_logo.svg' },
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const logoSetRef = useRef<HTMLDivElement | null>(null);

  const isDark = useTheme();
  const { sectionRef, bgRef, cursorHolderRef } = useAnimatedBackground(isDark, {
    trailCount: 10,
    trailHeight: 'h-24 md:h-28',
    quickToSettings: {
      duration: 0.22,
      ease: 'power3.out'
    }
  });

  // Infinite auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current;
    const logoSet = logoSetRef.current;
    if (!el || !logoSet) return;
    let frame: number;
    let speed = 0.5;

    const scroll = () => {
      if (!el || !logoSet) return;
      if (el.scrollLeft >= logoSet.offsetWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-gray-900 dark:via-black dark:to-[#0f1115]
        py-12
      "
    >
      {/* Light-mode vignette */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]
          dark:[background:none]
        "
      />

      {/* Animated background trails */}
      <div ref={bgRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <motion.div
        className="relative z-[3]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Trusted by Amazing Clients
        </h2>
        <div className="relative overflow-hidden mx-auto max-w-4xl">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div ref={logoSetRef} className="flex gap-8">
              {CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="flex gap-8">
              {CLIENTS.map((client, index) => (
                <div
                  key={index + CLIENTS.length}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={cursorHolderRef} className="absolute inset-0 z-[4] pointer-events-none" />
    </section>
  );
}