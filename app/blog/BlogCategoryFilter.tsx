"use client";

import {
  Fragment,
  useState,
  type ReactNode,
} from "react";

import styles from "./BlogCategoryFilter.module.css";

type Category = {
  id: string;
  label: string;
};

type ArticleEntry = {
  slug: string;
  category: string;
  content: ReactNode;
};

type BlogCategoryFilterProps = {
  categories: Category[];
  entries: ArticleEntry[];
  articleListClassName: string;
};

export default function BlogCategoryFilter({
  categories,
  entries,
  articleListClassName,
}: BlogCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const availableCategories = categories
    .map(category => ({
      ...category,
      count: entries.filter(
        entry => entry.category === category.id
      ).length,
    }))
    .filter(category => category.count > 0);

  const activeCategory =
    availableCategories.some(
      category => category.id === selectedCategory
    )
      ? selectedCategory
      : "all";

  const visibleArticles =
    activeCategory === "all"
      ? entries
      : entries.filter(
          entry => entry.category === activeCategory
        );

  const activeLabel =
    availableCategories.find(
      category => category.id === activeCategory
    )?.label || "All Insights";

  if (entries.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.navigation}>

        <h3 id="category-filter-heading">
          Browse by topic
        </h3>

        <div
          className={styles.filters}
          role="group"
          aria-labelledby="category-filter-heading"
        >

          <button
            type="button"
            className={styles.filter}
            aria-pressed={activeCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All Insights

            <span className={styles.count}>
              {entries.length}
            </span>
          </button>

          {availableCategories.map(category => (
            <button
              key={category.id}
              type="button"
              className={styles.filter}
              aria-pressed={
                activeCategory === category.id
              }
              onClick={() =>
                setSelectedCategory(category.id)
              }
            >
              {category.label}

              <span className={styles.count}>
                {category.count}
              </span>
            </button>
          ))}

        </div>

      </div>

      <div className={styles.results}>

        <p className={styles.activeLabel}>
          {activeLabel}
        </p>

        <p
          className={styles.resultCount}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {visibleArticles.length}{" "}
          {visibleArticles.length === 1
            ? "article"
            : "articles"}
        </p>

      </div>

      <div className={articleListClassName}>

        {visibleArticles.map(entry => (
          <Fragment key={entry.slug}>
            {entry.content}
          </Fragment>
        ))}

      </div>
    </>
  );
}
