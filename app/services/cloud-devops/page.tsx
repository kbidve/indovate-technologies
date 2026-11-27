import ServicePage, {
  createServiceMetadata,
  type ServicePageData,
} from "../ServicePage";

const service: ServicePageData = {
  slug: "cloud-devops",

  name: "Cloud & DevOps",

  seoTitle: "Cloud Development & DevOps Services",

  seoDescription:
    "Cloud development and DevOps services for AWS, Azure, CI/CD automation, containerized applications and reliable production infrastructure.",

  headline:
    "Cloud engineering and DevOps services for reliable software delivery.",

  introduction:
    "Indovate Technologies provides cloud engineering and DevOps services for businesses worldwide. We help companies deploy software products, automate release pipelines, modernize cloud infrastructure and maintain production environments. Our capabilities include AWS and Azure deployment, Docker containerization, Kubernetes orchestration, CI/CD automation and application monitoring.",

  offerings: [
    {
      title: "Cloud application deployment",
      description:
        "Deploy web applications, SaaS products, backend services and enterprise AI applications on cloud platforms such as AWS and Microsoft Azure, based on workload and infrastructure requirements.",
    },
    {
      title: "CI/CD pipeline development & automation",
      description:
        "Implement continuous integration and continuous delivery (CI/CD) pipelines using tools such as GitHub Actions to automate application builds, testing and deployment across development, staging and production environments.",
    },
    {
      title: "Docker & Kubernetes deployment",
      description:
        "Containerize applications using Docker and configure Kubernetes orchestration where appropriate to support consistent deployment, workload management and application scalability.",
    },
    {
      title: "Cloud infrastructure engineering",
      description:
        "Design and configure cloud infrastructure, application servers, databases, networking and environment settings aligned with application architecture and operational requirements.",
    },
    {
      title: "Application monitoring & observability",
      description:
        "Implement application monitoring, centralized logging, infrastructure health checks and error tracking to improve operational visibility and support production troubleshooting.",
    },
    {
      title: "Cloud infrastructure modernization",
      description:
        "Review existing hosting and deployment environments to improve infrastructure configuration, resource utilization, release workflows and long-term application maintainability.",
    },
    {
      title: "Production security & support",
      description:
        "Incorporate access controls, secrets management, dependency maintenance, backup configurations and operational support into cloud infrastructure and DevOps workflows according to project requirements.",
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
    "Need a cloud engineering and DevOps partner?",

  ctaDescription:
    "Tell us about your applications, existing cloud infrastructure, deployment challenges and operational requirements. Our engineering team can help you plan a suitable cloud architecture, automated delivery pipeline and infrastructure modernization approach.",
};

export const metadata = createServiceMetadata(service);

export default function CloudDevOpsPage() {
  return <ServicePage service={service} />;
}
