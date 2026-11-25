import Link from "next/link";
import {
  FiArrowRight,
  FiArrowDown,
} from "react-icons/fi";

import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li aria-hidden="true">/</li>

            <li>
              <span aria-current="page">
                Services
              </span>
            </li>
          </ol>
        </nav>

        <h1
          id="services-heading"
          className={styles.heading}
        >
          Software development and AI services.
        </h1>

        <div className={styles.content}>

          <p className={styles.description}>
            We provide software engineering and AI development
            services for businesses worldwide. From custom applications
            and SaaS products to enterprise ERP systems, generative AI
            and cloud deployment, we help organizations build
            and modernize their software.
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
              href="#service-directory"
              className={styles.textLink}
            >
              Explore our services
              <FiArrowDown
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
