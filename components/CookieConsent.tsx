"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import {
  getConsent,
  getServerConsent,
  saveConsent,
  subscribeConsent,
  enableAnalytics,
  disableAnalytics,
  type ConsentChoice,
} from "@/lib/analytics-consent";

import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const pathname = usePathname();

  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsent
  );

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  const [notice, setNotice] = useState("");

  const headingRef =
    useRef<HTMLHeadingElement>(null);

  const settingsRef =
    useRef<HTMLButtonElement>(null);

  const visible =
    consent === "pending" || settingsOpen;

  useEffect(() => {
    if (consent === "accepted") {
      enableAnalytics(pathname);
    } else {
      disableAnalytics();
    }
  }, [consent, pathname]);

  useEffect(() => {
    if (settingsOpen) {
      headingRef.current?.focus();
    }
  }, [settingsOpen]);

  function choose(choice: ConsentChoice) {
    const saved = saveConsent(choice);

    if (!saved) {
      setNotice(
        "Your browser could not save this preference. " +
        "Analytics remains disabled for this visit."
      );

      setSettingsOpen(true);
      return;
    }

    setNotice("");
    setSettingsOpen(false);

    if (settingsOpen) {
      settingsRef.current?.focus();
    }
  }

  return (
    <>
      <nav
        className={styles.legalNav}
        aria-label="Footer legal navigation"
      >
        <Link href="/privacy-policy">
          Privacy Policy
        </Link>

        <Link href="/terms-of-use">
          Terms of Use
        </Link>

        <Link href="/cookie-policy">
          Cookie Policy
        </Link>

        <button
          ref={settingsRef}
          id="cookie-settings"
          type="button"
          className={styles.settingsButton}
          aria-expanded={visible}
          aria-controls={visible ? "cookie-consent" : undefined}
          onClick={() => setSettingsOpen(true)}
        >
          Cookie Settings
        </button>
      </nav>

      {visible && (
        <section
          id="cookie-consent"
          className={styles.banner}
          aria-labelledby="cookie-consent-heading"
        >
          <div className={styles.content}>

            <h2
              ref={headingRef}
              id="cookie-consent-heading"
              tabIndex={-1}
            >
              Your privacy preferences
            </h2>

            <p>
              We use optional analytics to understand
              how visitors use our website. You can
              accept or reject analytics without
              affecting access to our website.
            </p>

            <p>
              Learn more in our{" "}
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link href="/cookie-policy">
                Cookie Policy
              </Link>.
            </p>

            {settingsOpen && consent !== "pending" && (
              <p className={styles.current}>
                Current preference:{" "}
                <strong>
                  Analytics {consent}
                </strong>
              </p>
            )}

            {notice && (
              <p role="alert" className={styles.notice}>
                {notice}
              </p>
            )}

          </div>

          <div className={styles.actions}>

            <button
              type="button"
              onClick={() => choose("rejected")}
            >
              Reject analytics
            </button>

            <button
              type="button"
              onClick={() => choose("accepted")}
            >
              Accept analytics
            </button>

            {settingsOpen && consent !== "pending" && (
              <button
                type="button"
                className={styles.close}
                onClick={() => {
                  setSettingsOpen(false);
                  settingsRef.current?.focus();
                }}
              >
                Close settings
              </button>
            )}

          </div>
        </section>
      )}
    </>
  );
}
