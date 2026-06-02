"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaRobot } from "react-icons/fa";

const highlights = [
  "SaaS & ERP product engineering",
  "RAG, copilots, and agentic workflows",
  "Cloud deployment and long-term support",
];

export default function FinalCTA() {
  return (
    <section id="contact-cta" className="section relative overflow-hidden bg-surface-muted text-slate-950 dark:bg-hero-radial dark:text-white">
      <div className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-30" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 dark:bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-500/10 dark:bg-brand-500/20 blur-3xl" aria-hidden="true" />

      <div className="container-tight relative z-10">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/78 p-6 shadow-glass-light dark:border-white/15 dark:bg-white/[0.065] dark:shadow-glass-dark backdrop-blur-xl sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow border-cyan-300/40 bg-cyan-300/10 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-700 dark:text-cyan-200">
                <FaRobot className="h-3.5 w-3.5" />
                Build With Indovate
              </span>

              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Have a software or AI product idea?
              </h2>

              <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Let’s design the system, build the platform, integrate AI where it creates real
                business value, and take it to production with a reliable engineering team.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/contact" className="btn-primary">
                  Send Project Brief <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:kailas.bidve@indovatetechnologies.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  <FaEnvelope className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-slate-950/45">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">
                We can help with
              </p>
              <div className="mt-5 space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-200"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ai-gradient text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-300/25 bg-cyan-50 p-4 text-sm text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-50">
                Share your idea, existing product, or automation challenge. We’ll respond with a
                practical direction for architecture, AI fit, implementation, and launch.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
