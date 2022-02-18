import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './../menu/Menu';
import Hamburger from './../hamburger/Hamburger';

const Header = () => {
    const [status, setStatus] = useState(false);

    const updateStatus = () => {
        setStatus(!status);
    };

    return (
        <div className='header'>
            <div className='container'>
                <div className='header__container'>
                    <div className='header__title'>Rafael Monroy</div>
                    <nav className='header__menu'>
                        <Menu status={status} />
                    </nav>
                    <div className='header__hamburger'>
                        <Hamburger
                            updateStatus={updateStatus}
                            status={status}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
