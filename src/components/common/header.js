import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button, Drawer, Badge } from 'antd';

import {
    PhoneOutlined,
    MailOutlined,
    GithubOutlined,
    LinkedinFilled,
    InstagramFilled,
    MenuOutlined,
    SunOutlined,
    MoonOutlined,
    CloseOutlined
  } from '@ant-design/icons';

function AppHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? JSON.parse(saved) : false;
    });

    const showDrawer = () => {
        setOpen(true);
    };
    
    const onClose = () => {
        setOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        
        if (newTheme) {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
            document.body.classList.remove('dark-theme');
        }
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        }

        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="modern-topbar">
                <div className="container">
                    <div className="topbar-content">
                        <div className="contact-links">
                            <a href="tel:+7(775)-090-70-13" className="contact-link">
                                <PhoneOutlined />
                                <span className="contact-text">+7(775)-090-70-13</span>
                            </a>
                            <a href="mailto:ahat0405@mail.ru" className="contact-link">
                                <MailOutlined />
                                <span className="contact-text">ahat0405@mail.ru</span>
                            </a>
                        </div>
                        
                        <div className="topbar-actions">
                            <div className="social-links">
                                <a href='https://github.com/rakhatprostakk228' target="_blank" rel="noopener noreferrer" className="social-link">
                                    <GithubOutlined />
                                </a>
                                <a href='https://www.linkedin.com/in/rakhatprostakk' target="_blank" rel="noopener noreferrer" className="social-link">
                                    <LinkedinFilled />
                                </a>
                                <a href='https://www.instagram.com/rakhatprostakk' target="_blank" rel="noopener noreferrer" className="social-link">
                                    <InstagramFilled />
                                </a>
                            </div>
                            
                            <div className="theme-switch">
                                <Button
                                    type="text"
                                    onClick={toggleTheme}
                                    className={`theme-toggle-button ${isDark ? 'dark' : 'light'}`}
                                    icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                                    title={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="logo-section">
                            <NavLink to="/" className="logo">
                                <span className="logo-text">rakhat</span>
                                <span className="logo-accent">prostakk</span>
                            </NavLink>
                            <div className="status-badge">
                                <Badge status="success" text="Available for work" />
                            </div>
                        </div>

                        <nav className="desktop-nav">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link">
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className="nav-link">
                                        <span>About</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/faq' className="nav-link">
                                        <span>FAQ</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="mobile-menu">
                            <Button 
                                type="text" 
                                onClick={showDrawer}
                                className="mobile-menu-btn"
                                icon={<MenuOutlined />}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Drawer 
                title={
                    <div className="drawer-header">
                        <span>Menu</span>
                        <Button 
                            type="text" 
                            onClick={onClose}
                            icon={<CloseOutlined />}
                            className="drawer-close"
                        />
                    </div>
                }
                onClose={onClose} 
                open={open}
                placement="right"
                className="mobile-drawer"
                closable={false}
            >
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li><NavLink onClick={onClose} to='/' className="mobile-nav-link">Home</NavLink></li>
                        <li><NavLink onClick={onClose} to='/about' className="mobile-nav-link">About</NavLink></li>
                        <li><NavLink onClick={onClose} to='/faq' className="mobile-nav-link">FAQ</NavLink></li>
                    </ul>
                </nav>
                
                <div className="mobile-contact">
                    <h4>Get in touch</h4>
                    <div className="mobile-contact-links">
                        <a href="tel:+7(775)-090-70-13" className="mobile-contact-link">
                            <PhoneOutlined />
                            <span>+7(775)-090-70-13</span>
                        </a>
                        <a href="mailto:ahat0405@mail.ru" className="mobile-contact-link">
                            <MailOutlined />
                            <span>ahat0405@mail.ru</span>
                        </a>
                    </div>
                </div>

                <div className="mobile-social">
                    <div className="mobile-social-links">
                        <a href='https://github.com/rakhatprostakk228' target="_blank" rel="noopener noreferrer">
                            <GithubOutlined />
                        </a>
                        <a href='https://www.linkedin.com/in/rakhatprostakk' target="_blank" rel="noopener noreferrer">
                            <LinkedinFilled />
                        </a>
                        <a href='https://www.instagram.com/rakhatprostakk' target="_blank" rel="noopener noreferrer">
                            <InstagramFilled />
                        </a>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default AppHeader;