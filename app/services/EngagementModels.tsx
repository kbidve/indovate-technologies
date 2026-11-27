import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./EngagementModels.module.css";

const engagements = [
  {
    title: "Project-based development",
    description:
      "Develop a new software product or business application with defined requirements, agreed milestones and a structured delivery plan.",
    suitableFor:
      "New products, MVPs and custom software projects.",
  },
  {
    title: "Modernization & integration",
    description:
      "Improve existing applications, upgrade software architecture and integrate new technologies without unnecessarily replacing your entire system.",
    suitableFor:
      "Existing software, enterprise systems and AI integration.",
  },
  {
    title: "Ongoing engineering support",
    description:
      "Maintain and improve existing software through feature development, technical improvements and ongoing support based on an agreed scope.",
    suitableFor:
      "Long-term product development and application maintenance.",
  },
];

export default function EngagementModels() {
  return (
    <section
      id="engagement-models"
      className={styles.section}
      aria-labelledby="engagement-heading"
    >
      <div className={`iv-container ${styles.layout}`}>

        <div className={styles.intro}>

          <p className="iv-section-label">
            Working With Us
          </p>

          <h2
            id="engagement-heading"
            className="iv-section-heading"
          >
            An engagement built around your business.
          </h2>

          <p className={styles.description}>
            Every software project has different requirements.
            We work with you to define an engagement approach
            based on your business objectives, technical needs,
            project scope and long-term priorities.
          </p>

          <Link
            href="/#process"
            className={styles.link}
          >
            Learn about our delivery process
            <FiArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

        <div className={styles.engagements}>

          {engagements.map((engagement) => (
            <article
              key={engagement.title}
              className={styles.engagement}
            >

              <h3>{engagement.title}</h3>

              <p className={styles.overview}>
                {engagement.description}
              </p>

              <p className={styles.suitable}>
                <strong>Suitable for:</strong>{" "}
                {engagement.suitableFor}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
