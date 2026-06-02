import Link from "next/link";

export const metadata = {
  title: "Services — Software Engineering, AI Integration, RAG & Agentic Workflows",
  description:
    "Explore Indovate Technologies services: SaaS, ERP, web applications, backend APIs, RAG systems, LLM apps, copilots, agentic workflows, DevOps, and integrations.",
  openGraph: {
    title: "Services — Indovate Technologies",
    description:
      "Software engineering and AI engineering services for SaaS, ERP, RAG systems, LLM applications, copilots, and automation.",
    type: "website",
    url: "https://www.indovatetechnologies.com/services",
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
    canonical: "https://www.indovatetechnologies.com/services",
  },
};

const serviceGroups = [
  {
    label: "Software Engineering",
    title: "SaaS Product Development",
    description:
      "MVPs, product dashboards, subscription platforms, multi-tenant systems, admin portals, and customer-facing web applications.",
    points: ["Product architecture", "Frontend + backend", "Authentication and RBAC", "Payments and integrations"],
    stack: ["Next.js", "React", "Django", "FastAPI", "PostgreSQL"],
  },
  {
    label: "Enterprise Systems",
    title: "ERP & Business Platforms",
    description:
      "Custom ERP, CRM, finance, property, HR, procurement, and operations platforms designed around your actual workflows.",
    points: ["Workflow automation", "Role-based modules", "Reporting dashboards", "Approval flows"],
    stack: ["Django", "DRF", "React", "REST APIs", "Cloud"],
  },
  {
    label: "AI Engineering",
    title: "RAG & Knowledge Systems",
    description:
      "Private document Q&A, semantic search, internal knowledge assistants, retrieval pipelines, and enterprise search experiences.",
    points: ["Document ingestion", "Embeddings", "Hybrid retrieval", "Answer grounding"],
    stack: ["LangChain", "Vector DB", "Azure AI Search", "OpenAI", "Qdrant"],
  },
  {
    label: "AI Products",
    title: "LLM Apps & Copilots",
    description:
      "AI assistants and copilots embedded into products, portals, and business workflows with safe backend integrations.",
    points: ["Chat UX", "Tool calling", "User context", "Business action flows"],
    stack: ["AI SDK", "OpenAI", "Anthropic", "FastAPI", "Next.js"],
  },
  {
    label: "Automation",
    title: "Agentic Workflows",
    description:
      "Multi-step AI workflows that plan, call tools, retrieve knowledge, update systems, and summarize results with guardrails.",
    points: ["Workflow orchestration", "Human approval", "Tool execution", "Audit trails"],
    stack: ["LangGraph", "Python", "Queues", "APIs", "Observability"],
  },
  {
    label: "Infrastructure",
    title: "Cloud, DevOps & Integrations",
    description:
      "Deployment, CI/CD, monitoring, API integrations, database setup, performance tuning, and production support.",
    points: ["Docker/Kubernetes", "CI/CD", "Monitoring", "Third-party APIs"],
    stack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Nginx"],
  },
];

const process = [
  "Understand your business process, users, data, and delivery goals.",
  "Design the software architecture, AI workflow, integration points, and deployment path.",
  "Build a working prototype or MVP before scaling into a full production system.",
  "Engineer the product with strong frontend, backend, AI, cloud, and security foundations.",
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-surface text-slate-950 dark:bg-ai-ink dark:text-white">
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-hero-radial opacity-10 dark:opacity-100" />
        <div className="container-wide">
          <span className="eyebrow text-slate-700 dark:text-cyan-200">
            Services
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Software engineering and AI engineering under one roof.
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
                We build the core software systems your business needs, then add AI
                where it creates real value: RAG, copilots, automation, LLM apps,
                agentic workflows, and enterprise integrations.
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
                Best fit for
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                Startups building MVPs, businesses modernizing operations, and teams
                that want AI capabilities integrated into production software.
              </p>
              <Link href="/#project-advisor" className="btn-primary mt-6 w-full">
                Try AI Project Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-ai-gradient opacity-70" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                {service.label}
              </p>
              <h2 className="mt-4 text-2xl font-black">{service.title}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-wide rounded-[2rem] border border-white/10 bg-ai-panel p-8 text-white shadow-glow lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Delivery Model
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                From idea to production system.
              </h2>
              <p className="mt-5 text-slate-300">
                We help you move from concept to architecture, prototype, build,
                deployment, and continuous improvement.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex gap-4">
                    <span className="font-mono text-sm font-black text-cyan-300">
                      0{index + 1}
                    </span>
                    <p className="text-slate-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
