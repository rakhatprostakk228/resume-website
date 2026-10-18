// Shared pointer tracking so every character's pupils follow the cursor.
const pupils = new Set();
let bound = false;
let mx = -9999;
let my = -9999;
let raf = 0;

const update = () => {
    raf = 0;
    pupils.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        const k = (Math.min(d, 160) / 160) * 3.6;
        el.style.transform = `translate(${(dx / d) * k}px, ${(dy / d) * k}px)`;
    });
};

const onMove = e => {
    mx = e.clientX;
    my = e.clientY;
    if (!raf) raf = requestAnimationFrame(update);
};

export function trackPupils(list) {
    list.forEach(el => pupils.add(el));
    if (!bound) {
        bound = true;
        window.addEventListener('pointermove', onMove, { passive: true });
    }
    return () => list.forEach(el => pupils.delete(el));
}
