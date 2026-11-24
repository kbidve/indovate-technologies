import Link from "next/link";

import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section
      id="blog-hero"
      className={styles.section}
      aria-labelledby="blog-heading"
    >
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Insights</li>
          </ol>
        </nav>

        <p className="iv-section-label">
          Insights &amp; Perspectives
        </p>

        <h1
          id="blog-heading"
          className={styles.heading}
        >
          Technology insights for better
          business decisions.
        </h1>

        <p className={styles.description}>
          Practical perspectives on software engineering,
          artificial intelligence, enterprise systems
          and digital transformation. Explore technology
          approaches that connect engineering decisions
          with real business requirements.
        </p>

      </div>
    </section>
  );
}
