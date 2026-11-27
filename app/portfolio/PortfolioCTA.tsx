import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./PortfolioCTA.module.css";

const relatedServices = [
  {
    title: "Custom software development",
    href: "/services/custom-software-development",
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
  },
];

export default function PortfolioCTA() {
  return (
    <section
      id="portfolio-inquiry"
      className={styles.section}
      aria-labelledby="portfolio-inquiry-heading"
    >
      <div className="iv-container">

        <div className={styles.layout}>

          <div className={styles.content}>

            <p className="iv-section-label">
              Let&apos;s Work Together
            </p>

            <h2 id="portfolio-inquiry-heading">
              Your next project starts with a conversation.
            </h2>

            <p className={styles.description}>
              Whether you are building a new software
              product, modernizing an enterprise system
              or exploring artificial intelligence,
              we can help you define the right
              engineering approach.
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
                href="/services"
                className={styles.servicesLink}
              >
                Explore all services
                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>

          <nav
            className={styles.related}
            aria-label="Related engineering services"
          >

            <h3>
              Explore more of our engineering services.
            </h3>

            <ul>
              {relatedServices.map((service) => (
                <li key={service.href}>

                  <Link href={service.href}>
                    <span>{service.title}</span>
                    <FiArrowUpRight
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>

                </li>
              ))}
            </ul>

          </nav>

        </div>

      </div>
    </section>
  );
}
