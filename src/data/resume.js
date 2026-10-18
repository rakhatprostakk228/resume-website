import KMG from '../assets/images/kmg.jpg';
import Seed from '../assets/images/seed.jpg';
import ArtTech from '../assets/images/ArtTech.png';
import TrustMe from '../assets/images/trustMe.jpeg';
import PamyatnikLogo from '../assets/images/pamyatnikstone.webp';
import JobtronLogo from '../assets/images/jobtron.png';
import NpuLogo from '../assets/images/npu.jpg';
import FarabiLogo from '../assets/images/farabi.png';
import AituLogo from '../assets/images/aitu.jpg';

export const links = {
    email: 'ahat0405@mail.ru',
    phone: '+7 775 090 70 13',
    phoneHref: 'tel:+77750907013',
    github: 'https://github.com/rakhatprostakk228',
    linkedin: 'https://www.linkedin.com/in/rakhatprostakk',
    telegram: 'https://t.me/rrkaee_04'
};

// Dates: [year, month(1-12)]; end === null means "present"
export const experience = [
    {
        id: 'pamyatnik',
        company: 'PamyatnikStone',
        logo: PamyatnikLogo,
        start: [2026, 9],
        end: null,
        type: 'fullTime',
        place: { en: 'Almaty, Kazakhstan · Hybrid', ru: 'Алматы, Казахстан · Гибрид' },
        role: { en: 'Frontend Developer & SEO Specialist', ru: 'Frontend-разработчик и SEO-специалист' },
        text: {
            en: 'Building new websites, improving existing ones and handling the technical side of SEO optimization.',
            ru: 'Занимаюсь созданием новых сайтов, доработкой существующих и технической SEO-оптимизацией сайтов.'
        },
        stack: ['Vue.js', 'Git', 'Technical SEO']
    },
    {
        id: 'businesshub',
        company: 'BusinessHub',
        logo: JobtronLogo,
        start: [2026, 5],
        end: null,
        type: 'fullTime',
        place: { en: 'Shymkent, Kazakhstan · Remote', ru: 'Шымкент, Казахстан · Удалённо' },
        role: { en: 'Frontend Developer Junior+', ru: 'Frontend-разработчик Junior+' },
        text: {
            en: 'Developed and maintained the Jobtron HRM platform: shipped new features, improved existing modules and fixed frontend issues. Worked with cross-functional teams in an Agile workflow.',
            ru: 'Разрабатывал и поддерживал HRM-платформу Jobtron: новые функции, доработка модулей и исправление фронтенд-багов. Работал в кросс-функциональных командах по Agile.'
        },
        stack: ['Vue.js 2', 'Vuex', 'JavaScript', 'Bootstrap', 'Laravel REST API', 'Git']
    },
    {
        id: 'trustme',
        company: 'TrustMe.kz',
        logo: TrustMe,
        start: [2025, 11],
        end: [2026, 7],
        type: 'fullTime',
        place: { en: 'Astana, Kazakhstan · Remote', ru: 'Астана, Казахстан · Удалённо' },
        role: { en: 'Frontend Developer & Tech Coordinator', ru: 'Frontend-разработчик и тех. координатор' },
        text: {
            en: 'Led a group of markup engineers and coordinated technical tasks. Built the frontend, kept code quality high, planned work and mentored teammates.',
            ru: 'Руководил группой верстальщиков и координировал технические задачи. Разрабатывал фронтенд, следил за качеством кода, планировал работу и менторил коллег.'
        },
        stack: ['Vue.js', 'Tailwind CSS', 'GitLab', 'Code Review']
    },
    {
        id: 'sewing',
        company: 'Sewing Factory',
        logo: null,
        start: [2025, 9],
        end: [2025, 11],
        type: 'cofounder',
        place: { en: 'Remote / Astana', ru: 'Удалённо / Астана' },
        role: { en: 'Co-Founder & Frontend Developer', ru: 'Сооснователь и Frontend-разработчик' },
        text: {
            en: 'Co-founded an NFT marketplace startup preparing for investment. Built the frontend architecture and UI from scratch and connected the initial backend for the MVP.',
            ru: 'Сооснователь NFT-маркетплейса, готовящегося к инвестициям. С нуля сделал архитектуру фронтенда и UI, подключил первичный бэкенд для MVP.'
        },
        stack: ['React', 'JavaScript', 'UI/UX', 'NFT'],
        url: 'https://sewing-factory-exiylod23-rakhats-projects-8807b277.vercel.app/'
    },
    {
        id: 'arttech',
        company: 'ArtTech',
        logo: ArtTech,
        start: [2025],
        end: [2025],
        type: 'fullTime',
        place: { en: 'Kostanay, Kazakhstan', ru: 'Костанай, Казахстан' },
        role: { en: 'Telegram Bot Developer', ru: 'Разработчик Telegram-ботов' },
        text: {
            en: 'Built two Telegram bots: an HR bot covering recruitment from interview to contract, and an assistant bot answering customers from a knowledge base, integrated with Bitrix CRM.',
            ru: 'Сделал двух Telegram-ботов: HR-бот для найма от собеседования до договора и бот-ассистент, отвечающий клиентам по базе знаний, с интеграцией в Bitrix CRM.'
        },
        stack: ['Python', 'Telegram Bot API', 'Bitrix CRM']
    },
    {
        id: 'seed',
        company: 'Seed School',
        logo: Seed,
        start: [2025],
        end: [2025],
        type: 'fullTime',
        place: { en: 'Astana, Kazakhstan', ru: 'Астана, Казахстан' },
        role: { en: 'Web Developer', ru: 'Веб-разработчик' },
        text: {
            en: 'Created an educational platform for Kazakh language courses with interactive learning modules, progress tracking and course management.',
            ru: 'Создал образовательную платформу для курсов казахского языка: интерактивные модули, отслеживание прогресса и управление курсами.'
        },
        stack: ['React', 'JavaScript', 'CSS3']
    },
    {
        id: 'kmg',
        company: 'KazMunayGaz',
        logo: KMG,
        start: [2024],
        end: [2024],
        type: 'internship',
        place: { en: 'Astana, Kazakhstan', ru: 'Астана, Казахстан' },
        role: { en: 'Frontend Developer Intern', ru: 'Стажёр Frontend-разработчик' },
        text: {
            en: 'Built an interactive web app for working with flowcharts and process diagrams for engineering teams.',
            ru: 'Разработал интерактивное веб-приложение для работы с блок-схемами и диаграммами процессов для инженерных команд.'
        },
        stack: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js']
    }
];

