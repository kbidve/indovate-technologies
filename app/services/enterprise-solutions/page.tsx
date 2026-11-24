import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "enterprise-solutions",

  name: "ERP & Enterprise Solutions",

  seoTitle: "Custom ERP & Enterprise Software Development Services",

  seoDescription:
    "Develop custom ERP, CRM and enterprise software for finance, property management, operations, reporting and business workflows with Indovate Technologies.",

  headline:
    "Enterprise software that connects your business.",

  introduction:
    "We develop custom ERP systems and enterprise applications designed around your organization's processes. From finance and operational management to reporting and system integration, we help businesses centralize information and connect their departments through maintainable software.",

  offerings: [
    {
      title: "Custom ERP development",
      description:
        "Develop enterprise resource planning systems tailored to your business processes, organizational structure, operational requirements and existing infrastructure.",
    },
    {
      title: "CRM development",
      description:
        "Build customer relationship management applications for managing customer information, business inquiries, sales activities and customer interactions.",
    },
    {
      title: "Finance & accounting modules",
      description:
        "Develop software modules for financial record management, invoicing, expense tracking, transaction workflows and business reporting according to organizational requirements.",
    },
    {
      title: "Property & asset management",
      description:
        "Build applications for managing property information, assets, operational records, agreements and related business activities within a centralized system.",
    },
    {
      title: "Operational management systems",
      description:
        "Connect procurement, inventory, internal requests, departmental activities and approval processes through custom operational software.",
    },
    {
      title: "Business reporting & dashboards",
      description:
        "Develop reporting interfaces that bring together operational and financial information, helping authorized users access relevant business data.",
    },
    {
      title: "Enterprise system integrations",
      description:
        "Integrate existing enterprise applications, third-party APIs, databases and business services while incorporating role-based access controls and appropriate audit trails.",
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
    "Looking to build or modernize your enterprise software?",

  ctaDescription:
    "Tell us about your business processes, existing applications and operational requirements. We can help you explore an enterprise software solution aligned with your organization.",
};

export const metadata = createServiceMetadata(service);

export default function EnterpriseSolutionsPage() {
  return <ServicePage service={service} />;
}
