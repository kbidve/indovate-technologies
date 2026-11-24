import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./WhatWeBuild.module.css";

const services = [
  {
    title: "Custom software development",
    href: "/services/custom-software-development",
    description:
      "Business applications, software product development and modernization of existing systems.",
  },
  {
    title: "Artificial intelligence",
    href: "/services/ai-development",
    description:
      "Generative AI applications, enterprise RAG solutions, intelligent assistants and AI integration.",
  },
  {
    title: "Web & SaaS development",
    href: "/services/web-saas-development",
    description:
      "Scalable web platforms, customer portals, dashboards and SaaS products.",
  },
  {
    title: "Enterprise solutions",
    href: "/services/enterprise-solutions",
    description:
      "Custom ERP, CRM and integrated applications that connect business operations.",
  },
  {
    title: "Business process automation",
    href: "/services/business-automation",
    description:
      "Workflow automation, intelligent document processing and third-party system integrations.",
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description:
      "Cloud infrastructure, containerization, continuous delivery and application deployment.",
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

        <div className={styles.header}>
          <p className="iv-section-label">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="iv-section-heading"
          >
            What we do.
          </h2>

          <p className="iv-section-description">
            Software development, artificial intelligence
            and technology services for businesses at
            every stage of growth.
          </p>
        </div>

        <ul className={styles.services}>

          {services.map((service) => (
            <li
              key={service.title}
              className={styles.service}
            >
              <h3>
                <Link
                  href={service.href}
                  className={styles.serviceLink}
                >
                  {service.title}
                </Link>
              </h3>
              <p>{service.description}</p>
            </li>
          ))}

        </ul>

        <div className={styles.bottom}>

          <Link
            href="/services"
            className={styles.link}
          >
            Explore all services

            <FiArrowUpRight
              size={20}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
