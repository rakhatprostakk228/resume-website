import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import {
    PhoneOutlined,
    MailOutlined,
    GithubOutlined,
    LinkedinFilled,
    InstagramFilled,
    MenuOutlined
  } from '@ant-design/icons';

function AppHeader() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
    setOpen(true);
    };
    const onClose = () => {
    setOpen(false);
    };

    return (
        <div className="container">
            {/* topbar */}
            <div className="topBar">
                <div className="contactInfo">
                    <ul>
                        <li><a href="tel:+7(775)-090-70-13"><span><PhoneOutlined />+7(775)-090-70-13</span></a></li>
                        <li><a href="mailto:ahat0405@mail.ru"><span><MailOutlined />ahat0405@mail.ru</span></a></li>
                    </ul>
                </div>
                <div className='otherInfo'>
                    <ul className='socialMedia'>
                        <li><a href='https://github.com/rakhatprostakk228'><GithubOutlined /></a></li>
                        <li><a href='https://www.linkedin.com/in/rakhatprostakk'><LinkedinFilled /></a></li>
                        <li><a href='https://www.instagram.com/rakhatprostakk'><InstagramFilled /></a></li>
                    </ul>
                </div>
            </div>
            {/* header */}
            <div className='header separator'>
                <div className='logo'>rakhatprostakk</div>
                <div className='mobileVisible'>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer title="Menu" onClose={onClose} open={open}>
                        <nav>
                        <ul>
                            <li><NavLink onClick={onClose} to='/'>Home</NavLink></li>
                            <li><NavLink onClick={onClose} to='/about'>About</NavLink></li>
                            <li><NavLink onClick={onClose} to='/faq'>FAQ</NavLink></li>
                        </ul>
                        </nav>
                    </Drawer>
                </div>
                <nav className='mobileHidden'>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AppHeader;