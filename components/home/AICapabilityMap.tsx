"use client";

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaFileImport,
  FaFingerprint,
  FaSearch,
  FaBrain,
  FaTools,
  FaRobot,
  FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type PipelineStep = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
  tags: string[];
};

const pipeline: PipelineStep[] = [
  {
    number: "01",
    title: "Data",
    subtitle: "Business context",
    description:
      "Connect documents, databases, CRMs, ERPs, tickets, websites, and internal knowledge sources.",
    icon: FaDatabase,
    tags: ["Docs", "DB", "ERP"],
  },
  {
    number: "02",
    title: "Ingestion",
    subtitle: "Clean pipeline",
    description:
      "Parse, normalize, chunk, enrich, validate, and prepare content for reliable AI retrieval.",
    icon: FaFileImport,
    tags: ["Parsing", "Chunks", "ETL"],
  },
  {
    number: "03",
    title: "Embeddings",
    subtitle: "Semantic memory",
    description:
      "Create vector representations so your systems can understand intent, meaning, and similarity.",
    icon: FaFingerprint,
    tags: ["Vectors", "Hybrid", "Index"],
  },
  {
    number: "04",
    title: "Retrieval",
    subtitle: "Right context",
    description:
      "Retrieve the most relevant context using semantic search, filters, reranking, and permissions.",
    icon: FaSearch,
    tags: ["RAG", "Rerank", "ACL"],
  },
  {
    number: "05",
    title: "Reasoning",
    subtitle: "LLM intelligence",
    description:
      "Use LLMs to analyze context, generate answers, summarize workflows, and make decisions.",
    icon: FaBrain,
    tags: ["LLM", "Prompting", "Eval"],
  },
  {
    number: "06",
    title: "Tools",
    subtitle: "System actions",
    description:
      "Connect the AI layer with APIs, functions, databases, business apps, and operational systems.",
    icon: FaTools,
    tags: ["APIs", "Actions", "Auth"],
  },
  {
    number: "07",
    title: "Automation",
    subtitle: "Agentic flows",
    description:
      "Build multi-step workflows using agents, state machines, approvals, and human-in-the-loop controls.",
    icon: FaRobot,
    tags: ["Agents", "LangGraph", "HITL"],
  },
  {
    number: "08",
    title: "Deployment",
    subtitle: "Production scale",
    description:
      "Deploy with monitoring, security, observability, cost controls, feedback loops, and CI/CD.",
    icon: FaRocket,
    tags: ["Cloud", "CI/CD", "Ops"],
  },
];

const outcomes = [
  {
    label: "Private knowledge assistants",
    value: "RAG",
  },
  {
    label: "Business workflow automation",
    value: "Agents",
  },
  {
    label: "AI inside SaaS / ERP products",
    value: "AI UX",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function AICapabilityMap() {
  return (
    <section
      id="ai-capabilities"
      className="section relative overflow-hidden bg-white text-slate-950 dark:bg-ai-ink dark:text-white"
    >
      <div className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-30" aria-hidden="true" />
      <div
        className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 dark:bg-cyan-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="eyebrow border-cyan-300/40 bg-cyan-300/10 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">AI Capability Map</span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black md:text-6xl">
              From business data to production AI workflows.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
              We do not build isolated AI demos. We design the complete system:
              data pipelines, retrieval, LLM reasoning, tool execution,
              software integration, deployment, monitoring, and continuous
              improvement.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={containerVariants}
          >
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.label}
                className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 dark:shadow-glass-dark"
                variants={cardVariants}
              >
                <p className="gradient-text text-2xl font-black">
                  {outcome.value}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{outcome.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:shadow-glass-dark md:p-6 lg:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">
                Production AI pipeline
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
                RAG, LLM apps, and agentic workflows need a full architecture.
              </h3>
            </div>
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-700 dark:text-cyan-100">
              Software + AI + Cloud
            </div>
          </div>

          <motion.div
            className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <div
              className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-slate-300/70 dark:via-cyan-300/35 to-transparent xl:block"
              aria-hidden="true"
            />

            {pipeline.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  className="group relative min-h-[17rem] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition dark:border-white/10 dark:bg-slate-950/60 duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-50/80 dark:hover:bg-slate-900/80"
                  variants={cardVariants}
                >
                  <div
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition duration-300 group-hover:bg-cyan-300/20"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400 dark:text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                      {step.subtitle}
                    </p>
                    <h4 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {index < pipeline.length - 1 && (
                    <div
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-white dark:bg-ai-ink xl:flex xl:items-center xl:justify-center"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 dark:shadow-glass-dark md:p-8">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Why this matters for real businesses
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              AI becomes useful only when it is connected to your actual
              software, data, users, permissions, workflows, and operational
              goals. That is where our software engineering background matters:
              we turn AI capability into reliable product functionality.
            </p>
          </div>

          <div className="rounded-3xl border border-brand-300/30 bg-brand-50/80 p-6 dark:border-brand-400/20 dark:bg-brand-500/10 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-200">
              Delivery principle
            </p>
            <p className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
              Not just prompts. Complete systems.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              We combine backend APIs, product UX, cloud deployment, LLM
              orchestration, retrieval, and monitoring into one production-ready
              architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
