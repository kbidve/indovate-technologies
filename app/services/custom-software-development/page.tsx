import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "custom-software-development",

  name: "Custom Software Development",

  seoTitle: "Custom Software Development Services",

  seoDescription:
    "Custom software development services for business applications, product engineering, legacy modernization, backend systems and API integration.",

  headline:
    "Custom software development built around your business.",

  introduction:
    "We provide custom software development services for businesses building digital products, modernizing legacy applications and integrating enterprise systems. Our engineering capabilities cover frontend applications, backend development, REST APIs and database integrations. We focus on maintainable software aligned with your business requirements and long-term objectives.",

  offerings: [
    {
      title: "Custom business application development",
      description:
        "Design and develop custom business applications around your operational requirements, including internal management systems, reporting platforms, administrative portals and role-based workflows.",
    },
    {
      title: "Software product engineering",
      description:
        "Build software products through requirements analysis, architecture planning, frontend development, backend engineering, integration, testing and production deployment.",
    },
    {
      title: "Legacy application modernization",
      description:
        "Modernize legacy software systems by reviewing existing architecture, replacing outdated components, improving application maintainability and integrating newer technologies.",
    },
    {
      title: "Backend & API development",
      description:
        "Develop backend services using Python, Django and FastAPI, with REST APIs, database integrations and application architecture designed around business requirements.",
    },
    {
      title: "Enterprise software integration",
      description:
        "Connect enterprise applications, third-party APIs and business data through structured software integrations that improve information exchange and reduce disconnected workflows.",
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
    "Looking for a custom software development partner?",

  ctaDescription:
    "Share your requirements, existing systems and business objectives. We can help you explore a suitable software development approach.",
};

export const metadata = createServiceMetadata(service);

export default function CustomSoftwareDevelopmentPage() {
  return <ServicePage service={service} />;
}
