import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Progress } from 'antd';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState({});
    const sectionRef = useRef(null);

    const skills = [
        { name: 'HTML & CSS', level: 90, color: '#e34c26' },
        { name: 'JavaScript', level: 85, color: '#f7df1e' },
        { name: 'React', level: 80, color: '#61dafb' },
        { name: 'Git', level: 75, color: '#68a063' },
        { name: 'PostgreSQL/MongoDB', level: 65, color: '#f05033' },
        { name: 'Node.js', level: 30, color: '#336791' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateSkills();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateSkills = () => {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                let current = 0;
                const increment = skill.level / 50;
                
                const animate = () => {
                    if (current < skill.level) {
                        current += increment;
                        setAnimatedValues(prev => ({
                            ...prev,
                            [skill.name]: Math.min(current, skill.level)
                        }));
                        requestAnimationFrame(animate);
                    }
                };
                animate();
            }, index * 200);
        });
    };

    return (
        <div className="skills-section" ref={sectionRef}>
            <div className="container">
                <div className="skills-header">
                    <h2>Technical Skills</h2>
                    <p>Technologies I work with and my proficiency levels</p>
                </div>
                
                <Row gutter={[40, 40]}>
                    {skills.map((skill, index) => (
                        <Col xs={24} md={12} key={skill.name}>
                            <div className={`skill-item ${isVisible ? 'animate' : ''}`} 
                                 style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">
                                        {Math.round(animatedValues[skill.name] || 0)}%
                                    </span>
                                </div>
                                <div className="skill-progress">
                                    <Progress
                                        percent={animatedValues[skill.name] || 0}
                                        strokeColor={skill.color}
                                        trailColor="#f0f0f0"
                                        strokeWidth={8}
                                        showInfo={false}
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="skills-experience">
                    <Row gutter={[40, 40]} className="experience-stats">
                        <Col xs={12} md={6}>
                            <div className="stat-item">
                                <div className="stat-number2">2+</div>
                                <div className="stat-label2">Years Learning</div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="stat-item">
                                <div className="stat-number2">10+</div>
                                <div className="stat-label2">Projects</div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="stat-item">
                                <div className="stat-number2">2</div>
                                <div className="stat-label2">Companies</div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="stat-item">
                                <div className="stat-number2">B2</div>
                                <div className="stat-label2">English Level</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Skills;