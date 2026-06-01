"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaExclamationTriangle,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const AUDIO_STORAGE_KEY = "indovate-background-audio-enabled";
const AUDIO_SRC = "/audio/indovate-ambient.mp3";
const TARGET_VOLUME = 0.18;
const FADE_STEP = 0.018;
const FADE_INTERVAL_MS = 45;

type AudioStatus = "idle" | "loading" | "playing" | "muted" | "error";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const enabledRef = useRef(false);

  const [status, setStatus] = useState<AudioStatus>("playing");

  const clearFadeTimer = () => {
    if (fadeTimerRef.current !== null) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };

  const fadeTo = (targetVolume: number, onDone?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;

    clearFadeTimer();

    fadeTimerRef.current = window.setInterval(() => {
      const diff = targetVolume - audio.volume;

      if (Math.abs(diff) <= FADE_STEP) {
        audio.volume = targetVolume;
        clearFadeTimer();
        onDone?.();
        return;
      }

      audio.volume = Math.max(
        0,
        Math.min(1, audio.volume + Math.sign(diff) * FADE_STEP),
      );
    }, FADE_INTERVAL_MS);
  };

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setStatus("loading");

      audio.loop = true;
      audio.volume = 0;

      /*
       * Calling load helps when the audio was created dynamically
       * and the user clicks before the browser has buffered metadata.
       */
      if (audio.readyState === 0) {
        audio.load();
      }

      await audio.play();

      enabledRef.current = true;
      window.localStorage.setItem(AUDIO_STORAGE_KEY, "true");

      fadeTo(TARGET_VOLUME, () => {
        setStatus("playing");
      });
    } catch (error) {
      enabledRef.current = false;
      window.localStorage.setItem(AUDIO_STORAGE_KEY, "false");
      setStatus("error");

      console.error("[BackgroundAudio] Unable to play audio:", error);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    enabledRef.current = false;
    window.localStorage.setItem(AUDIO_STORAGE_KEY, "false");

    fadeTo(0, () => {
      audio.pause();
      setStatus("muted");
    });
  };

  const toggleAudio = () => {
    if (status === "playing" || enabledRef.current) {
      stopAudio();
      return;
    }

    void playAudio();
  };

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    const handleCanPlay = () => {
      setStatus(enabledRef.current ? "playing" : "muted");
    };

    const handleError = () => {
      enabledRef.current = false;
      window.localStorage.setItem(AUDIO_STORAGE_KEY, "false");
      setStatus("error");

      console.error(
        `[BackgroundAudio] Audio file was not found or could not be loaded: ${AUDIO_SRC}`,
      );
    };

    const handleVisibilityChange = () => {
      const currentAudio = audioRef.current;
      if (!currentAudio) return;

      if (document.hidden) {
        currentAudio.pause();
        return;
      }

      if (enabledRef.current) {
        void currentAudio.play().catch(() => {
          setStatus("error");
        });
      }
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    audio.load();

    const storedPreference = window.localStorage.getItem(AUDIO_STORAGE_KEY);

    /*
     * Browser may block this until user interaction. If blocked,
     * the status returns to muted/error and the user can click manually.
     */
    if (storedPreference === "true") {
      void playAudio();
    } else {
      setStatus("muted");
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      clearFadeTimer();
      audio.pause();
      audioRef.current = null;
    };
    // Intentionally run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isPlaying = status === "playing";
  const isLoading = status === "loading";

  return (
    <button
      type="button"
      onClick={toggleAudio}
      disabled={isLoading}
      aria-pressed={isPlaying}
      aria-label={
        status === "error"
          ? "Background audio unavailable"
          : isPlaying
            ? "Turn background audio off"
            : "Turn background audio on"
      }
      title={
        status === "error"
          ? "Audio file could not be loaded"
          : isPlaying
            ? "Turn sound off"
            : "Turn sound on"
      }
      className="
        fixed bottom-5 left-5 z-[80]
        inline-flex h-11 w-11 items-center justify-center rounded-full
        border border-slate-300/70 bg-white/80 text-slate-800 shadow-soft backdrop-blur-xl
        transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600
        focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 focus:ring-offset-white
        disabled:cursor-wait disabled:opacity-60
        dark:border-white/10 dark:bg-ai-panel/75 dark:text-slate-200
        dark:hover:border-cyan-300/40 dark:hover:text-cyan-200
        dark:focus:ring-cyan-300 dark:focus:ring-offset-ai-ink
      "
    >
      {status === "error" ? (
        <FaExclamationTriangle className="h-4 w-4" />
      ) : isPlaying ? (
        <FaVolumeUp className="h-4 w-4" />
      ) : (
        <FaVolumeMute className="h-4 w-4" />
      )}
    </button>
  );
}
