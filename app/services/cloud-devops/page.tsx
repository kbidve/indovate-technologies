import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "cloud-devops",

  name: "Cloud & DevOps",

  seoTitle: "Cloud Engineering & DevOps Services",

  seoDescription:
    "Cloud engineering and DevOps services for application deployment, CI/CD automation, containerization, infrastructure and production monitoring from Indovate Technologies.",

  headline:
    "Cloud infrastructure built for reliable software delivery.",

  introduction:
    "We help businesses deploy, operate and improve software applications through cloud engineering and DevOps practices. Our approach focuses on maintainable infrastructure, automated delivery, application reliability and deployment environments aligned with your business requirements.",

  offerings: [
    {
      title: "Cloud application deployment",
      description:
        "Configure cloud environments for web applications, backend services, enterprise software and AI-powered applications based on workload and infrastructure requirements.",
    },
    {
      title: "CI/CD pipeline development",
      description:
        "Implement continuous integration and continuous delivery workflows that automate application builds, testing and deployment across development and production environments.",
    },
    {
      title: "Containerization & orchestration",
      description:
        "Package applications using containers and configure suitable orchestration environments to support consistent deployment and application management.",
    },
    {
      title: "Cloud infrastructure engineering",
      description:
        "Configure application servers, databases, networking, environment settings and infrastructure resources according to project requirements.",
    },
    {
      title: "Application monitoring & observability",
      description:
        "Implement application logging, infrastructure monitoring, health checks and error tracking to support production troubleshooting and operational visibility.",
    },
    {
      title: "Infrastructure modernization",
      description:
        "Review existing deployment environments and improve infrastructure configuration, resource utilization, deployment workflows and application maintainability.",
    },
    {
      title: "Production security & support",
      description:
        "Incorporate appropriate access controls, secrets management, dependency maintenance, backup configurations and operational support into the software delivery process.",
    },
  ],

  useCases: [
    {
      title: "Deploying new software products",
      description:
        "Establish suitable development, staging and production environments for newly developed web applications, SaaS products and enterprise software.",
    },
    {
      title: "Automating software releases",
      description:
        "Replace repetitive manual deployment processes with structured build, testing and release pipelines.",
    },
    {
      title: "Modernizing existing infrastructure",
      description:
        "Improve existing hosting and deployment environments to better support application maintenance, integration and changing business requirements.",
    },
    {
      title: "Operating AI applications",
      description:
        "Configure deployment environments for AI services, retrieval systems, background processing and supporting application infrastructure.",
    },
  ],

  technologies: [
    "AWS",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Git",
    "CI/CD",
    "GitOps",
    "Linux",
    "Nginx",
    "PostgreSQL",
    "Redis",
    "Application monitoring",
    "Cloud infrastructure",
  ],

  relatedServices: [
    {
      name: "Custom Software Development",
      href: "/services/custom-software-development",
    },
    {
      name: "Web Application & SaaS Development",
      href: "/services/web-saas-development",
    },
    {
      name: "AI & Generative AI Development",
      href: "/services/ai-development",
    },
    {
      name: "ERP & Enterprise Solutions",
      href: "/services/enterprise-solutions",
    },
    {
      name: "Business Process Automation",
      href: "/services/business-automation",
    },
    {
      name: "View all services",
      href: "/services",
    },
  ],

  ctaTitle:
    "Looking to improve your software delivery and infrastructure?",

  ctaDescription:
    "Tell us about your applications, current infrastructure and deployment requirements. We can help you explore a suitable cloud engineering and DevOps approach.",
};

export const metadata = createServiceMetadata(service);

export default function CloudDevOpsPage() {
  return <ServicePage service={service} />;
}
