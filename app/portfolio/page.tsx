import Link from "next/link";

export const metadata = {
  title: "Work — Software, ERP, SaaS & AI Engineering Projects",
  description:
    "Explore representative work by Indovate Technologies across ERP platforms, AI companion systems, SaaS applications, and automation integrations.",
  openGraph: {
    title: "Work — Indovate Technologies",
    description:
      "Representative software and AI engineering work across ERP, SaaS, RAG, LLM apps, and integrations.",
    type: "website",
    url: "https://www.indovatetechnologies.com/portfolio",
    images: [
      {
        url: "/Images/indovatelogo.png",
        width: 400,
        height: 400,
        alt: "Indovate Technologies Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.indovatetechnologies.com/portfolio",
  },
};

const work = [
  {
    type: "ERP Platform",
    title: "Belsio ERP Platform",
    summary:
      "A multi-module ERP direction covering finance, property management, business operations, workflows, and role-based administration.",
    focus: ["Multi-tenant architecture", "Finance and operations", "Role-based access", "Reporting dashboards"],
    stack: ["Django", "DRF", "React", "PostgreSQL", "Cloud"],
  },
  {
    type: "Enterprise AI",
    title: "AI Companion / RAG Platform",
    summary:
      "Enterprise AI assistant architecture for knowledge retrieval, document Q&A, LLM orchestration, context enrichment, and secure API workflows.",
    focus: ["RAG pipelines", "Document ingestion", "LLM workflows", "Enterprise integrations"],
    stack: ["FastAPI", "LangChain", "LangGraph", "Vector DB", "OpenAI"],
  },
  {
    type: "SaaS & Web",
    title: "SaaS and Web Platforms",
    summary:
      "Product interfaces, dashboards, backend APIs, authentication flows, and modern frontend delivery for digital products.",
    focus: ["Frontend systems", "Backend APIs", "Admin portals", "Product UX"],
    stack: ["Next.js", "React", "TypeScript", "Django", "FastAPI"],
  },
  {
    type: "Automation",
    title: "Business Automation & Integrations",
    summary:
      "Workflow automation and third-party integrations connecting internal software, external APIs, cloud services, and AI-enabled actions.",
    focus: ["API integration", "Workflow automation", "Cloud deployment", "Monitoring"],
    stack: ["Python", "Node.js", "REST APIs", "Docker", "CI/CD"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-surface text-slate-950 dark:bg-ai-ink dark:text-white">
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-hero-radial opacity-10 dark:opacity-100" />
        <div className="container-wide">
          <span className="eyebrow text-slate-700 dark:text-cyan-200">
            Featured Work
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Software platforms, AI systems, and workflow automation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
                A selection of representative work areas that show how Indovate
                combines product engineering, enterprise systems, AI workflows,
                and cloud deployment.
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
                Need something similar?
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                Share your idea and we can help map the right product, AI, or
                integration architecture.
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {work.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05] lg:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                    {item.type}
                  </p>
                  <span className="font-mono text-sm font-black text-slate-300 dark:text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-black md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.focus.map((focus) => (
                    <div
                      key={focus}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                    >
                      {focus}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
