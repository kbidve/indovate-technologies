import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import styles from "./WhatWeBuild.module.css";

const services = [
  {
    title: "Custom software development",
    href: "/services/custom-software-development",
    description:
      "Custom business applications, software product engineering, backend development and modernization of existing systems.",
  },
  {
    title: "AI & generative AI development",
    href: "/services/ai-development",
    description:
      "Generative AI applications, retrieval-augmented generation (RAG), LLM-powered assistants, AI agents and enterprise AI integration.",
  },
  {
    title: "Web & SaaS development",
    href: "/services/web-saas-development",
    description:
      "Custom web applications, SaaS product development, customer portals, dashboards and multi-tenant platforms.",
  },
  {
    title: "ERP & enterprise solutions",
    href: "/services/enterprise-solutions",
    description:
      "Custom ERP development, CRM systems and enterprise software integrations that connect business operations.",
  },
  {
    title: "Business process automation",
    href: "/services/business-automation",
    description:
      "Business process automation, AI-powered workflows, intelligent document processing and application integrations.",
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description:
      "Cloud engineering, DevOps consulting, Docker containerization, CI/CD automation and production deployment.",
  },
];

export default function WhatWeBuild() {
  return (
    <section
      id="solutions"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className="iv-container">

        <div className={styles.sectionHeader}>
          <div>
            <p className="iv-section-label">
              Our services
            </p>

            <h2
              id="services-heading"
              className="iv-section-heading"
            >
              Software development and AI services.
            </h2>
          </div>

          <p className="iv-section-description">
            End-to-end software engineering services for businesses
            building digital products, modernizing enterprise systems
            and adopting artificial intelligence.
          </p>
        </div>

        <ul className={styles.serviceGrid}>
          {services.map((service, index) => (
            <li
              key={service.href}
              className={styles.service}
            >
              <Link
                href={service.href}
                className={styles.serviceLink}
              >
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowUpRight
                    size={22}
                    className={styles.serviceArrow}
                    aria-hidden="true"
                  />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <Link
            href="/services"
            className={styles.exploreLink}
          >
            Explore all services
            <FiArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
