import Link from "next/link";
import { FiArrowDown, FiMail } from "react-icons/fi";

import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Contact</li>
          </ol>
        </nav>

        <p className="iv-section-label">
          Contact Indovate Technologies
        </p>

        <h1
          id="contact-heading"
          className={styles.heading}
        >
          Let&apos;s discuss your software or AI project.
        </h1>

        <p className={styles.description}>
          Contact our team to discuss custom software development,
          SaaS products, ERP systems, generative AI integration
          or business process automation. Share your project
          requirements so we can explore a suitable
          engineering approach.
        </p>

        <div className={styles.actions}>

          <Link
            href="#contact-form"
            className="iv-button-primary"
          >
            Send a Project Inquiry

            <FiArrowDown
              size={18}
              aria-hidden="true"
            />
          </Link>

          <a
            href="mailto:kailas.bidve@indovatetechnologies.com"
            className={styles.emailLink}
          >
            <FiMail
              size={18}
              aria-hidden="true"
            />

            Email us directly
          </a>

        </div>

        <p className={styles.location}>
          Based in India. Welcoming project
          inquiries worldwide.
        </p>

      </div>
    </section>
  );
}
