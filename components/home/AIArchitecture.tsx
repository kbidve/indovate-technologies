import Link from "next/link";

import {
  FiDatabase,
  FiSearch,
  FiCpu,
  FiLayers,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import styles from "./AIArchitecture.module.css";

const stages = [
  {
    number: "01",
    title: "Enterprise data",
    description:
      "Documents, databases, APIs and existing business systems.",
    icon: FiDatabase,
  },
  {
    number: "02",
    title: "Knowledge retrieval",
    description:
      "Search and retrieve relevant information from enterprise knowledge sources.",
    icon: FiSearch,
  },
  {
    number: "03",
    title: "AI intelligence",
    description:
      "Large language models, RAG pipelines and AI agent orchestration.",
    icon: FiCpu,
  },
  {
    number: "04",
    title: "Business applications",
    description:
      "AI assistants, intelligent document processing and automated workflows.",
    icon: FiLayers,
  },
];

const principles = [
  "Access controls",
  "Response evaluation",
  "Human oversight",
  "System integration",
];

export default function AIArchitecture() {
  return (
    <div className={styles.architecture}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          Enterprise AI architecture
        </p>

        <h3>
          From business data to intelligent applications.
        </h3>

        <p className={styles.introduction}>
          A connected approach to enterprise AI, bringing
          business knowledge, language models and software
          applications together.
        </p>
      </div>

      <ol className={styles.pipeline}>
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <li
              key={stage.number}
              className={styles.stage}
            >
              <div className={styles.stageTop}>
                <Icon size={28} aria-hidden="true" />

                <span>{stage.number}</span>
              </div>

              <p className={styles.stageTitle}>
                {stage.title}
              </p>

              <p className={styles.stageDescription}>
                {stage.description}
              </p>

              {index < stages.length - 1 && (
                <span
                  className={styles.connector}
                  aria-hidden="true"
                >
                  <FiArrowRight size={16} />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className={styles.foundation}>
        <p>Engineering considerations</p>

        <ul>
          {principles.map((principle) => (
            <li key={principle}>
              <FiCheck size={16} aria-hidden="true" />
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <span>
          Conceptual enterprise AI architecture
        </span>

        <Link href="/services/ai-development">
          Explore AI development services
          <FiArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
