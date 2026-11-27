import type { Metadata } from "next";
import Link from "next/link";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use | Indovate Technologies",
  },

  description:
    "Review the terms concerning use of the Indovate Technologies website, its content, project inquiries and external resources.",

  alternates: {
    canonical: "/terms-of-use",
  },

  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function TermsOfUsePage() {
  return (
    <div className={styles.page}>
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Terms of Use</span>
        </nav>

        <header className={styles.header}>

          <p className="iv-section-label">
            Privacy &amp; Legal
          </p>

          <h1>Terms of Use</h1>

          <p className={styles.introduction}>
            These Terms of Use describe the proposed
            conditions for accessing and using the
            Indovate Technologies corporate website.
          </p>

          <p className={styles.draftNotice}>
            Draft for internal review. These terms have
            not yet been approved for public release.
          </p>

        </header>

        <div className={styles.content}>

          <section>
            <h2>1. About this website</h2>

            <p>
              This website is operated by Indovate
              Technologies Pvt. Ltd., a software and AI
              engineering company based in India.
            </p>

            <p>
              The website provides information about
              our engineering services, technical
              capabilities, portfolio and business
              technology insights.
            </p>
          </section>

          <section>
            <h2>2. Acceptable use</h2>

            <p>
              Visitors are expected to use this website
              responsibly and in accordance with
              applicable laws.
            </p>

            <p>
              Visitors must not use the website to:
            </p>

            <ul>
              <li>
                Attempt unauthorized access to systems,
                accounts or protected information.
              </li>

              <li>
                Introduce malicious software or
                harmful content.
              </li>

              <li>
                Interfere with website availability
                or normal operation.
              </li>

              <li>
                Submit fraudulent, misleading or
                abusive project inquiries.
              </li>

              <li>
                Use automated requests in a manner
                that disrupts normal website operation.
              </li>

              <li>
                Violate applicable intellectual
                property or privacy rights.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual property</h2>

            <p>
              Website materials may include text,
              graphics, branding, logos, software
              descriptions and technical articles.
            </p>

            <p>
              Rights in these materials belong to
              Indovate Technologies or the applicable
              third-party rights holders.
            </p>

            <p>
              Third-party names, trademarks and logos
              remain subject to the rights of their
              respective owners.
            </p>

            <p>
              Reproduction or commercial use of
              protected materials requires appropriate
              permission unless otherwise permitted
              by applicable law or licensing terms.
            </p>
          </section>

          <section>
            <h2>4. Website information and articles</h2>

            <p>
              Information on this website is intended
              for general informational and business
              communication purposes.
            </p>

            <p>
              Articles and technical insights describe
              general engineering considerations.
              They may not address the specific
              requirements of every organization.
            </p>

            <p>
              Technology recommendations, project
              approaches and implementation estimates
              should be evaluated against individual
              business requirements.
            </p>
          </section>

          <section>
            <h2>5. Project inquiries and engagements</h2>

            <p>
              Submitting a project inquiry does not
              by itself establish a software development
              contract, partnership or commitment
              to provide services.
            </p>

            <p>
              Project scope, pricing, delivery schedules,
              confidentiality arrangements and other
              contractual conditions are subject to
              separate agreement between the parties.
            </p>

            <p>
              Visitors should avoid submitting unnecessary
              confidential information, passwords or
              other sensitive credentials through the
              general contact form.
            </p>

            <p>
              Information about inquiry processing is
              available in our{" "}
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2>6. Third-party websites and resources</h2>

            <p>
              Our website may contain links to external
              websites, technical documentation,
              social media platforms and other resources.
            </p>

            <p>
              External websites are operated independently
              and may have their own terms, privacy
              policies and usage conditions.
            </p>

            <p>
              Visitors should review the applicable
              conditions before using external services
              or providing information to them.
            </p>
          </section>

          <section>
            <h2>7. Website availability and limitations</h2>

            <p>
              Website content and functionality may
              change as we improve our services and
              technical infrastructure.
            </p>

            <p>
              Temporary interruptions, maintenance
              periods or technical errors may occur.
            </p>

            <p>
              Any additional warranty exclusions,
              liability limitations or dispute resolution
              provisions require company approval and
              legal review before publication.
            </p>

            <p>
              Nothing in these proposed terms is
              intended to restrict rights that cannot
              lawfully be restricted.
            </p>
          </section>

          <section>
            <h2>8. Changes to these terms</h2>

            <p>
              These terms may be reviewed as website
              functionality, business practices and
              applicable requirements change.
            </p>

            <p>
              The effective date and revision information
              will be established when the terms are
              approved for publication.
            </p>
          </section>

          <section>
            <h2>9. Contact information</h2>

            <address className={styles.address}>

              <strong>
                Indovate Technologies Pvt. Ltd.
              </strong>

              <p>
                2nd Floor, Shinde Heights,<br />
                Khori Galli, Vasant Nagar,<br />
                Latur, Maharashtra 413531,<br />
                India.
              </p>

              <p>
                Email:{" "}
                <a href="mailto:kailas.bidve@indovatetechnologies.com">
                  kailas.bidve@indovatetechnologies.com
                </a>
              </p>

            </address>

            <Link
              href="/contact"
              className="iv-button-secondary"
            >
              Contact Our Team
            </Link>
          </section>

        </div>

      </div>
    </div>
  );
}
