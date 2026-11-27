import type { Metadata } from "next";
import Link from "next/link";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Indovate Technologies",
  },

  description:
    "Learn how Indovate Technologies handles website visitor information, project inquiries, analytics and personal data.",

  alternates: {
    canonical: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Privacy Policy</span>
        </nav>

        <header className={styles.header}>

          <p className="iv-section-label">
            Privacy &amp; Legal
          </p>

          <h1>Privacy Policy</h1>

          <p className={styles.introduction}>
            This Privacy Policy describes how Indovate
            Technologies handles information collected
            through its corporate website.
          </p>

          <p className={styles.draftNotice}>
            Draft for internal review. This policy has
            not yet been approved for public release.
          </p>

        </header>

        <div className={styles.content}>

          <section>
            <h2>1. Who we are</h2>

            <p>
              This website is operated by Indovate
              Technologies Pvt. Ltd., a software and AI
              engineering company based in Latur,
              Maharashtra, India.
            </p>

            <p>
              This policy concerns information processed
              through our corporate website and related
              business inquiries. Separate arrangements
              may apply to information processed while
              delivering services to clients.
            </p>
          </section>

          <section>
            <h2>2. Information we collect</h2>

            <p>
              When you contact us through our website,
              you may provide the following information:
            </p>

            <ul>
              <li>Your name.</li>
              <li>Your email address.</li>
              <li>Your company or organization name.</li>
              <li>Your project type or area of interest.</li>
              <li>Your project requirements and message.</li>
              <li>
                Additional contact information you
                voluntarily provide.
              </li>
            </ul>

            <p>
              Your name, email address and project message
              are required to submit the inquiry form.
              Company and project type information
              are optional.
            </p>

            <p>
              Please do not include passwords, API keys,
              financial account credentials or unnecessary
              sensitive personal information in your inquiry.
            </p>
          </section>

          <section>
            <h2>3. How we use information</h2>

            <p>
              Information submitted through the website
              may be used for the following purposes:
            </p>

            <ul>
              <li>Responding to business inquiries.</li>
              <li>Understanding project requirements.</li>
              <li>
                Discussing potential software development
                and technology engagements.
              </li>
              <li>
                Preparing proposals and communicating
                about requested services.
              </li>
              <li>
                Maintaining website security and
                preventing misuse of the contact form.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Contact form processing</h2>

            <p>
              Project inquiries are processed by our
              website backend and transmitted to our
              business email system.
            </p>

            <p>
              The current contact form implementation
              does not maintain a separate application
              database of submitted inquiries. Messages
              may be retained within our email system
              and subsequent business correspondence.
            </p>

            <p>
              The website uses server-side input
              validation and submission limits to
              help prevent misuse.
            </p>
          </section>

          <section>
            <h2>5. Cookies and website analytics</h2>

            <p>
              Website analytics can help us understand
              how visitors discover and use our website.
            </p>

            <p>
              Optional Google Analytics measurement is blocked
         by default. On environments where analytics is
         configured, the Google tag is loaded only after
         a visitor accepts analytics.
            </p>

            <p>
              Visitors can accept or reject optional analytics
         and change their preferences through the
         Cookie Settings control in the website footer.
         Further information is available in our{" "}
         <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2>6. Third-party service providers</h2>

            <p>
              We use Google email infrastructure to
              receive project inquiries submitted
              through the website.
            </p>

            <p>
              Website hosting and other infrastructure
              providers may also process information
              required to operate the website.
            </p>

            <p>
              Further information about Google&apos;s privacy
              practices is available in the{" "}
              <a href="https://policies.google.com/privacy">
                Google Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2>7. Data retention</h2>

            <p>
              Inquiry information may remain within
              business email correspondence.
            </p>

            <p>
              The company&apos;s applicable retention periods
              and deletion procedures must be confirmed
              before this policy is published.
            </p>
          </section>

          <section>
            <h2>8. International data processing</h2>

            <p>
              Indovate Technologies operates from India
              and communicates with businesses in
              different countries.
            </p>

            <p>
              The locations where service providers
              process information and applicable
              international transfer safeguards must
              be confirmed before public release.
            </p>
          </section>

          <section>
            <h2>9. Information security</h2>

            <p>
              The website implements technical measures
              including input validation, protected
              server-side credentials and encrypted
              SMTP connections for inquiry transmission.
            </p>

            <p>
              No method of electronic transmission
              or storage can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>10. Your privacy choices</h2>

            <p>
              Depending on applicable law, you may have
              rights concerning access to, correction
              of, deletion of or restrictions on the
              processing of your personal information.
            </p>

            <p>
              You may contact us with questions or
              requests concerning information you have
              submitted through this website.
            </p>
          </section>

          <section>
            <h2>11. External websites</h2>

            <p>
              Our website may contain links to external
              websites, including technical resources
              and social media platforms.
            </p>

            <p>
              Those websites operate under their own
              privacy policies and terms.
            </p>
          </section>

          <section>
            <h2>12. Contact information</h2>

            <address className={styles.address}>

              <strong>Indovate Technologies Pvt. Ltd.</strong>

              <p>
                2nd Floor, Shinde Heights,<br />
                Khori Galli, Vasant Nagar,<br />
                Latur, Maharashtra 413531,<br />
                India.
              </p>

              <p>
                General business contact:{" "}
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
