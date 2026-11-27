"use client";

import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  navigationMenus,
  type NavigationMenu,
} from "./navigation-data";

import styles from "./Navbar.module.css";

type MenuContentProps = {
  menu: NavigationMenu;
  pathname: string;
  onNavigate: () => void;
};

function MenuContent({
  menu,
  pathname,
  onNavigate,
}: MenuContentProps) {
  return (
    <>
      <div className={styles.panelGrid}>
        {menu.groups.map((group) => (
          <div
            key={group.title}
            className={styles.group}
          >
            <p className={styles.groupTitle}>
              {group.title}
            </p>

            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className={styles.menuLink}
                    onClick={onNavigate}
                    aria-current={
                      pathname === link.href
                        ? "page"
                        : undefined
                    }
                  >
                    <span className={styles.linkContent}>
                      <span className={styles.linkTitle}>
                        {link.label}
                      </span>

                      <span className={styles.linkDescription}>
                        {link.description}
                      </span>
                    </span>

                    <FiArrowUpRight
                      className={styles.linkArrow}
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.panelFooter}>
        <Link
          href={menu.overview.href}
          prefetch={false}
          onClick={onNavigate}
          className={styles.overviewLink}
        >
          {menu.overview.label}

          <FiArrowRight
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </>
  );
}

function Navigation({
  pathname,
}: {
  pathname: string;
}) {
  const [active, setActive] =
    useState<string | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileSection, setMobileSection] =
    useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);

  const surfaceRef = useRef<HTMLDivElement>(null);

  const previousMenu = useRef<string | null>(null);

  useLayoutEffect(() => {
    const surface = surfaceRef.current;

    if (!surface) return;

    if (!active) {
      previousMenu.current = null;
      return;
    }

    const panel = document.getElementById(
      `desktop-${active}-panel`
    );

    if (!panel) return;

    surface.dataset.resize =
      String(previousMenu.current !== null);

    previousMenu.current = active;

    function resizeSurface() {
      if (surface && panel) {
        surface.style.height =
          `${panel.offsetHeight}px`;
      }
    }

    resizeSurface();

    const observer = new ResizeObserver(
      resizeSurface
    );

    observer.observe(panel);

    return () => observer.disconnect();
  }, [active]);

  const mobileButton =
    useRef<HTMLButtonElement>(null);

  function closeNavigation() {
    setActive(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  function isActive(menu: NavigationMenu) {
    if (menu.id === "solutions") return false;

    const href = menu.overview.href;

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`) ||
      (menu.id === "company" &&
        pathname === "/contact")
    );
  }

  useEffect(() => {
    function handleOutsideClick(
      event: PointerEvent
    ) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setActive(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    }

    const media = window.matchMedia(
      "(min-width: 1200px)"
    );

    function handleBreakpointChange() {
      setActive(null);
      setMobileOpen(false);
      setMobileSection(null);
    }

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    media.addEventListener(
      "change",
      handleBreakpointChange
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );

      media.removeEventListener(
        "change",
        handleBreakpointChange
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`iv-header ${styles.header}`}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;

        if (mobileOpen) {
          event.preventDefault();

          closeNavigation();
          mobileButton.current?.focus();

          return;
        }

        if (active) {
          event.preventDefault();

          document
            .getElementById(
              `desktop-${active}-trigger`
            )
            ?.focus();

          setActive(null);
        }
      }}
    >
      <div className={`iv-container ${styles.inner}`}>

        <Link
          href="/"
          className={`iv-brand ${styles.brand}`}
          onClick={closeNavigation}
        >
          <BrandLogo
            staticSrc="/Images/indovate-brand-logo.png"
            alt=""
            width={46}
            height={46}
            loading="eager"
            className={styles.brandImage}
          />

          <div className={styles.brandText}>
            <span className="iv-brand-name">
              Indovate Technologies
            </span>

            <span className="iv-brand-caption">
              Software &amp; AI Engineering
            </span>
          </div>
        </Link>

        <nav
          className={styles.desktop}
          aria-label="Main navigation"
          onPointerLeave={(event) => {
            if (event.pointerType !== "mouse") return;

            if (
              event.currentTarget.querySelector(
                "[data-mega-panel]:focus-within"
              )
            ) {
              return;
            }

            setActive(null);
          }}
        >
          <div
            ref={surfaceRef}
            className={styles.megaSurface}
            data-mega-surface
            data-open={active !== null}
            aria-hidden="true"
          />
          <Link
            href="/"
            className={styles.topLink}
            aria-current={
              pathname === "/" ? "page" : undefined
            }
            onClick={closeNavigation}
            onPointerEnter={(event) => {
              if (
                event.pointerType === "mouse" &&
                !headerRef.current?.querySelector(
                  "[data-mega-panel]:focus-within"
                )
              ) {
                setActive(null);
              }
            }}
          >
            Home
          </Link>

          {navigationMenus.map((menu) => {
            const expanded = active === menu.id;

            const panelId =
              `desktop-${menu.id}-panel`;

            return (
              <div
                key={menu.id}
                className={styles.menuItem}

                onPointerEnter={(event) => {
                  if (
                    event.pointerType === "mouse" &&
                    !headerRef.current?.querySelector(
                      "[data-mega-panel]:focus-within"
                    )
                  ) {
                    setActive(menu.id);
                  }
                }}

                onBlur={(event) => {
                  if (
                    event.relatedTarget instanceof Node &&
                    event.currentTarget.contains(
                      event.relatedTarget
                    )
                  ) {
                    return;
                  }

                  setActive((current) =>
                    current === menu.id
                      ? null
                      : current
                  );
                }}
              >
                <button
                  type="button"
                  id={`desktop-${menu.id}-trigger`}
                  className={styles.trigger}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  data-active={isActive(menu)}
                  onClick={() =>
                    setActive((current) =>
                      current === menu.id
                        ? null
                        : menu.id
                    )
                  }
                >
                  {menu.label}

                  <FiChevronDown
                    size={15}
                    className={styles.chevron}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  className={styles.megaPanel}
                  data-mega-panel
                  data-open={expanded}
                  inert={!expanded}
                >
                  <MenuContent
                    menu={menu}
                    pathname={pathname}
                    onNavigate={closeNavigation}
                  />
                </div>
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={`iv-button-primary ${styles.desktopCta}`}
          onClick={closeNavigation}
        >
          Discuss Your Project

          <FiArrowRight
            size={18}
            aria-hidden="true"
          />
        </Link>

        <button
          ref={mobileButton}
          type="button"
          className={styles.menuButton}
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileSection(null);
          }}
        >
          {mobileOpen ? (
            <FiX size={24} aria-hidden="true" />
          ) : (
            <FiMenu size={24} aria-hidden="true" />
          )}
        </button>

      </div>

      <nav
        id="mobile-navigation"
        className={styles.mobile}
        aria-label="Mobile navigation"
        data-open={mobileOpen}
        inert={!mobileOpen}
      >
        <div className={styles.mobileScroll}>
        <div className="iv-container">

          <Link
            href="/"
            className={styles.mobileHome}
            aria-current={
              pathname === "/" ? "page" : undefined
            }
            onClick={closeNavigation}
          >
            Home
          </Link>

          {navigationMenus.map((menu) => {
            const expanded =
              mobileSection === menu.id;

            const panelId =
              `mobile-${menu.id}-panel`;

            return (
              <div
                key={menu.id}
                className={styles.mobileItem}
              >
                <button
                  type="button"
                  className={styles.mobileTrigger}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  data-active={isActive(menu)}
                  onClick={() =>
                    setMobileSection((current) =>
                      current === menu.id
                        ? null
                        : menu.id
                    )
                  }
                >
                  {menu.label}

                  <FiChevronDown
                    size={20}
                    className={styles.chevron}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  className={styles.mobilePanel}
                  data-open={expanded}
                  inert={!expanded}
                >
                  <div className={styles.mobilePanelInner}>
                    <div className={styles.mobilePanelContent}>
                      <MenuContent
                        menu={menu}
                        pathname={pathname}
                        onNavigate={closeNavigation}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href="/contact"
            className={`iv-button-primary ${styles.mobileCta}`}
            onClick={closeNavigation}
          >
            Discuss Your Project

            <FiArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>
        </div>
      </nav>
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Navigation
      key={pathname}
      pathname={pathname}
    />
  );
}
