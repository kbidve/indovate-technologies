import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const companyLinks = [
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Our work",
    href: "/portfolio",
  },
  {
    label: "How we work",
    href: "/#process",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const expertiseLinks = [
  {
    label: "Custom software development",
    href: "/services/custom-software-development",
  },
  {
    label: "AI development",
    href: "/services/ai-development",
  },
  {
    label: "Web & SaaS development",
    href: "/services/web-saas-development",
  },
  {
    label: "ERP & enterprise solutions",
    href: "/services/enterprise-solutions",
  },
  {
    label: "Business automation",
    href: "/services/business-automation",
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
  },
  {
    label: "Engineering expertise",
    href: "/#engineering",
  },
  {
    label: "All services",
    href: "/services",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="iv-container">

        <div className={styles.layout}>

          <div className={styles.company}>

            <Link
              href="/"
              className={styles.brand}
              aria-label="Indovate Technologies homepage"
            >
              <Image
                src="/Images/indovatelogo.png"
                alt=""
                width={44}
                height={44}
                className={styles.logo}
              />

              <div>
                <span className={styles.brandName}>
                  Indovate Technologies
                </span>

                <span className={styles.brandCaption}>
                  Software &amp; AI Engineering
                </span>
              </div>

            </Link>

            <p className={styles.description}>
              We help businesses design, build and
              modernize software through custom application
              development, enterprise solutions and
              artificial intelligence.
            </p>

            <ul className={styles.socials}>
              <li>
                <a href="https://www.linkedin.com/company/indovate-technologies">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Indovate-Technologies/61580359829668/">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/indovate_tech/">
                  Instagram
                </a>
              </li>
            </ul>

          </div>

          <nav aria-label="Footer company navigation">

            <h2 className={styles.heading}>
              Company
            </h2>

            <ul className={styles.links}>

              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </nav>

          <nav aria-label="Footer expertise navigation">

            <h2 className={styles.heading}>
              Expertise
            </h2>

            <ul className={styles.links}>

              {expertiseLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </nav>

          <div className={styles.contact}>

            <h2 className={styles.heading}>
              Get in touch
            </h2>

            <address className={styles.address}>

              <a
                href="mailto:kailas.bidve@indovatetechnologies.com"
                className={styles.email}
              >
                kailas.bidve@indovatetechnologies.com
              </a>

              <p>
                2nd Floor, Shinde Heights,
                <br />
                Khori Galli, Vasant Nagar,
                <br />
                Latur, Maharashtra 413531,
                <br />
                India.
              </p>

            </address>

          </div>

        </div>

        <div className={styles.bottom}>

          <p>
            &copy; {new Date().getUTCFullYear()} Indovate
            Technologies. All rights reserved.
          </p>

          <p>
            Based in India. Working worldwide.
          </p>

        </div>

      </div>
    </footer>
  );
}
