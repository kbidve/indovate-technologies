import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./TechnicalCapabilities.module.css";

const capabilities = [
  {
    title: "Custom software development",
    description:
      "Business applications, backend engineering, software product development and modernization of existing systems.",
    href: "/services/custom-software-development",
  },
  {
    title: "AI & generative AI",
    description:
      "Retrieval-augmented generation, LLM applications, intelligent assistants and artificial intelligence integration.",
    href: "/services/ai-development",
  },
  {
    title: "Web & SaaS development",
    description:
      "Digital products, scalable web applications, customer portals, dashboards and SaaS platforms.",
    href: "/services/web-saas-development",
  },
  {
    title: "ERP & enterprise solutions",
    description:
      "Custom enterprise applications that connect business operations, information and organizational workflows.",
    href: "/services/enterprise-solutions",
  },
  {
    title: "Business process automation",
    description:
      "Intelligent workflows, document processing, background operations and third-party application integrations.",
    href: "/services/business-automation",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, application deployment, containerization, monitoring and continuous delivery.",
    href: "/services/cloud-devops",
  },
];

export default function TechnicalCapabilities() {
  return (
    <section
      id="technical-capabilities"
      className={styles.section}
      aria-labelledby="technical-capabilities-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Our Technical Capabilities
          </p>

          <h2
            id="technical-capabilities-heading"
            className="iv-section-heading"
          >
            Connected expertise across software and AI.
          </h2>

          <p className={styles.introduction}>
            From application architecture to intelligent
            systems and cloud infrastructure, our
            engineering capabilities support different
            stages of software development and
            business transformation.
          </p>

        </div>

        <ul className={styles.capabilities}>

          {capabilities.map((capability) => (
            <li
              key={capability.href}
              className={styles.capability}
            >

              <h3>
                <Link
                  href={capability.href}
                  className={styles.serviceLink}
                >
                  {capability.title}

                  <FiArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </h3>

              <p>{capability.description}</p>

            </li>
          ))}

        </ul>

        <div className={styles.bottom}>

          <Link
            href="/services"
            className={styles.link}
          >
            Explore our complete service offering

            <FiArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
