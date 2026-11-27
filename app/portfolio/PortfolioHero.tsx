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
          Software and AI engineering in practice.
        </h1>

        <p className={styles.description}>
          Explore our software development portfolio,
          including custom ERP platforms, enterprise AI applications,
          SaaS products and business automation. See how we approach
          business requirements through software architecture,
          application development and system integration.
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
