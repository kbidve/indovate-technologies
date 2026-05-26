'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Configuration interface for customizing animated background
export interface AnimatedBackgroundConfig {
  trailCount?: number;
  trailHeight?: string; // Tailwind class like 'h-28 md:h-32'
  quickToSettings?: {
    duration: number;
    ease: string;
  };
  colorAnimDuration?: {
    dark: { base: number; random: number };
    light: { base: number; random: number };
  };
  driftSettings?: {
    dark: { range: number; offset: number };
    light: { range: number; offset: number };
    duration: { base: number; random: number };
  };
  repulsionSettings?: {
    radius: { dark: number; light: number };
    maxRepel: { dark: number; light: number };
    power: number;
  };
}

// Default configuration
const DEFAULT_CONFIG: Required<AnimatedBackgroundConfig> = {
  trailCount: 12,
  trailHeight: 'h-28 md:h-32',
  quickToSettings: {
    duration: 0.24,
    ease: 'power3.out'
  },
  colorAnimDuration: {
    dark: { base: 2.8, random: 0.8 },
    light: { base: 3.6, random: 0.9 }
  },
  driftSettings: {
    dark: { range: 400, offset: 200 },
    light: { range: 280, offset: 140 },
    duration: { base: 10, random: 6 }
  },
  repulsionSettings: {
    radius: { dark: 180, light: 150 },
    maxRepel: { dark: 110, light: 90 },
    power: 2
  }
};

/**
 * Custom hook for managing animated background effects
 * Handles trail creation, animations, cursor interactions, and cleanup
 */
