import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Indovate Technologies — Software & AI Engineering Company",
  description:
    "Indovate Technologies is a software and AI engineering company building SaaS platforms, ERP systems, RAG solutions, LLM applications, and agentic workflows.",
  openGraph: {
    title: "About Indovate Technologies — Software & AI Engineering Company",
    description:
      "A software engineering and AI engineering partner for SaaS, ERP, web platforms, RAG systems, LLM apps, and agentic workflows.",
    type: "website",
    url: "https://www.indovatetechnologies.com/about",
    images: [
      {
        url: "/Images/indovatelogo2.png",
        width: 400,
        height: 400,
        alt: "Indovate Technologies Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.indovatetechnologies.com/about",
  },
};

const principles = [
  "Production-first engineering over demo-only delivery",
  "Clear architecture before implementation",
  "Software foundations strong enough for AI systems",
  "Transparent communication and long-term ownership",
];

const capabilities = [
  "SaaS product development",
  "ERP and enterprise platforms",
  "RAG and knowledge systems",
  "LLM applications and copilots",
  "Agentic workflow automation",
  "Cloud, DevOps, and integrations",
];

const stats = [
  { value: "12+", label: "Years of engineering experience" },
  { value: "AI + Software", label: "Combined product delivery focus" },
  { value: "Remote-first", label: "Built for global collaboration" },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-surface text-slate-950 dark:bg-ai-ink dark:text-white">
      <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-80 dark:opacity-100">
          <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl" />
        </div>

        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="eyebrow text-slate-700 dark:text-cyan-200">
              About Indovate
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              We build software products and bring AI into real business systems.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
              Indovate Technologies is a software engineering and AI engineering company.
              We help startups, SMEs, and growing businesses build SaaS platforms,
              ERP systems, web applications, RAG solutions, LLM apps, copilots, and
              agentic workflows that are ready for production.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/#work" className="btn-secondary text-slate-950 ring-1 ring-slate-200 dark:text-white dark:ring-0">
                View Work
              </Link>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-hero-radial opacity-80" />
            <div className="relative z-10 rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
              <div className="relative mx-auto h-44 w-44 rounded-full border border-cyan-300/20 bg-white/10 p-8 shadow-glow">
                <Image
                  src="/Images/indovatelogo2.png"
                  alt="Indovate Technologies"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="mt-8 grid gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="text-2xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">
              What we believe
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              AI succeeds only when the software foundation is strong.
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300">
              We do not treat AI as a separate gimmick. We design the product,
              backend, data flow, security model, deployment pipeline, and AI layer
              together so the final system is useful, maintainable, and scalable.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ai-gradient text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-2 font-semibold text-slate-800 dark:text-slate-100">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8">
        <div className="container-wide rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.04] lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              Capability Map
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              From traditional software to AI-powered platforms.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-soft dark:border-white/10 dark:bg-ai-panel/70 dark:text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
