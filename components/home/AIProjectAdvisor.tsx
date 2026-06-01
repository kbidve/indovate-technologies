"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaDatabase,
  FaLightbulb,
  FaNetworkWired,
  FaPaperPlane,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type ProjectTypeId =
  | "saas"
  | "erp"
  | "rag"
  | "copilot"
  | "agents"
  | "integration";

type ProjectType = {
  id: ProjectTypeId;
  title: string;
  description: string;
  icon: IconType;
};

type AdvisorPlan = {
  headline: string;
  summary: string;
  complexity: string;
  architecture: string[];
  modules: string[];
  stack: string[];
};

type AdvisorSource = "idle" | "ai" | "fallback";

const projectTypes: ProjectType[] = [
  {
    id: "saas",
    title: "SaaS Product",
    description: "MVP, dashboard, subscription product, or customer portal.",
    icon: FaCode,
  },
  {
    id: "erp",
    title: "ERP / Business System",
    description: "Custom workflows, operations, finance, CRM, HR, or property modules.",
    icon: FaBuilding,
  },
  {
    id: "rag",
    title: "RAG / Knowledge AI",
    description: "Document Q&A, private knowledge base, semantic search, or AI research assistant.",
    icon: FaDatabase,
  },
  {
    id: "copilot",
    title: "AI Copilot",
    description: "Internal assistant that helps users take action inside business software.",
    icon: FaRobot,
  },
  {
    id: "agents",
    title: "Agentic Workflow",
    description: "Multi-step automation using tools, APIs, approvals, and human-in-the-loop logic.",
    icon: FaBrain,
  },
  {
    id: "integration",
    title: "Integration / Automation",
    description: "Connect existing tools, automate tasks, and modernize operational workflows.",
    icon: FaNetworkWired,
  },
];

const advisorPlans: Record<ProjectTypeId, AdvisorPlan> = {
  saas: {
    headline: "SaaS product engineering track",
    summary:
      "This looks like a product build where the first priority is a reliable software foundation: users, roles, data models, APIs, dashboards, billing or workflow modules, and cloud deployment.",
    complexity: "Medium to high, depending on integrations and role complexity",
    architecture: [
      "Product discovery and module breakdown",
      "API-first backend with database schema and RBAC",
      "Responsive web app with dashboard and workflow UI",
      "Deployment pipeline, monitoring, and support model",
    ],
    modules: [
      "Authentication and user management",
      "Admin/customer dashboards",
      "Core business workflow modules",
      "Notifications, reporting, and integrations",
    ],
    stack: ["Next.js", "React", "TypeScript", "Django/FastAPI", "PostgreSQL", "Docker"],
  },
  erp: {
    headline: "Enterprise software / ERP track",
    summary:
      "This should be handled as a workflow-heavy business platform with strong data modeling, permissions, auditability, reporting, and extensible modules.",
    complexity: "High, especially when finance, approvals, and multi-tenant data are involved",
    architecture: [
      "Domain model for departments, companies, users, and workflows",
      "Permission-first backend design with audit-ready operations",
      "Module-based frontend for business teams",
      "Reporting layer and integration points for external systems",
    ],
    modules: [
      "Companies, teams, roles, and permissions",
      "Operational modules and approval workflows",
      "Reports, exports, and audit trails",
      "API integrations and automation hooks",
    ],
    stack: ["Django", "DRF", "React", "PostgreSQL", "RBAC", "AWS/Azure"],
  },
  rag: {
    headline: "RAG and private knowledge system track",
    summary:
      "This is best built as a retrieval-first AI system: ingest documents, generate embeddings, retrieve relevant context, and produce grounded answers with source-aware responses.",
    complexity: "Medium to high, depending on document volume, permissions, and accuracy needs",
    architecture: [
      "Document ingestion and metadata extraction",
      "Chunking, embeddings, and vector indexing",
      "Hybrid retrieval and answer generation",
      "Evaluation, feedback, access control, and observability",
    ],
    modules: [
      "Document upload or connector ingestion",
      "Vector database and metadata filters",
      "Chat interface with cited answers",
      "Admin controls, feedback, and analytics",
    ],
    stack: ["FastAPI", "LangChain", "Vector DB", "OpenAI/Azure OpenAI", "PostgreSQL", "React"],
  },
  copilot: {
    headline: "AI copilot product track",
    summary:
      "This should become an assistant embedded into a real product workflow, not just a chatbot. The copilot should read context, suggest actions, and help users complete tasks.",
    complexity: "High when the assistant needs to take actions inside business systems",
    architecture: [
      "User journey mapping and task design",
      "Context layer from product data and documents",
      "Tool/function calling for safe business actions",
      "Guardrails, permissions, logging, and human confirmation",
    ],
    modules: [
      "Conversational UI embedded in the product",
      "Context retrieval from product/database state",
      "Action tools for creating or updating records",
      "Approval flow and audit logs",
    ],
    stack: ["Next.js", "FastAPI", "LLM APIs", "Tool Calling", "PostgreSQL", "RBAC"],
  },
  agents: {
    headline: "Agentic workflow automation track",
    summary:
      "This needs a controlled orchestration layer where agents can plan, call tools, wait for approvals, retry safely, and summarize outcomes.",
    complexity: "High, because reliability and safe execution matter more than demo behavior",
    architecture: [
      "Workflow graph for planning, routing, execution, and review",
      "Tool integrations with strict input/output contracts",
      "Human-in-the-loop checkpoints for sensitive actions",
      "Tracing, retry handling, and operational monitoring",
    ],
    modules: [
      "Planner and supervisor workflow",
      "Tool/API execution layer",
      "Approval and escalation system",
      "Execution history and observability dashboard",
    ],
    stack: ["LangGraph", "LangChain", "FastAPI", "Queues", "PostgreSQL", "Monitoring"],
  },
  integration: {
    headline: "Integration and automation track",
    summary:
      "This is a good fit for connecting existing systems, reducing manual work, and adding AI only where it improves decision-making or operations.",
    complexity: "Medium, depending on API quality and business rules",
    architecture: [
      "System audit and integration mapping",
      "API gateway or backend orchestration layer",
      "Workflow automation and event handling",
      "Monitoring, retries, and operational alerts",
    ],
    modules: [
      "Third-party API connectors",
      "Workflow rules and automation triggers",
      "Admin panel for configuration",
      "Logs, alerts, and reporting",
    ],
    stack: ["REST APIs", "Webhooks", "FastAPI/Node.js", "Queues", "Cloud", "Automation"],
  },
};

