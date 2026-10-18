import React, { useEffect, useState } from 'react';
import { useApp } from '../context';
import { links } from '../data/resume';
import { useReveal } from '../hooks';
import Peek from './Peek';

const ids = ['experience', 'education', 'faq'];

export default function Sidebar() {
    const { t, lang, dark, toggleLang, toggleTheme } = useApp();
    const [active, setActive] = useState('');
    const [i, setI] = useState(0);
    const [boxRef, boxShown] = useReveal({ threshold: 0.2 });
    const roles = t.hero.roles;

    useEffect(() => {
        const onScroll = () => {
            const probe = window.innerHeight * 0.4;
            let current = '';
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= probe) current = id;
            });
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const id = setInterval(() => setI(n => n + 1), 2600);
        return () => clearInterval(id);
    }, []);

    const go = id => e => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const chips = [
        { label: 'GitHub', href: links.github },
        { label: 'LinkedIn', href: links.linkedin },
        { label: 'Telegram', href: links.telegram },
        { label: 'Email', href: `mailto:${links.email}` }
    ];

    return (
        <header className="side" id="top">
            <div className="side-top">
                <div className="side-tools">
                    <button type="button" className="tool" onClick={toggleLang} aria-label="Language">{lang === 'en' ? 'RU' : 'EN'}</button>
                    <button type="button" className="tool" onClick={toggleTheme} aria-label={dark ? t.theme.light : t.theme.dark} title={dark ? t.theme.light : t.theme.dark}>
                        {dark ? '☀️' : '🌙'}
                    </button>
                </div>
                <div className="pill reveal-now" style={{ '--d': '0ms' }}><span className="dot" />{t.hero.hello}</div>
                <h1 className="name" aria-label={t.hero.name}>
                    {t.hero.name.split(' ').map((word, w) => (
                        <span className="word" key={word}>
                            {[...word].map((ch, c) => (
                                <span className="char-l" key={c} style={{ '--d': `${120 + (w * 8 + c) * 34}ms` }} aria-hidden="true">{ch}</span>
                            ))}
                        </span>
                    ))}
                </h1>
                <div className="role-line reveal-now" style={{ '--d': '650ms' }}>
                    <span className="role-slot"><span key={i} className="role">{roles[i % roles.length]}</span></span>
                </div>
                <p className="side-text reveal-now" style={{ '--d': '800ms' }}>{t.hero.text}</p>
                <nav className="side-nav reveal-now" style={{ '--d': '950ms' }} aria-label="Sections">
                    {ids.map((id, n) => (
                        <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''}>
                            <span className="rule" />
                            <em>0{n + 1}</em>{t.nav[id]}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="side-links peek-host" ref={boxRef}>
                <Peek index={7} shown={boxShown} side="right" offset={28} delay={700} size={84} />
                <div className="side-card">
                    {chips.map(c => (
                        <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.label}</a>
                    ))}
                </div>
            </div>
        </header>
    );
}
