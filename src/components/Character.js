import React, { useEffect, useRef, useState } from 'react';
import { trackPupils } from '../eyes';
import { useApp } from '../context';

const INK = 'var(--ink-fixed)';
const SKINS = ['#f3cfae', '#e2ae82', '#c98c66', '#f6d9bf'];

// hair: swoop | bun | curly | beanie | cap | hood | short ; acc: headphones | glasses | none
export const PEOPLE = [
    { skin: 0, hair: 'swoop', hairColor: '#5a3a28', hoodie: '#f2b632', acc: 'headphones' },
    { skin: 1, hair: 'bun', hairColor: '#1f2430', hoodie: '#3b5b82', acc: 'headphones' },
    { skin: 2, hair: 'curly', hairColor: '#2a1d18', hoodie: '#d9d5cc', acc: 'glasses' },
    { skin: 3, hair: 'beanie', hairColor: '#d9644a', hoodie: '#2b3b52', acc: 'none' },
    { skin: 0, hair: 'cap', hairColor: '#f2b632', hoodie: '#6b7f99', acc: 'headphones' },
    { skin: 1, hair: 'hood', hairColor: '#3b5b82', hoodie: '#3b5b82', acc: 'glasses' },
    { skin: 2, hair: 'short', hairColor: '#8a5a2b', hoodie: '#d9644a', acc: 'headphones' },
    { skin: 3, hair: 'short', hairColor: '#1f2430', hoodie: '#e8e2d4', acc: 'glasses' }
];

const stroke = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' };

function Hair({ type, color }) {
    switch (type) {
        case 'bun':
            return (
                <>
                    <circle cx="50" cy="8" r="9" fill={color} {...stroke} />
                    <path d="M25 44 C22 18 38 10 52 12 C68 12 78 24 75 44 C70 32 62 27 50 29 C40 29 31 34 25 44 Z" fill={color} {...stroke} />
                </>
            );
        case 'curly':
            return (
                <>
                    {[[29, 32], [38, 20], [51, 15], [64, 20], [72, 32]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="11" fill={color} {...stroke} />)}
                    <path d="M28 40 C30 30 40 27 50 28 C60 27 70 30 72 40 C66 34 58 33 50 34 C42 33 34 34 28 40 Z" fill={color} />
                </>
            );
        case 'beanie':
            return (
                <>
                    <circle cx="50" cy="4" r="6" fill="#fff3dc" {...stroke} />
                    <path d="M24 38 C22 10 78 10 76 38 Z" fill={color} {...stroke} />
                    <rect x="22" y="34" width="56" height="10" rx="5" fill="#fff3dc" {...stroke} />
                </>
            );
        case 'cap':
            return (
                <>
                    <path d="M25 38 C24 12 76 12 75 38 Z" fill={color} {...stroke} />
                    <path d="M60 36 H92 Q92 44 80 44 H60 Z" fill={color} {...stroke} />
                </>
            );
        case 'short':
            return <path d="M25 42 C22 16 40 10 54 13 C70 14 78 26 75 42 C72 34 66 30 58 31 C50 26 36 28 25 42 Z" fill={color} {...stroke} />;
        case 'hood':
            return null;
        default:
            return (
                <>
                    <path d="M25 44 C22 16 40 8 54 12 C70 14 78 26 75 44 C70 31 60 27 48 30 C38 31 30 35 25 44 Z" fill={color} {...stroke} />
                    <path d="M44 14 C46 4 56 4 58 12" fill={color} {...stroke} />
                </>
            );
    }
}

function Person({ p, wave }) {
    const skin = SKINS[p.skin % SKINS.length];
    const hood = p.hair === 'hood';
    return (
        <svg viewBox="-8 -6 116 132" width="100%" aria-hidden="true">
            {hood && <ellipse cx="50" cy="46" rx="34" ry="36" fill={p.hoodie} {...stroke} />}
            <g className="arm-l">
                <path d="M18 98 Q6 100 6 116" fill="none" stroke={INK} strokeWidth="16" strokeLinecap="round" />
                <path d="M18 98 Q6 100 6 116" fill="none" stroke={p.hoodie} strokeWidth="10" strokeLinecap="round" />
            </g>
            <path d="M10 126 V102 C10 82 28 74 50 74 C72 74 90 82 90 102 V126 Z" fill={p.hoodie} {...stroke} />
            <path d="M38 76 Q50 88 62 76" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M44 84 V98 M56 84 V98" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="50" cy="46" rx="24" ry="26" fill={skin} {...stroke} />
            <g className="arm-r">
                <path d="M82 100 Q96 94 96 68" fill="none" stroke={INK} strokeWidth="16" strokeLinecap="round" />
                <path d="M82 100 Q96 94 96 68" fill="none" stroke={p.hoodie} strokeWidth="10" strokeLinecap="round" />
                <circle cx="96" cy="62" r="7.5" fill={skin} {...stroke} />
            </g>
            <Hair type={p.hair} color={p.hairColor} />
            <circle cx="33" cy="56" r="5.5" fill="#f07f8c" opacity="0.5" />
            <circle cx="67" cy="56" r="5.5" fill="#f07f8c" opacity="0.5" />
            <g className="eye"><g className="pupil"><circle cx="41" cy="48" r="3.6" fill={INK} /><circle cx="42.2" cy="46.8" r="1.1" fill="#fff" /></g></g>
            <g className="eye"><g className="pupil"><circle cx="59" cy="48" r="3.6" fill={INK} /><circle cx="60.2" cy="46.8" r="1.1" fill="#fff" /></g></g>
            {p.acc === 'glasses' && (
                <g fill="none" stroke={INK} strokeWidth="2.8">
                    <circle cx="41" cy="48" r="9" /><circle cx="59" cy="48" r="9" /><path d="M50 48 H50" /><path d="M48.5 47 Q50 45.5 51.5 47" />
                </g>
            )}
            <path className="smile" d="M43 58 Q50 65 57 58" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <ellipse className="mouth-o" cx="50" cy="61" rx="4.5" ry="5" fill={INK} />
            {p.acc === 'headphones' && (
                <>
                    <path d="M24 46 C20 6 80 6 76 46" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
                    <rect x="16" y="38" width="12" height="20" rx="6" fill="var(--sun)" {...stroke} />
                    <rect x="72" y="38" width="12" height="20" rx="6" fill="var(--sun)" {...stroke} />
                </>
            )}
        </svg>
    );
}

export default function Character({ person = 0, size = 76 }) {
    const { t } = useApp();
    const root = useRef(null);
    const timer = useRef(0);
    const n = useRef(Math.floor(Math.random() * 20));
    const [say, setSay] = useState(null);
    const [jump, setJump] = useState(false);
    const delay = useRef(`${(Math.random() * 4).toFixed(1)}s`);
    const p = PEOPLE[person % PEOPLE.length];

    useEffect(() => {
        const list = root.current ? Array.from(root.current.querySelectorAll('.pupil')) : [];
        const off = trackPupils(list);
        return () => { off(); clearTimeout(timer.current); };
    }, []);

    const poke = () => {
        setSay(t.quips[n.current++ % t.quips.length]);
        setJump(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => { setSay(null); setJump(false); }, 2300);
    };

    return (
        <span className={`char-wrap ${jump ? 'is-jump' : ''}`} style={{ width: size, '--blink': delay.current }}>
            {say && <span className="bubble" role="status">{say}</span>}
            <button type="button" className="char" ref={root} onClick={poke} aria-label="Say hi" tabIndex={-1}>
                <Person p={p} />
            </button>
        </span>
    );
}
