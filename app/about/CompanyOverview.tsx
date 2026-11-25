import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./CompanyOverview.module.css";

export default function CompanyOverview() {
  return (
    <section
      id="company-overview"
      className={styles.section}
      aria-labelledby="company-overview-heading"
    >
      <div className="iv-container">

        <div className={styles.overview}>

          <div className={styles.headingBlock}>

            <p className="iv-section-label">
              Who We Are
            </p>

            <h2
              id="company-overview-heading"
              className="iv-section-heading"
            >
              Software and AI engineering with
              a business-first perspective.
            </h2>

          </div>

          <div className={styles.content}>

            <p>
              Based in Latur, Maharashtra, India, Indovate
              Technologies focuses on software engineering
              and technology solutions aligned with
              real business requirements.
            </p>

            <p>
              Our capabilities span custom software development,
              SaaS product engineering, enterprise ERP systems,
              generative AI development, business process
              automation and cloud engineering.
            </p>

            <p>
              Our approach combines software architecture,
              application development and an understanding
              of business operations to help organizations
              build digital products, modernize existing
              systems and integrate new technologies.
            </p>

          </div>

        </div>

        <div className={styles.philosophy}>

          <div className={styles.headingBlock}>

            <p className="iv-section-label">
              Our Engineering Philosophy
            </p>

            <h3>
              Strong software foundations.
              Meaningful AI integration.
            </h3>

          </div>

          <div className={styles.content}>

            <p>
              Artificial intelligence is most useful
              when it is supported by reliable software,
              well-structured data and clearly defined
              business workflows.
            </p>

            <p>
              We approach application architecture,
              backend services, user interfaces,
              data management, security and AI
              integration as connected parts of a
              complete software system.
            </p>

            <p>
              Our focus is on maintainability,
              practical implementation and technology
              choices that support long-term business needs.
            </p>

            <Link
              href="/services"
              className={styles.link}
            >
              Explore our engineering services

              <FiArrowUpRight
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
