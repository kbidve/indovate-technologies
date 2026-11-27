import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "enterprise-solutions",

  name: "ERP & Enterprise Solutions",

  seoTitle: "Enterprise Software & ERP Development",

  seoDescription:
    "Custom ERP and enterprise software development services for businesses worldwide. Integrate finance, CRM, inventory and operational workflows.",

  headline:
    "Enterprise software and custom ERP development services.",

  introduction:
    "Indovate Technologies provides enterprise software development and custom ERP development services for businesses worldwide. We build integrated ERP systems, CRM applications, finance and inventory management software tailored to your operational requirements. Our engineering team helps organizations connect departments, centralize business information and modernize existing enterprise applications through maintainable software.",

  offerings: [
    {
      title: "Custom ERP software development",
      description:
        "Develop custom enterprise resource planning (ERP) systems with business-specific modules, centralized data management, role-based access and integrations aligned with organizational requirements.",
    },
    {
      title: "Custom CRM development",
      description:
        "Build custom customer relationship management (CRM) software for managing customer records, sales activities, business inquiries and customer interactions.",
    },
    {
      title: "Finance & accounting software",
      description:
        "Develop finance and accounting software modules for financial records, invoicing, expense tracking, transaction workflows and business reporting within enterprise applications.",
    },
    {
      title: "Property & asset management software",
      description:
        "Build custom property and asset management applications that centralize property information, asset records, agreements, financial information and operational workflows.",
    },
    {
      title: "Inventory management software development",
      description:
        "Develop inventory and operations management modules that connect procurement, internal requests, departmental activities and approval workflows within an integrated ERP platform.",
    },
    {
      title: "Business reporting & dashboards",
      description:
        "Build enterprise reporting applications and business dashboards that consolidate operational and financial information for authorized users.",
    },
    {
      title: "Enterprise application integration",
      description:
        "Integrate ERP and CRM systems with existing enterprise applications, third-party APIs, databases and business services while incorporating role-based access controls and appropriate audit trails.",
    },
  ],

  useCases: [
    {
      title: "Centralized business operations",
      description:
        "Replace disconnected spreadsheets and individual applications with an integrated platform for managing business information and operational workflows.",
    },
    {
      title: "Finance & property management",
      description:
        "Connect financial records, property information, operational activities and reporting within a business-specific enterprise application.",
    },
    {
      title: "Departmental workflow management",
      description:
        "Manage internal requests, approvals, responsibilities and information exchange between departments through structured software workflows.",
    },
    {
      title: "Enterprise application modernization",
      description:
        "Extend or modernize existing ERP and business applications by improving their architecture, interfaces, integrations and maintainability.",
    },
  ],

  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "React",
    "Angular",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Celery",
    "REST APIs",
    "Docker",
    "Git",
    "CI/CD",
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
      name: "AI & Generative AI Development",
      href: "/services/ai-development",
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
    "Looking for an enterprise software or ERP development partner?",

  ctaDescription:
    "Tell us about your business processes, required ERP modules, existing applications and operational challenges. Our engineering team can help you define the development scope, integration requirements and implementation approach for your enterprise software.",
};

export const metadata = createServiceMetadata(service);

export default function EnterpriseSolutionsPage() {
  return <ServicePage service={service} />;
}