export const projects = [
    { name: 'RentMonitor', tag: { en: 'Commercial rental control', ru: 'Контроль коммерческой аренды' }, url: 'https://rentmonitor.org/' },
    { name: 'RentMonitor CP', tag: { en: 'Client portal', ru: 'Личный кабинет' }, url: 'https://cp.rentmonitor.org/' },
    { name: 'PamyatnikStone', tag: { en: 'Monuments · SEO', ru: 'Памятники · SEO' }, url: 'https://pamyatnikstone.kz/' },
    { name: 'Jobtron', tag: { en: 'HRM platform · Vue', ru: 'HRM-платформа · Vue' }, url: 'https://jobtron.org/' },
    { name: 'Dar Trans Logistic', tag: { en: 'Freight logistics', ru: 'Грузоперевозки' }, url: 'https://dar-trans-logistic.vercel.app/' },
    { name: 'Kabidolla Elaman', tag: { en: 'Wedding invitation', ru: 'Свадебное приглашение' }, url: 'https://kabidolla-elaman.vercel.app/' },
    { name: 'Scoutly', tag: { en: 'AI recruitment · Diploma', ru: 'AI-рекрутинг · Диплом' }, url: 'https://diploma-project-nine.vercel.app/' },
    { name: 'Alladin Hotel', tag: { en: 'Booking · React', ru: 'Бронирование · React' }, url: 'https://alladinhotel.kz/' },
    { name: 'A2 Avtopark', tag: { en: 'Car rental · Vue', ru: 'Аренда авто · Vue' }, url: 'https://www.a2-avtopark.kz/' },
    { name: 'Sultanoff', tag: { en: 'Event host site · Vue', ru: 'Сайт ведущего · Vue' }, url: 'https://sultanoff.vercel.app/' },
    { name: 'Barakat', tag: { en: 'Café menu · React', ru: 'Меню кафе · React' }, url: 'https://barakat-sigma.vercel.app/' },
    { name: 'Sneaker Shop', tag: { en: 'E-commerce · React', ru: 'E-commerce · React' }, url: 'https://rakhatprostakk228.github.io/sneakers_shop/' },
    { name: 'Crypto Landing', tag: { en: 'GSAP animations', ru: 'GSAP-анимации' }, url: 'https://rakhatprostakk228.github.io/crypto_animation/' },
];

