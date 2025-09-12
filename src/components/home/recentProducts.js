import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Button, Tag } from 'antd';
import { 
    GlobalOutlined,
    GithubOutlined, 
    CodeOutlined,
    RocketOutlined,
    StarOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

const projects = [
    {
        id: '1',
        image: require('../../assets/images/sneakerShop.png'),
        titleKey: 'projects.sneakerTitle',
        descriptionKey: 'projects.sneakerDesc',
        technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
        category: 'E-commerce',
        status: 'Completed',
        year: '2024, 2025',
        featured: true,
        links: {
            live: 'https://rakhatprostakk228.github.io/sneakers_shop/',
            github: 'https://github.com/rakhatprostakk228/sneakers_shop'
        }
    },
    {
        id: '2',
        image: require('../../assets/images/crypto.jpg'),
        titleKey: 'projects.cryptoTitle',
        descriptionKey: 'projects.cryptoDesc',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animations'],
        category: 'Landing Page',
        status: 'Completed',
        year: '2024',
        featured: false,
        links: {
            live: 'https://rakhatprostakk228.github.io/crypto_animation/',
            github: 'https://github.com/rakhatprostakk228/crypto_animation'
        }
    },
    {
        id: '3',
        image: require('../../assets/images/animation.png'),
        titleKey: 'projects.animationTitle',
        descriptionKey: 'projects.animationDesc',
        technologies: ['CSS3', 'HTML5', 'Animation', 'Keyframes'],
        category: 'Experimental',
        status: 'Completed',
        year: '2023',
        featured: false,
        links: {
            live: 'https://rakhatprostakk228.github.io/animation/',
            github: 'https://github.com/rakhatprostakk228/animation'
        }
    }
];

function RecentProducts() {
    const [visibleCards, setVisibleCards] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const cardId = entry.target.dataset.cardId;
                        if (cardId && !visibleCards.includes(cardId)) {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, cardId]);
                            }, index * 200);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('.project-card');
        cards?.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, [visibleCards]);

    const getCategoryColor = (category) => {
        const colors = {
            'E-commerce': '#52c41a',
            'Landing Page': '#1890ff',
            'Experimental': '#722ed1'
        };
        return colors[category] || '#27c4ff';
    };

    return (
        <div className="modern-projects-section" ref={sectionRef}>
            <div className="container">
                <div className="projects-header">
                    <div className="header-content">
                        <h2>{t('projects.title')}</h2>
                        <p>{t('projects.description')}</p>
                    </div>
                </div>

                <Row gutter={[32, 32]} justify="center">
                {projects.map((project, index) => (
                    <Col xs={24} lg={8} key={project.id}>
                        <div 
                            className={`project-card ${visibleCards.includes(project.id) ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
                            data-card-id={project.id}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {project.featured && (
                                <div className="featured-badge">
                                    <StarOutlined />
                                    <span>{t('projects.featured')}</span>
                                </div>
                            )}

                            <div className="project-image-container">
                                <img src={project.image} alt={t(project.titleKey)} />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <div className="project-links">
                                            <a 
                                                href={project.links.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link-btn live"
                                            >
                                                <GlobalOutlined />
                                                <span>{t('projects.liveDemo')}</span>
                                            </a>
                                            <a 
                                                href={project.links.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link-btn github"
                                            >
                                                <GithubOutlined />
                                                <span>{t('projects.code')}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-meta">
                                    <Tag color={getCategoryColor(project.category)}>
                                        {project.category}
                                    </Tag>
                                    <div className="project-year">
                                        <CalendarOutlined />
                                        <span>{project.year}</span>
                                    </div>
                                </div>

                                <h3 className="project-title">{t(project.titleKey)}</h3>
                                <p className="project-description">{t(project.descriptionKey)}</p>

                                <div className="project-tech">
                                    <div className="tech-label">
                                        <CodeOutlined />
                                        <span>{t('projects.technologies')}</span>
                                    </div>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-footer">
                                    <div className={`status ${project.status.toLowerCase()}`}>
                                        <RocketOutlined />
                                        <span>{t('projects.completed')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    );
}

export default RecentProducts;