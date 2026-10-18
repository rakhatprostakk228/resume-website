import { useEffect, useRef, useState } from 'react';

// Adds `is-in` once the element scrolls into view.
export function useReveal(options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (!('IntersectionObserver' in window)) {
            setShown(true);
            return undefined;
        }
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShown(true);
                io.disconnect();
            }
        }, options);
        io.observe(el);
        return () => io.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [ref, shown];
}

export function useCountUp(target, active, duration = 1200) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active) return undefined;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            setValue(target);
            return undefined;
        }
        let raf;
        const start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / duration, 1);
            setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, active, duration]);
    return value;
}

// Month math on [year, month?] tuples. `null` end = now.
export function monthIndex(d) {
    if (!d) {
        const n = new Date();
        return n.getFullYear() * 12 + n.getMonth();
    }
    return d[0] * 12 + (d[1] ? d[1] - 1 : 0);
}

export function formatDate(d, months) {
    if (!d) return null;
    return d[1] ? `${months[d[1] - 1]} ${d[0]}` : `${d[0]}`;
}

export function formatDuration(start, end, t) {
    if (!start[1] || (end && !end[1])) return null;
    const total = Math.max(1, monthIndex(end) - monthIndex(start) + 1);
    const y = Math.floor(total / 12);
    const m = total % 12;
    if (y === 0) return `${m} ${t.mos}`;
    return m ? `${y} ${t.yrs} ${m} ${t.mos}` : `${y} ${t.yrs}`;
}
