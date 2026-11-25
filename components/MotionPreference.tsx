"use client";

import {
  useMotionPaused,
  setMotionPaused,
} from "./motion-preference";

export default function MotionPreference() {
  const paused = useMotionPaused();

  return (
    <button
      id="iv-motion-toggle"
      type="button"
      aria-pressed={paused}
      onClick={() => setMotionPaused(!paused)}
    >
      Pause animations
    </button>
  );
}
