import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { CalendarOutlined, BookOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';

function Timeline() {
    const [visibleItems, setVisibleItems] = useState([]);
    const timelineRef = useRef(null);

    const timelineData = [
        {
            id: 1,
            year: "2022",
            title: "Started Learning Programming",
            description: "Began my journey with HTML, CSS and basic JavaScript. Discovered passion for web development.",
            icon: <BookOutlined />,
            type: "education",
            achievements: ["First HTML page", "CSS animations", "JavaScript basics"]
        },
        {
            id: 2,
            year: "2023",
            title: "Entered Astana IT University",
            description: "Started studying Software Engineering. Deepened knowledge in programming fundamentals and algorithms.",
            icon: <CalendarOutlined />,
            type: "education",
            achievements: ["University admission", "Data structures", "OOP concepts"]
        },
        {
            id: 3,
            year: "2023",
            title: "First React Projects",
            description: "Built my first React applications including sneaker shop and crypto company websites.",
            icon: <CodeOutlined />,
            type: "project",
            achievements: ["React mastery", "Component architecture", "State management"]
        },
        {
            id: 4,
            year: "2024",
            title: "Work Experience",
            description: "Gained practical experience working with KazMunayGaz and SeedSchool on real projects.",
            icon: <RocketOutlined />,
            type: "work",
            achievements: ["Professional projects", "Team collaboration", "Real-world solutions"]
        },
        {
            id: 5,
            year: "2025",
            title: "Current Goals",
            description: "Learning TypeScript, improving backend skills, and preparing for career as a full-stack developer.",
            icon: <RocketOutlined />,
            type: "future",
            achievements: ["TypeScript learning", "Backend development", "Career preparation"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = parseInt(entry.target.dataset.id);
                        setVisibleItems(prev => [...new Set([...prev, itemId])]);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const getTypeColor = (type) => {
        const colors = {
            education: '#27c4ff',
            project: '#52c41a',
            work: '#fa8c16',
            future: '#722ed1'
        };
        return colors[type] || '#27c4ff';
    };

    return (
        <div className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <h2>My Journey</h2>
                    <p>The path that led me to become a software developer</p>
                </div>

                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline-line"></div>
                    
                    {timelineData.map((item, index) => (
                        <div 
                            key={item.id}
                            className={`timeline-item ${visibleItems.includes(item.id) ? 'visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                            data-id={item.id}
                        >
                            <Row gutter={[40, 40]} align="middle">
                                <Col xs={24} lg={12} className={index % 2 === 0 ? 'timeline-content-left' : 'timeline-content-right'}>
                                    <div className="timeline-content">
                                        <div className="timeline-year" style={{ color: getTypeColor(item.type) }}>
                                            {item.year}
                                        </div>
                                        <h3 className="timeline-title">{item.title}</h3>
                                        <p className="timeline-description">{item.description}</p>
                                        <div className="timeline-achievements">
                                            {item.achievements.map((achievement, idx) => (
                                                <span key={idx} className="achievement-tag" style={{ borderColor: getTypeColor(item.type) }}>
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} lg={12} className={index % 2 === 0 ? 'timeline-visual-right' : 'timeline-visual-left'}>
                                    <div className="timeline-visual">
                                        <div className="timeline-icon" style={{ backgroundColor: getTypeColor(item.type) }}>
                                            {item.icon}
                                        </div>
                                        <div className="timeline-connector" style={{ backgroundColor: getTypeColor(item.type) }}></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;