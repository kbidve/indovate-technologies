import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./AICapabilityMap.module.css";

const applications = [
  {
    title: "Access business knowledge",
    description:
      "Connect internal documents, knowledge bases and enterprise data with AI assistants using retrieval-augmented generation (RAG).",
  },
  {
    title: "Automate document processing",
    description:
      "Use generative AI to extract, classify and summarize information from reports, contracts and business documents.",
  },
  {
    title: "Improve operational workflows",
    description:
      "Integrate AI agents with existing applications, APIs and business processes to reduce repetitive work and support decision-making.",
  },
];

export default function AICapabilityMap() {
  return (
    <section
      id="ai-capabilities"
      className={styles.section}
      aria-labelledby="ai-capabilities-heading"
    >
      <div className={`iv-container ${styles.layout}`}>

        <div className={styles.intro}>

          <p className="iv-section-label">
            Artificial Intelligence
          </p>

          <h2
            id="ai-capabilities-heading"
            className="iv-section-heading"
          >
            AI that works for your business.
          </h2>

          <p className={styles.description}>
            We help organizations integrate artificial
            intelligence into their existing software,
            business operations and digital products.
            Our focus is on practical applications
            that address real business requirements.
          </p>

          <Link
            href="/services"
            className={styles.link}
          >
            Explore our AI and software services
            <FiArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

        <div className={styles.applications}>

          <h3 className={styles.listHeading}>
            Business applications
          </h3>

          <ul className={styles.list}>

            {applications.map((item) => (
              <li
                key={item.title}
                className={styles.application}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  );
}
