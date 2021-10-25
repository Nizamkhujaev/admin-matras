import React from 'react'
import './header.scss'

import UserAva from '../../assets/images/img/user-ava.png'

function Header({modal,setModal}) {

    return (
        <div className='header'>
            <div className="header-left">
                <input type="search" placeholder='User' className="header-left__input" />
            </div>

            <div onClick={() => setModal(!modal)} className="header-right">
                <img src={(localStorage.getItem('admin_img') ? localStorage.getItem('admin_img') : UserAva)} alt="user-img" className="header-right__img" />
                <h4 className="header-right__title">{localStorage.getItem('admin__name') ? localStorage.getItem('admin__name') : 'John Doe'}</h4>
            </div>
        </div>
    )
}

export default Header
