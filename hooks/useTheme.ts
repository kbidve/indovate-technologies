'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook for theme detection and management
 * Handles both dark mode class changes and system preference changes
 */
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const root = document.documentElement;
    if (root.classList.contains('dark')) return true;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const mm = window.matchMedia?.('(prefers-color-scheme: dark)');
    const update = () => setIsDark(root.classList.contains('dark') || mm?.matches || false);
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    mm?.addEventListener?.('change', update);
    return () => {
      observer.disconnect();
      mm?.removeEventListener?.('change', update);
    };
  }, []);

  return isDark;
}