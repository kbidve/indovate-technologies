import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./BusinessSolutions.module.css";

const solutions = [
  {
    audience: "Startups & product teams",
    title: "Build your next product.",
    description:
      "Turn your business idea into a working digital product. We help teams develop MVPs, SaaS platforms and scalable software applications.",
    linkLabel: "Explore product development",
    href: "/services/web-saas-development",
  },
  {
    audience: "Established businesses",
    title: "Modernize your operations.",
    description:
      "Replace disconnected tools and outdated applications with integrated software, custom ERP systems and streamlined business processes.",
    linkLabel: "Explore enterprise solutions",
    href: "/services/enterprise-solutions",
  },
  {
    audience: "Enterprises",
    title: "Put AI to work.",
    description:
      "Integrate artificial intelligence into existing business systems through enterprise knowledge assistants, document intelligence and workflow automation.",
    linkLabel: "Explore AI development",
    href: "/services/ai-development",
  },
];

export default function BusinessSolutions() {
  return (
    <section
      id="business-solutions"
      className={styles.section}
      aria-labelledby="business-solutions-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Who We Help
          </p>

          <h2
            id="business-solutions-heading"
            className="iv-section-heading"
          >
            Technology for your next stage of growth.
          </h2>

          <p className={styles.introduction}>
            From launching a new product to improving
            established business operations, we help
            organizations address their software and
            technology requirements.
          </p>

        </div>

        <div className={styles.solutions}>

          {solutions.map((solution) => (
            <article
              key={solution.audience}
              className={styles.solution}
            >

              <p className={styles.audience}>
                {solution.audience}
              </p>

              <h3>{solution.title}</h3>

              <p className={styles.description}>
                {solution.description}
              </p>

              <Link
                href={solution.href}
                className={styles.link}
              >
                {solution.linkLabel}

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
