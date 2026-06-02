"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type Offering = {
  category: "Software" | "AI" | "Delivery";
  icon: IconType;
  title: string;
  description: string;
  bullets: string[];
  stack: string[];
  accentClass: string;
};

const offerings: Offering[] = [
  {
    category: "Software",
    icon: FaLaptopCode,
    title: "SaaS Product Development",
    description:
      "We build product-grade SaaS platforms from MVP to scalable production systems.",
    bullets: ["Multi-tenant architecture", "Dashboards and workflows", "Subscription-ready systems"],
    stack: ["Next.js", "React", "Django", "FastAPI"],
    accentClass: "from-cyan-300/90 via-blue-500/80 to-violet-500/80",
  },
  {
    category: "Software",
    icon: FaCogs,
    title: "ERP & Enterprise Software",
    description:
      "Custom business platforms for finance, CRM, HR, property, procurement, and operations.",
    bullets: ["Role-based access", "Approval flows", "Business process automation"],
    stack: ["Django", "DRF", "PostgreSQL", "RBAC"],
    accentClass: "from-brand-300/90 via-orange-500/80 to-rose-500/70",
  },
  {
    category: "AI",
    icon: FaBrain,
    title: "AI Platforms & Copilots",
    description:
      "Internal copilots, AI assistants, and intelligent product features connected to real systems.",
    bullets: ["Enterprise copilots", "AI workflow UX", "Context-aware assistance"],
    stack: ["LLMs", "Tools", "Agents", "APIs"],
    accentClass: "from-violet-300/90 via-fuchsia-500/80 to-cyan-400/80",
  },
  {
    category: "AI",
    icon: FaDatabase,
    title: "RAG & Knowledge Systems",
    description:
      "Private document intelligence systems that retrieve, reason, and answer with grounded context.",
    bullets: ["Document ingestion", "Semantic retrieval", "Knowledge Q&A"],
    stack: ["RAG", "Embeddings", "Vector DB", "Search"],
    accentClass: "from-emerald-300/90 via-cyan-500/80 to-blue-500/80",
  },
  {
    category: "AI",
    icon: FaNetworkWired,
    title: "Agentic Workflows",
    description:
      "Multi-step AI workflows where agents plan, call tools, validate outputs, and automate operations.",
    bullets: ["LangGraph flows", "Tool-using agents", "Human-in-the-loop control"],
    stack: ["LangGraph", "LangChain", "MCP", "Workers"],
    accentClass: "from-sky-300/90 via-indigo-500/80 to-violet-500/80",
  },
  {
    category: "Delivery",
    icon: FaCloud,
    title: "Cloud, DevOps & Integrations",
    description:
      "We connect products to production infrastructure, third-party systems, and monitoring workflows.",
    bullets: ["CI/CD pipelines", "Cloud deployment", "API integrations"],
    stack: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    accentClass: "from-slate-200/90 via-cyan-400/80 to-brand-400/80",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 52,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhatWeBuild() {
  return (
    <section id="solutions" className="section relative overflow-hidden bg-surface-muted dark:bg-ai-ink">
      <div className="absolute inset-0 grid-overlay-light opacity-60 dark:grid-overlay-dark dark:opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow border-slate-300/60 bg-white/70 text-slate-700 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              What We Build
            </span>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white md:text-6xl">
              Software systems with <span className="gradient-text">AI capability</span> built in.
            </h2>
          </div>

          <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            We combine product engineering, backend architecture, cloud delivery, and AI workflows to build systems that are useful in production, not only impressive in demos.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          {offerings.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition-colors duration-300 hover:border-cyan-300/40 dark:border-white/10 dark:bg-white/[0.045]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accentClass}`}
                aria-hidden="true"
              />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-45" aria-hidden="true" />

              <div className="flex items-start justify-between gap-4">
                <div className={`rounded-2xl bg-gradient-to-br ${item.accentClass} p-[1px]`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 dark:bg-ai-panel dark:text-cyan-100">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.65)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white">
                Not just AI demos. Production systems with AI inside.
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                We build the backend, frontend, database, APIs, deployment pipeline, and AI layer together so your product can actually run in business environments.
              </p>
            </div>
            <a href="/contact" className="btn-primary justify-self-start md:justify-self-end">
              Discuss Your Use Case
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
