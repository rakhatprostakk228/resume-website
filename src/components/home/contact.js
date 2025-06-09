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

const { TextArea } = Input;
const { Option } = Select;

function Contact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: <MailOutlined />,
            title: "Email",
            value: "ahat0405@mail.ru",
            link: "mailto:ahat0405@mail.ru",
            color: "#27c4ff"
        },
        {
            icon: <PhoneOutlined />,
            title: "Phone",
            value: "+7(775)-090-70-13",
            link: "tel:+77750907013",
            color: "#52c41a"
        },
        {
            icon: <EnvironmentOutlined />,
            title: "Location",
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
            
            message.success('Message sent successfully! I will get back to you soon.');
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
                    <h2>Let's Work Together</h2>
                    <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
                </div>

                <Row gutter={[60, 60]} align="top">
                    <Col xs={24} lg={8}>
                        <div className="contact-info">
                            <div className="contact-info-header">
                                <h3>Get In Touch</h3>
                                <p>Feel free to reach out through any of these channels</p>
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
                                    <span>Available for new projects</span>
                                </div>
                                <p>Usually responds within 24 hours</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} lg={16}>
                        <div className="contact-form-container">
                            {submitted ? (
                                <div className="success-message">
                                    <CheckCircleOutlined />
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
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
                                                label="Full Name"
                                                rules={[
                                                    { required: true },
                                                    { min: 2 }
                                                ]}
                                            >
                                                <Input 
                                                    prefix={<UserOutlined />}
                                                    placeholder="Your full name"
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="email"
                                                label="Email Address"
                                                rules={[
                                                    { required: true },
                                                    { type: 'email' }
                                                ]}
                                            >
                                                <Input 
                                                    prefix={<MailOutlined />}
                                                    placeholder="your.email@example.com"
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row gutter={[20, 0]}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="phone"
                                                label="Phone Number"
                                            >
                                                <Input 
                                                    prefix={<PhoneOutlined />}
                                                    placeholder="+1 (555) 123-4567"
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="subject"
                                                label="Project Type"
                                                rules={[{ required: true }]}
                                            >
                                                <Select placeholder="Select project type" size="large">
                                                    <Option value="web-development">Web Development</Option>
                                                    <Option value="frontend">Frontend Development</Option>
                                                    <Option value="react">React Application</Option>
                                                    <Option value="consultation">Consultation</Option>
                                                    <Option value="collaboration">Collaboration</Option>
                                                    <Option value="other">Other</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="budget"
                                        label="Budget Range"
                                    >
                                        <Select placeholder="Select budget range (optional)" size="large">
                                            <Option value="under-1000">Under $1,000</Option>
                                            <Option value="1000-5000">$1,000 - $5,000</Option>
                                            <Option value="5000-10000">$5,000 - $10,000</Option>
                                            <Option value="over-10000">Over $10,000</Option>
                                            <Option value="discuss">Let's discuss</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        label="Message"
                                        rules={[
                                            { required: true },
                                            { min: 10 }
                                        ]}
                                    >
                                        <TextArea 
                                            rows={6}
                                            placeholder="Tell me about your project, timeline, and any specific requirements..."
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
                                                {loading ? 'Sending...' : 'Send Message'}
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