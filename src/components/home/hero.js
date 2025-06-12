import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import { GithubOutlined, LinkedinFilled, DownOutlined } from '@ant-design/icons';

function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [particles, setParticles] = useState([]);
    
    const titles = [
        ' Software Engineer',
        ' React Developer', 
        ' Frontend Developer',
        ' Web Developer'
    ];

    useEffect(() => {
        const currentTitle = titles[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentTitle.length) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, currentIndex, isDeleting, titles]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newParticle = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100,
                animationDuration: Math.random() * 3 + 2,
                opacity: Math.random() * 0.8 + 0.2
            };
            
            setParticles(prev => [...prev, newParticle]);
            
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 5000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const scrollToProjects = () => {
        const element = document.querySelector('.modern-projects-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="modern-hero">
            <div className="particles-container">
                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            opacity: particle.opacity,
                            animationDuration: `${particle.animationDuration}s`
                        }}
                    />
                ))}
            </div>

            <div className="hero-content">
                <Row gutter={[40, 40]} align="middle" className="hero-row">
                    <Col xs={24} lg={14}>
                        <div className="hero-text" style={{ textAlign: 'left' }}>
                            <div className="greeting">Hello, I'm</div>
                            <h1 className="hero-name">Rakhat</h1>
                            <div className="title-container">
                                <span className="title-text">I'm a <span className="typed-text">{displayedText}</span></span>
                                <span className="cursor">|</span>
                            </div>
                            <p className="hero-description">
                                19-year-old software engineering student from Astana IT University, 
                                passionate about creating modern web applications with React and JavaScript.
                            </p>
                            <div className="hero-buttons">
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    onClick={scrollToProjects}
                                    className="cta-button"
                                >
                                    View My Work
                                </Button>
                                <div className="social-links">
                                    <a href='https://github.com/rakhatprostakk228' target="_blank" rel="noopener noreferrer">
                                        <GithubOutlined />
                                    </a>
                                    <a href='https://www.linkedin.com/in/rakhatprostakk' target="_blank" rel="noopener noreferrer">
                                        <LinkedinFilled />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={10}>
                        <div className="hero-visual">
                            <div className="code-window">
                                <div className="window-header">
                                    <div className="window-controls">
                                        <span className="control red"></span>
                                        <span className="control yellow"></span>
                                        <span className="control green"></span>
                                    </div>
                                    <div className="window-title">portfolio.js</div>
                                </div>
                                <div className="code-content">
                                    <div className="code-line">
                                        <span className="keyword">const</span>
                                        <span className="variable"> developer</span>
                                        <span className="operator"> = </span>
                                        <span className="bracket">{'{'}</span>
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">name</span>
                                        <span className="operator">: </span>
                                        <span className="string">'Rakhat'</span>
                                        <span className="operator">,</span>
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">skills</span>
                                        <span className="operator">: </span>
                                        <span className="bracket">['</span>
                                        <span className="string">React</span>
                                        <span className="operator">, </span>
                                        <span className="string">JS</span>
                                        <span className="bracket">']</span>
                                        <span className="operator">,</span>
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">passion</span>
                                        <span className="operator">: </span>
                                        <span className="string">'Web Development'</span>
                                    </div>
                                    <div className="code-line">
                                        <span className="bracket">{'}'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="scroll-indicator" onClick={scrollToProjects}>
                <DownOutlined />
                <span>Scroll to explore</span>
            </div>
        </div>
    );
}

export default Hero;