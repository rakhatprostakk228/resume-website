import React from 'react';
import { useReveal } from '../hooks';

export default function SectionHead({ eyebrow, title, sub }) {
    const [ref, shown] = useReveal();
    return (
        <div ref={ref} className={`section-head reveal ${shown ? 'is-in' : ''}`}>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{sub}</p>
        </div>
    );
}
