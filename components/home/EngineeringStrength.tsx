"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCloud,
  FaCodeBranch,
  FaDatabase,
  FaLayerGroup,
  FaLock,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type EngineeringCapability = {
  title: string;
  description: string;
  icon: IconType;
  points: string[];
  iconWrapClass: string;
  iconInnerClass: string;
  iconGlowClass: string;
};

const capabilities: EngineeringCapability[] = [
  {
    title: "Product Architecture",
    description:
      "We design SaaS, ERP, dashboards, portals, and workflow systems with clean domain boundaries and long-term maintainability.",
    icon: FaLayerGroup,
    points: [
      "Multi-tenant structure",
      "Domain-driven modules",
      "Scalable product foundations",
    ],
    iconWrapClass:
      "border-cyan-300/30 bg-cyan-300/10 text-cyan-700 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-200",
    iconInnerClass:
      "bg-cyan-300/12 shadow-[inset_0_0_18px_rgba(34,211,238,0.16)]",
    iconGlowClass: "bg-cyan-300/22",
  },
  {
    title: "Backend & APIs",
    description:
      "Production APIs, async workflows, background jobs, integrations, permissions, and secure data access for real business systems.",
    icon: FaServer,
    points: ["REST APIs", "Auth and RBAC", "Third-party integrations"],
    iconWrapClass:
      "border-brand-300/35 bg-brand-300/10 text-brand-700 dark:border-brand-300/25 dark:bg-brand-300/10 dark:text-brand-200",
    iconInnerClass:
      "bg-brand-300/12 shadow-[inset_0_0_18px_rgba(243,140,23,0.18)]",
    iconGlowClass: "bg-brand-300/24",
  },
  {
    title: "Data & Security",
    description:
      "Reliable database modeling, permission-aware data access, auditability, validation, and secure handling of business context.",
    icon: FaShieldAlt,
    points: ["PostgreSQL design", "Access control", "Audit-ready workflows"],
    iconWrapClass:
      "border-violet-300/35 bg-violet-300/10 text-violet-700 dark:border-violet-300/25 dark:bg-violet-300/10 dark:text-violet-200",
    iconInnerClass:
      "bg-violet-300/12 shadow-[inset_0_0_18px_rgba(139,92,246,0.18)]",
    iconGlowClass: "bg-violet-300/24",
  },
  {
    title: "Cloud & Reliability",
    description:
      "Deployment pipelines, containerization, monitoring, logging, performance tuning, and production support after launch.",
    icon: FaCloud,
    points: ["Docker / Kubernetes", "CI/CD", "Monitoring and support"],
    iconWrapClass:
      "border-sky-300/35 bg-sky-300/10 text-sky-700 dark:border-sky-300/25 dark:bg-sky-300/10 dark:text-sky-200",
    iconInnerClass:
      "bg-sky-300/12 shadow-[inset_0_0_18px_rgba(56,189,248,0.18)]",
    iconGlowClass: "bg-sky-300/24",
  },
];

const deliveryLayers = [
  {
    label: "Frontend",
    stack: "Next.js, React, TypeScript, Tailwind",
    icon: FaTerminal,
    iconClass:
      "border-cyan-300/25 bg-cyan-300/10 text-cyan-700 dark:text-cyan-200",
  },
  {
    label: "Backend",
    stack: "Python, Django, FastAPI, Node.js",
    icon: FaServer,
    iconClass:
      "border-brand-300/25 bg-brand-300/10 text-brand-700 dark:text-brand-200",
  },
  {
    label: "Data",
    stack: "PostgreSQL, Redis/Valkey, vector databases",
    icon: FaDatabase,
    iconClass:
      "border-violet-300/25 bg-violet-300/10 text-violet-700 dark:text-violet-200",
  },
  {
    label: "Security",
    stack: "Authentication, RBAC, permissions, API security",
    icon: FaLock,
    iconClass:
      "border-emerald-300/25 bg-emerald-300/10 text-emerald-700 dark:text-emerald-200",
  },
  {
    label: "DevOps",
    stack: "Docker, Kubernetes, CI/CD, cloud deployment",
    icon: FaCodeBranch,
    iconClass:
      "border-orange-300/25 bg-orange-300/10 text-orange-700 dark:text-orange-200",
  },
  {
    label: "Launch",
    stack: "Monitoring, optimization, maintenance, scaling",
    icon: FaRocket,
    iconClass:
      "border-sky-300/25 bg-sky-300/10 text-sky-700 dark:text-sky-200",
  },
];

const principles = [
  "Production-first architecture",
  "Clean API contracts",
  "AI-ready data foundations",
  "Secure role-based workflows",
  "Observable cloud deployments",
  "Long-term maintainability",
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
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: "easeOut" as const,
    },
  },
};

export default function EngineeringStrength() {
  return (
    <section
      id="engineering"
      className="section relative overflow-hidden bg-white dark:bg-ai-navy"
    >
      <div
        className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-10 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl dark:bg-violet-500/10"
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
              Foundation
            </span>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">
              AI is powerful only when the{" "}
              <span className="brand-gradient-text">software foundation</span>{" "}
              is strong.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
              Indovate is not just adding AI prompts to existing websites. We
              build the product architecture, APIs, data model, access control,
              integrations, deployment pipeline, and operational layer needed to
              make software and AI useful in production.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-glass-light backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-glass-dark md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-cyan-200">
              Software + AI delivery principle
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
              We engineer the system around the AI, not the other way around.
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-300/35 bg-brand-300/10 text-brand-600 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-200">
                    <FaCheckCircle className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={containerVariants}
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-glow-orange dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/40 dark:hover:shadow-glow"
                variants={cardVariants}
              >
                <div
                  className={`absolute -left-6 -top-6 h-28 w-28 rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${capability.iconGlowClass}`}
                  aria-hidden="true"
                />

                {/* <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-[1.35rem] border backdrop-blur-xl transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${capability.iconWrapClass}`}
                >
                  <div
                    className={`absolute inset-1 rounded-[1.05rem] ${capability.iconInnerClass}`}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white/80 ring-1 ring-slate-200 dark:bg-cyan-100/70 dark:ring-cyan-200/30"
                    aria-hidden="true"
                  />
                  <Icon className="relative h-6 w-6 drop-shadow-sm" />
                </div> */}

                <h3 className="relative mt-6 text-2xl font-black text-slate-950 dark:text-white">
                  {capability.title}
                </h3>
                <p className="relative mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {capability.description}
                </p>
                <div className="relative mt-5 space-y-3">
                  {capability.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 dark:bg-cyan-300" />
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-hero-radial p-6 text-white shadow-glass-dark md:p-8">
            <div
              className="absolute inset-0 grid-overlay-dark opacity-25"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Why clients need this
              </p>
              <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                AI features fail when the core product is weak.
              </h3>
              <p className="mt-4 text-slate-300">
                Reliable AI needs clean data, correct permissions, stable APIs,
                thoughtful UX, monitoring, and secure deployment. That is why we
                approach AI as software engineering, not as a standalone widget.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {deliveryLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.label}
                  className="group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-glow-orange dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/30 dark:hover:shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-xl transition duration-300 group-hover:scale-105 ${layer.iconClass}`}
                    >
                      <span
                        className="absolute inset-1 rounded-xl bg-white/45 dark:bg-white/[0.045]"
                        aria-hidden="true"
                      />
                      <Icon className="relative h-4.5 w-4.5" />
                    </div>

                    <h4 className="font-black text-slate-950 dark:text-white">
                      {layer.label}
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {layer.stack}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
