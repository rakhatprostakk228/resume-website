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
import { useLanguage } from '../context/languageContext';

function FooterCopyright() {
    const { t } = useLanguage();

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
                                <span>{currentYear} {t('footer.copyright')}</span>
                            </div>
                            <div className="made-with-love">
                                <span>{t('footer.madeWith')}</span>
                                <HeartFilled className="heart-icon" />
                                <span>{t('footer.using')}</span>
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
                                title={t('footer.backToTop')}
                            >
                                <ArrowUpOutlined />
                                <span>{t('footer.backToTop')}</span>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FooterCopyright;