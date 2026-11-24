import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="work-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>
          <div>
            <p className="iv-section-label">
              Selected Work
            </p>

            <h2
              id="work-heading"
              className="iv-section-heading"
            >
              Our work.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className={styles.link}
          >
            View our portfolio
            <FiArrowUpRight
              size={20}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className={styles.projects}>

          <article className={styles.project}>

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
                Enterprise Software
              </p>

              <h3>
                <Link
                  href="/portfolio#belsio-erp"
                  className={styles.projectLink}
                >
                  Belsio ERP Platform
                </Link>
              </h3>

            </div>

            <div className={styles.details}>

              <p className={styles.description}>
                A custom ERP foundation designed to connect
                finance, property management, reporting
                and day-to-day business operations within
                a multi-tenant software platform.
              </p>

              <dl className={styles.scope}>
                <div>
                  <dt>Engineering scope</dt>
                  <dd>
                    Financial modules, operational workflows,
                    role-based administration and reporting.
                  </dd>
                </div>

                <div>
                  <dt>Technology</dt>
                  <dd>
                    Django, React, PostgreSQL
                  </dd>
                </div>
              </dl>

            </div>

          </article>

          <article className={styles.project}>

            <div className={styles.identity}>

              <p className={styles.category}>
                Artificial Intelligence
              </p>

              <h3>
                <Link
                  href="/portfolio#enterprise-ai-companion"
                  className={styles.projectLink}
                >
                  Enterprise AI Companion
                </Link>
              </h3>

              <p className={styles.note}>
                Enterprise AI architecture
              </p>

            </div>

            <div className={styles.details}>

              <p className={styles.description}>
                An enterprise AI architecture designed to
                connect language models with private business
                knowledge, supporting document retrieval,
                contextual responses and system integrations.
              </p>

              <dl className={styles.scope}>
                <div>
                  <dt>Engineering scope</dt>
                  <dd>
                    Retrieval-augmented generation,
                    document intelligence and AI orchestration.
                  </dd>
                </div>

                <div>
                  <dt>Technology</dt>
                  <dd>
                    FastAPI, LangChain, LangGraph
                  </dd>
                </div>
              </dl>

            </div>

          </article>

        </div>

        <div className={styles.bottom}>

          <p>
            Explore more of our work across SaaS platforms,
            web applications and business automation.
          </p>

          <Link
            href="/portfolio"
            className={styles.link}
          >
            Explore all work
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
