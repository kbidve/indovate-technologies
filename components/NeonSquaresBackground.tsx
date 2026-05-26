import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const COLORS = [
  '#f38c17', // orange
  '#00e6ff', // cyan
  '#ff4dff', // pink
  '#39ff14', // green
];

const SQUARE_SIZE = 260;
const PADDING = 64;

export default function NeonSquaresBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  // Update dimensions on mount and resize
  useEffect(() => {
    function update() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Animate trails
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    for (let i = 0; i < 4; i++) {
      // Animate horizontal trail
      const hTrail = svg.getElementById(`h-trail-${i}`) as SVGRectElement;
      if (hTrail) {
        gsap.fromTo(
          hTrail,
          { strokeDasharray: `0,${SQUARE_SIZE}` },
          {
            strokeDasharray: `${SQUARE_SIZE * 0.7},${SQUARE_SIZE * 0.3}`,
            repeat: -1,
            yoyo: true,
            duration: 2 + Math.random(),
            ease: 'power1.inOut',
            delay: Math.random(),
          }
        );
      }
      // Animate vertical trail
      const vTrail = svg.getElementById(`v-trail-${i}`) as SVGRectElement;
      if (vTrail) {
        gsap.fromTo(
          vTrail,
          { strokeDasharray: `0,${SQUARE_SIZE}` },
          {
            strokeDasharray: `${SQUARE_SIZE * 0.7},${SQUARE_SIZE * 0.3}`,
            repeat: -1,
            yoyo: true,
            duration: 2 + Math.random(),
            ease: 'power1.inOut',
            delay: Math.random(),
          }
        );
      }
    }
  }, [dimensions.width, dimensions.height]);

  // Calculate corners for half-hidden effect
  const { width, height } = dimensions;
  const half = SQUARE_SIZE / 2;
  const corners = [
    // top-left: left flush, top half-hidden
    { x: PADDING, y: -half },
    // top-right: right flush, top half-hidden
    { x: width - SQUARE_SIZE - PADDING, y: -half },
    // bottom-left: left flush, bottom half-hidden
    { x: PADDING, y: height - half },
    // bottom-right: right flush, bottom half-hidden
    { x: width - SQUARE_SIZE - PADDING, y: height - half },
  ];

  return (
    <svg
      ref={svgRef}
      width="100vw"
      height="100vh"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        overflow: 'visible',
      }}
    >
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#fff" floodOpacity="0.7" />
        </filter>
      </defs>
      {corners.map((corner, i) => (
        <g key={i}>
          {/* Square outline */}
          <rect
            x={corner.x}
            y={corner.y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={2.5}
            fill="none"
            opacity={0.5}
            filter="url(#neon-glow)"
          />
          {/* Horizontal trail (top edge) */}
          <rect
            id={`h-trail-${i}`}
            x={corner.x}
            y={corner.y}
            width={SQUARE_SIZE}
            height={0}
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={5}
            fill="none"
            filter="url(#neon-glow)"
            opacity={0.95}
          />
          {/* Vertical trail (left edge) */}
          <rect
            id={`v-trail-${i}`}
            x={corner.x}
            y={corner.y}
            width={0}
            height={SQUARE_SIZE}
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={5}
            fill="none"
            filter="url(#neon-glow)"
            opacity={0.95}
          />
        </g>
      ))}
    </svg>
  );
}