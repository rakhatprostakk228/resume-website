import React, { useEffect } from 'react';

// Doodles floating behind the page. d = parallax depth, c: 'ink' | 'sun'
const DOODLES = [
    { k: '</>', x: 6, y: 12, d: 1.2, r: -8, s: 34, c: 'ink' },
    { k: '{ }', x: 44, y: 6, d: 0.6, r: 6, s: 30, c: 'sun' },
    { k: 'star', x: 90, y: 14, d: 1.5, r: 12, s: 44, c: 'sun' },
    { k: 'ring', x: 30, y: 32, d: 0.8, r: 0, s: 54, c: 'ink' },
    { k: '#', x: 4, y: 46, d: 1.0, r: 10, s: 36, c: 'ink' },
    { k: 'zig', x: 62, y: 28, d: 1.3, r: -6, s: 70, c: 'sun' },
    { k: 'plus', x: 94, y: 40, d: 0.7, r: 0, s: 30, c: 'ink' },
    { k: '( )', x: 22, y: 62, d: 1.4, r: -10, s: 32, c: 'sun' },
    { k: 'tri', x: 52, y: 52, d: 0.9, r: 14, s: 40, c: 'ink' },
    { k: ';', x: 80, y: 62, d: 1.1, r: 8, s: 42, c: 'ink' },
    { k: 'star', x: 10, y: 80, d: 0.8, r: -14, s: 30, c: 'ink' },
    { k: 'cursor', x: 66, y: 78, d: 1.6, r: 0, s: 38, c: 'sun' },
    { k: '</>', x: 40, y: 90, d: 0.7, r: 7, s: 28, c: 'sun' },
    { k: 'ring', x: 92, y: 88, d: 1.2, r: 0, s: 46, c: 'sun' },
    { k: 'zig', x: 18, y: 100, d: 1.0, r: 10, s: 60, c: 'ink' },
    { k: '=>', x: 74, y: 100, d: 0.9, r: -6, s: 30, c: 'ink' }
];

function Shape({ k }) {
    const st = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' };
    switch (k) {
        case 'star': return <svg viewBox="0 0 40 40"><path d="M20 3 L24 16 L37 20 L24 24 L20 37 L16 24 L3 20 L16 16 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
        case 'ring': return <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" {...st} /></svg>;
        case 'plus': return <svg viewBox="0 0 40 40"><path d="M20 6V34M6 20H34" {...st} /></svg>;
        case 'zig': return <svg viewBox="0 0 80 24"><path d="M4 18 L16 6 L28 18 L40 6 L52 18 L64 6 L76 18" {...st} /></svg>;
        case 'tri': return <svg viewBox="0 0 40 40"><path d="M20 6 L35 33 H5 Z" {...st} /></svg>;
        case 'cursor': return <svg viewBox="0 0 40 40"><path d="M8 5 L8 31 L15 25 L20 36 L25 34 L20 23 L29 23 Z" fill="currentColor" stroke="var(--ink-fixed)" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
        default: return <b className="glyph">{k}</b>;
    }
}

// Aurora blobs + a spotlight that follows the pointer + a scroll progress bar.
export default function Background() {
    useEffect(() => {
        const root = document.documentElement;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let raf = 0;
        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 3;
        const paint = () => {
            raf = 0;
            root.style.setProperty('--mx', `${mx}px`);
            root.style.setProperty('--my', `${my}px`);
            root.style.setProperty('--px', String(((mx / window.innerWidth) - 0.5) * 40));
            root.style.setProperty('--py', String(((my / window.innerHeight) - 0.5) * 40));
            root.style.setProperty('--sy', String(window.scrollY));
            const max = document.documentElement.scrollHeight - window.innerHeight;
            root.style.setProperty('--progress', max > 0 ? String(window.scrollY / max) : '0');
        };
        const schedule = () => { if (!raf) raf = requestAnimationFrame(paint); };
        const onMove = e => { mx = e.clientX; my = e.clientY; schedule(); };
        window.addEventListener('scroll', schedule, { passive: true });
        if (!reduce) window.addEventListener('pointermove', onMove, { passive: true });
        const colors = ['#f2b632', '#f2b632', '#3b5b82', '#d9644a', '#fff3dc'];
        const burst = e => {
            if (reduce || e.target.closest('input, textarea')) return;
            for (let i = 0; i < 10; i++) {
                const d = document.createElement('span');
                const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.5;
                const dist = 36 + Math.random() * 40;
                d.className = 'confetti';
                d.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;background:${colors[i % 5]};--x:${Math.cos(a) * dist}px;--y:${Math.sin(a) * dist}px;--r:${Math.random() * 360}deg`;
                document.body.appendChild(d);
                setTimeout(() => d.remove(), 800);
            }
        };
        window.addEventListener('pointerdown', burst);
        schedule();
        return () => {
            window.removeEventListener('pointerdown', burst);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('pointermove', onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div className="progress" aria-hidden="true" />
            <div className="bg" aria-hidden="true">
                <span className="dots" />
                <span className="giant g1" />
                <span className="giant g2" />
                {DOODLES.map((o, i) => (
                    <span
                        key={i}
                        className={`doodle ${o.c} ${i % 2 ? 'alt' : ''}`}
                        style={{ left: `${o.x}%`, top: `${o.y}%`, '--d': o.d, '--r': `${o.r}deg`, width: o.s, fontSize: o.s * 0.8, '--t': `${6 + (i % 5)}s`, '--del': `${-i * 0.9}s` }}
                    >
                        <i><Shape k={o.k} /></i>
                    </span>
                ))}
                <span className="spot" />
            </div>
        </>
    );
}
