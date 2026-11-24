import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "custom-software-development",

  name: "Custom Software Development",

  seoTitle: "Custom Software Development Services",

  seoDescription:
    "Custom software development services from Indovate Technologies. Build business applications, modernize existing software and develop scalable backend systems.",

  headline:
    "Custom software built around your business.",

  introduction:
    "We design, develop and modernize software applications tailored to your business requirements. From new product engineering to improving existing systems, we help organizations build maintainable software that supports their operations and growth.",

  offerings: [
    {
      title: "Custom business applications",
      description:
        "Develop applications around your actual business processes, including internal management systems, operational tools, reporting platforms and role-based workflows.",
    },
    {
      title: "Software product engineering",
      description:
        "Turn product requirements into working software through architecture planning, frontend development, backend engineering, testing and deployment.",
    },
    {
      title: "Application modernization",
      description:
        "Improve existing software by reviewing its architecture, replacing outdated components, extending functionality and addressing maintainability requirements.",
    },
    {
      title: "Backend & API development",
      description:
        "Build backend services, REST APIs and database integrations that connect applications and support reliable business operations.",
    },
    {
      title: "Software integration",
      description:
        "Connect existing applications, third-party services and business data through structured integrations that reduce disconnected workflows.",
    },
  ],

  useCases: [
    {
      title: "Internal business applications",
      description:
        "Replace spreadsheet-based operations and disconnected tools with software designed around your organization's workflows.",
    },
    {
      title: "Legacy software modernization",
      description:
        "Improve existing applications that are difficult to maintain, extend or integrate with newer technologies.",
    },
    {
      title: "New software products",
      description:
        "Develop an initial product or extend an existing application with a technical foundation suited to future requirements.",
    },
    {
      title: "Connected business systems",
      description:
        "Connect applications and operational data to improve information exchange between departments and systems.",
    },
  ],

  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Git",
    "CI/CD",
  ],

  relatedServices: [
    {
      name: "Web Application & SaaS Development",
      href: "/services/web-saas-development",
    },
    {
      name: "ERP & Enterprise Solutions",
      href: "/services/enterprise-solutions",
    },
    {
      name: "AI & Generative AI Development",
      href: "/services/ai-development",
    },
    {
      name: "View all services",
      href: "/services",
    },
  ],

  ctaTitle:
    "Have a software development project in mind?",

  ctaDescription:
    "Share your requirements, existing systems and business objectives. We can help you explore a suitable software development approach.",
};

export const metadata = createServiceMetadata(service);

export default function CustomSoftwareDevelopmentPage() {
  return <ServicePage service={service} />;
}
