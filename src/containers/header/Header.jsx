import React from 'react'
import './header.scss'

import UserAva from '../../assets/images/img/user-ava.png'

function Header() {

    return (
        <div className='header'>
            <div className="header-left">
                <input type="search" placeholder='User' className="header-left__input" />
            </div>

            <div className="header-right">
                <img src={UserAva} alt="user-img" className="header-right__img" />
                <h4 className="header-right__title">John Doe</h4>
            </div>
        </div>
    )
}

export default Header
