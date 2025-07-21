import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = document.documentElement.scrollTop;
            const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrolled / maxHeight) * 100;
            
            setScrollProgress(progress);
            setIsVisible(scrolled > 300);
        };

        const handleScroll = () => {
            requestAnimationFrame(toggleVisibility);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <div className="scroll-progress-ring">
                <svg className="progress-ring" width="60" height="60">
                    <circle
                        className="progress-ring-circle-bg"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="3"
                        fill="transparent"
                        r="26"
                        cx="30"
                        cy="30"
                    />
                    <circle
                        className="progress-ring-circle"
                        stroke="#27c4ff"
                        strokeWidth="3"
                        fill="transparent"
                        r="26"
                        cx="30"
                        cy="30"
                        style={{
                            strokeDasharray: `${2 * Math.PI * 26}`,
                            strokeDashoffset: `${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`,
                            transition: 'stroke-dashoffset 0.1s ease'
                        }}
                    />
                </svg>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<ArrowUpOutlined />}
                    onClick={scrollToTop}
                    className="scroll-button"
                />
            </div>
        </div>
    );
}

export default ScrollToTop;