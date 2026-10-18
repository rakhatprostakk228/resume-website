import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ui } from './data/resume';

const AppContext = createContext(null);

const read = (key, fallback) => {
    try {
        const v = window.localStorage.getItem(key);
        return v === null ? fallback : v;
    } catch (e) {
        return fallback;
    }
};
const write = (key, value) => {
    try {
        window.localStorage.setItem(key, value);
    } catch (e) {
        /* storage unavailable */
    }
};

export function AppProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const saved = read('lang', 'en');
        return ui[saved] ? saved : 'en';
    });
    const [dark, setDark] = useState(() => {
        const saved = read('theme-v2', null);
        if (saved !== null) return saved === 'dark';
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        write('lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        write('theme-v2', dark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark-theme', dark);
    }, [dark]);

    const toggleTheme = useCallback(() => setDark(d => !d), []);
    const toggleLang = useCallback(() => setLang(l => (l === 'en' ? 'ru' : 'en')), []);

    return (
        <AppContext.Provider value={{ lang, dark, toggleTheme, toggleLang, t: ui[lang] }}>
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);
