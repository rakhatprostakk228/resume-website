import React, { useState } from 'react';
import { useApp } from '../context';
import { useReveal } from '../hooks';
import { faq } from '../data/resume';
import SectionHead from './SectionHead';
import Peek from './Peek';

function Row({ item, index, open, onToggle }) {
    const { lang } = useApp();
    const [ref, shown] = useReveal();
    return (
        <div ref={ref} className={`faq-item peek-host reveal ${shown ? 'is-in' : ''} ${open ? 'is-open' : ''}`} style={{ '--d': `${index * 70}ms` }}>
            <Peek index={index} shown={open} side={index % 2 ? 'left' : 'right'} offset={70} delay={250} size={84} />
            <div className="faq-card">
            <button type="button" className="faq-q" aria-expanded={open} onClick={onToggle}>
                <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-text">{item.q[lang]}</span>
                <span className="faq-plus" aria-hidden="true" />
            </button>
            <div className="faq-a">
                <div><p>{item.a[lang]}</p></div>
            </div>
            </div>
        </div>
    );
}

export default function Faq() {
    const { t } = useApp();
    const [open, setOpen] = useState(0);
    return (
        <section className="section" id="faq">
            <div className="container narrow">
                <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} sub={t.faq.sub} />
                <div className="faq-list">
                    {faq.map((item, i) => (
                        <Row key={i} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
                    ))}
                </div>
            </div>
        </section>
    );
}
