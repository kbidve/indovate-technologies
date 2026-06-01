"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCloud,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaProjectDiagram,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  icon: IconType;
  signal: string;
  capabilities: string[];
  stack: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Belsio ERP Platform",
    category: "ERP / SaaS / Multi-tenant software",
    description:
      "A custom ERP foundation for finance, property operations, reporting, role-based workflows, and business process automation.",
    icon: FaBuilding,
    signal: "Enterprise workflow system",
    capabilities: [
      "Multi-tenant product architecture",
      "Finance and operational modules",
      "Role-based access and reporting",
    ],
    stack: ["Django", "DRF", "React", "PostgreSQL", "RBAC"],
  },
  {
    title: "Enterprise AI Companion",
    category: "RAG / LLM workflows / AI platform",
    description:
      "An AI companion architecture for private knowledge access, document intelligence, retrieval workflows, and enterprise system integration.",
    icon: FaBrain,
    signal: "AI platform engineering",
    capabilities: [
      "RAG pipeline architecture",
      "Context enrichment and retrieval",
      "Agent/tool orchestration patterns",
    ],
    stack: ["FastAPI", "LangChain", "LangGraph", "Vector DB", "LLMs"],
  },
  {
    title: "SaaS & Web Platforms",
    category: "Product engineering / Cloud applications",
    description:
      "Modern web products, dashboards, customer portals, backend APIs, integrations, and cloud-ready application foundations.",
    icon: FaCode,
    signal: "Full-stack product delivery",
    capabilities: [
      "Frontend and backend implementation",
      "API-first product modules",
      "Performance-focused UI delivery",
    ],
    stack: ["Next.js", "React", "TypeScript", "Python", "APIs"],
  },
  {
    title: "Automation & Integrations",
    category: "Business workflows / AI-enabled operations",
    description:
      "Workflow automation, third-party API integrations, AI-assisted operations, and systems that reduce repetitive manual work across departments.",
    icon: FaNetworkWired,
    signal: "Connected business systems",
    capabilities: [
      "API and service integrations",
      "Automated business processes",
      "AI-assisted workflow decisions",
      "Event-driven jobs, queues, and webhooks",
    ],
    stack: ["REST APIs", "Webhooks", "Cloud", "Queues", "Automation", "AI Tools"],
  },
];

const proofPoints = [
  {
    label: "Software depth",
    value: "SaaS, ERP, APIs, cloud",
    icon: FaProjectDiagram,
  },
  {
    label: "AI capability",
    value: "RAG, LLM apps, agents",
    icon: FaRobot,
  },
  {
    label: "Data foundation",
    value: "PostgreSQL, vector search",
    icon: FaDatabase,
  },
  {
    label: "Production focus",
    value: "Security, RBAC, DevOps",
    icon: FaShieldAlt,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="section anchor-offset relative overflow-hidden bg-surface-muted dark:bg-ai-ink"
    >
      <div
        className="absolute inset-0 grid-overlay-light opacity-60 dark:grid-overlay-dark dark:opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-brand-400/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-8 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl dark:bg-violet-500/10"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="eyebrow border-slate-300/60 bg-slate-100 text-slate-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              Featured Work
            </span>
            <h2 className="mt-5 max-w-5xl text-balance text-4xl font-black md:text-6xl">
              Work that connects <span className="brand-gradient-text">software systems</span>{" "}
              with real AI capability.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
              Our work sits at the intersection of product engineering, business
              workflows, data systems, and AI. We build platforms that are
              useful beyond the demo stage.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-glass-light backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-glass-dark md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-cyan-200">
                  Delivery profile
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
                  From core platform to AI layer.
                </h3>
              </div>
              <div className="hidden h-16 w-16 items-center justify-center rounded-3xl bg-ai-gradient text-white shadow-glow md:flex">
                <FaCloud className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-cyan-300/10 dark:text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-black text-slate-950 dark:text-white">
                        {point.label}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {point.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={containerVariants}
        >
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;
            const isWide = index === 3;

            if (isWide) {
              return (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-glow-orange dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/40 dark:hover:shadow-glow lg:col-span-4 md:p-8"
                  variants={cardVariants}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-brand-500/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-cyan-300/10 dark:to-violet-500/10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl transition duration-300 group-hover:bg-brand-400/20 dark:bg-cyan-300/10 dark:group-hover:bg-cyan-300/20"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="text-sm font-black text-brand-600 dark:text-cyan-200">
                              0{index + 1}
                            </p>
                            <h3 className="mt-4 max-w-2xl text-3xl font-black text-slate-950 dark:text-white md:text-5xl">
                              {item.title}
                            </h3>
                          </div>
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ai-gradient p-[1px] shadow-glow md:h-16 md:w-16">
                            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white text-slate-950 dark:bg-ai-panel dark:text-cyan-200">
                              <Icon className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                          </div>
                        </div>

                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          {item.category}
                        </p>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.045] md:p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-200">
                          {item.signal}
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                          {item.capabilities.map((capability) => (
                            <div key={capability} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 dark:bg-cyan-300" />
                              <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                                {capability}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.055] md:p-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                            Integration Stack
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.stack.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href="/contact"
                          className="mt-7 inline-flex items-center font-bold text-brand-600 transition hover:text-brand-700 dark:text-cyan-200 dark:hover:text-cyan-100"
                        >
                          Discuss automation workflow
                          <FaArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-glow-orange dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/40 dark:hover:shadow-glow ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
                variants={cardVariants}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-brand-500/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-cyan-300/10 dark:to-violet-500/10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-400/10 blur-3xl transition duration-300 group-hover:bg-brand-400/20 dark:bg-cyan-300/10 dark:group-hover:bg-cyan-300/20"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex min-h-[25rem] flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-black text-brand-600 dark:text-cyan-200">
                        0{index + 1}
                      </p>
                      <h3 className="mt-4 text-3xl font-black text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ai-gradient p-[1px] shadow-glow">
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white text-slate-950 dark:bg-ai-panel dark:text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {item.category}
                  </p>

                  <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.045]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-200">
                      {item.signal}
                    </p>
                    <div className="mt-4 space-y-3">
                      {item.capabilities.map((capability) => (
                        <div key={capability} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 dark:bg-cyan-300" />
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {capability}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 overflow-hidden rounded-[2rem] bg-hero-radial p-6 text-white shadow-glass-dark md:p-8 lg:mt-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid gap-8 py-1 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Want similar execution?
              </p>
              <h3 className="mt-5 max-w-4xl text-3xl font-black leading-[1.08] text-white md:text-5xl">
                Bring us your product idea, internal workflow, or AI use case.
              </h3>
              <p className="mt-4 max-w-3xl text-slate-300">
                We can help you shape the architecture, decide what should be
                traditional software, what should use AI, and how to move from
                prototype to production.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="/portfolio" className="btn-secondary group">
                View Portfolio
                <FaArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="/contact" className="btn-primary group">
                Start a Project
                <FaArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
