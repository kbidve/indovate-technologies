import Link from "next/link";
import styles from "./ServiceDirectory.module.css";

const publishedServices = new Set([
  "custom-software-development",
  "ai-development",
  "web-saas-development",
  "enterprise-solutions",
  "business-automation",
  "cloud-devops",
]);

const services = [
  {
    id: "custom-software-development",
    title: "Custom software development",
    description:
      "Custom software development services for business applications, software product engineering, backend systems and modernization of existing applications.",
    capabilities: [
      "Custom business applications",
      "Software product engineering",
      "Legacy application modernization",
      "Backend development and REST APIs",
    ],
  },
  {
    id: "ai-development",
    title: "AI & generative AI development",
    description:
      "Generative AI development services that connect large language models, enterprise knowledge and existing business applications.",
    capabilities: [
      "Generative AI and LLM applications",
      "Retrieval-augmented generation (RAG)",
      "Enterprise knowledge assistants",
      "AI agents, copilots and document intelligence",
    ],
  },
  {
    id: "web-saas-development",
    title: "Web application & SaaS development",
    description:
      "Custom web application and SaaS development services for startups, product teams and businesses building digital platforms.",
    capabilities: [
      "SaaS product development",
      "MVPs and multi-tenant SaaS platforms",
      "Customer portals and dashboards",
      "Authentication and payment integrations",
    ],
  },
  {
    id: "enterprise-solutions",
    title: "ERP & enterprise solutions",
    description:
      "Custom ERP and enterprise software development services that connect departments, centralize business information and support operational workflows.",
    capabilities: [
      "Custom ERP and CRM systems",
      "Finance, property and operational modules",
      "Role-based access management",
      "Business reporting and approval workflows",
    ],
  },
  {
    id: "business-automation",
    title: "Business process automation",
    description:
      "Business process automation services that connect applications, reduce repetitive manual tasks and streamline operations through software and AI.",
    capabilities: [
      "Business workflow automation",
      "AI workflow automation",
      "Intelligent document processing",
      "Human approval and audit workflows",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Cloud and DevOps consulting services for application deployment, CI/CD automation, infrastructure modernization and production operations.",
    capabilities: [
      "Cloud application deployment",
      "Docker, Kubernetes and CI/CD automation",
      "Application monitoring",
      "System integration and production support",
    ],
  },
];

export default function ServiceDirectory() {
  return (
    <section
      id="service-directory"
      className={styles.section}
      aria-labelledby="service-directory-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Our Expertise
          </p>

          <h2
            id="service-directory-heading"
            className="iv-section-heading"
          >
            Our software and AI engineering capabilities.
          </h2>

          <p className={styles.introduction}>
            Explore our software development services, from
            new product engineering and enterprise modernization
            to AI integration and production deployment.
          </p>

        </div>

        <div className={styles.directory}>

          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={styles.service}
              aria-labelledby={`${service.id}-heading`}
            >

              <div className={styles.identity}>
                <h3 id={`${service.id}-heading`}>
                  {publishedServices.has(service.id) ? (
                    <Link
                      href={`/services/${service.id}`}
                      className={styles.serviceLink}
                    >
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </h3>
              </div>

              <div className={styles.overview}>
                <p>{service.description}</p>
              </div>

              <div className={styles.capabilities}>

                <p className={styles.capabilityHeading}>
                  What we deliver
                </p>

                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>
                      {capability}
                    </li>
                  ))}
                </ul>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
