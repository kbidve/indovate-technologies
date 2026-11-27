import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import styles from "./ServicesCTA.module.css";

export default function ServicesCTA() {
  return (
    <section
      id="services-inquiry"
      className={styles.section}
      aria-labelledby="services-inquiry-heading"
    >
      <div className={`iv-container ${styles.layout}`}>

        <div className={styles.content}>

          <p className="iv-section-label">
            Start a Conversation
          </p>

          <h2 id="services-inquiry-heading">
            Let&apos;s discuss your technology requirements.
          </h2>

          <p className={styles.description}>
            Tell us about your project, existing systems
            or business challenges. We can help you
            explore the right technical approach for
            your organization.
          </p>

        </div>

        <div className={styles.action}>

          <Link
            href="/contact"
            className="iv-button-primary"
          >
            Discuss Your Project
            <FiArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
