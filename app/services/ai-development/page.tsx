import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "ai-development",

  name: "AI & Generative AI Development",

  seoTitle: "AI & Generative AI Development Services",

  seoDescription:
    "Build enterprise AI applications, RAG systems, LLM-powered assistants, AI agents and intelligent workflows with Indovate Technologies.",

  headline:
    "AI development for real business applications.",

  introduction:
    "We develop artificial intelligence solutions that connect language models, enterprise data and existing business systems. Our approach focuses on practical AI applications, reliable information retrieval, controlled automation and integration into production software.",

  offerings: [
    {
      title: "Generative AI & LLM applications",
      description:
        "Develop applications powered by large language models for content generation, information analysis, conversational interfaces and business-specific tasks.",
    },
    {
      title: "RAG & enterprise knowledge systems",
      description:
        "Build retrieval-augmented generation systems that connect AI models with internal documents, knowledge bases and business data to produce context-grounded responses.",
    },
    {
      title: "AI assistants & copilots",
      description:
        "Integrate intelligent assistants into existing applications, employee portals and operational tools to help users access information and complete business tasks.",
    },
    {
      title: "AI agents & agentic workflows",
      description:
        "Develop controlled multi-step AI workflows that retrieve information, call approved tools, interact with business applications and support human approval where required.",
    },
    {
      title: "Document intelligence",
      description:
        "Build document processing pipelines for information extraction, classification, summarization and structured analysis of business documents.",
    },
    {
      title: "AI evaluation & production integration",
      description:
        "Evaluate retrieval relevance, response quality and workflow reliability while incorporating access controls, monitoring and appropriate safeguards into AI applications.",
    },
  ],

  useCases: [
    {
      title: "Enterprise knowledge assistants",
      description:
        "Help employees find relevant information across internal policies, technical documentation, operational manuals and organizational knowledge bases.",
    },
    {
      title: "Intelligent document processing",
      description:
        "Support the review and processing of reports, proposals, contracts and other documents through AI-assisted extraction and summarization.",
    },
    {
      title: "Customer support assistants",
      description:
        "Develop knowledge-grounded assistants that help answer common customer questions and escalate requests requiring human attention.",
    },
    {
      title: "AI-powered business workflows",
      description:
        "Connect AI capabilities with existing software to assist with information gathering, task coordination, reporting and repetitive operational processes.",
    },
  ],

  technologies: [
    "Python",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "OpenAI",
    "Azure OpenAI",
    "Azure AI Search",
    "Qdrant",
    "Vector databases",
    "Embeddings",
    "REST APIs",
    "PostgreSQL",
    "Docker",
  ],

  relatedServices: [
    {
      name: "Custom Software Development",
      href: "/services/custom-software-development",
    },
    {
      name: "Business Process Automation",
      href: "/services/business-automation",
    },
    {
      name: "ERP & Enterprise Solutions",
      href: "/services/enterprise-solutions",
    },
    {
      name: "View all services",
      href: "/services",
    },
  ],

  ctaTitle:
    "Ready to explore AI for your business?",

  ctaDescription:
    "Share your business challenges, available data and existing systems. We can help you identify practical AI opportunities and define a suitable implementation approach.",
};

export const metadata = createServiceMetadata(service);

export default function AIDevelopmentPage() {
  return <ServicePage service={service} />;
}
