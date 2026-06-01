import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaBrain, FaCodeBranch, FaShieldAlt } from "react-icons/fa";
import AIProjectAdvisor from "@/components/home/AIProjectAdvisor";

export const metadata: Metadata = {
  title: "AI Project Advisor",
  description:
    "Use Indovate Technologies' AI Project Advisor to convert a software, ERP, RAG, copilot, agentic workflow, or automation idea into a practical build direction.",
  alternates: {
    canonical: "/ai-project-advisor",
  },
  openGraph: {
    title: "AI Project Advisor | Indovate Technologies",
    description:
      "Turn a rough software or AI idea into a practical architecture direction with modules, stack, and delivery path.",
    url: "https://www.indovatetechnologies.com/ai-project-advisor",
    type: "website",
  },
};

const highlights = [
  {
    icon: FaBrain,
    title: "Classify the idea",
    text: "Map your requirement to SaaS, ERP, RAG, copilot, agent, or integration tracks.",
  },
  {
    icon: FaCodeBranch,
    title: "Shape the architecture",
    text: "Get a first-pass direction for modules, backend, frontend, AI layer, and deployment.",
  },
  {
    icon: FaShieldAlt,
    title: "Server-side AI",
    text: "The advisor calls the AI route from the server. API keys are not exposed to the browser.",
  },
];

export default function AIProjectAdvisorPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden bg-surface-muted text-slate-950 dark:bg-ai-ink dark:text-white">
        <div className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-25" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-wide relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="eyebrow border-cyan-300/40 bg-cyan-300/10 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">AI Project Advisor</span>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white md:text-7xl">
                Plan your software or AI build direction.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
                Select the closest project type, describe your idea, and get a practical first direction for architecture, modules, complexity, and stack.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#project-advisor" className="btn-primary group">
                  Start Advisor
                  <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
                  Talk to Indovate
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-glass-dark"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-700 ring-1 ring-cyan-300/25 dark:text-cyan-200 dark:ring-cyan-300/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AIProjectAdvisor />
    </main>
  );
}
