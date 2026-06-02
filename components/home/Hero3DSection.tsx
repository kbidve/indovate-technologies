"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

const sectionLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#engineering", label: "Engineering" },
  { href: "#work", label: "Work" },
];

const heroSignals = [
  { label: "Software", detail: "SaaS / ERP / Web", Icon: FaCode },
  { label: "AI", detail: "RAG / Copilots / Agents", Icon: FaBrain },
  { label: "Data", detail: "APIs / DB / Knowledge", Icon: FaDatabase },
  { label: "Cloud", detail: "Deploy / Monitor / Scale", Icon: FaCloud },
];

function HeroMotionPanel() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24, mass: 0.45 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  return (
    <motion.div
      className="relative hidden min-h-[27rem] lg:block"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white/70 p-7 shadow-glass-light backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:shadow-glass-dark"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
      >
        <div className="absolute inset-0 grid-overlay-light opacity-45 dark:grid-overlay-dark dark:opacity-25" />
        <div className="hero-scanline" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <svg
          className="absolute inset-0 h-full w-full opacity-55"
          viewBox="0 0 640 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path className="hero-flow-line" d="M90 120 C200 70 300 165 352 220 C430 304 505 292 560 360" />
          <path className="hero-flow-line hero-flow-line-delay" d="M90 335 C185 260 255 288 330 215 C410 138 492 160 560 95" />
        </svg>

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between gap-4">
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-100">
              Product architecture
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              Software + AI + Cloud
            </div>
          </div>

          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-900/80 shadow-[0_0_80px_rgba(34,211,238,0.14)] dark:bg-slate-950/65 dark:shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-xl">
            <div className="absolute h-24 w-24 rounded-full bg-ai-gradient opacity-20 blur-xl" />
            <FaProjectDiagram className="relative z-10 text-5xl text-cyan-100" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {heroSignals.map(({ label, detail, Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">{label}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero3DSection() {
  return (
    <section className="relative overflow-hidden bg-surface-muted text-slate-950 dark:bg-transparent dark:text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-cyan-50/72 to-orange-50/70 dark:from-ai-ink/96 dark:via-[#07111f]/94 dark:to-[#160d35]/92" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay-light opacity-45 dark:grid-overlay-dark dark:opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-surface-muted/90 dark:to-ai-ink/90" aria-hidden="true" />

      <div className="container-wide relative z-10 grid min-h-[calc(100svh-80px)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="eyebrow border-cyan-300/40 bg-cyan-300/12 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">Software + AI Engineering</span>

          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl xl:text-7xl">
            Build software.
            <span className="block gradient-text">Add AI.</span>
            Ship faster.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Product engineering, AI integration, and cloud delivery for teams
            that need production-ready systems, not only prototypes.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="btn-primary group">
              Start a Project
              <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solutions" className="btn-secondary">
              Explore Solutions
            </a>
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">
Explore sections
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 transition hover:border-cyan-300/50 hover:bg-cyan-300/15 dark:text-cyan-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <HeroMotionPanel />
      </div>
    </section>
  );
}
