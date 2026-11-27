import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import styles from "./BlogCTA.module.css";

export default function BlogCTA() {
  return (
    <section
      id="blog-inquiry"
      className={styles.section}
      aria-labelledby="blog-inquiry-heading"
    >
      <div className="iv-container">

        <p className="iv-section-label">
          From Insights to Implementation
        </p>

        <h2 id="blog-inquiry-heading">
          Have a technology challenge?
        </h2>

        <p className={styles.description}>
          Explore our software and AI engineering services,
          or discuss your business requirements and
          technology objectives with our team.
        </p>

        <div className={styles.actions}>

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

          <Link
            href="/services"
            className="iv-button-secondary"
          >
            Explore Our Services
          </Link>

        </div>

      </div>
    </section>
  );
}
