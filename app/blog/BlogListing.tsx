import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import {
  getPublishedArticles,
  getArticlePath,
  getReadingTime,
  insightCategories,
} from "@/lib/insights";

import BlogCategoryFilter from "./BlogCategoryFilter";

import styles from "./BlogListing.module.css";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function BlogListing() {
  const articles = getPublishedArticles();

  return (
    <section
      id="blog-articles"
      className={styles.section}
      aria-labelledby="blog-articles-heading"
    >
      <div className="iv-container">

        <div className={styles.header}>

          <p className="iv-section-label">
            Explore Our Insights
          </p>

          <h2
            id="blog-articles-heading"
            className="iv-section-heading"
          >
            Latest articles
          </h2>

          <p className={styles.introduction}>
            Explore practical engineering perspectives
            and technology considerations for businesses
            planning their next digital initiative.
          </p>

        </div>

        {articles.length === 0 ? (
          <div
            id="blog-empty-state"
            className={styles.emptyState}
          >
            <h3>New insights are in development.</h3>

            <p>
              We are preparing articles covering software
              development, enterprise AI, SaaS platforms
              and business process automation.
              In the meantime, explore our engineering
              services.
            </p>

            <Link
              href="/services"
              className={styles.link}
            >
              Explore our services

              <FiArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : (
          <BlogCategoryFilter
            categories={Object.entries(insightCategories).map(
              ([id, label]) => ({ id, label })
            )}
            entries={articles.map(article => ({
              slug: article.slug,
              category: article.category,
              content: (
                <article
                key={article.slug}
                className={styles.article}
              >

                <div className={styles.metadata}>

                  <p className={styles.category}>
                    {insightCategories[article.category]}
                  </p>

                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>

                  <span>
                    {getReadingTime(article)} min read
                  </span>

                </div>

                <div className={styles.content}>

                  <h3>
                    <Link
                      href={getArticlePath(article.slug)}
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p>{article.excerpt}</p>

                  <Link
                    href={getArticlePath(article.slug)}
                    className={styles.link}
                    aria-label={`Read article: ${article.title}`}
                  >
                    Read article

                    <FiArrowUpRight
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>

                </div>

              </article>
              ),
            }))}
            articleListClassName={styles.articles}
          />
        )}

      </div>
    </section>
  );
}
