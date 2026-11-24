import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./ContactInformation.module.css";

export default function ContactInformation() {
  return (
    <section
      id="contact-information"
      className={styles.section}
      aria-labelledby="contact-information-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Get In Touch
          </p>

          <h2
            id="contact-information-heading"
            className="iv-section-heading"
          >
            Connect with our team.
          </h2>

        </div>

        <div className={styles.details}>

          <div className={styles.item}>

            <FiMail
              className={styles.icon}
              size={24}
              aria-hidden="true"
            />

            <h3>Business &amp; project inquiries</h3>

            <p>
              Contact us directly to discuss your
              software or AI requirements.
            </p>

            <a
              href="mailto:kailas.bidve@indovatetechnologies.com"
              className={styles.email}
            >
              kailas.bidve@indovatetechnologies.com
            </a>

          </div>

          <div className={styles.item}>

            <FiMapPin
              className={styles.icon}
              size={24}
              aria-hidden="true"
            />

            <h3>Company location</h3>

            <address className={styles.address}>
              Indovate Technologies Pvt. Ltd.
              <br />
              Latur, Maharashtra, India
            </address>

            <Link
              href="/about"
              className={styles.link}
            >
              About our company

              <FiArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </Link>

          </div>

          <div className={styles.item}>

            <FiGlobe
              className={styles.icon}
              size={24}
              aria-hidden="true"
            />

            <h3>International collaboration</h3>

            <p>
              Welcoming software and AI project
              inquiries from businesses worldwide.
              Collaboration arrangements are agreed
              according to project requirements.
            </p>

            <Link
              href="/about#global-collaboration"
              className={styles.link}
            >
              How we collaborate

              <FiArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
