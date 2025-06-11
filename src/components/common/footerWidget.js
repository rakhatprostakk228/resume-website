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

function FooterWidget() {
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
        { label: 'Age', value: '19 years old', icon: <UserOutlined /> },
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
                            <h3>Core Technologies</h3>
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
                            <h3>About Me</h3>
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
                            <h3>Current Status</h3>
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
                            <h3>Let's Connect</h3>
                            <p className='connect-description'>
                                Always excited to collaborate on interesting projects and learn new technologies.
                            </p>
                            <div className='availability-status'>
                                <div className='status-indicator'>
                                    <TrophyOutlined />
                                    <span>Open to Opportunities</span>
                                </div>
                                <p className='status-text'>
                                    Currently seeking internship and project opportunities
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