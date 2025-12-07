import { Row, Col } from 'antd';
import { 
    CodeOutlined, 
    RocketOutlined, 
    HeartOutlined,
    BookOutlined,
    GlobalOutlined,
    TrophyOutlined,
    CalendarOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

function FooterWidget() {
    const { t } = useLanguage();

    const skills = [
        { name: 'React', icon: <CodeOutlined />, color: '#61dafb' },
        { name: 'JavaScript', icon: <GlobalOutlined />, color: '#f7df1e' },
        { name: 'Node.js', icon: <RocketOutlined />, color: '#68a063' },
        { name: 'Git', icon: <BookOutlined />, color: '#f05033' }
    ];

    const achievements = [
        { text: 'Student at Astana IT University', icon: <BookOutlined /> },
        { text: 'Software Engineering Major', icon: <CodeOutlined /> },
        { text: '2+ Years of Learning', icon: <CalendarOutlined /> },
        { text: 'Available for Projects', icon: <RocketOutlined /> }
    ];

    const personalInfo = [
        { label: 'Age', value: '20 years old', icon: <UserOutlined /> },
        { label: 'Location', value: 'Astana, Kazakhstan', icon: <GlobalOutlined /> },
        { label: 'English', value: 'B2 Level', icon: <BookOutlined /> },
        { label: 'Passion', value: 'Web Development', icon: <HeartOutlined /> }
    ];

    return (
        <div className='modern-footer-widget'>
            <div className='container'>
                <Row gutter={[40, 40]}>
                    <Col xs={24} sm={12} lg={6}>
                        <div className='footer-section'>
                            <h3>{t('footer.coreSkills')}</h3>
                            <div className='skills-grid'>
                                {skills.map((skill, index) => (
                                    <div key={index} className='skill-tag'>
                                        <span className='skill-icon' style={{ color: skill.color }}>
                                            {skill.icon}
                                        </span>
                                        <span className='skill-name'>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={24} sm={12} lg={6}>
                        <div className='footer-section'>
                            <h3>{t('footer.aboutMe')}</h3>
                            <div className='info-list'>
                                {personalInfo.map((item, index) => (
                                    <div key={index} className='info-item'>
                                        <span className='info-icon'>{item.icon}</span>
                                        <div className='info-content'>
                                            <span className='info-label'>{item.label}:</span>
                                            <span className='info-value'>{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={24} sm={12} lg={6}>
                        <div className='footer-section'>
                            <h3>{t('footer.currentStatus')}</h3>
                            <div className='achievements-list'>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className='achievement-item'>
                                        <span className='achievement-icon'>{achievement.icon}</span>
                                        <span className='achievement-text'>{achievement.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={24} sm={12} lg={6}>
                        <div className='footer-section'>
                            <h3>{t('footer.letsConnect')}</h3>
                            <p className='connect-description'>
                                {t('footer.connectDescription')}
                            </p>
                            <div className='availability-status'>
                                <div className='status-indicator'>
                                    <TrophyOutlined />
                                    <span>{t('footer.openToOpportunities')}</span>
                                </div>
                                <p className='status-text'>
                                    {t('footer.statusText')}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FooterWidget;