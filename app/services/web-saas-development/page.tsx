import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "web-saas-development",

  name: "Web Application & SaaS Development",

  seoTitle: "Web & SaaS Development Services",

  seoDescription:
    "Web and SaaS development services for startups and enterprises worldwide. Build custom web applications, MVPs and scalable multi-tenant SaaS products.",

  headline:
    "Custom web and SaaS development services.",

  introduction:
    "Indovate Technologies provides web and SaaS development services for startups, growing businesses and enterprises worldwide. Our engineering team builds custom web applications, SaaS products, customer portals and multi-tenant platforms using modern frontend and backend technologies. From launching an MVP to scaling an existing product, we develop software around your users, business model and long-term growth requirements.",

  offerings: [
    {
      title: "Custom web application development",
      description:
        "Build responsive, database-driven web applications using frontend technologies such as React, Angular and Next.js, supported by maintainable backend architecture, REST APIs and database integrations.",
    },
    {
      title: "SaaS product development services",
      description:
        "Develop SaaS products with subscription management, user authentication, business workflows, billing integrations and administrative capabilities aligned with your product requirements.",
    },
    {
      title: "Multi-tenant SaaS development",
      description:
        "Design multi-tenant SaaS platforms that support multiple organizations through appropriate tenant isolation, role-based access controls and organization-specific configurations.",
    },
    {
      title: "MVP development for SaaS products",
      description:
        "Build a minimum viable product (MVP) around your essential requirements, helping teams validate core functionality, gather user feedback and plan future product development.",
    },
    {
      title: "Customer portal & dashboard development",
      description:
        "Develop customer self-service portals, administrative dashboards and reporting applications that connect business data with practical, user-friendly interfaces.",
    },
    {
      title: "Authentication & payment integrations",
      description:
        "Integrate user authentication, role-based authorization, subscription billing, payment providers and third-party APIs according to application and business requirements.",
    },
  ],

  useCases: [
    {
      title: "Launching a SaaS product",
      description:
        "Build a subscription-based software platform with essential product features, customer accounts and a foundation for future development.",
    },
    {
      title: "Customer self-service portals",
      description:
        "Allow customers to manage accounts, access documents, submit requests and interact with your business through a centralized application.",
    },
    {
      title: "Business dashboards",
      description:
        "Present operational information, reports and business metrics through interfaces connected to relevant application data.",
    },
    {
      title: "Modernizing web applications",
      description:
        "Improve existing web applications through frontend modernization, backend improvements, responsive design and system integrations.",
    },
  ],

  technologies: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML & CSS",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "Docker",
    "CI/CD",
  ],

  relatedServices: [
    {
      name: "Custom Software Development",
      href: "/services/custom-software-development",
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
    "Ready to build your web application or SaaS product?",

  ctaDescription:
    "Tell us about your product idea, target users, required features and expected launch timeline. Our engineering team can help you define your MVP scope, application architecture and SaaS product development roadmap.",
};

export const metadata = createServiceMetadata(service);

export default function WebSaaSDevelopmentPage() {
  return <ServicePage service={service} />;
}