export const education = [
    {
        id: 'npu',
        school: { en: 'Northwestern Polytechnical University', ru: 'Northwestern Polytechnical University' },
        schoolNative: '西北工业大学',
        short: 'NPU',
        logo: NpuLogo,
        color: '#2b4560',
        degree: { en: "Master's Degree", ru: 'Магистратура' },
        field: { en: 'Computer Science and Technologies', ru: 'Computer Science and Technologies' },
        start: [2026, 9],
        end: [2028, 6]
    },
    {
        id: 'farabi',
        school: { en: 'Al-Farabi Kazakh National University', ru: 'Казахский национальный университет им. аль-Фараби' },
        short: 'KazNU',
        logo: FarabiLogo,
        color: '#1f3248',
        degree: { en: "Master's Degree", ru: 'Магистратура' },
        field: { en: 'Computer Science and Technologies', ru: 'Computer Science and Technologies' },
        start: [2026, 9],
        end: [2027, 6]
    },
    {
        id: 'aitu',
        school: { en: 'Astana IT University', ru: 'Astana IT University' },
        short: 'AITU',
        logo: AituLogo,
        color: '#3b5b82',
        degree: { en: "Bachelor's Degree", ru: 'Бакалавриат' },
        field: { en: 'Software Engineering', ru: 'Программная инженерия' },
        start: [2023, 9],
        end: [2026, 6]
    }
];

export const faq = [
    {
        q: { en: 'Who are you and what do you do?', ru: 'Кто вы и чем занимаетесь?' },
        a: {
            en: "I'm Rakhat, a frontend developer from Kazakhstan. I build web interfaces with Vue.js and React, and I'm currently working at PamyatnikStone and BusinessHub while studying for two Master's degrees.",
            ru: 'Я Рахат, frontend-разработчик из Казахстана. Делаю веб-интерфейсы на Vue.js и React. Сейчас работаю в PamyatnikStone и BusinessHub и параллельно учусь в двух магистратурах.'
        }
    },
    {
        q: { en: 'What is your education?', ru: 'Какое у вас образование?' },
        a: {
            en: "Bachelor's in Software Engineering at Astana IT University (2023–2026). In September 2026 I started Master's programs in Computer Science and Technologies at Al-Farabi Kazakh National University and Northwestern Polytechnical University.",
            ru: 'Бакалавр программной инженерии в Astana IT University (2023–2026). В сентябре 2026 начал магистратуру по Computer Science and Technologies в КазНУ им. аль-Фараби и в Northwestern Polytechnical University.'
        }
    },
    {
        q: { en: 'What technologies do you work with?', ru: 'С какими технологиями вы работаете?' },
        a: {
            en: 'Vue.js (2 and 3), React, JavaScript and TypeScript, HTML/CSS, Tailwind, Bootstrap, Vuex, Zustand and Git. I also have experience integrating Laravel REST APIs and building Telegram bots in Python.',
            ru: 'Vue.js (2 и 3), React, JavaScript и TypeScript, HTML/CSS, Tailwind, Bootstrap, Vuex, Zustand и Git. Также есть опыт интеграции с Laravel REST API и разработки Telegram-ботов на Python.'
        }
    },
    {
        q: { en: 'What languages do you speak?', ru: 'Какими языками вы владеете?' },
        a: {
            en: 'Russian and Kazakh (native), English (B2).',
            ru: 'Русский и казахский — родные, английский — B2.'
        }
    },
    {
        q: { en: 'Do you take freelance or side projects?', ru: 'Берёте ли вы фриланс и сторонние проекты?' },
        a: {
            en: 'Yes, I have delivered a number of contract projects: hotel booking, car rental, restaurant and café sites, an AI diploma assistant and more. The list is at the bottom of the Experience section.',
            ru: 'Да, у меня есть ряд контрактных проектов: бронирование отеля, аренда авто, сайты ресторана и кафе, AI-помощник для дипломов и другие. Список в конце раздела «Опыт».'
        }
    },
    {
        q: { en: 'How can I contact you?', ru: 'Как с вами связаться?' },
        a: {
            en: 'Email, Telegram, LinkedIn or phone — all links are in the footer. I usually reply within a day.',
            ru: 'Почта, Telegram, LinkedIn или телефон — все ссылки в подвале. Обычно отвечаю в течение суток.'
        }
    }
];

