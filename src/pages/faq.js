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

const { Panel } = Collapse;

function AppFaq() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleItems, setVisibleItems] = useState([]);
    const [openPanels, setOpenPanels] = useState(['1']);
    const sectionRef = useRef(null);

    const faqCategories = [
        { id: 'all', name: 'Все вопросы', icon: <QuestionCircleOutlined />, color: '#27c4ff' },
        { id: 'personal', name: 'Обо мне', icon: <UserOutlined />, color: '#52c41a' },
        { id: 'education', name: 'Образование', icon: <BookOutlined />, color: '#1890ff' },
        { id: 'skills', name: 'Навыки', icon: <CodeOutlined />, color: '#722ed1' },
        { id: 'projects', name: 'Проекты', icon: <RocketOutlined />, color: '#fa8c16' },
        { id: 'collaboration', name: 'Сотрудничество', icon: <TeamOutlined />, color: '#eb2f96' }
    ];

    const faqItems = [
        {
            key: '1',
            category: 'personal',
            question: 'Расскажите о себе. Кто вы и чем занимаетесь?',
            answer: (
                <div>
                    <p>Привет! Меня зовут Рахат, мне 19 лет. Я студент второго курса Astana IT University по специальности "Программная инженерия".</p>
                    <p>Увлекаюсь веб-разработкой уже более 2 лет. Специализируюсь на frontend разработке с использованием React, но также изучаю backend технологии для становления fullstack разработчиком.</p>
                    <p><strong>Мои интересы:</strong></p>
                    <ul>
                        <li>Веб-разработка (React, JavaScript, Node.js)</li>
                        <li>Изучение новых технологий</li>
                        <li>Плавание и футбол</li>
                        <li>Изучение культурного наследия Казахстана</li>
                    </ul>
                </div>
            ),
            tags: ['личное', 'о себе', 'интересы']
        },
        {
            key: '2',
            category: 'education',
            question: 'Где вы учитесь и какая у вас специальность?',
            answer: (
                <div>
                    <p>Я учусь в <strong>Astana IT University</strong> на втором курсе по специальности "Программная инженерия".</p>
                    <p><strong>Программа обучения:</strong></p>
                    <ul>
                        <li>3-летняя программа бакалавриата</li>
                        <li>Текущий GPA: 3.18/4.0</li>
                        <li>Основные предметы: алгоритмы, структуры данных, веб-разработка, базы данных</li>
                    </ul>
                    <p><strong>Дополнительные активности:</strong></p>
                    <ul>
                        <li>Участник курсов Astana Hub</li>
                        <li>Участие в хакатонах</li>
                        <li>Член GameDev клуба университета</li>
                    </ul>
                </div>
            ),
            tags: ['университет', 'образование', 'программная инженерия']
        },
        {
            key: '3',
            category: 'skills',
            question: 'Какими технологиями вы владеете?',
            answer: (
                <div>
                    <p>Мой технический стек включает:</p>
                    <p><strong>Frontend (продвинутый уровень):</strong></p>
                    <ul>
                        <li>HTML & CSS (90%) - семантическая верстка, CSS Grid, Flexbox, анимации</li>
                        <li>JavaScript (85%) - ES6+, асинхронное программирование, DOM манипуляции</li>
                        <li>React (80%) - hooks, state management, компонентная архитектура</li>
                    </ul>
                    <p><strong>Инструменты и другие технологии:</strong></p>
                    <ul>
                        <li>Git (75%) - контроль версий, работа с GitHub</li>
                        <li>PostgreSQL/MongoDB (65%) - проектирование БД, запросы</li>
                        <li>Node.js (30%) - базовая разработка серверной части</li>
                    </ul>
                    <p><strong>Сейчас изучаю:</strong> TypeScript, Next.js, Docker</p>
                </div>
            ),
            tags: ['навыки', 'технологии', 'программирование', 'react']
        },
        {
            key: '4',
            category: 'projects',
            question: 'Какие проекты вы разрабатывали?',
            answer: (
                <div>
                    <p>За время обучения и работы я создал несколько значимых проектов:</p>
                    
                    <p><strong>Коммерческие проекты:</strong></p>
                    <ul>
                        <li><strong>KazMunayGaz (2024)</strong> - Интерактивное веб-приложение для работы с диаграммами процессов</li>
                        <li><strong>Seed School (2025)</strong> - Образовательная платформа для изучения казахского языка</li>
                    </ul>
                    
                    <p><strong>Личные проекты:</strong></p>
                    <ul>
                        <li><strong>Sneaker Shop</strong> - E-commerce платформа на React с корзиной и фильтрацией</li>
                        <li><strong>Crypto Landing</strong> - Продающий лендинг для криптовалютной компании</li>
                        <li><strong>CSS Animation Showcase</strong> - Демонстрация продвинутых CSS анимаций</li>
                    </ul>
                    
                    <p>Все проекты доступны на <a href="https://github.com/rakhatprostakk228" target="_blank">GitHub</a></p>
                </div>
            ),
            tags: ['проекты', 'опыт работы', 'портфолио']
        },
        {
            key: '5',
            category: 'collaboration',
            question: 'Как с вами можно связаться для сотрудничества?',
            answer: (
                <div>
                    <p>Я всегда открыт для новых проектов и интересных предложений!</p>
                    
                    <p><strong>Контактная информация:</strong></p>
                    <ul>
                        <li>📧 Email: <a href="mailto:ahat0405@mail.ru">ahat0405@mail.ru</a></li>
                        <li>📱 Телефон: <a href="tel:+77750907013">+7(775)-090-70-13</a></li>
                        <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/rakhatprostakk" target="_blank">rakhatprostakk</a></li>
                        <li>🔗 GitHub: <a href="https://github.com/rakhatprostakk228" target="_blank">rakhatprostakk228</a></li>
                    </ul>
                    
                    <p><strong>Предпочтительные способы связи:</strong></p>
                    <ul>
                        <li>Email для деловых предложений</li>
                        <li>Telegram для быстрого общения</li>
                        <li>LinkedIn для профессиональных связей</li>
                    </ul>
                    
                    <p>Обычно отвечаю в течение 24 часов ⏰</p>
                </div>
            ),
            tags: ['контакты', 'сотрудничество', 'связь']
        },
        {
            key: '6',
            category: 'projects',
            question: 'Можете ли вы помочь с веб-разработкой?',
            answer: (
                <div>
                    <p>Конечно! Я буду рад помочь с вашими проектами веб-разработки.</p>
                    
                    <p><strong>Что я могу предложить:</strong></p>
                    <ul>
                        <li>Создание современных веб-сайтов с нуля</li>
                        <li>Разработка интерактивных пользовательских интерфейсов</li>
                        <li>Адаптивная верстка для всех устройств</li>
                        <li>Интеграция с API и базами данных</li>
                        <li>Оптимизация производительности</li>
                    </ul>
                    
                    <p><strong>Типы проектов:</strong></p>
                    <ul>
                        <li>Лендинги и корпоративные сайты</li>
                        <li>Интернет-магазины</li>
                        <li>Веб-приложения на React</li>
                        <li>Образовательные платформы</li>
                    </ul>
                    
                    <p>Готов взяться как за небольшие задачи, так и за комплексные проекты! 🚀</p>
                </div>
            ),
            tags: ['веб-разработка', 'услуги', 'помощь']
        },
        {
            key: '7',
            category: 'personal',
            question: 'Почему вы выбрали программирование?',
            answer: (
                <div>
                    <p>Программирование привлекло меня возможностью создавать что-то новое и полезное для людей.</p>
                    
                    <p><strong>Что меня вдохновляет:</strong></p>
                    <ul>
                        <li>Возможность решать реальные проблемы с помощью технологий</li>
                        <li>Постоянное развитие и изучение новых подходов</li>
                        <li>Творческий аспект в создании пользовательских интерфейсов</li>
                        <li>Международное сообщество разработчиков</li>
                    </ul>
                    
                    <p><strong>Моя философия:</strong></p>
                    <p>"Continuous learning and adaptability in everything I do" - Постоянное обучение и адаптивность во всем, что я делаю.</p>
                    
                    <p>Я верю, что технологии могут сделать мир лучше, и хочу быть частью этого процесса! 💡</p>
                </div>
            ),
            tags: ['мотивация', 'философия', 'карьера']
        },
        {
            key: '8',
            category: 'education',
            question: 'Как вы развиваетесь профессионально?',
            answer: (
                <div>
                    <p>Профессиональное развитие - это непрерывный процесс, которому я уделяю много внимания.</p>
                    
                    <p><strong>Мои методы обучения:</strong></p>
                    <ul>
                        <li>Университетские курсы по программной инженерии</li>
                        <li>Онлайн курсы и документация</li>
                        <li>Практические проекты и эксперименты</li>
                        <li>Участие в хакатонах и соревнованиях</li>
                        <li>Изучение open-source проектов</li>
                    </ul>
                    
                    <p><strong>Планы на ближайшее время:</strong></p>
                    <ul>
                        <li>Углубленное изучение TypeScript</li>
                        <li>Освоение backend разработки (Node.js, Express)</li>
                        <li>Изучение облачных технологий (AWS, Docker)</li>
                        <li>Улучшение навыков работы с базами данных</li>
                    </ul>
                    
                    <p>Цель - стать востребованным fullstack разработчиком! 🎯</p>
                </div>
            ),
            tags: ['обучение', 'развитие', 'планы']
        },
        {
            key: '9',
            category: 'collaboration',
            question: 'Какой у вас опыт работы в команде?',
            answer: (
                <div>
                    <p>У меня есть опыт работы как в академических, так и в коммерческих проектах.</p>
                    
                    <p><strong>Опыт командной работы:</strong></p>
                    <ul>
                        <li>Интернатура в KazMunayGaz - работа с senior разработчиками</li>
                        <li>Проект для Seed School - взаимодействие с заказчиком</li>
                        <li>Университетские групповые проекты</li>
                        <li>Участие в хакатонах</li>
                    </ul>
                    
                    <p><strong>Навыки работы в команде:</strong></p>
                    <ul>
                        <li>Использование Git для совместной разработки</li>
                        <li>Code review и парное программирование</li>
                        <li>Agile методологии разработки</li>
                        <li>Коммуникация с техническими и нетехническими специалистами</li>
                    </ul>
                    
                    <p><strong>Языки общения:</strong> Русский (родной), English (B2), Казахский (изучаю)</p>
                </div>
            ),
            tags: ['команда', 'опыт работы', 'коммуникация']
        },
        {
            key: '10',
            category: 'skills',
            question: 'Какие инструменты разработки вы используете?',
            answer: (
                <div>
                    <p>Я использую современные инструменты для эффективной разработки:</p>
                    
                    <p><strong>IDE и редакторы:</strong></p>
                    <ul>
                        <li>Visual Studio Code - основной редактор</li>
                        <li>WebStorm - для крупных проектов</li>
                        <li>Figma - для работы с дизайном</li>
                    </ul>
                    
                    <p><strong>Инструменты разработки:</strong></p>
                    <ul>
                        <li>Git & GitHub - контроль версий</li>
                        <li>npm/yarn - управление пакетами</li>
                        <li>Webpack/Vite - сборка проектов</li>
                        <li>Chrome DevTools - отладка</li>
                        <li>Postman - тестирование API</li>
                    </ul>
                    
                    <p><strong>Библиотеки и фреймворки:</strong></p>
                    <ul>
                        <li>React - основной фреймворк</li>
                        <li>Ant Design - UI компоненты</li>
                        <li>Axios - HTTP запросы</li>
                        <li>React Router - маршрутизация</li>
                    </ul>
                </div>
            ),
            tags: ['инструменты', 'технологии', 'разработка']
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

    return (
        <div className="modern-faq-page" ref={sectionRef}>
            <div className="faq-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Часто задаваемые вопросы</h1>
                        <p>Найдите ответы на самые популярные вопросы обо мне, моих навыках и опыте</p>
                        
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
                                        {item.answer}
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
                                    <h3>Вопросы не найдены</h3>
                                    <p>Попробуйте выбрать другую категорию вопросов</p>
                                    <Button 
                                        type="primary" 
                                        size="large"
                                        onClick={() => setActiveCategory('all')}
                                    >
                                        Показать все вопросы
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
                                        <h3>Не нашли ответ на свой вопрос?</h3>
                                        <p>
                                            Я всегда готов ответить на ваши вопросы лично! Свяжитесь со мной любым удобным способом, 
                                            и я постараюсь помочь вам как можно быстрее.
                                        </p>
                                        <div className="cta-features">
                                            <div className="feature-item">
                                                <ClockCircleOutlined />
                                                <span>Ответ в течение 24 часов</span>
                                            </div>
                                            <div className="feature-item">
                                                <GlobalOutlined />
                                                <span>Общение на русском и английском</span>
                                            </div>
                                            <div className="feature-item">
                                                <HeartOutlined />
                                                <span>Индивидуальный подход</span>
                                            </div>
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
                                                Написать на Email
                                            </Button>
                                            <Button 
                                                size="large"
                                                icon={<GlobalOutlined />}
                                                href="https://t.me/rakhatprostakk"
                                                target="_blank"
                                                className="cta-button-secondary"
                                                block
                                            >
                                                Telegram
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