import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Tag, Button, Modal, Tabs } from 'antd';
import { 
    CalendarOutlined, 
    TeamOutlined, 
    CodeOutlined,
    EnvironmentOutlined,
    TrophyOutlined,
    LinkOutlined,
    RocketOutlined,
    EyeOutlined,
    CloseOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    GlobalOutlined
} from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

import KMG from '../../assets/images/kmg.jpg';
import Seed from '../../assets/images/seed.jpg';
import Alladin from '../../assets/images/alladin-hotel.png';
import DiplomAI from '../../assets/images/diplomai.png';
import GoodFood from '../../assets/images/goodfood.png';
import ArtTech from '../../assets/images/ArtTech.png';
import SneakerShop from '../../assets/images/sneakerShop.png';
import Crypto from '../../assets/images/crypto.jpg';
import Animation from '../../assets/images/animation.png';

let TrustMe;
try {
    TrustMe = require('../../assets/images/trustMe.jpeg');
} catch (e) {
    TrustMe = null;
}

function Information() {
    const [visibleCards, setVisibleCards] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageScale, setImageScale] = useState(1);
    const [imageRotation, setImageRotation] = useState(0);
    const [activeTab, setActiveTab] = useState('official');
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    const getOfficialEmployment = () => [
        {
            id: '1',
            company: 'KazMunayGaz',
            position: t('experience.kmg.position'),
            period: '2024',
            location: 'Astana, Kazakhstan',
            image: KMG,
            description: t('experience.kmg.description'),
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Responsive Design'],
            type: 'Internship',
            category: t('experience.kmg.category'),
            achievements: Array.isArray(t('experience.kmg.achievements')) ? t('experience.kmg.achievements') : [],
            impact: t('experience.kmg.impact'),
            status: 'Completed',
            featured: true,
            hasLiveDemo: false
        },
        {
            id: '2',
            company: 'Seed School',
            position: t('experience.seed.position'),
            period: '2025',
            location: 'Astana, Kazakhstan',
            image: Seed,
            description: t('experience.seed.description'),
            technologies: ['React', 'JavaScript', 'CSS3', 'Educational UX', 'Mobile-First'],
            type: 'Full-time',
            category: t('experience.seed.category'),
            achievements: Array.isArray(t('experience.seed.achievements')) ? t('experience.seed.achievements') : [],
            impact: t('experience.seed.impact'),
            status: 'Completed',
            featured: true,
            hasLiveDemo: false
        },
        {
            id: '3',
            company: 'ArtTech',
            position: t('experience.arttech.position'),
            period: '2025',
            location: 'Kostanay, Kazakhstan',
            image: ArtTech,
            description: t('experience.arttech.description'),
            technologies: ['Python', 'Telegram Bot API', 'Bitrix CRM', 'Database', 'Automation'],
            type: 'Full-time',
            category: t('experience.arttech.category'),
            achievements: Array.isArray(t('experience.arttech.achievements')) ? t('experience.arttech.achievements') : [],
            impact: t('experience.arttech.impact'),
            status: 'Completed',
            featured: true,
            hasLiveDemo: false
        },
        {
            id: '4',
            company: 'TrustMe',
            position: t('experience.trustme.position'),
            period: 'November 2024 - Present',
            location: 'Kazakhstan',
            image: TrustMe,
            description: t('experience.trustme.description'),
            technologies: ['Team Management', 'Web Development', 'Quality Assurance', 'Project Coordination', 'Technical Support'],
            type: 'Full-time',
            category: t('experience.trustme.category'),
            achievements: Array.isArray(t('experience.trustme.achievements')) ? t('experience.trustme.achievements') : [],
            impact: t('experience.trustme.impact'),
            status: 'Current',
            featured: true,
            hasLiveDemo: false
        }
    ];

    const getProjects = () => [
        {
            id: 'p1',
            company: 'GoodFood',
            position: t('experience.goodfood.position'),
            period: '2025',
            location: 'Almaty, Kazakhstan',
            image: GoodFood,
            description: t('experience.goodfood.description'),
            technologies: ['React', 'JavaScript', 'CSS3', 'Restaurant Platform', 'Responsive Design'],
            type: 'Contract',
            category: t('experience.goodfood.category'),
            achievements: Array.isArray(t('experience.goodfood.achievements')) ? t('experience.goodfood.achievements') : [],
            impact: t('experience.goodfood.impact'),
            status: 'In Development',
            featured: true,
            hasLiveDemo: true,
            liveUrl: 'https://goodfood.kz/menu/db49ab2f-2b71-4a8d-a996-d585fb1f27c3',
            priority: 1
        },
        {
            id: 'p2',
            company: 'DiplomAI',
            position: t('experience.diplomai.position'),
            period: '2025',
            location: 'Astana, Kazakhstan',
            image: DiplomAI,
            description: t('experience.diplomai.description'),
            technologies: ['Vue.js', 'Node.js', 'JavaScript', 'Full-Stack', 'AI Integration'],
            type: 'Contract',
            category: t('experience.diplomai.category'),
            achievements: Array.isArray(t('experience.diplomai.achievements')) ? t('experience.diplomai.achievements') : [],
            impact: t('experience.diplomai.impact'),
            status: 'In Development',
            featured: true,
            hasLiveDemo: true,
            liveUrl: 'https://diplomai.kz',
            priority: 2
        },
        {
            id: 'p3',
            company: 'Alladin Hotel',
            position: t('experience.alladin.position'),
            period: '2025',
            location: 'Almaty, Kazakhstan',
            image: Alladin,
            description: t('experience.alladin.description'),
            technologies: ['React', 'JavaScript', 'CSS3', 'Payment Integration', 'Booking System'],
            type: 'Contract',
            category: t('experience.alladin.category'),
            achievements: Array.isArray(t('experience.alladin.achievements')) ? t('experience.alladin.achievements') : [],
            impact: t('experience.alladin.impact'),
            status: 'Near Completion',
            featured: true,
            hasLiveDemo: true,
            liveUrl: 'https://alladinhotel.kz/',
            priority: 3
        },
        {
            id: 'p4',
            company: 'MDEA.KZ',
            position: t('experience.mdea.position'),
            period: '2025',
            location: 'Astana, Kazakhstan',
            image: null,
            description: t('experience.mdea.description'),
            technologies: ['React', 'JavaScript', 'CSS3', 'E-commerce', 'Admin Panel'],
            type: 'Contract',
            category: t('experience.mdea.category'),
            achievements: Array.isArray(t('experience.mdea.achievements')) ? t('experience.mdea.achievements') : [],
            impact: t('experience.mdea.impact'),
            status: 'Completed',
            featured: false,
            hasLiveDemo: false,
            priority: 4
        },
        {
            id: 'p5',
            company: 'Sneaker Shop',
            position: t('projects.sneakerTitle'),
            period: '2024, 2025',
            location: 'Personal Project',
            image: SneakerShop,
            description: t('projects.sneakerDesc'),
            technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
            type: 'Personal Project',
            category: 'E-commerce',
            achievements: ['E-commerce platform', 'Shopping cart functionality', 'Product filtering', 'Responsive design'],
            impact: 'Modern React e-commerce application showcasing component architecture',
            status: 'Completed',
            featured: true,
            hasLiveDemo: true,
            liveUrl: 'https://rakhatprostakk228.github.io/sneakers_shop/',
            githubUrl: 'https://github.com/rakhatprostakk228/sneakers_shop',
            priority: 5
        },
        {
            id: 'p6',
            company: 'Crypto Landing Page',
            position: t('projects.cryptoTitle'),
            period: '2024',
            location: 'Personal Project',
            image: Crypto,
            description: t('projects.cryptoDesc'),
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animations'],
            type: 'Personal Project',
            category: 'Landing Page',
            achievements: ['High-converting landing page', 'Smooth animations', 'Modern UI/UX design', 'Sales optimization'],
            impact: 'High-converting landing page for cryptocurrency company',
            status: 'Completed',
            featured: false,
            hasLiveDemo: true,
            liveUrl: 'https://rakhatprostakk228.github.io/crypto_animation/',
            githubUrl: 'https://github.com/rakhatprostakk228/crypto_animation',
            priority: 6
        },
        {
            id: 'p7',
            company: 'CSS Animation Showcase',
            position: t('projects.animationTitle'),
            period: '2023',
            location: 'Personal Project',
            image: Animation,
            description: t('projects.animationDesc'),
            technologies: ['CSS3', 'HTML5', 'Animation', 'Keyframes'],
            type: 'Personal Project',
            category: 'Experimental',
            achievements: ['Creative CSS animations', 'Advanced CSS techniques', 'Interactive animations', 'Keyframes mastery'],
            impact: 'Creative showcase of CSS animations and transitions',
            status: 'Completed',
            featured: false,
            hasLiveDemo: true,
            liveUrl: 'https://rakhatprostakk228.github.io/animation/',
            githubUrl: 'https://github.com/rakhatprostakk228/animation',
            priority: 7
        }
    ].sort((a, b) => a.priority - b.priority);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const cardId = entry.target.dataset.experienceId;
                        if (cardId && !visibleCards.includes(cardId)) {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, cardId]);
                            }, index * 300);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const cards = sectionRef.current?.querySelectorAll('.experience-card');
        cards?.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, [visibleCards]);

    const getTypeColor = (type) => {
        const colors = {
            'Internship': '#1890ff',
            'Contract': '#52c41a',
            'Full-time': '#722ed1',
            'Personal Project': '#fa8c16'
        };
        return colors[type] || '#27c4ff';
    };

    const openImageModal = (image, company) => {
        setSelectedImage({ src: image, company });
        setModalVisible(true);
        setImageScale(1);
        setImageRotation(0);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
        setImageScale(1);
        setImageRotation(0);
    };

    const zoomIn = () => {
        setImageScale(prev => Math.min(prev + 0.25, 3));
    };

    const zoomOut = () => {
        setImageScale(prev => Math.max(prev - 0.25, 0.5));
    };

    const rotateLeft = () => {
        setImageRotation(prev => prev - 90);
    };

    const rotateRight = () => {
        setImageRotation(prev => prev + 90);
    };

    const resetImage = () => {
        setImageScale(1);
        setImageRotation(0);
    };

    const renderProjectImage = (experience) => {
        if (experience.image) {
            return (
                <div className="experience-image-section">
                    <div className="company-image">
                        <img src={experience.image} alt={`${experience.company} project`} />
                        <div className="image-overlay">
                            <div className="company-logo">
                                <span>{experience.company[0]}</span>
                            </div>
                            <Button
                                type="primary"
                                shape="circle"
                                size="large"
                                icon={<EyeOutlined />}
                                className="view-image-btn"
                                onClick={() => openImageModal(experience.image, experience.company)}
                                title={t('experience.viewImage')}
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="experience-image-section">
                    <div className="company-image no-image">
                        <div className="company-logo-large">
                            <span>{experience.company[0]}</span>
                        </div>
                        <div className="no-image-text">
                            <span>{t('experience.projectDetailsAvailable')}</span>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const renderProjectLinks = (experience) => {
        if (experience.hasLiveDemo || experience.githubUrl) {
            return (
                <div className="project-links-section">
                    <div className="project-links">
                        {experience.hasLiveDemo && (
                            <a 
                                href={experience.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link-btn live"
                            >
                                <GlobalOutlined />
                                <span>{t('projects.liveDemo')}</span>
                            </a>
                        )}
                        {experience.githubUrl && (
                            <a 
                                href={experience.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link-btn github"
                            >
                                <CodeOutlined />
                                <span>{t('projects.code')}</span>
                            </a>
                        )}
                    </div>
                </div>
            );
        }
        return null;
    };

    const officialEmployment = getOfficialEmployment();
    const projects = getProjects();

    const renderExperienceCards = (experiences) => {
        if (!experiences || experiences.length === 0) {
            return <div style={{ padding: '40px', textAlign: 'center', color: '#718096' }}>No items to display</div>;
        }
        return (
            <div className="tabs-content-wrapper">
                <Row gutter={[40, 40]}>
                    {experiences.map((experience, index) => (
                        <Col xs={24} xl={12} key={experience.id}>
                        <div 
                            className={`experience-card ${visibleCards.includes(experience.id) ? 'visible' : ''} ${experience.featured ? 'featured' : ''}`}
                            data-experience-id={experience.id}
                            onMouseEnter={() => setActiveCard(experience.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            {experience.featured && (
                                <div className="featured-indicator">
                                    <TrophyOutlined />
                                </div>
                            )}

                            {renderProjectImage(experience)}

                            <div className="experience-content">
                                <div className="experience-header-info">
                                    <div className="company-details">
                                        <h3 className="company-name">{experience.company}</h3>
                                        <p className="position-title">{experience.position}</p>
                                    </div>
                                    <div className="experience-meta">
                                        <Tag color={getTypeColor(experience.type)}>
                                            {experience.type}
                                        </Tag>
                                    </div>
                                </div>

                                <div className="experience-info">
                                    <div className="info-row">
                                        <CalendarOutlined />
                                        <span>{experience.period}</span>
                                    </div>
                                    <div className="info-row">
                                        <EnvironmentOutlined />
                                        <span>{experience.location}</span>
                                    </div>
                                    <div className="info-row">
                                        <LinkOutlined />
                                        <span>{experience.category}</span>
                                    </div>
                                </div>

                                <p className="experience-description">
                                    {experience.description}
                                </p>

                                <div className="technologies-section">
                                    <div className="tech-header">
                                        <CodeOutlined />
                                        <span>{t('experience.technologiesUsed')}</span>
                                    </div>
                                    <div className="tech-stack">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="achievements-section">
                                    <h4>{t('experience.keyAchievements')}</h4>
                                    <ul className="achievements-list">
                                        {experience.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="achievement-item">
                                                <TrophyOutlined />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {renderProjectLinks(experience)}

                                <div className="experience-footer">
                                    <div className="impact-statement">
                                        <strong>{t('experience.impact')}</strong> {experience.impact}
                                    </div>
                                    <div className={`status-badge ${experience.status.toLowerCase().replace(/ /g, '-')}`}>
                                        <span>
                                            {experience.status === 'Completed' 
                                                ? t('experience.completed') 
                                                : experience.status === 'In Development' 
                                                ? t('experience.inDevelopment')
                                                : experience.status === 'Near Completion'
                                                ? t('experience.nearCompletion')
                                                : experience.status === 'Current'
                                                ? t('experience.current')
                                                : experience.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };

    const tabItems = [
        {
            key: 'official',
            label: t('tabs.officialEmployment'),
            children: renderExperienceCards(officialEmployment)
        },
        {
            key: 'projects',
            label: t('tabs.projects'),
            children: renderExperienceCards(projects)
        }
    ];

    return (
        <div className="modern-experience-section" ref={sectionRef}>
            <div className="experience-header">
                <h2>{t('experience.title')}</h2>
                <p>{t('experience.description')}</p>
                
                <div className="experience-summary">
                    <div className="summary-item">
                        <TeamOutlined />
                        <div className="summary-content">
                            <span className="summary-number">{officialEmployment.length}</span>
                            <span className="summary-label">{t('experience.companies')}</span>
                        </div>
                    </div>
                    <div className="summary-item">
                        <RocketOutlined />
                        <div className="summary-content">
                            <span className="summary-number">{projects.length}</span>
                            <span className="summary-label">{t('experience.projects')}</span>
                        </div>
                    </div>
                    <div className="summary-item">
                        <TrophyOutlined />
                        <div className="summary-content">
                            <span className="summary-number">100%</span>
                            <span className="summary-label">{t('experience.successRate')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-tabs-container">
                <div className="container">
                    <Tabs
                        activeKey={activeTab}
                        onChange={setActiveTab}
                        items={tabItems}
                        size="large"
                    />
                </div>
            </div>

            <Modal
                open={modalVisible}
                onCancel={closeModal}
                footer={null}
                width="90vw"
                height="90vh"
                centered
                closable={false}
                className="image-modal"
                bodyStyle={{ 
                    padding: 0, 
                    height: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(0, 0, 0, 0.9)'
                }}
            >
                {selectedImage && (
                    <>
                        <div className="modal-header">
                            <div className="modal-title">
                                <h3>{selectedImage.company} {t('experience.projectScreenshot')}</h3>
                            </div>
                            <div className="modal-controls">
                                <Button
                                    type="text"
                                    icon={<ZoomOutOutlined />}
                                    onClick={zoomOut}
                                    disabled={imageScale <= 0.5}
                                    className="modal-control-btn"
                                    title="Zoom Out"
                                />
                                <Button
                                    type="text"
                                    icon={<ZoomInOutlined />}
                                    onClick={zoomIn}
                                    disabled={imageScale >= 3}
                                    className="modal-control-btn"
                                    title="Zoom In"
                                />
                                <Button
                                    type="text"
                                    icon={<RotateLeftOutlined />}
                                    onClick={rotateLeft}
                                    className="modal-control-btn"
                                    title="Rotate Left"
                                />
                                <Button
                                    type="text"
                                    icon={<RotateRightOutlined />}
                                    onClick={rotateRight}
                                    className="modal-control-btn"
                                    title="Rotate Right"
                                />
                                <Button
                                    type="text"
                                    onClick={resetImage}
                                    className="modal-control-btn"
                                    title="Reset"
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="text"
                                    icon={<CloseOutlined />}
                                    onClick={closeModal}
                                    className="modal-close-btn"
                                    title="Close"
                                />
                            </div>
                        </div>
                        <div className="modal-image-container">
                            <img
                                src={selectedImage.src}
                                alt={`${selectedImage.company} project`}
                                className="modal-image"
                                style={{
                                    transform: `scale(${imageScale}) rotate(${imageRotation}deg)`,
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default Information;