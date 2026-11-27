import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "ai-development",

  name: "AI & Generative AI Development",

  seoTitle: "AI Development Services & Generative AI",

  seoDescription:
    "Custom AI development services for businesses worldwide. Build generative AI applications, RAG systems, AI agents and enterprise AI integrations.",

  headline:
    "AI development services for enterprise applications.",

  introduction:
    "Indovate Technologies provides custom AI development services for businesses worldwide. We build generative AI applications, enterprise RAG systems, AI assistants and intelligent agents that connect with your existing software and business data. Our engineering approach focuses on reliable retrieval, response evaluation, access controls and production integration.",

  offerings: [
    {
      title: "Generative AI & LLM application development",
      description:
        "Build custom LLM applications using large language models for content generation, information analysis, conversational interfaces and business-specific workflows.",
    },
    {
      title: "RAG development services & enterprise knowledge systems",
      description:
        "Develop retrieval-augmented generation (RAG) systems with document ingestion, embeddings, vector search and knowledge retrieval to connect AI models with enterprise data and generate context-grounded responses.",
    },
    {
      title: "Enterprise AI assistants & copilots",
      description:
        "Develop and integrate AI copilots into existing business applications, employee portals and operational tools to support knowledge discovery and business tasks.",
    },
    {
      title: "AI agent development & agentic workflows",
      description:
        "Build controlled AI agents and multi-step workflows using tools such as LangChain and LangGraph to retrieve information, call approved tools and interact with business systems while supporting human approval where required.",
    },
    {
      title: "Intelligent document processing",
      description:
        "Develop AI-powered document processing pipelines for information extraction, classification, summarization and structured analysis of enterprise documents, reports and proposals.",
    },
    {
      title: "Enterprise AI integration & evaluation",
      description:
        "Integrate AI capabilities into production software and evaluate retrieval relevance, LLM response quality and workflow reliability. Incorporate access controls, monitoring and appropriate safeguards based on business requirements.",
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
    "Looking for an AI development partner?",

  ctaDescription:
    "Tell us about your business objectives, available data, existing applications and expected project timeline. Our engineering team can help you evaluate the right AI architecture, integration approach and development scope for your business.",
};

export const metadata = createServiceMetadata(service);

export default function AIDevelopmentPage() {
  return <ServicePage service={service} />;
}
