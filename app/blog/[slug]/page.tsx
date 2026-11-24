import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import {
  getPublishedArticles,
  getPublishedArticle,
  getRelatedArticles,
  getArticlePath,
  getServicePath,
  getReadingTime,
  insightCategories,
  type ServiceSlug,
} from "@/lib/insights";

import styles from "./Article.module.css";
import ArticleStructuredData from "./ArticleStructuredData";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const serviceNames: Record<ServiceSlug, string> = {
  "custom-software-development": "Custom Software Development",
  "ai-development": "AI & Generative AI Development",
  "web-saas-development": "Web & SaaS Development",
  "enterprise-solutions": "ERP & Enterprise Solutions",
  "business-automation": "Business Process Automation",
  "cloud-devops": "Cloud & DevOps",
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles().map(article => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);

  if (!article) {
    notFound();
  }

  const title =
    `${article.seoTitle} | Indovate Technologies`;

  return {
    title: {
      absolute: title,
    },

    description: article.seoDescription,

    alternates: {
      canonical: getArticlePath(article.slug),
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description: article.seoDescription,
      url: getArticlePath(article.slug),
      siteName: "Indovate Technologies",
      type: "article",
      locale: "en_IN",
      publishedTime: article.publishedAt,
      modifiedTime:
        article.updatedAt || article.publishedAt,

      images: [
        {
          url: "/Images/indovatelogo.png",
          alt: "Indovate Technologies",
        },
      ],
    },

    twitter: {
      card: "summary",
      title,
      description: article.seoDescription,
      images: ["/Images/indovatelogo.png"],
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <>
      <ArticleStructuredData article={article} />
      <article
        id="insight-article"
        className={styles.article}
        aria-labelledby="article-heading"
      >
        <header className={styles.hero}>
          <div className="iv-container">

            <nav
              className={styles.breadcrumb}
              aria-label="Breadcrumb"
            >
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog">Insights</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Article</li>
              </ol>
            </nav>

            <div className={styles.heroContent}>

              <p className="iv-section-label">
                {insightCategories[article.category]}
              </p>

              <h1 id="article-heading">
                {article.title}
              </h1>

              <p className={styles.excerpt}>
                {article.excerpt}
              </p>

              <div className={styles.metadata}>

                <span>Indovate Technologies</span>

                <time dateTime={article.publishedAt}>
                  {dateFormatter.format(
                    new Date(article.publishedAt)
                  )}
                </time>

                <span>
                  {getReadingTime(article)} min read
                </span>

              </div>

              {article.updatedAt &&
                article.updatedAt !== article.publishedAt && (
                  <p className={styles.updated}>
                    Updated:{" "}
                    <time dateTime={article.updatedAt}>
                      {dateFormatter.format(
                        new Date(article.updatedAt)
                      )}
                    </time>
                  </p>
                )}

            </div>
          </div>
        </header>

        <div className="iv-container">
          <div className={styles.layout}>

            <aside className={styles.sidebar}>
              <nav
                className={styles.contents}
                aria-label="Article contents"
              >
                <h2>In this article</h2>

                <ol>
                  {article.sections.map((section, index) => (
                    <li key={index}>
                      <a href={`#article-section-${index + 1}`}>
                        {section.heading}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a href="#article-conclusion">
                      Conclusion
                    </a>
                  </li>
                </ol>
              </nav>
            </aside>

            <div className={styles.body}>

              <p className={styles.introduction}>
                {article.introduction}
              </p>

              {article.sections.map((section, index) => (
                <section
                  key={index}
                  id={`article-section-${index + 1}`}
                  className={styles.contentSection}
                  aria-labelledby={`article-heading-${index + 1}`}
                >
                  <h2 id={`article-heading-${index + 1}`}>
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {Boolean(section.bullets?.length) && (
                    <ul>
                      {section.bullets?.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                </section>
              ))}

              <section
                id="article-conclusion"
                className={styles.contentSection}
                aria-labelledby="conclusion-heading"
              >
                <h2 id="conclusion-heading">Conclusion</h2>
                <p>{article.conclusion}</p>
              </section>

                {Boolean(article.sources?.length) && (
                <section
                  id="article-references"
                  className={styles.references}
                  aria-labelledby="article-references-heading"
                >
                  <h2 id="article-references-heading">
                    References and further reading
                  </h2>

                  <ul>
                    {article.sources?.map(source => (
                      <li key={source.href}>
                        <a href={source.href}>
                          {source.label}

                          <FiArrowUpRight
                            size={16}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {article.relatedServices.length > 0 && (
                <section
                  className={styles.relatedServices}
                  aria-labelledby="related-services-heading"
                >
                  <h2 id="related-services-heading">
                    Related engineering services
                  </h2>

                  <ul>
                    {article.relatedServices.map(service => (
                      <li key={service}>
                        <Link href={getServicePath(service)}>
                          {serviceNames[service]}

                          <FiArrowUpRight
                            size={18}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className={styles.back}>
                <Link href="/blog">
                  &larr; Back to all insights
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section
          className={styles.relatedArticles}
          aria-labelledby="related-articles-heading"
        >
          <div className="iv-container">

            <p className="iv-section-label">
              Continue Reading
            </p>

            <h2
              id="related-articles-heading"
              className="iv-section-heading"
            >
              Related insights
            </h2>

            <div className={styles.relatedList}>
              {relatedArticles.map(related => (
                <article key={related.slug}>
                  <h3>
                    <Link href={getArticlePath(related.slug)}>
                      {related.title}

                      <FiArrowUpRight
                        size={18}
                        aria-hidden="true"
                      />
                    </Link>
                  </h3>

                  <p>{related.excerpt}</p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}

      <section
        id="article-inquiry"
        className={styles.cta}
        aria-labelledby="article-inquiry-heading"
      >
        <div className="iv-container">

          <p className="iv-section-label">
            From Insights to Implementation
          </p>

          <h2 id="article-inquiry-heading">
            Discuss your technology requirements.
          </h2>

          <p>
            Explore how software engineering and AI
            could address your business requirements
            with Indovate Technologies.
          </p>

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

        </div>
      </section>
    </>
  );
}
