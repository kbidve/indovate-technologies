import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./EngineeringWork.module.css";

const capabilities = [
  {
    category: "Digital Product Engineering",

    title: "SaaS & web platforms",

    description:
      "Software product engineering across web applications, customer portals, administrative dashboards and SaaS platforms.",

    scope: [
      "Frontend application architecture",
      "Backend services and REST APIs",
      "Authentication and access management",
      "Customer and administrative portals",
      "Responsive application interfaces",
    ],

    technology:
      "React, Next.js, TypeScript, Django and FastAPI.",

    href: "/services/web-saas-development",

    linkLabel: "Explore web & SaaS development",
  },
  {
    category: "Connected Business Systems",

    title: "Business automation & integrations",

    description:
      "Connected software systems that support business workflows, automated operations and information exchange between applications.",

    scope: [
      "Third-party API integrations",
      "Business workflow automation",
      "Scheduled and background processing",
      "AI-enabled business workflows",
      "Deployment and monitoring",
    ],

    technology:
      "Python, REST APIs, Celery, Redis, Node.js, Docker and CI/CD.",

    href: "/services/business-automation",

    linkLabel: "Explore business automation",
  },
];

export default function EngineeringWork() {
  return (
    <section
      id="additional-work"
      className={styles.section}
      aria-labelledby="engineering-work-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Additional Engineering Capabilities
          </p>

          <h2
            id="engineering-work-heading"
            className="iv-section-heading"
          >
            Beyond individual projects.
          </h2>

          <p className={styles.introduction}>
            Our engineering capabilities extend across
            digital products, business applications
            and connected software systems.
          </p>

        </div>

        <div className={styles.capabilities}>

          {capabilities.map((item) => (
            <article
              key={item.title}
              className={styles.capability}
            >

              <p className={styles.category}>
                {item.category}
              </p>

              <h3>{item.title}</h3>

              <p className={styles.description}>
                {item.description}
              </p>

              <div className={styles.detailBlock}>

                <h4>Engineering scope</h4>

                <ul className={styles.scope}>
                  {item.scope.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

              </div>

              <div className={styles.detailBlock}>

                <h4>Technology</h4>

                <p>{item.technology}</p>

              </div>

              <Link
                href={item.href}
                className={styles.link}
              >
                {item.linkLabel}

                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
