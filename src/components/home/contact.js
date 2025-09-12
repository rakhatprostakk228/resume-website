import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Select, message, Space } from 'antd';
import emailjs from '@emailjs/browser';
import { 
    MailOutlined, 
    PhoneOutlined, 
    EnvironmentOutlined, 
    SendOutlined,
    UserOutlined,
    MessageOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

const { TextArea } = Input;
const { Option } = Select;

function Contact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: <MailOutlined />,
            title: t('contact.email'),
            value: "ahat0405@mail.ru",
            link: "mailto:ahat0405@mail.ru",
            color: "#27c4ff"
        },
        {
            icon: <PhoneOutlined />,
            title: t('contact.phone'),
            value: "+7(775)-090-70-13",
            link: "tel:+77750907013",
            color: "#52c41a"
        },
        {
            icon: <EnvironmentOutlined />,
            title: t('contact.location'),
            value: "Astana, Kazakhstan",
            link: "https://maps.google.com/?q=Astana,Kazakhstan",
            color: "#fa8c16"
        }
    ];

    const handleSubmit = async (values) => {
        setLoading(true);
        
        try {
            const templateParams = {
                from_name: values.name,
                from_email: values.email,
                phone: values.phone || 'Not provided',
                subject: values.subject,
                budget: values.budget || 'Not specified',
                message: values.message,
                to_name: 'Rakhat',
            };

            await emailjs.send(
                'service_22ou9io',
                'template_a4ixvaj',
                templateParams,
                'D4CQ9dsuZSQbFQrd4'
            );
            
            message.success(t('contact.successMessage'));
            setSubmitted(true);
            form.resetFields();
            
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            message.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
        string: {
            min: '${label} must be at least ${min} characters',
        },
    };

    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.description')}</p>
                </div>

                <Row gutter={[60, 60]} align="top">
                    <Col xs={24} lg={8}>
                        <div className="contact-info">
                            <div className="contact-info-header">
                                <h3>{t('contact.getInTouch')}</h3>
                                <p>{t('contact.feelFreeToReach')}</p>
                            </div>
                            
                            <div className="contact-items">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="contact-item">
                                        <div className="contact-icon" style={{ backgroundColor: item.color }}>
                                            {item.icon}
                                        </div>
                                        <div className="contact-details">
                                            <h4>{item.title}</h4>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact-availability">
                                <div className="availability-indicator">
                                    <div className="status-dot"></div>
                                    <span>{t('contact.availableForProjects')}</span>
                                </div>
                                <p>{t('contact.usuallyResponds')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} lg={16}>
                        <div className="contact-form-container">
                            {submitted ? (
                                <div className="success-message">
                                    <CheckCircleOutlined />
                                    <h3>{t('contact.successTitle')}</h3>
                                    <p>{t('contact.successMessage')}</p>
                                </div>
                            ) : (
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={handleSubmit}
                                    validateMessages={validateMessages}
                                    className="contact-form"
                                >
                                    <Row gutter={[20, 0]}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="name"
                                                label={t('contact.fullName')}
                                                rules={[
                                                    { required: true },
                                                    { min: 2 }
                                                ]}
                                            >
                                                <Input 
                                                    prefix={<UserOutlined />}
                                                    placeholder={t('contact.fullNamePlaceholder')}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="email"
                                                label={t('contact.emailAddress')}
                                                rules={[
                                                    { required: true },
                                                    { type: 'email' }
                                                ]}
                                            >
                                                <Input 
                                                    prefix={<MailOutlined />}
                                                    placeholder={t('contact.emailPlaceholder')}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row gutter={[20, 0]}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="phone"
                                                label={t('contact.phoneNumber')}
                                            >
                                                <Input 
                                                    prefix={<PhoneOutlined />}
                                                    placeholder={t('contact.phonePlaceholder')}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="subject"
                                                label={t('contact.projectType')}
                                                rules={[{ required: true }]}
                                            >
                                                <Select placeholder={t('contact.selectProjectType')} size="large">
                                                    <Option value="web-development">{t('contact.projectTypes.webDevelopment')}</Option>
                                                    <Option value="frontend">{t('contact.projectTypes.frontend')}</Option>
                                                    <Option value="react">{t('contact.projectTypes.react')}</Option>
                                                    <Option value="consultation">{t('contact.projectTypes.consultation')}</Option>
                                                    <Option value="collaboration">{t('contact.projectTypes.collaboration')}</Option>
                                                    <Option value="other">{t('contact.projectTypes.other')}</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="budget"
                                        label={t('contact.budgetRange')}
                                    >
                                        <Select placeholder={t('contact.selectBudgetRange')} size="large">
                                            <Option value="under-1000">{t('contact.budgetRanges.under1000')}</Option>
                                            <Option value="1000-5000">{t('contact.budgetRanges.1000-5000')}</Option>
                                            <Option value="5000-10000">{t('contact.budgetRanges.5000-10000')}</Option>
                                            <Option value="over-10000">{t('contact.budgetRanges.over10000')}</Option>
                                            <Option value="discuss">{t('contact.budgetRanges.discuss')}</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        label={t('contact.message')}
                                        rules={[
                                            { required: true },
                                            { min: 10 }
                                        ]}
                                    >
                                        <TextArea 
                                            rows={6}
                                            placeholder={t('contact.messagePlaceholder')}
                                            showCount
                                            maxLength={1000}
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button 
                                            type="primary" 
                                            htmlType="submit" 
                                            size="large"
                                            loading={loading}
                                            className="submit-button"
                                            block
                                        >
                                            <Space>
                                                <SendOutlined />
                                                {loading ? t('contact.sending') : t('contact.sendMessage')}
                                            </Space>
                                        </Button>
                                    </Form.Item>
                                </Form>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;