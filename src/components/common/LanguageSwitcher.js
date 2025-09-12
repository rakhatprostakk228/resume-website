import React, { useState } from 'react';
import { Dropdown, Button } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';
import { useLanguage } from '../context/languageContext';

function LanguageSwitcher() {
    const { currentLanguage, changeLanguage, languages } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const currentLang = languages.find(lang => lang.code === currentLanguage);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setDropdownOpen(false);
    };

    const items = languages.map(lang => ({
        key: lang.code,
        label: (
            <div 
                className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
            >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
                {currentLanguage === lang.code && (
                    <span className="language-check">✓</span>
                )}
            </div>
        )
    }));

    return (
        <div className="language-switcher">
            <Dropdown
                menu={{ items }}
                trigger={['click']}
                placement="bottomRight"
                open={dropdownOpen}
                onOpenChange={setDropdownOpen}
                overlayClassName="language-dropdown"
            >
                <Button 
                    type="text" 
                    className="language-button"
                    size="large"
                >
                    <GlobalOutlined />
                    <span className="current-lang-flag">{currentLang?.flag}</span>
                    <span className="current-lang-name">{currentLang?.name}</span>
                    <DownOutlined className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
                </Button>
            </Dropdown>
        </div>
    );
}

export default LanguageSwitcher;