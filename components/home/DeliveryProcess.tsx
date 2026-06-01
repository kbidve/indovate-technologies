"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBezierCurve,
  FaCloudUploadAlt,
  FaCode,
  FaCompass,
  FaDraftingCompass,
  FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const deliverySteps: Array<{
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
  output: string;
}> = [
  {
    title: "Discover",
    subtitle: "Business, users, data, and workflows",
    description:
      "We map the business goal, user journeys, operational process, available data, integration points, and success metrics before touching implementation.",
    icon: FaCompass,
    output: "Problem brief + success criteria",
  },
  {
    title: "Architect",
    subtitle: "System design before development",
    description:
      "We define the product architecture, APIs, database model, auth/RBAC, AI flow, retrieval strategy, cloud plan, and delivery roadmap.",
    icon: FaDraftingCompass,
    output: "Architecture + delivery roadmap",
  },
  {
    title: "Prototype",
    subtitle: "Validate the riskiest parts early",
    description:
      "For SaaS, ERP, or AI systems, we validate core flows with a clickable prototype, technical proof of concept, or AI workflow demo.",
    icon: FaBezierCurve,
    output: "MVP scope + validated workflow",
  },
  {
    title: "Engineer",
    subtitle: "Production-grade build execution",
    description:
      "We build frontend, backend, APIs, databases, integrations, RAG pipelines, agent workflows, and admin systems with clean engineering practices.",
    icon: FaCode,
    output: "Working product increments",
  },
  {
    title: "Deploy",
    subtitle: "Cloud, CI/CD, monitoring, and security",
    description:
      "We deploy to production-ready infrastructure with CI/CD, environment configuration, observability, performance checks, and security hardening.",
    icon: FaCloudUploadAlt,
    output: "Production release",
  },
  {
    title: "Scale",
    subtitle: "Improve, automate, and support",
    description:
      "After launch, we optimize performance, improve UX, expand AI capabilities, automate workflows, and support continuous product growth.",
    icon: FaRocket,
    output: "Long-term product evolution",
  },
];

const metrics = [
  "Architecture-first delivery",
  "AI + software execution together",
  "Production support after launch",
];

export default function DeliveryProcess() {
  return (
    <section id="process" className="section relative overflow-hidden bg-white dark:bg-ai-navy">
      <div className="absolute inset-0 grid-overlay-light opacity-60 dark:grid-overlay-dark dark:opacity-25" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow border-slate-300/60 bg-slate-100 text-slate-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              Delivery Process
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black md:text-6xl">
              From idea to production system.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We use the same disciplined delivery model whether we are building a SaaS product,
              ERP platform, RAG system, AI copilot, or agentic automation workflow.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric}
                className="glass-card px-4 py-5 text-sm font-semibold text-slate-700 dark:text-slate-200"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
              >
                {metric}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/50 to-violet-400/0 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {deliverySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glass-light dark:border-white/10 dark:bg-white/[0.055] dark:shadow-none dark:hover:border-cyan-300/30"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <div
                    className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-cyan-300/10 blur-2xl transition duration-300 group-hover:bg-cyan-300/20 dark:bg-cyan-300/5 dark:group-hover:bg-cyan-300/15"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex shrink-0 items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ai-gradient text-white shadow-glow">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-black text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-cyan-100">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-brand-300">
                        {step.subtitle}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-300">
                        {step.description}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300">
                        <span className="font-bold text-slate-950 dark:text-white">Output:</span>
                        <span>{step.output}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.045] md:flex-row md:items-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <h3 className="text-2xl font-black">Need clarity before building?</h3>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              We can start with a focused architecture discovery to define the product scope,
              AI feasibility, integration points, and delivery roadmap.
            </p>
          </div>
          <a href="/contact" className="btn-primary shrink-0">
            Plan My Build <FaArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
