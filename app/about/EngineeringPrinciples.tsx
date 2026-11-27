import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./EngineeringPrinciples.module.css";

const principles = [
  {
    title: "Architecture before implementation",
    description:
      "Understand business requirements, define system boundaries and establish a maintainable technical foundation before implementation begins.",
  },
  {
    title: "Production-focused development",
    description:
      "Build software with real operational requirements in mind, considering deployment, performance, reliability and future maintenance.",
  },
  {
    title: "Security and data protection",
    description:
      "Consider access control, data handling, secure development and application security throughout the engineering process.",
  },
  {
    title: "Quality and reliability",
    description:
      "Use appropriate testing, code reviews and validation practices to improve software quality and reduce implementation risks.",
  },
  {
    title: "Transparent collaboration",
    description:
      "Maintain clear communication, visibility into development progress and shared understanding of important technical decisions.",
  },
  {
    title: "Long-term maintainability",
    description:
      "Create understandable, modular software that can evolve alongside changing business requirements and technology needs.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section
      id="engineering-principles"
      className={styles.section}
      aria-labelledby="engineering-principles-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            How We Engineer
          </p>

          <h2
            id="engineering-principles-heading"
            className="iv-section-heading"
          >
            Engineering principles that guide our work.
          </h2>

          <p className={styles.introduction}>
            Our approach prioritizes software quality,
            business requirements and long-term
            maintainability throughout the
            development process.
          </p>

        </div>

        <ol className={styles.principles}>

          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className={styles.principle}
            >

              <span
                className={styles.number}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>

            </li>
          ))}

        </ol>

        <Link
          href="/#process"
          className={styles.link}
        >
          Explore our delivery process

          <FiArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </Link>

      </div>
    </section>
  );
}
