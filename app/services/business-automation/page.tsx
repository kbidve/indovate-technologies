import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "business-automation",

  name: "Business Process Automation",

  seoTitle: "Business Process Automation Services",

  seoDescription:
    "Business process automation services for AI workflows, document processing, approval systems, application integration and repetitive operational tasks.",

  headline:
    "Business process automation with software and AI.",

  introduction:
    "We provide business process automation services that streamline operational workflows, reduce repetitive manual tasks and connect existing business applications. Our solutions combine rule-based software automation with AI-powered workflows where appropriate, with a focus on reliability, monitoring and human oversight.",

  offerings: [
    {
      title: "Business workflow automation",
      description:
        "Automate business workflows for internal requests, task assignments, notifications, operational activities and information exchange between departments.",
    },
    {
      title: "AI workflow automation & orchestration",
      description:
        "Develop AI-powered automation workflows using tools such as LangChain and LangGraph to retrieve information, execute approved tools and coordinate multi-step business processes.",
    },
    {
      title: "Intelligent document processing",
      description:
        "Automate document processing for invoices, reports and business records through document ingestion, classification, information extraction, summarization and application integration.",
    },
    {
      title: "Business application integration",
      description:
        "Connect ERP systems, CRM platforms, existing applications and third-party services through REST APIs, webhooks and automated data exchange.",
    },
    {
      title: "Automated approval workflows",
      description:
        "Automate approval processes using business rules, approval sequences, human review checkpoints and escalation mechanisms aligned with organizational requirements.",
    },
    {
      title: "Scheduled tasks & background processing",
      description:
        "Automate recurring operations, scheduled reporting, data synchronization and background processing using task queues and scheduling tools such as Celery and Redis.",
    },
    {
      title: "Workflow monitoring & audit trails",
      description:
        "Implement workflow monitoring, execution tracking, error handling, retry mechanisms and audit trails to help teams maintain reliable business automation systems.",
    },
  ],

  useCases: [
    {
      title: "Document and invoice processing",
      description:
        "Extract relevant information from business documents, validate required fields and route records for review or integration into existing systems.",
    },
    {
      title: "Internal approval processes",
      description:
        "Streamline purchase requests, expense approvals, employee requests and other internal processes through structured digital workflows.",
    },
    {
      title: "Automated reporting",
      description:
        "Collect information from connected business applications and generate recurring reports for operational review and decision-making.",
    },
    {
      title: "Connected application workflows",
      description:
        "Synchronize information between ERP, CRM, customer portals and other business applications without requiring repeated manual data entry.",
    },
  ],

  technologies: [
    "Python",
    "FastAPI",
    "Django",
    "Celery",
    "Redis",
    "LangChain",
    "LangGraph",
    "REST APIs",
    "Webhooks",
    "Task queues",
    "PostgreSQL",
    "Docker",
  ],

  relatedServices: [
    {
      name: "AI & Generative AI Development",
      href: "/services/ai-development",
    },
    {
      name: "ERP & Enterprise Solutions",
      href: "/services/enterprise-solutions",
    },
    {
      name: "Custom Software Development",
      href: "/services/custom-software-development",
    },
    {
      name: "Cloud & DevOps",
      href: "/services/cloud-devops",
    },
    {
      name: "View all services",
      href: "/services",
    },
  ],

  ctaTitle:
    "Looking to automate your business processes?",

  ctaDescription:
    "Share your existing workflows, business applications and repetitive operational tasks. We can help you identify suitable software automation, AI workflow integration and business process improvement opportunities.",
};

export const metadata = createServiceMetadata(service);

export default function BusinessAutomationPage() {
  return <ServicePage service={service} />;
}
