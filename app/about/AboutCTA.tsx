import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section
      id="about-inquiry"
      className={styles.section}
      aria-labelledby="about-inquiry-heading"
    >
      <div className="iv-container">

        <div className={styles.layout}>

          <div className={styles.content}>

            <p className="iv-section-label">
              Let&apos;s Build Something Together
            </p>

            <h2 id="about-inquiry-heading">
              Looking for the right engineering partner?
            </h2>

            <p className={styles.description}>
              Tell us about your business requirements,
              technology challenges or next software
              product. We can explore the right
              engineering approach together.
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
                href="/portfolio"
                className={styles.link}
              >
                Explore our work

                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>

          <div className={styles.details}>

            <div className={styles.detail}>

              <h3>Software &amp; AI engineering</h3>

              <p>
                Custom software, enterprise systems,
                artificial intelligence and
                technology integration.
              </p>

              <Link
                href="/services"
                className={styles.link}
              >
                Explore our services

                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </div>

            <div className={styles.detail}>

              <h3>Based in India</h3>

              <p>
                Latur, Maharashtra, India.
                Welcoming project inquiries
                from businesses worldwide.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
