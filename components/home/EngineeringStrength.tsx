import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./EngineeringStrength.module.css";

const technologyGroups = [
  {
    title: "Backend engineering",
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend engineering",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Artificial intelligence",
    technologies: [
      "LangChain",
      "LangGraph",
      "LLM APIs",
      "Vector Search",
    ],
  },
  {
    title: "Cloud & integration",
    technologies: [
      "Docker",
      "REST APIs",
      "Git",
      "CI/CD",
    ],
  },
];

export default function EngineeringStrength() {
  return (
    <section
      id="engineering"
      className={styles.section}
      aria-labelledby="engineering-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Engineering &amp; Technology
          </p>

          <h2
            id="engineering-heading"
            className="iv-section-heading"
          >
            Engineering for the long term.
          </h2>

          <p className={styles.description}>
            We build maintainable software with an
            emphasis on scalable architecture, secure
            development, testing and reliable delivery.
            Our technology choices are guided by your
            business requirements and long-term goals.
          </p>

        </div>

        <div className={styles.technologySection}>

          <h3 className={styles.stackHeading}>
            Technologies we work with
          </h3>

          <dl className={styles.technologyGroups}>

            {technologyGroups.map((group) => (
              <div
                key={group.title}
                className={styles.technologyGroup}
              >

                <dt>{group.title}</dt>

                <dd>
                  <ul className={styles.technologyList}>

                    {group.technologies.map((technology) => (
                      <li key={technology}>
                        {technology}
                      </li>
                    ))}

                  </ul>
                </dd>

              </div>
            ))}

          </dl>

        </div>

        <Link
          href="/contact"
          className={styles.link}
        >
          Discuss your technical requirements

          <FiArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </Link>

      </div>
    </section>
  );
}
