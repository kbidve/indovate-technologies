import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className={styles.section}
      aria-labelledby="hero-heading"
    >
      <div className="iv-container">

        <p className="iv-section-label">
          Software Engineering &amp; AI
        </p>

        <div className={styles.layout}>

          <h1 id="hero-heading" className={styles.title}>
            Custom software and AI development.
          </h1>

          <div className={styles.content}>

            <p>
              We build custom business applications, SaaS products
               and enterprise software, modernize existing systems
               and integrate generative AI into business operations.
            </p>

            <div className={styles.actions}>

              <Link
                href="/contact"
                className="iv-button-primary"
              >
                Discuss Your Project
                <FiArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className={styles.servicesLink}
              >
                Explore our services
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>

            </div>

          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            Based in India. Working with businesses worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}
