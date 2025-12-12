import { useEffect, useRef, useState } from "react";

type Options = {
  from?: string;
  base?: string;
  highlight?: string;
  duration?: number;
};

function blendColor(from: string, to: string, t: number) {
  const clamped = Math.min(Math.max(t, 0), 1);
  const f = parseInt(from.slice(1), 16);
  const r1 = (f >> 16) & 0xff;
  const g1 = (f >> 8) & 0xff;
  const b1 = f & 0xff;
  const tVal = parseInt(to.slice(1), 16);
  const r2 = (tVal >> 16) & 0xff;
  const g2 = (tVal >> 8) & 0xff;
  const b2 = tVal & 0xff;
  const r = Math.round(r1 + (r2 - r1) * clamped)
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(g1 + (g2 - g1) * clamped)
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(b1 + (b2 - b1) * clamped)
    .toString(16)
    .padStart(2, "0");
  return `#${r}${g}${b}`;
}

export function usePrimaryGradientHover(options: Options = {}) {
  const { from = "#1f2b57", base = "#008747", highlight = "#2fc56f", duration = 600 } = options;

  const [blend, setBlend] = useState(0);
  const blendRef = useRef(0);
  const frameRef = useRef<number>();

  const animateTo = (target: number) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const start = performance.now();
    const fromVal = blendRef.current;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = fromVal + (target - fromVal) * progress;
      setBlend(value);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        blendRef.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const onEnter = () => animateTo(1);
  const onLeave = () => animateTo(0);

  return {
    style: {
      backgroundImage: `linear-gradient(90deg, ${from}, ${blendColor(base, highlight, blend)})`
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onFocus: onEnter,
    onBlur: onLeave
  };
}

