import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Animated count-up hook.
 * @param {number} target final value
 * @param {number} duration animation duration in ms
 * @param {boolean} start when false the counter stays at 0 (useful with useInView)
 */
const useCountUp = (target, duration = 1600, start = true) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const t0 = performance.now();
    const step = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return count;
};

export default useCountUp;
