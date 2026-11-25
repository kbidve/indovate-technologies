export type ConsentChoice = "accepted" | "rejected";

export type ConsentStatus = ConsentChoice | "pending";

export const CONSENT_KEY =
  "indovate.analytics-consent.v1";

const CONSENT_EVENT =
  "indovate-analytics-consent-change";

const CONSENT_DURATION =
  180 * 24 * 60 * 60 * 1000;

const COOKIE_DURATION =
  180 * 24 * 60 * 60;

const PRODUCTION_ID = "G-640ZXWNRHC";

type ConsentRecord = {
  choice: ConsentChoice;
  expiresAt: number;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;

};

let rejectedForSession = false;
let initialized = false;
let analyticsEnabled = false;
let lastPath = "";

function getAnalyticsId(): string | null {
  const hostname = window.location.hostname;

  if (
    hostname === "www.indovatetechnologies.com" ||
    hostname === "indovateTechnologies.com".toLowerCase()
  ) {
    return PRODUCTION_ID;
  }

  const testId = process.env.NEXT_PUBLIC_GA_TEST_ID;

  if (
    (hostname === "localhost" ||
      hostname === "127.0.0.1") &&
    testId &&
    /^G-[A-Z0-9]+$/.test(testId) &&
    testId !== PRODUCTION_ID
  ) {
    return testId;
  }

  return null;
}

function readRecord(): ConsentRecord | null {
  if (
    typeof window === "undefined" ||
    rejectedForSession
  ) {
    return null;
  }

  try {
    const raw = localStorage.getItem(CONSENT_KEY);

    if (!raw) return null;

    const record = JSON.parse(raw);

    if (
      !record ||
      !["accepted", "rejected"].includes(record.choice) ||
      !Number.isFinite(record.expiresAt) ||
      record.expiresAt <= Date.now()
    ) {
      return null;
    }

    return record;
  } catch {
    return null;
  }
}

export function getConsent(): ConsentStatus {
  if (rejectedForSession) return "rejected";

  return readRecord()?.choice ?? "pending";
}

export function getServerConsent(): ConsentStatus {
  return "pending";
}

export function saveConsent(
  choice: ConsentChoice
): boolean {
  let saved = false;

  if (choice === "rejected") {
    disableAnalytics();
  }

  try {
    const record: ConsentRecord = {
      choice,
      expiresAt: Date.now() + CONSENT_DURATION,
    };

    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify(record)
    );

    rejectedForSession = false;
    saved = true;

  } catch {
    rejectedForSession = true;

    disableAnalytics();

    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // Browser storage may be unavailable.
    }
  }

  window.dispatchEvent(new Event(CONSENT_EVENT));

  return saved;
}

export function subscribeConsent(
  listener: () => void
): () => void {
  let timer: ReturnType<typeof setTimeout>;

  function scheduleExpiry() {
    clearTimeout(timer);

    const record = readRecord();

    if (!record) return;

    const remaining = Math.max(
      1,
      record.expiresAt - Date.now()
    );

    timer = setTimeout(
      synchronize,
      Math.min(remaining, 2147483647)
    );
  }

  function synchronize() {
    if (getConsent() !== "accepted") {
      disableAnalytics();
    }

    listener();
    scheduleExpiry();
  }

  function onStorage(event: StorageEvent) {
    if (
      event.key === CONSENT_KEY ||
      event.key === null
    ) {
      synchronize();
    }
  }

  window.addEventListener(
    CONSENT_EVENT,
    synchronize
  );

  window.addEventListener("storage", onStorage);

  window.addEventListener("focus", synchronize);

  document.addEventListener(
    "visibilitychange",
    synchronize
  );

  scheduleExpiry();

  return () => {
    clearTimeout(timer);

    window.removeEventListener(
      CONSENT_EVENT,
      synchronize
    );

    window.removeEventListener(
      "storage",
      onStorage
    );

    window.removeEventListener(
      "focus",
      synchronize
    );

    document.removeEventListener(
      "visibilitychange",
      synchronize
    );
  };
}

function removeAnalyticsCookies(id: string) {
  const names = [
    "_ga",
    `_ga_${id.slice(2)}`,
  ];

  const hostname = window.location.hostname;

  const domains = [
    "",
    `; Domain=${hostname}`,
  ];

  if (
    hostname === "www.indovatetechnologies.com" ||
    hostname === "indovatetechnologies.com"
  ) {
    domains.push(
      "; Domain=indovatetechnologies.com"
    );
  }

  const secure =
    location.protocol === "https:" ? "; Secure" : "";

  try {
    for (const name of names) {
      for (const domain of domains) {
        document.cookie =
          `${name}=; Max-Age=0; Path=/; SameSite=Lax` +
          domain +
          secure;
      }
    }
  } catch {
    // Cookie removal is best-effort.
  }
}

export function disableAnalytics() {
  if (typeof window === "undefined") return;

  const id = getAnalyticsId();

  if (!id) return;

  const browser = window as AnalyticsWindow;

  Reflect.set(browser, `ga-disable-${id}`, true);

  if (initialized && analyticsEnabled) {
    browser.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  analyticsEnabled = false;
  lastPath = "";

  removeAnalyticsCookies(id);
}

export function enableAnalytics(pathname: string) {
  if (getConsent() !== "accepted") return;

  const id = getAnalyticsId();

  if (!id) return;

  const browser = window as AnalyticsWindow;

  Reflect.set(browser, `ga-disable-${id}`, false);

  if (!initialized) {
    const layer =
      browser.dataLayer = browser.dataLayer || [];

    browser.gtag = function () {
      layer.push(arguments);
    };

    browser.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    browser.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    browser.gtag("js", new Date());

    browser.gtag("config", id, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: COOKIE_DURATION,
      cookie_update: false,
      cookie_path: "/",
    });

    const script = document.createElement("script");

    script.id = "indovate-google-analytics";
    script.async = true;

    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${id}`;

    document.head.appendChild(script);

    initialized = true;

  } else if (!analyticsEnabled) {
    browser.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  analyticsEnabled = true;

  if (lastPath === pathname) return;

  let referrer = "";

  if (lastPath) {
    referrer = location.origin + lastPath;

  } else if (document.referrer) {
    try {
      referrer = new URL(document.referrer).origin;
    } catch {
      // Ignore invalid referrer information.
    }
  }

  browser.gtag?.("event", "page_view", {
    send_to: id,
    page_location: location.origin + pathname,
    page_referrer: referrer,
    page_title: document.title,
  });

  lastPath = pathname;
}
