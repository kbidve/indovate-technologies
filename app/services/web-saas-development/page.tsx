import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "web-saas-development",

  name: "Web Application & SaaS Development",

  seoTitle: "Web Application & SaaS Development Services",

  seoDescription:
    "Build custom web applications, SaaS products, customer portals and multi-tenant platforms with Indovate Technologies.",

  headline:
    "Web applications and SaaS products built for growth.",

  introduction:
    "We develop modern web applications and software-as-a-service products tailored to your users, business model and operational requirements. From initial MVP development to extending established platforms, we focus on usability, maintainable architecture and reliable application delivery.",

  offerings: [
    {
      title: "Custom web application development",
      description:
        "Build responsive, database-driven web applications with intuitive interfaces, business-specific functionality and maintainable backend architecture.",
    },
    {
      title: "SaaS product development",
      description:
        "Develop subscription-based software products with user management, product workflows, billing integrations and administrative capabilities.",
    },
    {
      title: "Multi-tenant SaaS platforms",
      description:
        "Design platforms that support multiple organizations through appropriate tenant isolation, access controls and organization-specific configurations.",
    },
    {
      title: "MVP development",
      description:
        "Transform product requirements into an initial working application, allowing teams to validate core functionality and gather user feedback before expanding the product.",
    },
    {
      title: "Customer portals & dashboards",
      description:
        "Develop customer-facing portals, administrative dashboards and reporting interfaces that provide relevant information and simplify user interactions.",
    },
    {
      title: "Authentication & payment integrations",
      description:
        "Integrate authentication, role-based authorization, subscription management, payment providers and third-party services according to application requirements.",
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
    "Planning your next web application or SaaS product?",

  ctaDescription:
    "Tell us about your product idea, target users and technical requirements. We can help you explore the right architecture and development approach.",
};

export const metadata = createServiceMetadata(service);

export default function WebSaaSDevelopmentPage() {
  return <ServicePage service={service} />;
}
