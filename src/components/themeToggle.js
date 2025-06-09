import React, { useRef } from 'react';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from './context/themeContext';

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();
    const buttonRef = useRef(null);

    const handleToggle = () => {
        // Добавляем анимацию переключения
        if (buttonRef.current) {
            buttonRef.current.classList.add('switching');
            setTimeout(() => {
                if (buttonRef.current) {
                    buttonRef.current.classList.remove('switching');
                }
            }, 600);
        }
        
        toggleTheme();
    };

    return (
        <div className="theme-switch">
            <Button
                ref={buttonRef}
                type="text"
                onClick={handleToggle}
                className={`theme-toggle-button ${isDark ? 'dark' : 'light'}`}
                icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                title={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
            />
        </div>
    );
}

export default ThemeToggle;