export function useAnimatedBackground(
  isDark: boolean,
  config: AnimatedBackgroundConfig = {}
) {
  // Merge user config with defaults
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  // Background refs
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const cursorHolderRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Animation state refs
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const basePosRef = useRef<{ x: number; y: number }[]>([]);
  const moversRef = useRef<{ x: ((v: number) => void) | null; y: ((v: number) => void) | null }[]>([]);
  const colorTweensRef = useRef<gsap.core.Tween[]>([]);
  const driftTweensRef = useRef<gsap.core.Tween[]>([]);
  const cursorMoveX = useRef<((v: number) => void) | null>(null);
  const cursorMoveY = useRef<((v: number) => void) | null>(null);
  const cursorRotateTween = useRef<gsap.core.Tween | null>(null);

  // Color palettes
  const neonDark = [
    'rgba(243,140,23,1)',  // orange neon
    'rgba(0,230,255,1)',   // cyan neon
    'rgba(255,77,255,1)',  // pink neon
    'rgba(57,255,20,1)',   // green neon
    'rgba(255,215,0,1)',   // gold neon
  ];
  
  const pastelLight = [
    'rgba(255, 149, 64, 0.7)',   // soft orange
    'rgba(64, 186, 255, 0.7)',   // sky blue
    'rgba(255, 120, 220, 0.7)',  // soft pink
    'rgba(120, 200, 120, 0.7)',  // mint
    'rgba(246, 208, 80, 0.7)',   // warm yellow
  ];

  useEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;

    const colors = isDark ? neonDark : pastelLight;
    const blendClass = isDark ? 'mix-blend-screen' : 'mix-blend-multiply';
    const blurPx = isDark ? 12 : 6;
    const baseOpacity = isDark ? 0.85 : 0.55;

    // Clean up any prior animations
    colorTweensRef.current.forEach((tw) => tw.kill());
    driftTweensRef.current.forEach((tw) => tw.kill());
    trailsRef.current.forEach((t) => t.remove());
    trailsRef.current = [];
    basePosRef.current = [];
    moversRef.current = [];
    colorTweensRef.current = [];
    driftTweensRef.current = [];
    cursorRotateTween.current?.kill();
    cursorRef.current?.remove();
    cursorRef.current = null;

    // Create trails
    const trails: HTMLDivElement[] = [];
    const basePos: { x: number; y: number }[] = [];
    const movers: { x: ((v: number) => void) | null; y: ((v: number) => void) | null }[] = [];
    const colorTweens: gsap.core.Tween[] = [];
    const driftTweens: gsap.core.Tween[] = [];

    const rect = sectionRef.current.getBoundingClientRect();

    for (let i = 0; i < mergedConfig.trailCount; i++) {
      const t = document.createElement('div');
      const baseX = Math.random() * rect.width;
      const baseY = Math.random() * rect.height;

      t.className = `absolute w-1.5 ${mergedConfig.trailHeight} rounded-full ${blendClass}`;
      t.style.background = colors[Math.floor(Math.random() * colors.length)];
      t.style.opacity = String(baseOpacity);
      t.style.filter = `blur(${blurPx}px) drop-shadow(0 0 ${isDark ? 16 : 6}px currentColor)`;
      bgRef.current.appendChild(t);

      gsap.set(t, { x: baseX, y: baseY, xPercent: -50, yPercent: -50 });

      trails.push(t);
      basePos.push({ x: baseX, y: baseY });

      movers.push({
        x: gsap.quickTo(t, 'x', { 
          duration: mergedConfig.quickToSettings.duration, 
          ease: mergedConfig.quickToSettings.ease 
        }),
        y: gsap.quickTo(t, 'y', { 
          duration: mergedConfig.quickToSettings.duration, 
          ease: mergedConfig.quickToSettings.ease 
        }),
      });

      // Color animation
      const colorDuration = isDark 
        ? mergedConfig.colorAnimDuration.dark.base + Math.random() * mergedConfig.colorAnimDuration.dark.random
        : mergedConfig.colorAnimDuration.light.base + Math.random() * mergedConfig.colorAnimDuration.light.random;

      colorTweens.push(
        gsap.to(t, {
          backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
          repeat: -1,
          yoyo: true,
          duration: colorDuration,
          ease: 'sine.inOut',
        })
      );

      // Drift animation
      const driftStep = () => {
        const range = isDark ? mergedConfig.driftSettings.dark.range : mergedConfig.driftSettings.light.range;
        const offset = isDark ? mergedConfig.driftSettings.dark.offset : mergedConfig.driftSettings.light.offset;
        
        return gsap.to(t, {
          x: `+=${Math.random() * range - offset}`,
          y: `+=${Math.random() * (range * 0.75) - (offset * 0.75)}`,
          rotation: Math.random() * 360,
          duration: mergedConfig.driftSettings.duration.base + Math.random() * mergedConfig.driftSettings.duration.random,
          ease: 'sine.inOut',
          onComplete: driftStep,
        });
      };
      driftTweens.push(driftStep());
    }

    // Update refs
    trailsRef.current = trails;
    basePosRef.current = basePos;
    moversRef.current = movers;
    colorTweensRef.current = colorTweens;
    driftTweensRef.current = driftTweens;

    // Create cursor
    if (cursorHolderRef.current) {
      const cursor = document.createElement('div');
      cursor.className = `absolute w-4 h-4 rounded-full border-2 ${
        isDark ? 'border-white/60' : 'border-black/40'
      } pointer-events-none z-10`;
      cursor.style.display = 'none';
      cursorHolderRef.current.appendChild(cursor);
      cursorRef.current = cursor;

      cursorMoveX.current = gsap.quickTo(cursor, 'left', { duration: 0.10, ease: 'power3.out' });
      cursorMoveY.current = gsap.quickTo(cursor, 'top', { duration: 0.10, ease: 'power3.out' });
      cursorRotateTween.current = gsap.to(cursor, { rotate: 360, repeat: -1, duration: 8, ease: 'none' });
    }

    // Event handlers
    const el = sectionRef.current;
    const REPULSION_RADIUS = isDark ? mergedConfig.repulsionSettings.radius.dark : mergedConfig.repulsionSettings.radius.light;
    const MAX_REPEL = isDark ? mergedConfig.repulsionSettings.maxRepel.dark : mergedConfig.repulsionSettings.maxRepel.light;
    const POWER = mergedConfig.repulsionSettings.power;

    const handleMove = (clientX: number, clientY: number) => {
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r) return;
      const mx = clientX - r.left;
      const my = clientY - r.top;

      cursorMoveX.current?.(mx);
      cursorMoveY.current?.(my);

      trailsRef.current.forEach((_, i) => {
        const base = basePosRef.current[i];
        const bx = base.x;
        const by = base.y;
        const dx = bx - mx;
        const dy = by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPULSION_RADIUS) {
          const repelStrength = Math.pow((REPULSION_RADIUS - dist) / REPULSION_RADIUS, POWER);
          const repelX = (dx / dist) * MAX_REPEL * repelStrength;
          const repelY = (dy / dist) * MAX_REPEL * repelStrength;
          moversRef.current[i]?.x?.(bx + repelX);
          moversRef.current[i]?.y?.(by + repelY);
        } else {
          moversRef.current[i]?.x?.(bx);
          moversRef.current[i]?.y?.(by);
        }
      });
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'block';
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      trailsRef.current.forEach((_, i) => {
        const base = basePosRef.current[i];
        moversRef.current[i]?.x?.(base.x);
        moversRef.current[i]?.y?.(base.y);
      });
    };

    const onResize = () => {
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r) return;
      trailsRef.current.forEach((t, i) => {
        const nx = Math.random() * r.width;
        const ny = Math.random() * r.height;
        basePosRef.current[i] = { x: nx, y: ny };
        gsap.set(t, { x: nx, y: ny, xPercent: -50, yPercent: -50 });
      });
    };

    // Add event listeners
    el?.addEventListener('mousemove', onMouseMove);
    el?.addEventListener('touchmove', onTouchMove);
    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      el?.removeEventListener('mousemove', onMouseMove);
      el?.removeEventListener('touchmove', onTouchMove);
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);

      colorTweensRef.current.forEach((tw) => tw.kill());
      driftTweensRef.current.forEach((tw) => tw.kill());
      cursorRotateTween.current?.kill();

      trailsRef.current.forEach((t) => t.remove());
      trailsRef.current = [];
      basePosRef.current = [];
      moversRef.current = [];
      colorTweensRef.current = [];
      driftTweensRef.current = [];

      cursorRef.current?.remove();
      cursorRef.current = null;
    };
  }, [isDark, mergedConfig]);

  return {
    sectionRef,
    bgRef,
    cursorHolderRef,
  };
}