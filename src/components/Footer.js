import React from 'react';
import { useApp } from '../context';
import { links } from '../data/resume';
import { useReveal } from '../hooks';
import Peek from './Peek';

const items = [
    { label: 'Email', href: `mailto:${links.email}`, text: links.email },
    { label: 'Telegram', href: links.telegram, text: '@rrkaee_04' },
    { label: 'LinkedIn', href: links.linkedin, text: 'rakhatprostakk' },
    { label: 'GitHub', href: links.github, text: 'rakhatprostakk228' },
    { label: 'Phone', href: links.phoneHref, text: links.phone }
];

export default function Footer() {
    const { t } = useApp();
    const [ref, shown] = useReveal({ threshold: 0.1, rootMargin: '0px' });
    return (
        <div className="footer-wrap" ref={ref}>
            <div className="crew" aria-hidden="false">
                {[0, 1, 2, 3, 4].map(i => (
                    <Peek key={i} index={i + 2} shown={shown} side="left" offset={`${8 + i * 19}%`} delay={150 + i * 140} size={i % 2 ? 108 : 92} />
                ))}
            </div>
            <footer className="footer">
                <div className="container">
                    <h2 className="footer-cta">{t.footer.cta}<span>.</span></h2>
                    <ul className="contacts">
                        {items.map(i => (
                            <li key={i.label}>
                                <a href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                    <small>{i.label}</small>
                                    <span>{i.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="footer-bottom">
                        <span>© {new Date().getFullYear()} Rakhat Rakhimbekov. {t.footer.rights}</span>
                        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.footer.top} ↑</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
