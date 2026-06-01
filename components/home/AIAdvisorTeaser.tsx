"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaProjectDiagram, FaRobot } from "react-icons/fa";

export default function AIAdvisorTeaser() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8 text-white sm:py-10">
      <div className="container-wide relative z-10">
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-ai-ink/95 via-[#0b1d31]/92 to-[#201240]/92 p-6 shadow-glass-dark backdrop-blur-xl sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="absolute inset-0 grid-overlay-dark opacity-20" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
                <FaRobot className="text-cyan-200" />
                AI Project Advisor
              </div>

              <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Not sure what to build first?
              </h2>

              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
                Use the advisor as a separate planning step to map your idea into
                a practical software, AI, RAG, automation, or integration path.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="#project-advisor" className="btn-secondary group whitespace-nowrap">
                Open AI Advisor
                <FaProjectDiagram className="ml-2 text-sm transition-transform group-hover:rotate-6" />
              </a>
              <a href="/contact" className="btn-primary group whitespace-nowrap">
                Start a Project
                <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
