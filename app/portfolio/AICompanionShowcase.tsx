import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./AICompanionShowcase.module.css";

const architecture = [
  {
    title: "Enterprise documents & data",
    description:
      "Internal documents and business knowledge sources.",
  },
  {
    title: "Document processing & indexing",
    description:
      "Text extraction, chunking, embeddings and indexing.",
  },
  {
    title: "Knowledge retrieval",
    description:
      "Retrieve relevant information for user queries.",
  },
  {
    title: "LLM & workflow orchestration",
    description:
      "Context-grounded generation and AI workflows.",
  },
  {
    title: "Enterprise AI assistant",
    description:
      "Conversational interfaces and application integrations.",
  },
];

const engineeringScope = [
  "Retrieval-augmented generation",
  "Document ingestion and indexing",
  "Context retrieval and enrichment",
  "LLM integration and orchestration",
  "Enterprise API integrations",
  "Secure application workflows",
];

export default function AICompanionShowcase() {
  return (
    <section
      id="enterprise-ai-companion"
      className={styles.section}
      aria-labelledby="ai-companion-heading"
    >
      <div className="iv-container">

        <div className={styles.layout}>

          <div className={styles.identity}>

            <p className="iv-section-label">
              Artificial Intelligence / RAG
            </p>

            <h2 id="ai-companion-heading">
              Enterprise AI Companion
            </h2>

            <p className={styles.description}>
              An enterprise AI architecture designed
              to connect language models with private
              business knowledge, supporting document
              retrieval, contextual responses and
              integration with existing software systems.
            </p>

            <div className={styles.detailBlock}>

              <h3>Business requirements</h3>

              <p>
                Enable users to access relevant
                information from organizational
                documents and knowledge sources
                through an AI-powered interface.
              </p>

            </div>

            <div className={styles.detailBlock}>

              <h3>Engineering scope</h3>

              <ul className={styles.scope}>
                {engineeringScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>

            <div className={styles.detailBlock}>

              <h3>Technology</h3>

              <p>
                Python, FastAPI, LangChain, LangGraph,
                vector databases and OpenAI.
              </p>

            </div>

            <Link
              href="/services/ai-development"
              className={styles.link}
            >
              Explore AI &amp; generative AI development
              <FiArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

          <div className={styles.architecture}>

            <h3>Engineering architecture</h3>

            <p className={styles.architectureNote}>
              Conceptual retrieval and response workflow.
            </p>

            <ol className={styles.flow}>

              {architecture.map((stage, index) => (
                <li key={stage.title}>

                  <span
                    className={styles.number}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.stageContent}>

                    <h4>{stage.title}</h4>

                    <p>{stage.description}</p>

                  </div>

                </li>
              ))}

            </ol>

          </div>

        </div>

      </div>
    </section>
  );
}
