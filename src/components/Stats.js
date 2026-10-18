import React from 'react';
import { useApp } from '../context';
import { useCountUp, useReveal } from '../hooks';
import { experience } from '../data/resume';

function Stat({ value, label, suffix, active, tilt, color, text }) {
    const n = useCountUp(value, active);
    return (
        <div className="stat" style={{ '--tilt': `${tilt}deg`, '--sc': color, '--stc': text }}>
            <strong>{n}{suffix}</strong>
            <span>{label}</span>
        </div>
    );
}

export default function Stats() {
    const { t } = useApp();
    const [ref, shown] = useReveal({ threshold: 0.4 });
        return (
        <div className={`stats reveal ${shown ? 'is-in' : ''}`} ref={ref}>
            <Stat value={3} suffix="" label={t.hero.stats.years} active={shown} tilt={-2} color="var(--sun)" />
            <Stat value={experience.length} suffix="" label={t.hero.stats.companies} active={shown} tilt={1.5} color="var(--card)" />
            <Stat value={20} suffix="+" label={t.hero.stats.projects} active={shown} tilt={-1} color="var(--navy)" text="#fff8e8" />
        </div>
    );
}
