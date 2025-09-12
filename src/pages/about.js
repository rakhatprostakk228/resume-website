import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, Progress, Tag, Button } from 'antd';
import { 
    UserOutlined, 
    BookOutlined, 
    GlobalOutlined,
    HeartOutlined,
    TrophyOutlined,
    RocketOutlined,
    CodeOutlined,
    StarOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    FireOutlined,
    CrownOutlined
} from '@ant-design/icons';
import { useLanguage } from '../components/context/languageContext';

import me from '../assets/images/me.jpg';

function AppAbout() {
    const [activeSection, setActiveSection] = useState('personal');
    const [visibleElements, setVisibleElements] = useState([]);
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    const getPersonalInfo = () => {
        const languages = t('about.languages');
        const interests = t('about.interests');
        
        return {
            name: t('about.name'),
            age: t('about.age'),
            location: t('about.location'),
            nationality: t('about.nationality'),
            languages: Array.isArray(languages) ? languages : ['Russian (Native)', 'English (B2)', 'Kazakh (Learning)'],
            interests: Array.isArray(interests) ? interests : ['Swimming', 'Football', 'Technology', 'Cultural Heritage'],
            motto: t('about.motto')
        };
    };

    const getUniversityInfo = () => ({
        institution: t('about.university'),
        degree: t('about.degree'),
        year: t('about.year'),
        duration: "3-year program",
        gpa: t('about.gpa'),
        focus: ["Web Development", "Software Architecture", "Database Systems", "Algorithms"],
        projects: ["E-commerce Platform", "Data Visualization Tools", "Educational Apps"],
        achievements: ["Participant of the Astana Hub course", "Hackathons Participant", "GameDev Club Member"]
    });

    const getWebsiteInfo = () => ({
        purpose: "Portfolio & Learning Experience",
        technologies: ["React", "Ant Design", "Modern CSS", "EmailJS"],
        features: ["Dark/Light Theme", "Responsive Design", "Interactive Animations", "Contact System"],
        goals: ["Showcase Skills", "Professional Networking", "Career Opportunities"],
        nextSteps: ["TypeScript Integration", "Backend Development", "Advanced Animations"],
        inspiration: "Modern web design trends and developer portfolios"
    });

    const getSections = () => [
        {
            id: 'personal',
            title: t('about.personalInfo'),
            icon: <UserOutlined />,
            color: '#27c4ff',
            data: getPersonalInfo()
        },
        {
            id: 'university',
            title: t('about.education'),
            icon: <BookOutlined />,
            color: '#52c41a',
            data: getUniversityInfo()
        },
        {
            id: 'website',
            title: t('about.thisWebsite'),
            icon: <GlobalOutlined />,
            color: '#722ed1',
            data: getWebsiteInfo()
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elementId = entry.target.dataset.elementId;
                        if (elementId && !visibleElements.includes(elementId)) {
                            setVisibleElements(prev => [...prev, elementId]);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = sectionRef.current?.querySelectorAll('[data-element-id]');
        elements?.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, [visibleElements]);

    const renderPersonalSection = () => {
        const personalInfo = getPersonalInfo();
        return (
            <div className="about-content-section">
                <Row gutter={[40, 40]}>
                    <Col xs={24} lg={10}>
                        <div className="profile-card" data-element-id="profile">
                            <div className="profile-image-container">
                                <img src={me} alt="Rakhat" className="profile-image" />
                                <div className="profile-badge">
                                    <CrownOutlined />
                                </div>
                            </div>
                            <div className="profile-info">
                                <h3>{personalInfo.name}</h3>
                                <div className="profile-stats">
                                    <div className="stat">
                                        <CalendarOutlined />
                                        <span>{personalInfo.age}</span>
                                    </div>
                                    <div className="stat">
                                        <EnvironmentOutlined />
                                        <span>{personalInfo.location}</span>
                                    </div>
                                    <div className="stat">
                                        <GlobalOutlined />
                                        <span>{personalInfo.nationality}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={14}>
                        <div className="info-cards">
                            <Card className="info-card" data-element-id="languages">
                                <div className="card-header">
                                    <GlobalOutlined />
                                    <h4>Languages</h4>
                                </div>
                                <div className="languages-grid">
                                    {personalInfo.languages.map((lang, index) => (
                                        <Tag key={index} className="language-tag">
                                            {lang}
                                        </Tag>
                                    ))}
                                </div>
                            </Card>
                            
                            <Card className="info-card" data-element-id="interests">
                                <div className="card-header">
                                    <HeartOutlined />
                                    <h4>Interests & Hobbies</h4>
                                </div>
                                <div className="interests-grid">
                                    {personalInfo.interests.map((interest, index) => (
                                        <div key={index} className="interest-item">
                                            <FireOutlined />
                                            <span>{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            
                            <Card className="info-card motto-card" data-element-id="motto">
                                <div className="motto-content">
                                    <StarOutlined className="motto-icon" />
                                    <p>"{personalInfo.motto}"</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

    const renderUniversitySection = () => {
        const universityInfo = getUniversityInfo();
        return (
            <div className="about-content-section">
                <Row gutter={[40, 40]}>
                    <Col xs={24} lg={12}>
                        <Card className="university-main-card" data-element-id="university-main">
                            <div className="university-header">
                                <TrophyOutlined className="university-icon" />
                                <div>
                                    <h3>{universityInfo.institution}</h3>
                                    <p>{universityInfo.degree}</p>
                                    <Tag color="green">{universityInfo.year}</Tag>
                                </div>
                            </div>
                            <div className="university-stats">
                                <div className="stat-row">
                                    <span>GPA:</span>
                                    <Progress 
                                        percent={80} 
                                        format={() => universityInfo.gpa}
                                        strokeColor="#52c41a"
                                        size={8}
                                    />
                                </div>
                                <div className="stat-row">
                                    <span>Program Duration:</span>
                                    <span className="stat-value">{universityInfo.duration}</span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <div className="university-details">
                            <Card className="info-card" data-element-id="focus-areas">
                                <div className="card-header">
                                    <CodeOutlined />
                                    <h4>{t('about.focusAreas')}</h4>
                                </div>
                                <div className="focus-grid">
                                    {universityInfo.focus.map((area, index) => (
                                        <div key={index} className="focus-item">
                                            <RocketOutlined />
                                            <span>{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            
                            <Card className="info-card" data-element-id="achievements">
                                <div className="card-header">
                                    <TrophyOutlined />
                                    <h4>{t('about.achievements')}</h4>
                                </div>
                                <div className="achievements-list">
                                    {universityInfo.achievements.map((achievement, index) => (
                                        <div key={index} className="achievement-badge">
                                            <StarOutlined />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

    const renderWebsiteSection = () => {
        const websiteInfo = getWebsiteInfo();
        return (
            <div className="about-content-section">
                <Row gutter={[40, 40]}>
                    <Col xs={24} lg={12}>
                        <Card className="website-main-card" data-element-id="website-main">
                            <div className="website-header">
                                <GlobalOutlined className="website-icon" />
                                <div>
                                    <h3>Portfolio Website</h3>
                                    <p>{websiteInfo.purpose}</p>
                                </div>
                            </div>
                            <div className="website-description">
                                <p>{websiteInfo.inspiration}</p>
                            </div>
                        </Card>
                        
                        <Card className="info-card" data-element-id="technologies">
                            <div className="card-header">
                                <CodeOutlined />
                                <h4>Technologies Used</h4>
                            </div>
                            <div className="tech-grid">
                                {websiteInfo.technologies.map((tech, index) => (
                                    <Tag key={index} color="purple" className="tech-tag">
                                        {tech}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card className="info-card" data-element-id="features">
                            <div className="card-header">
                                <RocketOutlined />
                                <h4>Key Features</h4>
                            </div>
                            <div className="features-list">
                                {websiteInfo.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <StarOutlined />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        
                        <Card className="info-card" data-element-id="next-steps">
                            <div className="card-header">
                                <FireOutlined />
                                <h4>What's Next</h4>
                            </div>
                            <div className="next-steps-list">
                                {websiteInfo.nextSteps.map((step, index) => (
                                    <div key={index} className="next-step-item">
                                        <RocketOutlined />
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'personal':
                return renderPersonalSection();
            case 'university':
                return renderUniversitySection();
            case 'website':
                return renderWebsiteSection();
            default:
                return renderPersonalSection();
        }
    };

    const sections = getSections();

    return (
        <div className="modern-about-page" ref={sectionRef}>
            <div className="about-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>{t('about.title')}</h1>
                        <p>{t('about.description')}</p>
                    </div>
                </div>
            </div>

            <div className="about-navigation">
                <div className="container">
                    <div className="nav-tabs">
                        {sections.map(section => (
                            <Button
                                key={section.id}
                                type={activeSection === section.id ? 'primary' : 'default'}
                                size="large"
                                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(section.id)}
                                style={{ 
                                    borderColor: activeSection === section.id ? section.color : '#e2e8f0',
                                    background: activeSection === section.id ? section.color : 'white',
                                    color: activeSection === section.id ? 'white' : '#64748b'
                                }}
                            >
                                {section.icon}
                                <span style={{ color: activeSection === section.id ? 'white' : '#64748b' }}>
                                    {section.title}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-content">
                <div className="container">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default AppAbout;