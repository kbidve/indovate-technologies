import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import AnimatedBrandLogo from "./AnimatedBrandLogo";
import styles from "./HomeHeroRedesign.module.css";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className="iv-container">

        <div className={styles.layout}>

          <div className={styles.content}>

            <p className="iv-section-label">
              Software &amp; AI Engineering
            </p>

            <h1
              id="hero-heading"
              className={styles.headline}
            >
              Custom software and{" "}
              <span>AI development.</span>
            </h1>

            <p className={styles.description}>
              We build custom business applications,
              SaaS products and enterprise software,
              modernize existing systems and integrate
              generative AI into business operations.
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
                className="iv-button-secondary"
              >
                Explore our services
              </Link>

            </div>

          </div>

          <AnimatedBrandLogo />

        </div>



      </div>
    </section>
  );
}
