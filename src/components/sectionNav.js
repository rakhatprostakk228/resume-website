import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tooltip } from 'antd';

function SectionNavigation() {
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();
    const isHome = location.pathname === '/';

    // selector — куда скроллим по клику, detector — с какого места секция считается активной
    const sections = [
        { id: 'hero', label: 'Home', selector: '.modern-hero', detector: '.modern-hero' },
        { id: 'projects', label: 'Projects', selector: '.modern-projects-section', detector: '.modern-experience-section' },
        { id: 'skills', label: 'Skills', selector: '.skills-section', detector: '.skills-section' },
        { id: 'timeline', label: 'Journey', selector: '.timeline-section', detector: '.timeline-section' },
        { id: 'contact', label: 'Contact', selector: '.contact-section', detector: '.contact-section' }
    ];

    useEffect(() => {
        if (!isHome) return;

        let ticking = false;

        const updateActiveSection = () => {
            ticking = false;
            const probeY = window.innerHeight * 0.4;
            let current = 'hero';

            sections.forEach(section => {
                const element = document.querySelector(section.detector);
                if (element && element.getBoundingClientRect().top <= probeY) {
                    current = section.id;
                }
            });

            // Если доскроллили до самого низа — подсвечиваем последнюю секцию
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
                current = sections[sections.length - 1].id;
            }

            setActiveSection(current);
        };

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateActiveSection);
            }
        };

        updateActiveSection();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHome]);

    const scrollToSection = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!isHome) {
        return null;
    }

    return (
        <div className="section-navigation">
            <div className="nav-dots">
                {sections.map((section) => (
                    <Tooltip
                        key={section.id}
                        title={section.label}
                        placement="left"
                        overlayClassName="nav-tooltip"
                    >
                        <div
                            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.selector)}
                        >
                            <div className="dot-inner"></div>
                            <div className="dot-ripple"></div>
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}

export default SectionNavigation;
