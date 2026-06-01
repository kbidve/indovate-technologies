import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "nodejs";
export const maxDuration = 30;

type ProjectTypeId =
  | "saas"
  | "erp"
  | "rag"
  | "copilot"
  | "agents"
  | "integration";

type AdvisorPlan = {
  headline: string;
  summary: string;
  complexity: string;
  architecture: string[];
  modules: string[];
  stack: string[];
};

const minDescriptionLength = 24;

const projectTypeLabels: Record<ProjectTypeId, string> = {
  saas: "SaaS Product",
  erp: "ERP / Business System",
  rag: "RAG / Knowledge AI",
  copilot: "AI Copilot",
  agents: "Agentic Workflow",
  integration: "Integration / Automation",
};

const allowedProjectTypes = new Set<ProjectTypeId>([
  "saas",
  "erp",
  "rag",
  "copilot",
  "agents",
  "integration",
]);

const fallbackPlans: Record<ProjectTypeId, AdvisorPlan> = {
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

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!isRecord(body)) {
      return Response.json({ error: "Invalid request body." }, { status: 400 });
    }

    const rawProjectType = body.projectType;
    const projectType = typeof rawProjectType === "string" ? rawProjectType : "";
    const description = typeof body.description === "string" ? body.description.trim() : "";

    if (!allowedProjectTypes.has(projectType as ProjectTypeId)) {
      return Response.json({ error: "Invalid project type." }, { status: 400 });
    }

    if (description.length < minDescriptionLength) {
      return Response.json(
        { error: `Project description must be at least ${minDescriptionLength} characters.` },
        { status: 400 },
      );
    }

    const typedProjectType = projectType as ProjectTypeId;

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        {
          error: "AI service is not configured.",
          fallbackPlan: fallbackPlans[typedProjectType],
        },
        { status: 503 },
      );
    }

    const { text } = await generateText({
      model: openai(process.env.OPENAI_MODEL ?? "gpt-4o-mini"),
      temperature: 0.25,
      maxTokens: 900,
      system: [
        "You are an expert software architect and AI solution consultant for Indovate Technologies.",
        "Indovate builds SaaS platforms, ERP systems, web applications, APIs, cloud systems, RAG systems, LLM apps, AI copilots, and agentic workflows.",
        "Your job is to produce a practical first-pass project direction for a website visitor.",
        "Be specific, realistic, implementation-oriented, and production-focused.",
        "Do not invent pricing, timelines, client names, metrics, or guaranteed outcomes.",
        "Return only valid JSON. Do not wrap it in markdown. Do not include commentary outside JSON.",
      ].join("\n"),
      prompt: buildPrompt({
        projectType: projectTypeLabels[typedProjectType],
        description,
      }),
    });

    const parsedPlan = parseAdvisorPlan(text, typedProjectType);

    return Response.json({
      source: "ai",
      plan: parsedPlan,
    });
  } catch (error) {
    console.error("[AI Project Advisor] Failed to generate project direction", error);

    return Response.json(
      {
        error: "Unable to generate project direction right now.",
      },
      { status: 500 },
    );
  }
}

function buildPrompt({
  projectType,
  description,
}: {
  projectType: string;
  description: string;
}) {
  return `
Project type selected by visitor: ${projectType}
Project description from visitor:
${description}

Return this exact JSON shape:
{
  "headline": "short title for the recommended track",
  "summary": "3-4 sentence practical summary of what should be built and why",
  "complexity": "one concise sentence about likely complexity",
  "architecture": ["4 architecture steps"],
  "modules": ["4 likely modules"],
  "stack": ["6 relevant technologies or architecture terms"]
}

Rules:
- Keep headline under 70 characters.
- Keep summary under 420 characters.
- Return exactly 4 architecture items.
- Return exactly 4 modules.
- Return exactly 6 stack items.
- Prefer Indovate-relevant stacks: Next.js, React, TypeScript, Django, FastAPI, PostgreSQL, Docker, Kubernetes, AWS/Azure, LangChain, LangGraph, vector DB, RBAC, queues, observability.
- If the project needs both software and AI, mention both clearly.
`;
}

function parseAdvisorPlan(rawText: string, projectType: ProjectTypeId): AdvisorPlan {
  const fallbackPlan = fallbackPlans[projectType];

  try {
    const jsonText = extractJson(rawText);
    const parsed = JSON.parse(jsonText);

    if (!isRecord(parsed)) {
      return fallbackPlan;
    }

    return {
      headline: normalizeText(parsed.headline, fallbackPlan.headline, 90),
      summary: normalizeText(parsed.summary, fallbackPlan.summary, 520),
      complexity: normalizeText(parsed.complexity, fallbackPlan.complexity, 180),
      architecture: normalizeStringArray(parsed.architecture, fallbackPlan.architecture, 4),
      modules: normalizeStringArray(parsed.modules, fallbackPlan.modules, 4),
      stack: normalizeStringArray(parsed.stack, fallbackPlan.stack, 6),
    };
  } catch {
    return fallbackPlan;
  }
}

function extractJson(rawText: string) {
  const cleaned = rawText
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object found in model response.");
  }

  return cleaned.slice(start, end + 1);
}

function normalizeText(value: unknown, fallback: string, maxLength: number) {
  if (typeof value !== "string") return fallback;

  const trimmed = value.trim();
  if (!trimmed) return fallback;

  return trimmed.length > maxLength ? `${trimmed.slice(0, maxLength - 1)}…` : trimmed;
}

function normalizeStringArray(value: unknown, fallback: string[], maxItems: number) {
  if (!Array.isArray(value)) return fallback;

  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, maxItems);

  if (items.length === 0) return fallback;

  while (items.length < Math.min(maxItems, fallback.length)) {
    items.push(fallback[items.length]);
  }

  return items;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
