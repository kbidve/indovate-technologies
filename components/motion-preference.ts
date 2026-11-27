"use client";

import { useSyncExternalStore } from "react";

const key = "indovate.motion-paused";
const eventName = "indovate-motion-change";

let fallback = false;

function getSnapshot() {
  try {
    return localStorage.getItem(key) === "true";
  } catch {
    return fallback;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useMotionPaused() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => false
  );
}

export function setMotionPaused(paused: boolean) {
  fallback = paused;

  try {
    localStorage.setItem(key, String(paused));
  } catch {
    // Use the in-memory preference if storage is unavailable.
  }

  window.dispatchEvent(new Event(eventName));
}
