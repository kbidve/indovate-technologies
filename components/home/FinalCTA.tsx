import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section
      id="contact-cta"
      className={styles.section}
      aria-labelledby="project-inquiry-heading"
    >
      <div className={`iv-container ${styles.layout}`}>

        <div className={styles.content}>

          <h2 id="project-inquiry-heading">
            What are you building next?
          </h2>

          <p>
            Whether you are developing a new product,
            modernizing an existing system or exploring AI,
            let&apos;s discuss how we can help.
          </p>

        </div>

        <div className={styles.action}>

          <Link
            href="/contact"
            className="iv-button-primary"
          >
            Discuss Your Project
            <FiArrowRight
              size={20}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
