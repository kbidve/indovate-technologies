import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./BelsioShowcase.module.css";

const engineeringScope = [
  "Finance and business operations",
  "Property management",
  "Multi-tenant architecture",
  "Role-based administration",
  "Operational workflows",
  "Reporting and dashboards",
];

export default function BelsioShowcase() {
  return (
    <section
      id="featured-projects"
      className={styles.section}
      aria-labelledby="featured-projects-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Featured Work
          </p>

          <h2
            id="featured-projects-heading"
            className="iv-section-heading"
          >
            Engineering for complex business requirements.
          </h2>

        </div>

        <article
          id="belsio-erp"
          className={styles.project}
          aria-labelledby="belsio-heading"
        >

          <div className={styles.identity}>

            <div className={styles.brand}>
              <Image
                src="/Images/Belsio_logo.svg"
                alt=""
                width={180}
                height={60}
                unoptimized
              />
            </div>

            <p className={styles.category}>
              Enterprise Software / ERP
            </p>

            <h3 id="belsio-heading">
              Belsio ERP Platform
            </h3>

            <p className={styles.description}>
              A multi-module enterprise software
              platform designed to connect finance,
              property management, reporting and
              day-to-day business operations.
            </p>

          </div>

          <div className={styles.details}>

            <div className={styles.detailBlock}>

              <h4>Business requirements</h4>

              <p>
                A centralized software foundation
                for managing business information,
                departmental workflows and
                administrative responsibilities
                within a multi-tenant environment.
              </p>

            </div>

            <div className={styles.detailBlock}>

              <h4>Engineering scope</h4>

              <ul className={styles.scope}>
                {engineeringScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>

            <div className={styles.detailBlock}>

              <h4>Technology</h4>

              <p>
                Django, Django REST Framework,
                React and PostgreSQL.
              </p>

            </div>

            <Link
              href="/services/enterprise-solutions"
              className={styles.link}
            >
              Explore ERP &amp; enterprise solutions
              <FiArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

        </article>

      </div>
    </section>
  );
}
