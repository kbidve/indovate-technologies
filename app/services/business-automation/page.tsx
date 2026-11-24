import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "business-automation",

  name: "Business Process Automation",

  seoTitle: "Business Process Automation & AI Workflow Services",

  seoDescription:
    "Automate business processes, document workflows, application integrations and repetitive operations with custom software and AI solutions from Indovate Technologies.",

  headline:
    "Simplify business operations through intelligent automation.",

  introduction:
    "We develop custom automation solutions that connect business applications, streamline operational workflows and reduce repetitive manual tasks. Our approach combines conventional software automation with artificial intelligence where it adds practical value to your business processes.",

  offerings: [
    {
      title: "Business workflow automation",
      description:
        "Develop automated workflows for internal requests, task assignments, notifications, operational activities and information exchange between departments.",
    },
    {
      title: "AI agents & workflow orchestration",
      description:
        "Build controlled AI-powered workflows that retrieve information, execute approved tools and coordinate multi-step business processes.",
    },
    {
      title: "Document processing automation",
      description:
        "Automate document ingestion, classification, information extraction, summarization and routing into relevant business applications.",
    },
    {
      title: "API & application integrations",
      description:
        "Connect existing software, third-party services, databases and business platforms through structured APIs and automated data exchange.",
    },
    {
      title: "Approval & decision workflows",
      description:
        "Implement business rules, approval sequences, human review checkpoints and escalation mechanisms according to organizational requirements.",
    },
    {
      title: "Scheduled tasks & background processing",
      description:
        "Automate recurring operations, scheduled reports, data synchronization and background processing using appropriate task queues and scheduling mechanisms.",
    },
    {
      title: "Workflow monitoring & audit trails",
      description:
        "Incorporate execution tracking, error handling, retry mechanisms and audit records to help teams monitor and maintain automated business processes.",
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
    "Which business processes would you like to automate?",

  ctaDescription:
    "Share your existing workflows, repetitive tasks and operational challenges. We can help you identify suitable automation opportunities and define an implementation approach.",
};

export const metadata = createServiceMetadata(service);

export default function BusinessAutomationPage() {
  return <ServicePage service={service} />;
}
