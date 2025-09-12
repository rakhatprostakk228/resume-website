import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            faq: 'FAQ'
        },
        hero: {
            greeting: 'Hello, I\'m',
            name: 'Rakhat',
            title1: ' Software Engineer',
            title2: ' React Developer',
            title3: ' Frontend Developer',
            title4: ' Web Developer',
            description: '19-year-old software engineering student from Astana IT University, passionate about creating modern web applications with React and JavaScript.',
            viewWork: 'View My Work',
            scrollToExplore: 'Scroll to explore'
        },
        projects: {
            title: 'Featured Projects',
            description: 'Explore my latest web development projects and experiments',
            featured: 'Featured',
            liveDemo: 'Live Demo',
            code: 'Code',
            technologies: 'Technologies:',
            completed: 'Completed',
            sneakerTitle: 'Sneaker Shop - E-commerce Platform',
            sneakerDesc: 'Modern React e-commerce application with shopping cart, product filtering, and responsive design. My first major React project that showcases component architecture and state management.',
            cryptoTitle: 'Crypto Landing Page',
            cryptoDesc: 'High-converting landing page for a cryptocurrency company featuring smooth animations, modern UI/UX design, and optimized for sales conversion.',
            animationTitle: 'CSS Animation Showcase',
            animationDesc: 'Creative showcase of CSS animations and transitions. Experimental project focusing on advanced CSS techniques, keyframes, and interactive animations.'
        },
        experience: {
            title: 'Professional Experience',
            description: 'Real-world projects and collaborations with companies',
            companies: 'Companies',
            projects: 'Projects',
            successRate: 'Success Rate',
            keyAchievements: 'Key Achievements',
            technologiesUsed: 'Technologies Used',
            impact: 'Impact:',
            completed: 'Completed',
            inDevelopment: 'In Development',
            viewImage: 'View full image',
            projectDetailsAvailable: 'Project Details Available',
            projectScreenshot: 'Project Screenshot',
            kmg: {
                position: 'Frontend Developer Intern',
                description: 'Developed an interactive web application for working with flowcharts and process diagrams. Created intuitive user interfaces for complex data visualization and workflow management systems.',
                category: 'Energy Sector',
                achievements: ['Built flowchart visualization tool', 'Improved workflow efficiency', 'Worked with enterprise systems', 'Collaborated with senior developers'],
                impact: 'Enhanced workflow management for engineering teams'
            },
            seed: {
                position: 'Web Developer',
                description: 'Created a comprehensive educational platform for Kazakh language courses. Developed interactive learning modules, progress tracking, and user-friendly course management system.',
                category: 'Education',
                achievements: ['Developed course management system', 'Created interactive learning modules', 'Implemented progress tracking', 'Optimized for mobile learning'],
                impact: 'Enabled online Kazakh language learning for students'
            },
            mdea: {
                position: 'Frontend Developer',
                description: 'Developed a modern e-commerce website for furniture sales. Created responsive design with product catalog, shopping cart functionality, and administrative panel for inventory management.',
                category: 'E-commerce',
                achievements: ['Built complete e-commerce solution', 'Implemented product management system', 'Created responsive user interface', 'Developed admin functionality'],
                impact: 'Enabled online furniture sales and inventory management'
            },
            toigan: {
                position: 'Web Developer',
                description: 'Created an interactive menu website for a coffee shop with modern design and user-friendly interface. Implemented responsive layout optimized for mobile ordering experience.',
                category: 'Food & Beverage',
                achievements: ['Developed interactive menu system', 'Created mobile-optimized design', 'Implemented smooth user experience', 'Optimized loading performance'],
                impact: 'Enhanced customer experience and simplified menu browsing'
            },
            arttech: {
                position: 'Telegram Bot Developer',
                description: 'Developed two specialized Telegram bots for business automation. HR Bot managed complete recruitment process from interviews to contract signing. Assistant Bot handled customer inquiries using knowledge base and integrated with Bitrix CRM.',
                category: 'Automation & CRM',
                achievements: ['Built HR recruitment automation bot', 'Developed customer service assistant', 'Integrated with Bitrix CRM system', 'Automated interview and testing process'],
                impact: 'Streamlined hiring process and improved customer service efficiency'
            }
        },
        skills: {
            title: 'Technical Skills',
            description: 'Technologies I work with and my proficiency levels',
            yearsLearning: 'Years Learning',
            projects: 'Projects',
            companies: 'Companies',
            englishLevel: 'English Level'
        },
        timeline: {
            title: 'My Journey',
            description: 'The path that led me to become a software developer',
            items: [
                {
                    title: 'Started Learning Programming',
                    description: 'Began my journey with HTML, CSS and basic JavaScript. Discovered passion for web development.',
                    achievements: ['First HTML page', 'CSS animations', 'JavaScript basics']
                },
                {
                    title: 'Entered Astana IT University',
                    description: 'Started studying Software Engineering. Deepened knowledge in programming fundamentals and algorithms.',
                    achievements: ['University admission', 'Data structures', 'OOP concepts']
                },
                {
                    title: 'First React Projects',
                    description: 'Built my first React applications including sneaker shop and crypto company websites.',
                    achievements: ['React mastery', 'Component architecture', 'State management']
                },
                {
                    title: 'Work Experience',
                    description: 'Gained practical experience working with KazMunayGaz and SeedSchool on real projects.',
                    achievements: ['Professional projects', 'Team collaboration', 'Real-world solutions']
                },
                {
                    title: 'Current Goals',
                    description: 'Learning TypeScript, improving backend skills, and preparing for career as a full-stack developer.',
                    achievements: ['TypeScript learning', 'Backend development', 'Career preparation']
                }
            ]
        },
        contact: {
            title: 'Let\'s Work Together',
            description: 'Have a project in mind or want to collaborate? I\'d love to hear from you!',
            getInTouch: 'Get In Touch',
            feelFreeToReach: 'Feel free to reach out through any of these channels',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            availableForProjects: 'Available for new projects',
            usuallyResponds: 'Usually responds within 24 hours',
            fullName: 'Full Name',
            fullNamePlaceholder: 'Your full name',
            emailAddress: 'Email Address',
            emailPlaceholder: 'your.email@example.com',
            phoneNumber: 'Phone Number',
            phonePlaceholder: '+1 (555) 123-4567',
            projectType: 'Project Type',
            selectProjectType: 'Select project type',
            budgetRange: 'Budget Range',
            selectBudgetRange: 'Select budget range (optional)',
            message: 'Message',
            messagePlaceholder: 'Tell me about your project, timeline, and any specific requirements...',
            sendMessage: 'Send Message',
            sending: 'Sending...',
            successTitle: 'Message Sent Successfully!',
            successMessage: 'Thank you for reaching out. I\'ll get back to you as soon as possible.',
            projectTypes: {
                webDevelopment: 'Web Development',
                frontend: 'Frontend Development',
                react: 'React Application',
                consultation: 'Consultation',
                collaboration: 'Collaboration',
                other: 'Other'
            },
            budgetRanges: {
                under1000: 'Under $1,000',
                '1000-5000': '$1,000 - $5,000',
                '5000-10000': '$5,000 - $10,000',
                over10000: 'Over $10,000',
                discuss: 'Let\'s discuss'
            }
        },
        about: {
            title: 'Get to Know Me',
            description: 'Discover my journey, passions, and the story behind this portfolio',
            personalInfo: 'About Me',
            education: 'Education',
            thisWebsite: 'This Website',
            name: 'Rakhat Rakhimbekov',
            age: '19 years old',
            location: 'Pavlodar → Astana',
            nationality: 'Kazakhstan',
            languages: ['Russian (Native)', 'English (B2)', 'Kazakh (Learning)'],
            interests: ['Swimming', 'Football', 'Technology', 'Cultural Heritage'],
            motto: 'Continuous learning and adaptability in everything I do',
            university: 'Astana IT University',
            degree: 'Bachelor\'s in Software Engineering',
            year: '2nd Year Student',
            gpa: '3.18/4.0',
            focusAreas: 'Focus Areas',
            achievements: 'Achievements'
        },
        faq: {
            title: 'Frequently Asked Questions',
            description: 'Find answers to the most popular questions about me, my skills and experience',
            categories: {
                all: 'All Questions',
                personal: 'About Me',
                education: 'Education',
                skills: 'Skills',
                projects: 'Projects',
                collaboration: 'Collaboration'
            },
            questions: {
                personal1: {
                    question: 'Tell me about yourself. Who are you and what do you do?',
                    answer: 'Hello! My name is Rakhat, I\'m 19 years old. I\'m a second-year student at Astana IT University majoring in "Software Engineering". I\'ve been passionate about web development for over 2 years.'
                },
                education1: {
                    question: 'Where do you study and what is your major?',
                    answer: 'I study at Astana IT University as a second-year student majoring in "Software Engineering". Current GPA: 3.18/4.0. Main subjects include algorithms, data structures, web development, and databases.'
                },
                skills1: {
                    question: 'What technologies do you work with?',
                    answer: 'My technical stack includes: HTML & CSS (90%), JavaScript (85%), React (80%), Git (75%), PostgreSQL/MongoDB (65%), and Node.js (30%). Currently learning TypeScript, Next.js, and Docker.'
                },
                projects1: {
                    question: 'What projects have you developed?',
                    answer: 'I\'ve created several significant projects including KazMunayGaz (2024) - Interactive web application, Seed School (2025) - Educational platform, Sneaker Shop - E-commerce platform, and CSS Animation Showcase.'
                },
                collaboration1: {
                    question: 'How can I contact you for collaboration?',
                    answer: 'I\'m always open to new projects! Contact me via Email: ahat0405@mail.ru, Phone: +7(775)-090-70-13, LinkedIn: rakhatprostakk, GitHub: rakhatprostakk228. I usually respond within 24 hours.'
                }
            },
            features: [
                'Response within 24 hours',
                'Communication in Russian and English',
                'Individual approach'
            ],
            noResults: 'No questions found',
            tryOtherCategory: 'Try selecting another category of questions',
            showAllQuestions: 'Show all questions',
            needHelp: 'Didn\'t find the answer to your question?',
            contactDescription: 'I\'m always ready to answer your questions personally! Contact me in any convenient way.',
            writeEmail: 'Write to Email',
            telegram: 'Telegram'
        },
        footer: {
            coreSkills: 'Core Technologies',
            aboutMe: 'About Me',
            currentStatus: 'Current Status',
            letsConnect: 'Let\'s Connect',
            connectDescription: 'Always excited to collaborate on interesting projects and learn new technologies.',
            openToOpportunities: 'Open to Opportunities',
            statusText: 'Currently seeking internship and project opportunities',
            copyright: 'RakhatProstakk. All rights reserved.',
            madeWith: 'Made with',
            using: 'using React & Ant Design',
            backToTop: 'Back to Top'
        },
        topbar: {
            switchToLight: 'Switch to light theme',
            switchToDark: 'Switch to dark theme',
            availableForWork: 'Available for work'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            about: 'Обо мне',
            faq: 'Вопросы'
        },
        hero: {
            greeting: 'Привет, меня зовут',
            name: 'Рахат',
            title1: ' Программист',
            title2: ' React Разработчик',
            title3: ' Frontend Разработчик',
            title4: ' Веб Разработчик',
            description: '19-летний студент программной инженерии из Astana IT University, увлеченный созданием современных веб-приложений с помощью React и JavaScript.',
            viewWork: 'Посмотреть мои работы',
            scrollToExplore: 'Прокрутите для изучения'
        },
        projects: {
            title: 'Избранные проекты',
            description: 'Изучите мои последние проекты веб-разработки и эксперименты',
            featured: 'Рекомендуемый',
            liveDemo: 'Демо',
            code: 'Код',
            technologies: 'Технологии:',
            completed: 'Завершено',
            sneakerTitle: 'Магазин кроссовок - E-commerce платформа',
            sneakerDesc: 'Современное React e-commerce приложение с корзиной покупок, фильтрацией товаров и адаптивным дизайном.',
            cryptoTitle: 'Криптовалютный лендинг',
            cryptoDesc: 'Высококонверсионная посадочная страница для криптовалютной компании.',
            animationTitle: 'Витрина CSS анимаций',
            animationDesc: 'Творческая демонстрация CSS анимаций и переходов.'
        },
        experience: {
            title: 'Профессиональный опыт',
            description: 'Реальные проекты и сотрудничество с компаниями',
            companies: 'Компании',
            projects: 'Проекты',
            successRate: 'Успешность',
            keyAchievements: 'Ключевые достижения',
            technologiesUsed: 'Используемые технологии',
            impact: 'Влияние:',
            completed: 'Завершено',
            inDevelopment: 'В разработке',
            viewImage: 'Посмотреть изображение',
            projectDetailsAvailable: 'Детали проекта доступны',
            projectScreenshot: 'Скриншот проекта',
            kmg: {
                position: 'Стажер Frontend разработчик',
                description: 'Разработал интерактивное веб-приложение для работы с блок-схемами и диаграммами процессов.',
                category: 'Энергетический сектор',
                achievements: ['Создал инструмент визуализации блок-схем', 'Улучшил эффективность рабочего процесса', 'Работал с корпоративными системами', 'Сотрудничал со старшими разработчиками'],
                impact: 'Улучшил управление рабочими процессами для инженерных команд'
            },
            seed: {
                position: 'Веб-разработчик',
                description: 'Создал комплексную образовательную платформу для курсов казахского языка.',
                category: 'Образование',
                achievements: ['Разработал систему управления курсами', 'Создал интерактивные учебные модули', 'Внедрил отслеживание прогресса', 'Оптимизировал для мобильного обучения'],
                impact: 'Обеспечил онлайн-изучение казахского языка для студентов'
            },
            mdea: {
                position: 'Frontend разработчик',
                description: 'Разработал современный сайт электронной коммерции для продажи мебели.',
                category: 'Электронная коммерция',
                achievements: ['Построил полное решение электронной коммерции', 'Внедрил систему управления товарами', 'Создал адаптивный пользовательский интерфейс', 'Разработал функциональность администратора'],
                impact: 'Обеспечил онлайн-продажи мебели и управление инвентарем'
            },
            toigan: {
                position: 'Веб-разработчик',
                description: 'Создал интерактивный сайт меню для кофейни с современным дизайном.',
                category: 'Еда и напитки',
                achievements: ['Разработал интерактивную систему меню', 'Создал мобильно-оптимизированный дизайн', 'Реализовал плавный пользовательский опыт', 'Оптимизировал производительность загрузки'],
                impact: 'Улучшил клиентский опыт и упростил просмотр меню'
            },
            arttech: {
                position: 'Разработчик Telegram ботов',
                description: 'Разработал два специализированных Telegram бота для автоматизации бизнеса.',
                category: 'Автоматизация и CRM',
                achievements: ['Построил HR бота для автоматизации найма', 'Разработал ассистента клиентского сервиса', 'Интегрировал с системой Битрикс CRM', 'Автоматизировал процесс собеседований и тестирования'],
                impact: 'Оптимизировал процесс найма и улучшил эффективность обслуживания клиентов'
            }
        },
        skills: {
            title: 'Технические навыки',
            description: 'Технологии, с которыми я работаю, и мой уровень владения',
            yearsLearning: 'Лет изучения',
            projects: 'Проекты',
            companies: 'Компании',
            englishLevel: 'Уровень английского'
        },
        timeline: {
            title: 'Мой путь',
            description: 'Путь, который привел меня к становлению разработчиком программного обеспечения',
            items: [
                {
                    title: 'Начал изучать программирование',
                    description: 'Начал свой путь с HTML, CSS и основ JavaScript.',
                    achievements: ['Первая HTML страница', 'CSS анимации', 'Основы JavaScript']
                },
                {
                    title: 'Поступил в Astana IT University',
                    description: 'Начал изучать программную инженерию.',
                    achievements: ['Поступление в университет', 'Структуры данных', 'Концепции ООП']
                },
                {
                    title: 'Первые проекты на React',
                    description: 'Создал свои первые приложения React.',
                    achievements: ['Освоение React', 'Архитектура компонентов', 'Управление состоянием']
                },
                {
                    title: 'Опыт работы',
                    description: 'Получил практический опыт работы с компаниями.',
                    achievements: ['Профессиональные проекты', 'Командная работа', 'Реальные решения']
                },
                {
                    title: 'Текущие цели',
                    description: 'Изучаю TypeScript и готовлюсь к карьере full-stack разработчика.',
                    achievements: ['Изучение TypeScript', 'Backend разработка', 'Подготовка к карьере']
                }
            ]
        },
        contact: {
            title: 'Давайте работать вместе',
            description: 'Есть проект в голове или хотите сотрудничать? Я буду рад услышать от вас!',
            getInTouch: 'Связаться со мной',
            feelFreeToReach: 'Не стесняйтесь обращаться через любой из этих каналов',
            email: 'Электронная почта',
            phone: 'Телефон',
            location: 'Местоположение',
            availableForProjects: 'Доступен для новых проектов',
            usuallyResponds: 'Обычно отвечает в течение 24 часов',
            fullName: 'Полное имя',
            fullNamePlaceholder: 'Ваше полное имя',
            emailAddress: 'Адрес электронной почты',
            emailPlaceholder: 'your.email@example.com',
            phoneNumber: 'Номер телефона',
            phonePlaceholder: '+7 (777) 123-4567',
            projectType: 'Тип проекта',
            selectProjectType: 'Выберите тип проекта',
            budgetRange: 'Бюджет',
            selectBudgetRange: 'Выберите диапазон бюджета (необязательно)',
            message: 'Сообщение',
            messagePlaceholder: 'Расскажите мне о вашем проекте...',
            sendMessage: 'Отправить сообщение',
            sending: 'Отправка...',
            successTitle: 'Сообщение успешно отправлено!',
            successMessage: 'Спасибо за обращение. Я свяжусь с вами как можно скорее.',
            projectTypes: {
                webDevelopment: 'Веб-разработка',
                frontend: 'Frontend разработка',
                react: 'React приложение',
                consultation: 'Консультация',
                collaboration: 'Сотрудничество',
                other: 'Другое'
            },
            budgetRanges: {
                under1000: 'До $1,000',
                '1000-5000': '$1,000 - $5,000',
                '5000-10000': '$5,000 - $10,000',
                over10000: 'Свыше $10,000',
                discuss: 'Обсудим'
            }
        },
        about: {
            title: 'Познакомьтесь со мной',
            description: 'Откройте для себя мой путь, увлечения и историю этого портфолио',
            personalInfo: 'Обо мне',
            education: 'Образование',
            thisWebsite: 'Этот сайт',
            name: 'Рахат Рахимбеков',
            age: '19 лет',
            location: 'Павлодар → Астана',
            nationality: 'Казахстан',
            languages: ['Русский (родной)', 'Английский (B2)', 'Казахский (изучаю)'],
            interests: ['Плавание', 'Футбол', 'Технологии', 'Культурное наследие'],
            motto: 'Непрерывное обучение и адаптивность во всем, что я делаю',
            university: 'Astana IT University',
            degree: 'Бакалавр программной инженерии',
            year: '2-й курс студент',
            gpa: '3.18/4.0',
            focusAreas: 'Области фокуса',
            achievements: 'Достижения'
        },
        faq: {
            title: 'Часто задаваемые вопросы',
            description: 'Найдите ответы на самые популярные вопросы обо мне',
            categories: {
                all: 'Все вопросы',
                personal: 'Обо мне',
                education: 'Образование',
                skills: 'Навыки',
                projects: 'Проекты',
                collaboration: 'Сотрудничество'
            },
            questions: {
                personal1: {
                    question: 'Расскажите о себе. Кто вы и чем занимаетесь?',
                    answer: 'Привет! Меня зовут Рахат, мне 19 лет. Я студент второго курса Astana IT University по специальности "Программная инженерия". Веб-разработкой увлечен уже более 2 лет.'
                },
                education1: {
                    question: 'Где вы учитесь и какая у вас специальность?',
                    answer: 'Я учусь в Astana IT University на втором курсе по специальности "Программная инженерия". Текущий GPA: 3.18/4.0. Основные предметы: алгоритмы, структуры данных, веб-разработка.'
                },
                skills1: {
                    question: 'С какими технологиями вы работаете?',
                    answer: 'Мой технический стек: HTML & CSS (90%), JavaScript (85%), React (80%), Git (75%), PostgreSQL/MongoDB (65%), Node.js (30%). Сейчас изучаю TypeScript, Next.js, Docker.'
                },
                projects1: {
                    question: 'Какие проекты вы разработали?',
                    answer: 'Я создал несколько значимых проектов: KazMunayGaz (2024) - интерактивное приложение, Seed School (2025) - образовательная платформа, Sneaker Shop - e-commerce платформа.'
                },
                collaboration1: {
                    question: 'Как со мной можно связаться для сотрудничества?',
                    answer: 'Я всегда открыт для новых проектов! Email: ahat0405@mail.ru, Телефон: +7(775)-090-70-13, LinkedIn: rakhatprostakk, GitHub: rakhatprostakk228. Обычно отвечаю в течение 24 часов.'
                }
            },
            features: [
                'Ответ в течение 24 часов',
                'Общение на русском и английском языках',
                'Индивидуальный подход'
            ],
            noResults: 'Вопросы не найдены',
            tryOtherCategory: 'Попробуйте выбрать другую категорию вопросов',
            showAllQuestions: 'Показать все вопросы',
            needHelp: 'Не нашли ответ на ваш вопрос?',
            contactDescription: 'Я всегда готов ответить на ваши вопросы лично! Свяжитесь со мной любым удобным способом.',
            writeEmail: 'Написать на Email',
            telegram: 'Telegram'
        },
        footer: {
            coreSkills: 'Основные технологии',
            aboutMe: 'Обо мне',
            currentStatus: 'Текущий статус',
            letsConnect: 'Давайте общаться',
            connectDescription: 'Всегда рад сотрудничеству над интересными проектами.',
            openToOpportunities: 'Открыт для возможностей',
            statusText: 'В настоящее время ищу стажировки и проектные возможности',
            copyright: 'RakhatProstakk. Все права защищены.',
            madeWith: 'Сделано с',
            using: 'использованием React & Ant Design',
            backToTop: 'Наверх'
        },
        topbar: {
            switchToLight: 'Переключить на светлую тему',
            switchToDark: 'Переключить на темную тему',
            availableForWork: 'Доступен для работы'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', currentLanguage);
        document.documentElement.setAttribute('lang', currentLanguage);
    }, [currentLanguage]);

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
    };

    const t = (key) => {
        const keys = key.split('.');
        let result = translations[currentLanguage];
        
        for (const k of keys) {
            if (result && typeof result === 'object') {
                result = result[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return result || key;
    };

    const value = {
        currentLanguage,
        changeLanguage,
        t,
        languages: [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ru', name: 'Русский', flag: '🇷🇺' }
        ]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};