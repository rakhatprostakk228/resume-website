import React from 'react';
import { useApp } from '../context';
import { useReveal, formatDate } from '../hooks';
import { education } from '../data/resume';
import SectionHead from './SectionHead';
import Peek from './Peek';

function Item({ item, index }) {
    const { t, lang } = useApp();
    const [ref, shown] = useReveal();
    const now = new Date();
    const nowIdx = now.getFullYear() * 12 + now.getMonth();
    const endIdx = item.end[0] * 12 + (item.end[1] ? item.end[1] - 1 : 11);
    const ongoing = endIdx >= nowIdx;

    return (
        <div ref={ref} className={`edu-host peek-host reveal ${shown ? 'is-in' : ''}`} style={{ '--d': `${index * 110}ms` }}>
        <Peek index={index + 3} shown={shown} side={index % 2 ? 'left' : 'right'} offset={60} delay={600} />
        <article
            className="edu card glow"
            style={{ '--c': item.color }}
            onPointerMove={e => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--cx', `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty('--cy', `${e.clientY - r.top}px`);
            }}
        >
            <div className="seal" aria-hidden="true">
                {item.logo ? <img src={item.logo} alt="" loading="lazy" /> : item.short}
            </div>
            <div className="edu-body">
                <h3>{item.school[lang]}{item.schoolNative && <span className="native" lang="zh">{item.schoolNative}</span>}</h3>
                <p className="degree">{item.degree[lang]}<i>·</i>{item.field[lang]}</p>
                <p className="meta">
                    <span>{formatDate(item.start, t.months)} – {formatDate(item.end, t.months)}</span>
                </p>
            </div>
            {ongoing && <span className="badge badge-live"><span className="dot" />{t.education.inProgress}</span>}
        </article>
        </div>
    );
}

export default function Education() {
    const { t } = useApp();
    return (
        <section className="section" id="education">
            <div className="container narrow">
                <SectionHead eyebrow={t.education.eyebrow} title={t.education.title} sub={t.education.sub} />
                <div className="edu-list">
                    {education.map((e, i) => <Item key={e.id} item={e} index={i} />)}
                </div>
            </div>
        </section>
    );
}
