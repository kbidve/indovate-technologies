"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowRight,
  FaBars,
  FaBrain,
  FaCodeBranch,
  FaTimes,
} from "react-icons/fa";
import { label } from "framer-motion/client";

const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#ai-capabilities", label: "AI" },
  { href: "/#engineering", label: "We build" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#trusted-clients", label: "Trusted Clients"},
];

const mobileQuickLinks = [
  { href: "/ai-project-advisor", label: "AI Project Advisor" },
  { href: "/#process", label: "Delivery Process" },
  { href: "/services", label: "All Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/88 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-ai-ink/85"
          : "border-b border-transparent bg-white/70 backdrop-blur-xl dark:bg-ai-ink/55"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between gap-4 lg:gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl ">
            {/* <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}
            <Image
              src="/Images/indovatelogo.png"
              alt="Indovate Technologies Logo"
              width={400}
              height={400}
              className="relative z-15 h-10 w-15 object-contain"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight text-slate-950 dark:text-white sm:text-lg">
              Indovate Technologies
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-cyan-100/70 sm:block">
              Software + Agentic FLow
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/ai-project-advisor"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-700 transition hover:-translate-y-0.5 hover:bg-cyan-300/15 dark:text-cyan-100"
          >
            <FaCodeBranch className="text-xs" />
            AI Advisor
          </Link>

          <Link href="/contact" className="btn-primary group text-sm">
            Start a Project
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.06] dark:text-white lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.aside
            className="fixed inset-0 z-[90] flex safe-drawer-height flex-col overflow-y-auto bg-ai-ink px-6 py-6 text-white shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex min-w-0 items-center gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ai-gradient shadow-glow">
                  <FaBrain className="text-lg text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-lg font-black text-white">
                    Indovate Technologies
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    Software + AI
                  </span>
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
                aria-label="Close navigation menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Main navigation
              </p>
              <div className="mt-4 grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-lg font-black text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Explore key sections
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {mobileQuickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-auto grid gap-3 pt-8">
              <Link
                href="/ai-project-advisor"
                onClick={closeMenu}
                className="btn-secondary w-full"
              >
                Try AI Advisor
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Start a Project
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
