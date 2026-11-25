"use client";

import { useMotionPaused } from "./motion-preference";
import Image from "next/image";
import { useState } from "react";

type BrandLogoProps = {
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
  staticSrc?: string;
};

const animatedLogo =
  "/Images/indovate-animated-logo-v2.svg";

export default function BrandLogo({
  width = 192,
  height = 192,
  alt = "Indovate Technologies logo",
  className,
  loading = "lazy",
  fetchPriority,
  staticSrc = "/Images/indovate-hero-logo-still.png",
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  const paused = useMotionPaused();

  return (
    <Image
      src={(failed || paused) ? staticSrc : animatedLogo}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      unoptimized
      className={className}
      data-brand-motion={(failed || paused) ? "still" : "animated"}
      onError={() => {
        if (!failed) setFailed(true);
      }}
    />
  );
}
