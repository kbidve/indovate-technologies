import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">About Us</li>
          </ol>
        </nav>

        <p className="iv-section-label">
          About Indovate Technologies
        </p>

        <h1
          id="about-heading"
          className={styles.heading}
        >
          Your software and AI engineering partner.
        </h1>

        <p className={styles.description}>
          Indovate Technologies is a software and AI engineering
          company based in India, working with businesses worldwide.
          We combine software product development, enterprise
          modernization and generative AI integration to build
          maintainable technology aligned with business requirements.
        </p>

        <div className={styles.identity}>

          <div>
            <p className={styles.identityTitle}>
              Based in India.
            </p>

            <p className={styles.identityDescription}>
              Working with businesses worldwide.
            </p>
          </div>

          <div>
            <p className={styles.identityTitle}>
              Software &amp; AI engineering.
            </p>

            <p className={styles.identityDescription}>
              From product development to enterprise
              modernization.
            </p>
          </div>

        </div>

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
    </section>
  );
}
