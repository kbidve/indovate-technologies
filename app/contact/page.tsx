import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Start Your Software or AI Project",
  description:
    "Contact Indovate Technologies for SaaS, ERP, web application, AI integration, RAG, LLM app, or agentic workflow development.",
  openGraph: {
    title: "Contact — Indovate Technologies",
    description:
      "Send your software or AI project brief to Indovate Technologies.",
    type: "website",
    url: "https://www.indovatetechnologies.com/contact",
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
    canonical: "https://www.indovatetechnologies.com/contact",
  },
};

const contactReasons = [
  "Build a SaaS, ERP, or internal business platform",
  "Add AI, RAG, copilots, or LLM workflows to your product",
  "Modernize an existing application or integrate systems",
  "Discuss architecture, MVP scope, delivery plan, or long-term support",
];

const projectTypes = [
  "SaaS Product",
  "ERP / Business System",
  "RAG / Knowledge AI",
  "AI Copilot",
  "Agentic Workflow",
  "Cloud / DevOps / Integration",
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-surface text-slate-950 dark:bg-ai-ink dark:text-white">
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-hero-radial opacity-10 dark:opacity-100" />
        <div className="container-wide grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow text-slate-700 dark:text-cyan-200">
              Contact
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Tell us what you want to build. We will help shape the system.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
              Share your software or AI project idea. We can help with architecture,
              scope, development, AI integration, cloud deployment, and ongoing
              engineering support.
            </p>

            <div className="mt-8 grid gap-3">
              {contactReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-soft dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">
              Good starting points
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {projectTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/ai-project-advisor" className="btn-primary">
                Use AI Advisor
              </Link>
              <a
                href="mailto:kailas.bidve@indovatetechnologies.com"
                className="btn-secondary text-slate-950 ring-1 ring-slate-200 dark:text-white dark:ring-0"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-tight">
          <Contact />
        </div>
      </section>
    </main>
  );
}