export const ui = {
    en: {
        nav: { experience: 'Experience', education: 'Education', faq: 'FAQ' },
        hero: {
            hello: "Hi, I'm",
            name: 'Rakhat Rakhimbekov',
            roles: ['Frontend Developer', 'Vue & React Engineer', 'Master’s Student', 'UI Enthusiast'],
            text: 'Frontend developer from Kazakhstan building fast, polished web interfaces. Currently shipping products at PamyatnikStone and BusinessHub, and studying Computer Science.',
            cta: 'See experience',
            contact: 'Get in touch',
            stats: { years: 'Years in development', companies: 'Companies', projects: 'Projects shipped' },
            scroll: 'Scroll'
        },
        experience: {
            eyebrow: 'Career',
            title: 'Experience',
            sub: 'Where I have worked and what I have built.',
            present: 'Present',
            current: 'Current',
            types: { fullTime: 'Full-time', cofounder: 'Co-founder', internship: 'Internship' },
            projectsTitle: 'Freelance & selected projects',
            visit: 'Open'
        },
        education: {
            eyebrow: 'Learning',
            title: 'Education',
            sub: 'Degrees and programs.',
            inProgress: 'In progress'
        },
        faq: { eyebrow: 'Quick answers', title: 'FAQ', sub: 'Short answers to the most common questions.' },
        footer: { cta: "Let's build something", rights: 'All rights reserved.', top: 'Back to top' },
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        mos: 'mos', yrs: 'yrs',
        theme: { light: 'Switch to light theme', dark: 'Switch to dark theme' },
        quips: ['Hi there! 👋', 'Hire Rakhat, seriously', 'Psst… keep scrolling', 'I live in the DOM', 'Vue or React? Yes.', 'Boop!', 'Ship it 🚀', 'No bugs. Only features.']
    },
    ru: {
        nav: { experience: 'Опыт', education: 'Учёба', faq: 'FAQ' },
        hero: {
            hello: 'Привет, я',
            name: 'Рахат Рахимбеков',
            roles: ['Frontend-разработчик', 'Vue & React инженер', 'Магистрант', 'Любитель UI'],
            text: 'Frontend-разработчик из Казахстана, делаю быстрые и аккуратные веб-интерфейсы. Сейчас работаю над продуктами в PamyatnikStone и BusinessHub и учусь в магистратуре.',
            cta: 'Смотреть опыт',
            contact: 'Связаться',
            stats: { years: 'года в разработке', companies: 'Компаний', projects: 'Проектов' },
            scroll: 'Вниз'
        },
        experience: {
            eyebrow: 'Карьера',
            title: 'Опыт',
            sub: 'Где я работал и что сделал.',
            present: 'Сейчас',
            current: 'Сейчас',
            types: { fullTime: 'Полная занятость', cofounder: 'Сооснователь', internship: 'Стажировка' },
            projectsTitle: 'Фриланс и избранные проекты',
            visit: 'Открыть'
        },
        education: {
            eyebrow: 'Обучение',
            title: 'Образование',
            sub: 'Степени и программы.',
            inProgress: 'Учусь сейчас'
        },
        faq: { eyebrow: 'Коротко', title: 'Вопросы', sub: 'Короткие ответы на частые вопросы.' },
        footer: { cta: 'Давайте сделаем что-то крутое', rights: 'Все права защищены.', top: 'Наверх' },
        months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        mos: 'мес.', yrs: 'г.',
        theme: { light: 'Светлая тема', dark: 'Тёмная тема' },
        quips: ['Привет! 👋', 'Берите Рахата, серьёзно', 'Тсс… листай дальше', 'Я живу в DOM', 'Vue или React? Да.', 'Бип!', 'В прод! 🚀', 'Не баг, а фича.']
    }
};
