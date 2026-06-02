"use client";

import { useEffect, useRef } from "react";

/**
 * Global site background animation.
 *
 * Important behavior:
 * - The accepted professional background remains unchanged.
 * - The architecture animation is rendered as a fixed global overlay above
 *   normal section backgrounds so it is visible across the whole site.
 * - No custom cursor is rendered; the browser cursor remains normal.
 * - A subtle pointer glow layer is fixed globally so mouse movement is visible across all sections.
 */
export default function InteractiveBackground() {
  const baseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const base = baseRef.current;
    if (!base) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    let animationFrame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const writeVars = () => {
      const mouseX = `${currentX}px`;
      const mouseY = `${currentY}px`;

      base.style.setProperty("--mouse-x", mouseX);
      base.style.setProperty("--mouse-y", mouseY);
      document.documentElement.style.setProperty("--site-mouse-x", mouseX);
      document.documentElement.style.setProperty("--site-mouse-y", mouseY);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      writeVars();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (!hoverQuery.matches || reducedMotionQuery.matches) return;

      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onPointerLeave = () => {
      targetX = window.innerWidth / 2;
      targetY = window.innerHeight / 3;
    };

    const onResize = () => {
      const width = window.visualViewport?.width ?? window.innerWidth;
      const height = window.visualViewport?.height ?? window.innerHeight;

      targetX = width / 2;
      targetY = height / 3;
      currentX = targetX;
      currentY = targetY;
      writeVars();
    };

    writeVars();
    animationFrame = window.requestAnimationFrame(animate);

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave, { passive: true });
    window.addEventListener("blur", onPointerLeave, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <div ref={baseRef} className="site-interactive-bg" aria-hidden="true">
        <div className="site-bg-grid" />
        <div className="site-bg-glow site-bg-glow-one" />
        <div className="site-bg-glow site-bg-glow-two" />
        <div className="site-bg-glow site-bg-glow-three" />
        <div className="site-bg-beam site-bg-beam-one" />
        <div className="site-bg-beam site-bg-beam-two" />
      </div>

      <div className="site-mouse-ambient" aria-hidden="true" />

      <div className="site-architecture-overlay" aria-hidden="true">
        <svg
          className="site-architecture-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="site-architecture-path"
            d="M40 190 C220 80 410 250 610 190 C820 130 960 320 1160 245 C1280 200 1360 155 1440 188"
          />
          <path
            className="site-architecture-path site-architecture-path-delay"
            d="M80 730 C280 540 500 670 700 475 C930 255 1120 445 1370 330"
          />
          <path
            className="site-architecture-path site-architecture-path-slow"
            d="M300 70 C350 250 470 340 650 405 C850 475 960 675 1280 770"
          />
          <path
            className="site-architecture-path site-architecture-path-soft"
            d="M0 420 C210 390 350 455 520 410 C760 345 880 390 1030 520 C1180 650 1300 610 1440 560"
          />
        </svg>

        <span className="site-arch-node site-arch-node-one" />
        <span className="site-arch-node site-arch-node-two" />
        <span className="site-arch-node site-arch-node-three" />
        <span className="site-arch-node site-arch-node-four" />
        <span className="site-arch-node site-arch-node-five" />
        <span className="site-arch-node site-arch-node-six" />
      </div>
    </>
  );
}
