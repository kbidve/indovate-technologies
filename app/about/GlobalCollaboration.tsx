import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./GlobalCollaboration.module.css";

const collaborationPractices = [
  {
    title: "Requirements discovery",
    description:
      "Understand business objectives, existing systems, technical requirements and project expectations before defining the engineering approach.",
  },
  {
    title: "Remote collaboration",
    description:
      "Coordinate project communication, technical discussions and development activities across locations and agreed working hours.",
  },
  {
    title: "Transparent delivery",
    description:
      "Define project milestones, review implementation progress and maintain visibility into important engineering decisions throughout development.",
  },
  {
    title: "Long-term engineering",
    description:
      "Plan for documentation, technical handover, application maintenance and future improvements according to the agreed project scope.",
  },
];

const markets = [
  "India",
  "North America",
  "Europe",
  "Middle East",
  "Asia-Pacific",
];

export default function GlobalCollaboration() {
  return (
    <section
      id="global-collaboration"
      className={styles.section}
      aria-labelledby="global-collaboration-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Global Collaboration
          </p>

          <h2
            id="global-collaboration-heading"
            className="iv-section-heading"
          >
            Based in India.
            Built for global collaboration.
          </h2>

          <p className={styles.introduction}>
            We approach software engineering partnerships
            with clear communication, structured delivery
            and an understanding of each client&apos;s
            business requirements, regardless of location.
          </p>

        </div>

        <div className={styles.practices}>

          {collaborationPractices.map((practice) => (
            <article
              key={practice.title}
              className={styles.practice}
            >

              <h3>{practice.title}</h3>

              <p>{practice.description}</p>

            </article>
          ))}

        </div>

        <div className={styles.markets}>

          <div>

            <h3>Our market focus</h3>

            <p>
              Based in Latur, Maharashtra, India,
              we welcome project inquiries from
              businesses across international markets.
            </p>

          </div>

          <ul className={styles.marketList}>
            {markets.map((market) => (
              <li key={market}>{market}</li>
            ))}
          </ul>

        </div>

        <Link
          href="/#process"
          className={styles.link}
        >
          Learn more about our delivery process

          <FiArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </Link>

      </div>
    </section>
  );
}
