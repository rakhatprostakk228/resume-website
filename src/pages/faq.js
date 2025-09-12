import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, Tag, Button, Collapse, Space } from 'antd';
import { 
    UserOutlined, 
    BookOutlined, 
    CodeOutlined,
    RocketOutlined,
    GlobalOutlined,
    HeartOutlined,
    TrophyOutlined,
    BulbOutlined,
    TeamOutlined,
    ClockCircleOutlined,
    MailOutlined,
    DownOutlined,
    CheckCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import { useLanguage } from '../components/context/languageContext';

const { Panel } = Collapse;

function AppFaq() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleItems, setVisibleItems] = useState([]);
    const [openPanels, setOpenPanels] = useState(['1']);
    const sectionRef = useRef(null);

    const faqCategories = [
        { id: 'all', name: t('faq.categories.all'), icon: <QuestionCircleOutlined />, color: '#27c4ff' },
        { id: 'personal', name: t('faq.categories.personal'), icon: <UserOutlined />, color: '#52c41a' },
        { id: 'education', name: t('faq.categories.education'), icon: <BookOutlined />, color: '#1890ff' },
        { id: 'skills', name: t('faq.categories.skills'), icon: <CodeOutlined />, color: '#722ed1' },
        { id: 'projects', name: t('faq.categories.projects'), icon: <RocketOutlined />, color: '#fa8c16' },
        { id: 'collaboration', name: t('faq.categories.collaboration'), icon: <TeamOutlined />, color: '#eb2f96' }
    ];

    const faqItems = [
        {
            key: '1',
            category: 'personal',
            question: t('faq.questions.personal1.question'),
            answer: t('faq.questions.personal1.answer'),
            tags: [t('faq.categories.personal'), 'о себе', 'интересы']
        },
        {
            key: '2',
            category: 'education',
            question: t('faq.questions.education1.question'),
            answer: t('faq.questions.education1.answer'),
            tags: [t('faq.categories.education'), 'университет', 'программная инженерия']
        },
        {
            key: '3',
            category: 'skills',
            question: t('faq.questions.skills1.question'),
            answer: t('faq.questions.skills1.answer'),
            tags: [t('faq.categories.skills'), 'технологии', 'программирование', 'react']
        },
        {
            key: '4',
            category: 'projects',
            question: t('faq.questions.projects1.question'),
            answer: t('faq.questions.projects1.answer'),
            tags: [t('faq.categories.projects'), 'опыт работы', 'портфолио']
        },
        {
            key: '5',
            category: 'collaboration',
            question: t('faq.questions.collaboration1.question'),
            answer: t('faq.questions.collaboration1.answer'),
            tags: ['контакты', t('faq.categories.collaboration'), 'связь']
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = entry.target.dataset.itemId;
                        if (itemId && !visibleItems.includes(itemId)) {
                            setTimeout(() => {
                                setVisibleItems(prev => [...prev, itemId]);
                            }, 100);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-item-id]');
        items?.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [visibleItems]);

    const filteredItems = faqItems.filter(item => {
        return activeCategory === 'all' || item.category === activeCategory;
    });

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const handlePanelChange = (key) => {
        setOpenPanels(key);
    };

    const getCategoryColor = (categoryId) => {
        const category = faqCategories.find(cat => cat.id === categoryId);
        return category ? category.color : '#27c4ff';
    };

    // Безопасная обработка массива features
    const getFeaturesArray = () => {
        const features = t('faq.features');
        if (Array.isArray(features)) {
            return features;
        }
        // Возвращаем дефолтный массив, если переводы не загрузились
        return [
            'Ответ в течение 24 часов',
            'Общение на русском и английском языках',
            'Индивидуальный подход'
        ];
    };

    return (
        <div className="modern-faq-page" ref={sectionRef}>
            <div className="faq-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>{t('faq.title')}</h1>
                        <p>{t('faq.description')}</p>
                        
                        <div className="faq-stats">
                            <div className="stat-item">
                                <QuestionCircleOutlined />
                                <div className="stat-content">
                                    <span className="stat-number">{faqItems.length}</span>
                                    <span className="stat-label">Вопросов</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <BulbOutlined />
                                <div className="stat-content">
                                    <span className="stat-number">{faqCategories.length - 1}</span>
                                    <span className="stat-label">Категорий</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <CheckCircleOutlined />
                                <div className="stat-content">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Актуальность</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-content">
                <div className="container">
                    <div className="faq-controls" data-item-id="controls">
                        <Card className="categories-card">
                            <h3>Категории вопросов</h3>
                            <div className="category-tags">
                                {faqCategories.map((category) => (
                                    <Button
                                        key={category.id}
                                        type={activeCategory === category.id ? 'primary' : 'default'}
                                        size="large"
                                        className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category.id)}
                                        style={{
                                            borderColor: activeCategory === category.id ? category.color : '#e2e8f0',
                                            background: activeCategory === category.id ? category.color : 'white',
                                            color: activeCategory === category.id ? 'white' : '#64748b'
                                        }}
                                    >
                                        {category.icon}
                                        <span>{category.name}</span>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="faq-list" data-item-id="list">
                        <Collapse
                            activeKey={openPanels}
                            onChange={handlePanelChange}
                            expandIconPosition="right"
                            expandIcon={({ isActive }) => (
                                <DownOutlined 
                                    className={`expand-icon ${isActive ? 'active' : ''}`}
                                    rotate={isActive ? 180 : 0} 
                                />
                            )}
                            className="modern-collapse"
                            ghost
                        >
                            {filteredItems.map((item, index) => (
                                <Panel
                                    key={item.key}
                                    header={
                                        <div className="panel-header">
                                            <div className="question-content">
                                                <div 
                                                    className="category-indicator"
                                                    style={{ backgroundColor: getCategoryColor(item.category) }}
                                                ></div>
                                                <h4 className="question-title">{item.question}</h4>
                                            </div>
                                            <div className="question-tags">
                                                {item.tags.slice(0, 2).map((tag, tagIndex) => (
                                                    <Tag 
                                                        key={tagIndex} 
                                                        color={getCategoryColor(item.category)}
                                                        className="question-tag"
                                                    >
                                                        {tag}
                                                    </Tag>
                                                ))}
                                                {item.tags.length > 2 && (
                                                    <Tag className="more-tags">
                                                        +{item.tags.length - 2}
                                                    </Tag>
                                                )}
                                            </div>
                                        </div>
                                    }
                                    className={`faq-panel ${visibleItems.includes('list') ? 'visible' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="answer-content">
                                        <p>{item.answer}</p>
                                        <div className="answer-footer">
                                            <div className="answer-tags">
                                                <strong>Теги:</strong>
                                                {item.tags.map((tag, tagIndex) => (
                                                    <Tag 
                                                        key={tagIndex}
                                                        className="tag-item"
                                                    >
                                                        {tag}
                                                    </Tag>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            ))}
                        </Collapse>
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="no-results" data-item-id="no-results">
                            <Card className="no-results-card">
                                <div className="no-results-content">
                                    <QuestionCircleOutlined className="no-results-icon" />
                                    <h3>{t('faq.noResults')}</h3>
                                    <p>{t('faq.tryOtherCategory')}</p>
                                    <Button 
                                        type="primary" 
                                        size="large"
                                        onClick={() => setActiveCategory('all')}
                                    >
                                        {t('faq.showAllQuestions')}
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    )}

                    <div className="contact-cta" data-item-id="cta">
                        <Card className="cta-card">
                            <Row gutter={[40, 40]} align="middle">
                                <Col xs={24} lg={16}>
                                    <div className="cta-content">
                                        <h3>{t('faq.needHelp')}</h3>
                                        <p>{t('faq.contactDescription')}</p>
                                        <div className="cta-features">
                                            {getFeaturesArray().map((feature, index) => (
                                                <div key={index} className="feature-item">
                                                    <ClockCircleOutlined />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <div className="cta-actions">
                                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                            <Button 
                                                type="primary" 
                                                size="large"
                                                icon={<MailOutlined />}
                                                href="mailto:ahat0405@mail.ru"
                                                className="cta-button"
                                                block
                                            >
                                                {t('faq.writeEmail')}
                                            </Button>
                                            <Button 
                                                size="large"
                                                icon={<GlobalOutlined />}
                                                href="https://t.me/rakhatprostakk"
                                                target="_blank"
                                                className="cta-button-secondary"
                                                block
                                            >
                                                {t('faq.telegram')}
                                            </Button>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;