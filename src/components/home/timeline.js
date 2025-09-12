import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { CalendarOutlined, BookOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

function Timeline() {
    const [visibleItems, setVisibleItems] = useState([]);
    const timelineRef = useRef(null);
    const { t } = useLanguage();

    const getTimelineData = () => {
        const timelineItems = t('timeline.items');
        
        return [
            {
                id: 1,
                year: "2022",
                title: Array.isArray(timelineItems) && timelineItems[0] ? timelineItems[0].title : 'Started Learning Programming',
                description: Array.isArray(timelineItems) && timelineItems[0] ? timelineItems[0].description : 'Began my journey with HTML, CSS and basic JavaScript.',
                icon: <BookOutlined />,
                type: "education",
                achievements: Array.isArray(timelineItems) && timelineItems[0] && Array.isArray(timelineItems[0].achievements) 
                    ? timelineItems[0].achievements 
                    : ['First HTML page', 'CSS animations', 'JavaScript basics']
            },
            {
                id: 2,
                year: "2023",
                title: Array.isArray(timelineItems) && timelineItems[1] ? timelineItems[1].title : 'Entered Astana IT University',
                description: Array.isArray(timelineItems) && timelineItems[1] ? timelineItems[1].description : 'Started studying Software Engineering.',
                icon: <CalendarOutlined />,
                type: "education",
                achievements: Array.isArray(timelineItems) && timelineItems[1] && Array.isArray(timelineItems[1].achievements) 
                    ? timelineItems[1].achievements 
                    : ['University admission', 'Data structures', 'OOP concepts']
            },
            {
                id: 3,
                year: "2023",
                title: Array.isArray(timelineItems) && timelineItems[2] ? timelineItems[2].title : 'First React Projects',
                description: Array.isArray(timelineItems) && timelineItems[2] ? timelineItems[2].description : 'Built my first React applications.',
                icon: <CodeOutlined />,
                type: "project",
                achievements: Array.isArray(timelineItems) && timelineItems[2] && Array.isArray(timelineItems[2].achievements) 
                    ? timelineItems[2].achievements 
                    : ['React mastery', 'Component architecture', 'State management']
            },
            {
                id: 4,
                year: "2024",
                title: Array.isArray(timelineItems) && timelineItems[3] ? timelineItems[3].title : 'Work Experience',
                description: Array.isArray(timelineItems) && timelineItems[3] ? timelineItems[3].description : 'Gained practical experience working with companies.',
                icon: <RocketOutlined />,
                type: "work",
                achievements: Array.isArray(timelineItems) && timelineItems[3] && Array.isArray(timelineItems[3].achievements) 
                    ? timelineItems[3].achievements 
                    : ['Professional projects', 'Team collaboration', 'Real-world solutions']
            },
            {
                id: 5,
                year: "2025",
                title: Array.isArray(timelineItems) && timelineItems[4] ? timelineItems[4].title : 'Current Goals',
                description: Array.isArray(timelineItems) && timelineItems[4] ? timelineItems[4].description : 'Learning TypeScript and preparing for full-stack career.',
                icon: <RocketOutlined />,
                type: "future",
                achievements: Array.isArray(timelineItems) && timelineItems[4] && Array.isArray(timelineItems[4].achievements) 
                    ? timelineItems[4].achievements 
                    : ['TypeScript learning', 'Backend development', 'Career preparation']
            }
        ];
    };

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

    const timelineData = getTimelineData();

    return (
        <div className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <h2>{t('timeline.title')}</h2>
                    <p>{t('timeline.description')}</p>
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