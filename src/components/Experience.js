import React, { useEffect, useRef } from 'react';
import { useApp } from '../context';
import { useReveal, formatDate, formatDuration } from '../hooks';
import { experience, projects } from '../data/resume';
import SectionHead from './SectionHead';
import Peek from './Peek';

const tilt = e => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--cx', `${e.clientX - r.left}px`);
    el.style.setProperty('--cy', `${e.clientY - r.top}px`);
};

function Card({ item, index }) {
    const { t, lang } = useApp();
    const [ref, shown] = useReveal();
    const current = item.end === null;
    const duration = formatDuration(item.start, item.end, t);
    const range = `${formatDate(item.start, t.months)} – ${current ? t.experience.present : formatDate(item.end, t.months)}`;
    const sameYear = !item.start[1] && item.start[0] === item.end?.[0];

    return (
        <article
            ref={ref}
            className={`tl-item peek-host reveal ${shown ? 'is-in' : ''}`}
            style={{ '--d': `${(index % 3) * 80}ms` }}
        >
            <Peek index={index} shown={shown} side={index % 2 ? 'left' : 'right'} offset={44 + (index % 3) * 26} delay={650} />
            <span className={`tl-dot ${current ? 'is-live' : ''}`} />
            <div className="card glow" onPointerMove={tilt}>
                <div className="card-top">
                    <div className="logo" aria-hidden="true">
                        {item.logo ? <img src={item.logo} alt="" loading="lazy" /> : <span>{item.company.slice(0, 2)}</span>}
                    </div>
                    <div className="card-title">
                        <h3>{item.role[lang]}</h3>
                        <div className="company">
                            {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a> : item.company}
                            <i>·</i>
                            <span>{t.experience.types[item.type]}</span>
                        </div>
                    </div>
                    {current && <span className="badge badge-live"><span className="dot" />{t.experience.current}</span>}
                </div>
                <div className="meta">
                    <span>{sameYear ? item.start[0] : range}{duration ? ` · ${duration}` : ''}</span>
                    <span>{item.place[lang]}</span>
                </div>
                {item.text && <p className="card-text">{item.text[lang]}</p>}
                {item.stack.length > 0 && (
                    <ul className="tags">
                        {item.stack.map(s => <li key={s}>{s}</li>)}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default function Experience() {
    const { t, lang } = useApp();
    const lineRef = useRef(null);
    const listRef = useRef(null);
    const [pRef, pShown] = useReveal();

    // Draw the timeline line as the list scrolls through the viewport.
    useEffect(() => {
        const update = () => {
            const el = listRef.current;
            if (!el || !lineRef.current) return;
            const r = el.getBoundingClientRect();
            const p = (window.innerHeight * 0.6 - r.top) / r.height;
            lineRef.current.style.setProperty('--fill', String(Math.min(1, Math.max(0, p))));
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHead eyebrow={t.experience.eyebrow} title={t.experience.title} sub={t.experience.sub} />
                <div className="timeline" ref={listRef}>
                    <div className="tl-line" ref={lineRef} aria-hidden="true"><span /></div>
                    {experience.map((item, i) => <Card key={item.id} item={item} index={i} />)}
                </div>

                <div ref={pRef} className={`projects reveal ${pShown ? 'is-in' : ''}`}>
                    <h3>{t.experience.projectsTitle}</h3>
                    <div className="project-grid">
                        {projects.map((p, i) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project glow"
                                onPointerMove={tilt}
                                style={{ '--d': `${i * 45}ms` }}
                            >
                                <span className="project-name">{p.name}</span>
                                <span className="project-tag">{p.tag[lang]}</span>
                                <svg className="arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
