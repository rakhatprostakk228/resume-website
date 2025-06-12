import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Tag, Button, Modal } from 'antd';
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
    RotateRightOutlined
} from '@ant-design/icons';

import KMG from '../../assets/images/kmg.jpg';
import Seed from '../../assets/images/seed.jpg';

const workExperience = [
    {
        id: '1',
        company: 'KazMunayGaz',
        position: 'Frontend Developer Intern',
        period: '2024',
        location: 'Astana, Kazakhstan',
        image: KMG,
        description: 'Developed an interactive web application for working with flowcharts and process diagrams. Created intuitive user interfaces for complex data visualization and workflow management systems.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Responsive Design'],
        type: 'Internship',
        category: 'Energy Sector',
        achievements: [
            'Built flowchart visualization tool',
            'Improved workflow efficiency',
            'Worked with enterprise systems',
            'Collaborated with senior developers'
        ],
        impact: 'Enhanced workflow management for engineering teams',
        status: 'Completed',
        featured: true
    },
    {
        id: '2',
        company: 'Seed School',
        position: 'Web Developer',
        period: '2025',
        location: 'Astana, Kazakhstan',
        image: Seed,
        description: 'Created a comprehensive educational platform for Kazakh language courses. Developed interactive learning modules, progress tracking, and user-friendly course management system.',
        technologies: ['React', 'JavaScript', 'CSS3', 'Educational UX', 'Mobile-First'],
        type: 'Contract',
        category: 'Education',
        achievements: [
            'Developed course management system',
            'Created interactive learning modules',
            'Implemented progress tracking',
            'Optimized for mobile learning'
        ],
        impact: 'Enabled online Kazakh language learning for students',
        status: 'Completed',
        featured: true
    }
];

function Information() {
    const [visibleCards, setVisibleCards] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageScale, setImageScale] = useState(1);
    const [imageRotation, setImageRotation] = useState(0);
    const sectionRef = useRef(null);

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
            'Full-time': '#722ed1'
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

    return (
        <div className="modern-experience-section" ref={sectionRef}>
            <div className="experience-header">
                <h2>Professional Experience</h2>
                <p>Real-world projects and collaborations with companies</p>
                
                <div className="experience-summary">
                    <div className="summary-item">
                        <TeamOutlined />
                        <div className="summary-content">
                            <span className="summary-number">2</span>
                            <span className="summary-label">Companies</span>
                        </div>
                    </div>
                    <div className="summary-item">
                        <RocketOutlined />
                        <div className="summary-content">
                            <span className="summary-number">3</span>
                            <span className="summary-label">Projects</span>
                        </div>
                    </div>
                    <div className="summary-item">
                        <TrophyOutlined />
                        <div className="summary-content">
                            <span className="summary-number">100%</span>
                            <span className="summary-label">Success Rate</span>
                        </div>
                    </div>
                </div>
            </div>

            <Row gutter={[40, 40]}>
                {workExperience.map((experience, index) => (
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
                                            title="View full image"
                                        />
                                    </div>
                                </div>
                            </div>

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
                                        <span>Technologies Used</span>
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
                                    <h4>Key Achievements</h4>
                                    <ul className="achievements-list">
                                        {experience.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="achievement-item">
                                                <TrophyOutlined />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="experience-footer">
                                    <div className="impact-statement">
                                        <strong>Impact:</strong> {experience.impact}
                                    </div>
                                    <div className={`status-badge ${experience.status.toLowerCase()}`}>
                                        <span>{experience.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

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
                                <h3>{selectedImage.company} Project Screenshot</h3>
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