import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

import {
  getArticlesForService,
  getArticlePath,
  getReadingTime,
  insightCategories,
} from "@/lib/insights";

import styles from "./RelatedInsights.module.css";

type RelatedInsightsProps = {
  serviceSlug: string;
};

export default function RelatedInsights({
  serviceSlug,
}: RelatedInsightsProps) {
  const articles = getArticlesForService(serviceSlug);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      id="service-insights"
      className={styles.section}
      aria-labelledby="service-insights-heading"
    >
      <div className="iv-container">

        <p className="iv-section-label">
          Insights &amp; Perspectives
        </p>

        <h2
          id="service-insights-heading"
          className="iv-section-heading"
        >
          Related insights.
        </h2>

        <p className={styles.introduction}>
          Explore practical considerations, engineering
          approaches and technology decisions relevant
          to this service.
        </p>

        <div className={styles.directory}>

          {articles.map(article => (
            <article
              key={article.slug}
              className={styles.article}
            >
              <div className={styles.metadata}>

                <span className={styles.category}>
                  {insightCategories[article.category]}
                </span>

                <span>
                  {getReadingTime(article)} min read
                </span>

              </div>

              <h3>
                <Link href={getArticlePath(article.slug)}>
                  {article.title}

                  <FiArrowUpRight
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </h3>

              <p>{article.excerpt}</p>

            </article>
          ))}

        </div>

        <Link
          href="/blog"
          className="iv-button-secondary"
        >
          Explore All Insights

          <FiArrowRight
            size={18}
            aria-hidden="true"
          />
        </Link>

      </div>
    </section>
  );
}
