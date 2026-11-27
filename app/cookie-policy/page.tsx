import type { Metadata } from "next";
import Link from "next/link";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Cookie Policy | Indovate Technologies",
  },

  description:
    "Learn about cookies, browser storage, website analytics and privacy preferences on the Indovate Technologies website.",

  alternates: {
    canonical: "/cookie-policy",
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

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <div className="iv-container">

        <nav
          className={styles.breadcrumb}
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Cookie Policy</span>
        </nav>

        <header className={styles.header}>

          <p className="iv-section-label">
            Privacy &amp; Legal
          </p>

          <h1>Cookie Policy</h1>

          <p className={styles.introduction}>
            This Cookie Policy explains the use of
            cookies, browser storage and analytics
            technologies on the Indovate Technologies
            website.
          </p>

          <p className={styles.draftNotice}>
            Draft for internal review. Final analytics
         configuration, company approval and legal
         review remain pending.
          </p>

        </header>

        <div className={styles.content}>

          <section>
            <h2>1. What are cookies?</h2>

            <p>
              Cookies are small pieces of information
              stored by a website in your browser.
              They can support website functionality,
              preferences and visitor measurement.
            </p>

            <p>
              Websites may also use browser storage
              technologies, such as local storage,
              to remember information between visits.
            </p>
          </section>

          <section>
            <h2>2. Essential website functionality</h2>

            <p>
              Essential technologies support requested
              website functions, security and necessary
              visitor preferences.
            </p>

            <p>
              Our consent management system stores your
         analytics preference in browser local storage
         so the website can respect your selection
         during subsequent visits.
            </p>

            <p>
              This preference is used to remember your
         analytics consent choice.
            </p>
          </section>

          <section>
            <h2>3. Analytics technologies</h2>

            <p>
              Google Analytics can help us understand
              how visitors discover and use our website.
            </p>

            <p>
              Analytics is disabled by default.
         Development environments do not use our
         production Google Analytics property.
            </p>

            <p>
              Our analytics implementation requires an
         affirmative visitor choice before loading
         Google Analytics on configured environments.
            </p>

            <ul>
              <li>Website page visits.</li>
              <li>Traffic and referral information.</li>
              <li>General browser and device information.</li>
              <li>Website interaction measurements.</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookie and storage inventory</h2>

            <p>
              The following inventory describes the
         technologies used or configured in our
         consent management and analytics implementation.
            </p>

            <ul>
              <li>
                <strong>_ga:</strong>{" "}
                Google Analytics cookie used to
                distinguish visitors.
              </li>

              <li>
                <strong>_ga_640ZXWNRHC:</strong>{" "}
                Google Analytics cookie associated
                with session measurement.
              </li>

              <li>
                <strong>indovate.analytics-consent.v1:</strong>{" "}
                Local storage key used to remember your
         analytics preference for 180 days.
              </li>
            </ul>

            <p>
              Analytics cookies are configured with a
         180-day expiration period. Actual browser
         storage behavior and analytics data retention
         settings require separate verification.
            </p>
          </section>

          <section>
            <h2>5. Managing your consent</h2>

            <p>
              Our consent controls allow visitors to accept
         or reject optional analytics without preventing
         access to the main website.
            </p>

            <p>
              Visitors can revisit their preferences and
         withdraw analytics consent using the{" "}
         <a href="#cookie-settings">Cookie Settings</a>
         {" "}control in the website footer.
            </p>

            <p>
              When consent is withdrawn, the application
         disables analytics collection and attempts
         to remove its analytics cookies. Withdrawal
         does not automatically delete information
         previously transmitted to Google.
            </p>
          </section>

          <section>
            <h2>6. Managing browser cookies</h2>

            <p>
              Most web browsers provide settings for
              reviewing, blocking and deleting cookies
              and other website storage.
            </p>

            <p>
              Clearing website storage may remove
              previously saved preferences and require
              you to select them again.
            </p>

            <p>
              Browser settings may also affect certain
              website functions.
            </p>
          </section>

          <section>
            <h2>7. Third-party technologies</h2>

            <p>
              When analytics is enabled following
              visitor consent, Google may process
              measurement information in accordance
              with its applicable services and policies.
            </p>

            <ul>
              <li>
                <a href="https://policies.google.com/privacy">
                  Google Privacy Policy
                </a>
              </li>

              <li>
                <a href="https://policies.google.com/technologies/partner-sites">
                  How Google uses information from
                  websites and applications
                </a>
              </li>
            </ul>

            <p>
              External websites linked from our website
              may operate their own cookie and privacy
              arrangements.
            </p>
          </section>

          <section>
            <h2>8. Further privacy information</h2>

            <p>
              For information about project inquiries
              and other personal information processed
              through our website, please review our{" "}
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>.
            </p>

            <p>
              General website usage conditions are
              described in our{" "}
              <Link href="/terms-of-use">
                Terms of Use
              </Link>.
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