const advisorFlow = [
  {
    title: "Describe",
    description: "Visitor explains the idea, current process, data, and business goal.",
    icon: FaLightbulb,
  },
  {
    title: "Classify",
    description: "We map it to software, ERP, RAG, copilot, agent, or integration track.",
    icon: FaBrain,
  },
  {
    title: "Architect",
    description: "The advisor gives the first system direction, modules, and stack thinking.",
    icon: FaCloud,
  },
  {
    title: "Convert",
    description: "The visitor can send the brief so the team can respond with a real plan.",
    icon: FaPaperPlane,
  },
];

const examples = [
  "We want an internal AI assistant that answers questions from company documents and respects user permissions.",
  "We need a SaaS dashboard for customers, admins, billing, reports, and workflow automation.",
  "We want to automate a manual approval process across CRM, email, and internal tools.",
];

const minDescriptionLength = 24;

export default function AIProjectAdvisor() {
  const [selectedType, setSelectedType] = useState<ProjectTypeId>("rag");
  const [description, setDescription] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<AdvisorPlan | null>(null);
  const [advisorSource, setAdvisorSource] = useState<AdvisorSource>("idle");
  const [advisorNotice, setAdvisorNotice] = useState<string | null>(null);

  const activePlan = advisorPlans[selectedType];
  const displayedPlan = generatedPlan ?? activePlan;
  const activeType = projectTypes.find((type) => type.id === selectedType) ?? projectTypes[0];
  const ActiveIcon = activeType.icon;

  const canGenerate = description.trim().length >= minDescriptionLength;

  const contextQuality = useMemo(() => {
    const length = description.trim().length;

    if (length >= 180) return "Strong context";
    if (length >= 80) return "Good starting point";
    if (length >= minDescriptionLength) return "Basic context";
    return "Needs more detail";
  }, [description]);

  const resetGeneratedState = () => {
    setHasGenerated(false);
    setGeneratedPlan(null);
    setAdvisorSource("idle");
    setAdvisorNotice(null);
  };

  const applyFallbackPlan = (notice: string) => {
    setGeneratedPlan(activePlan);
    setAdvisorSource("fallback");
    setAdvisorNotice(notice);
    setHasGenerated(true);
  };

  const handleGenerate = async () => {
    if (!canGenerate || isGenerating) return;

    setIsGenerating(true);
    setAdvisorNotice(null);

    try {
      const response = await fetch("/api/ai/project-advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectType: selectedType,
          description: description.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const fallbackPlan = normalizeAdvisorPlan(result?.fallbackPlan, activePlan);
        setGeneratedPlan(fallbackPlan);
        setAdvisorSource("fallback");
        setAdvisorNotice(
          result?.error
            ? `${result.error} Showing a safe local direction instead.`
            : "AI route is unavailable. Showing a safe local direction instead.",
        );
        setHasGenerated(true);
        return;
      }

      const aiPlan = normalizeAdvisorPlan(result?.plan, activePlan);
      setGeneratedPlan(aiPlan);
      setAdvisorSource(result?.source === "ai" ? "ai" : "fallback");
      setAdvisorNotice(
        result?.source === "ai"
          ? "Generated through the server-side AI advisor route."
          : "Showing a safe local direction.",
      );
      setHasGenerated(true);
    } catch {
      applyFallbackPlan("Network issue while calling the AI route. Showing a safe local direction instead.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setDescription(example);
    resetGeneratedState();
  };

  return (
    <section
      id="project-advisor"
      className="section anchor-offset relative overflow-hidden bg-white text-slate-950 dark:bg-ai-ink dark:text-white"
    >
      <div className="absolute inset-0 grid-overlay-light opacity-50 dark:grid-overlay-dark dark:opacity-25" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 h-[34rem] w-[34rem] rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="eyebrow border-cyan-300/40 bg-cyan-300/10 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-700 dark:text-cyan-200">AI Project Advisor</span>
            <h2 className="mt-5 text-balance text-4xl font-black leading-[1.08] text-slate-950 dark:text-white md:text-6xl">
              Turn a rough idea into a practical build direction.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
              Select your project type, describe the idea, and get a practical software + AI build direction.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {advisorFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-700 dark:text-cyan-700 dark:text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-700 dark:text-cyan-200">
                          Step 0{index + 1}
                        </p>
                        <h3 className="mt-1 font-black text-slate-950 dark:text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-300/25 bg-cyan-50/80 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/5">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="mt-1 h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-200" />
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Secure server-side AI call. API keys never reach the browser.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-glass-dark md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-black/20 md:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">
                    Project Type
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
                    Select the closest starting point.
                  </h3>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                  <ActiveIcon className="h-4 w-4 text-cyan-700 dark:text-cyan-200" />
                  {activeType.title}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isActive = selectedType === type.id;

                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(type.id);
                        resetGeneratedState();
                      }}
                      className={`rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 ${
                        isActive
                          ? "border-cyan-300/60 bg-cyan-50 shadow-soft dark:bg-cyan-300/10 dark:shadow-glow"
                          : "border-slate-200 bg-white/80 hover:border-cyan-300/40 hover:bg-cyan-50/80 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-white/20 dark:hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-ai-gradient text-white"
                              : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="font-black text-slate-950 dark:text-white">{type.title}</p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {type.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[0.94fr_1.06fr]">
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-black/20 md:p-5">
                <label
                  htmlFor="advisor-project-description"
                  className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200"
                >
                  Describe your project
                </label>
                <textarea
                  id="advisor-project-description"
                  rows={8}
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                    resetGeneratedState();
                  }}
                  placeholder="Example: We want an internal AI assistant that can answer questions from company documents and create tasks in our CRM..."
                  className="mt-4 w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-white/[0.055] dark:text-white dark:placeholder:text-slate-500"
                />

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                    {description.trim().length} chars · {contextQuality}
                  </p>
                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={!canGenerate || isGenerating}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {isGenerating ? "Analyzing..." : "Generate Direction"}
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Try examples
                  </p>
                  {examples.map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => handleExampleClick(example)}
                      className="block w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm leading-6 text-slate-600 dark:text-slate-400 transition hover:border-cyan-300/30 hover:bg-cyan-300/5 hover:text-slate-200"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-black/20 md:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
                      Advisor Output
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                      Recommended direction
                    </h3>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-ai-gradient text-white md:flex">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!hasGenerated ? (
                    <motion.div
                      key="empty-state"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="mt-6 rounded-2xl border border-dashed border-cyan-300/35 bg-cyan-50/80 p-5 dark:border-cyan-300/25 dark:bg-cyan-300/5"
                    >
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        Choose a project type and write at least {minDescriptionLength} characters.
                        This panel will call the server-side AI route when configured,
                        then show architecture, modules, and stack direction.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${selectedType}-${advisorSource}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.28 }}
                      className="mt-6 space-y-5"
                    >
                      {advisorNotice && (
                        <div
                          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                            advisorSource === "ai"
                              ? "border-cyan-300/30 bg-cyan-50 text-cyan-800 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100"
                              : "border-brand-300/35 bg-brand-50 text-brand-800 dark:border-brand-300/25 dark:bg-brand-500/10 dark:text-orange-100"
                          }`}
                        >
                          <span className="font-semibold">
                            {advisorSource === "ai" ? "Live AI route: " : "Fallback mode: "}
                          </span>
                          {advisorNotice}
                        </div>
                      )}

                      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-50/80 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-700 dark:text-cyan-200">
                          {activeType.title}
                        </p>
                        <h4 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
                          {displayedPlan.headline}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {displayedPlan.summary}
                        </p>
                        <p className="mt-4 rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
                          Complexity: {displayedPlan.complexity}
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <PreviewList title="Architecture path" items={displayedPlan.architecture} />
                        <PreviewList title="Likely modules" items={displayedPlan.modules} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Suggested stack
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {displayedPlan.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a href="/contact" className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 group">
                        Send this brief to Indovate
                        <FaArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type PreviewListProps = {
  title: string;
  items: string[];
};

function PreviewList({ title, items }: PreviewListProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-700 dark:text-cyan-200">
        {title}
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function normalizeAdvisorPlan(value: unknown, fallback: AdvisorPlan): AdvisorPlan {
  if (!isRecord(value)) return fallback;

  return {
    headline: normalizeText(value.headline, fallback.headline),
    summary: normalizeText(value.summary, fallback.summary),
    complexity: normalizeText(value.complexity, fallback.complexity),
    architecture: normalizeStringArray(value.architecture, fallback.architecture),
    modules: normalizeStringArray(value.modules, fallback.modules),
    stack: normalizeStringArray(value.stack, fallback.stack),
  };
}

function normalizeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function normalizeStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;

  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);

  return items.length > 0 ? items : fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
