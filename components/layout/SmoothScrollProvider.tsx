"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SmoothScrollContext = createContext<Lenis | null>(null);
const HEADER_OFFSET = 96;

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

type SmoothScrollProviderProps = {
  children: ReactNode;
};

function getTargetFromHash(hash: string) {
  if (!hash || hash === "#") return null;

  try {
    return document.getElementById(decodeURIComponent(hash.replace("#", "")));
  } catch {
    return document.getElementById(hash.replace("#", ""));
  }
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const rafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  const scrollToHash = useCallback((hash: string, immediate = false) => {
    const target = getTargetFromHash(hash);

    if (!target) return false;

    const lenisInstance = lenisRef.current;

    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        offset: -HEADER_OFFSET,
        immediate,
      });
    } else {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(targetTop - HEADER_OFFSET, 0),
        behavior: immediate ? "auto" : "smooth",
      });
    }

    return true;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setLenis(null);
      return;
    }

    const lenisInstance = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    const raf = (time: number) => {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    const handleResize = () => {
      lenisInstance.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      lenisInstance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const applyRouteScroll = window.setTimeout(() => {
      if (window.location.hash && scrollToHash(window.location.hash, true)) {
        return;
      }

      lenisRef.current?.scrollTo(0, { immediate: true });
    }, 60);

    return () => window.clearTimeout(applyRouteScroll);
  }, [pathname, scrollToHash]);

  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash) return;

      window.setTimeout(() => {
        scrollToHash(window.location.hash);
      }, 40);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href*='#']");

      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");

      if (!rawHref || rawHref === "#") return;

      const url = new URL(rawHref, window.location.href);
      const isSamePath =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        Boolean(url.hash);

      if (!isSamePath) return;

      const didScroll = scrollToHash(url.hash);

      if (!didScroll) return;

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.hash}`);
    };

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [scrollToHash]);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
