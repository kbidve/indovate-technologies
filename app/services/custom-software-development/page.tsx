import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "custom-software-development",

  name: "Custom Software Development",

  seoTitle: "Custom Software Development Company",

  seoDescription:
    "Custom software development services for businesses worldwide. Build business applications, modernize legacy software and integrate enterprise systems.",

  headline:
    "Custom software development services for your business.",

  introduction:
    "Indovate Technologies is a custom software development company helping businesses worldwide build digital products, modernize legacy applications and integrate enterprise systems. Our engineering team develops custom business software, scalable backend services, frontend applications and REST APIs using technologies such as Python, Django, FastAPI and React. We focus on maintainable architecture, reliable delivery and software aligned with your long-term business objectives.",

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
      title: "Python backend & API development",
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
    "Need a reliable software development partner?",

  ctaDescription:
    "Tell us about your software requirements, existing systems, business objectives and expected project timeline. Our engineering team can help you define a suitable architecture, development scope and implementation approach.",
};

export const metadata = createServiceMetadata(service);

export default function CustomSoftwareDevelopmentPage() {
  return <ServicePage service={service} />;
}
