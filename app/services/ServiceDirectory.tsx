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
      "We design, develop and modernize software tailored to your business requirements, existing systems and long-term operational goals.",
    capabilities: [
      "Custom business applications",
      "Software product development",
      "Application modernization",
      "Backend development and REST APIs",
    ],
  },
  {
    id: "ai-development",
    title: "AI & generative AI development",
    description:
      "We build AI-powered applications that connect language models with business data, existing software and operational workflows.",
    capabilities: [
      "Generative AI and LLM applications",
      "Retrieval-augmented generation (RAG)",
      "Enterprise knowledge assistants",
      "AI copilots and document intelligence",
    ],
  },
  {
    id: "web-saas-development",
    title: "Web application & SaaS development",
    description:
      "We develop web applications and software-as-a-service products with maintainable architecture and intuitive user experiences.",
    capabilities: [
      "SaaS product development",
      "Multi-tenant platforms",
      "Customer portals and dashboards",
      "Authentication and payment integrations",
    ],
  },
  {
    id: "enterprise-solutions",
    title: "ERP & enterprise solutions",
    description:
      "We develop integrated enterprise applications that connect departments, centralize business information and support day-to-day operations.",
    capabilities: [
      "Custom ERP and CRM systems",
      "Finance and operational modules",
      "Role-based access management",
      "Business reporting and approval workflows",
    ],
  },
  {
    id: "business-automation",
    title: "Business process automation",
    description:
      "We help businesses reduce repetitive manual work by connecting applications, automating workflows and integrating intelligent automation.",
    capabilities: [
      "Business workflow automation",
      "AI agents and tool integrations",
      "Document processing",
      "Human approval and audit workflows",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "We support software deployment and ongoing operations through cloud infrastructure, automated delivery and production engineering practices.",
    capabilities: [
      "Cloud application deployment",
      "Containerization and CI/CD",
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
            Software and technology services.
          </h2>

          <p className={styles.introduction}>
            From new product development to enterprise
            modernization, our services address different
            stages of your software and technology journey.
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
