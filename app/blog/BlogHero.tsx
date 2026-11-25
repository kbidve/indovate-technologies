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
          Software engineering and AI insights.
        </h1>

        <p className={styles.description}>
          Explore practical guides on custom software development,
          generative AI, enterprise RAG systems, SaaS development,
          ERP solutions, business automation and cloud engineering.
          Understand the technical decisions involved in building
          and modernizing business software.
        </p>

      </div>
    </section>
  );
}
