import Link from "next/link";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

import styles from "./PortfolioHero.module.css";

export default function PortfolioHero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-heading"
    >
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Our Work</li>
          </ol>
        </nav>

        <p className="iv-section-label">
          Selected Work
        </p>

        <h1
          id="portfolio-heading"
          className={styles.heading}
        >
          Software engineering in practice.
        </h1>

        <p className={styles.description}>
          Explore our work across enterprise software,
          artificial intelligence, digital products
          and connected business systems. Discover how
          we approach business requirements through
          software architecture and engineering.
        </p>

        <div className={styles.actions}>

          <Link
            href="#featured-projects"
            className="iv-button-primary"
          >
            Explore Our Work
            <FiArrowDown size={18} aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className={styles.link}
          >
            Discuss Your Project
            <FiArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>

      </div>
    </section>
  );
}
