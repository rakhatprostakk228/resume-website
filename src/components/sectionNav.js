import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';

function SectionNavigation() {
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: 'Home', selector: '.modern-hero' },
        { id: 'projects', label: 'Projects', selector: '.products' },
        { id: 'skills', label: 'Skills', selector: '.skills-section' },
        { id: 'timeline', label: 'Journey', selector: '.timeline-section' },
        { id: 'contact', label: 'Contact', selector: '.contact-section' }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = sections.find(section => 
                        entry.target.matches(section.selector)
                    )?.id;
                    if (sectionId) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            const element = document.querySelector(section.selector);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

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