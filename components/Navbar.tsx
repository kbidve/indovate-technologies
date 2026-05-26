'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBolt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    // { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all
        ${scrolled
          ? 'backdrop-blur-lg bg-white/60 dark:bg-[#0a183d]/70 border-b border-white/20 dark:border-blue-200/10 shadow-sm'
          : 'bg-transparent'
        }`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container-tight flex items-center justify-between py-4">
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100">
            <motion.img src="/Images/indovatelogo.png" alt="Logo" className="h-8 w-8 md:h-9 md:w-9" initial={false} animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: 0, duration: 1.2, ease: 'easeInOut' }} />
            <span>Indovate Technologies</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-lg text-gray-800 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{l.label}</Link>
          ))}
          <motion.div whileHover={{ scale: 1.09, boxShadow: '0 4px 24px #f38c1740' }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400">
              Get Quote
            </Link>
          </motion.div>
        </nav>
        <button
          className="md:hidden mr-[60px]"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 right-0 w-80 bg-white/30 dark:bg-[#0a183d]/60 backdrop-blur-lg border-l border-white/20 dark:border-blue-200/10 shadow-2xl p-6 z-50"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close Menu" className="text-gray-900 dark:text-gray-100 mr-[60px]">
                  <FaTimes />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {links.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base text-gray-900 dark:text-gray-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{l.label}</Link>
                ))}
                <motion.div whileHover={{ scale: 1.09, boxShadow: '0 4px 24px #f38c1740' }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-center shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400">Get Quote</Link>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}