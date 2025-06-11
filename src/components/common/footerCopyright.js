import React from 'react';
import { Row, Col } from 'antd';
import { 
    GithubOutlined, 
    LinkedinFilled, 
    InstagramFilled,
    HeartFilled,
    CopyrightOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';

function FooterCopyright() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="modern-footer-copyright">
            <div className="container">
                <Row gutter={[20, 20]} align="middle" justify="space-between">
                    <Col xs={24} md={12}>
                        <div className="copyright-content">
                            <div className="copyright-text">
                                <CopyrightOutlined />
                                <span>{currentYear} RakhatProstakk. All rights reserved.</span>
                            </div>
                            <div className="made-with-love">
                                <span>Made with</span>
                                <HeartFilled className="heart-icon" />
                                <span>using React & Ant Design</span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={24} md={12}>
                        <div className="footer-actions">
                            <div className="social-links-footer">
                                <a 
                                    href='https://github.com/rakhatprostakk228' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link-footer"
                                    title="GitHub"
                                >
                                    <GithubOutlined />
                                </a>
                                <a 
                                    href='https://www.linkedin.com/in/rakhatprostakk' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link-footer"
                                    title="LinkedIn"
                                >
                                    <LinkedinFilled />
                                </a>
                                <a 
                                    href='https://www.instagram.com/rakhatprostakk' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link-footer"
                                    title="Instagram"
                                >
                                    <InstagramFilled />
                                </a>
                            </div>
                            
                            <button 
                                className="back-to-top-btn"
                                onClick={scrollToTop}
                                title="Back to top"
                            >
                                <ArrowUpOutlined />
                                <span>Back to Top</span>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FooterCopyright;