import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebarItem.scss'

function SidebarItem({img,title,link}) {
    return (
        <NavLink exact to={link} activeClassName='selected' className='sidebar-item'>
            {img}
            <h4 className="sidebar-item__title">{title}</h4>
        </NavLink>
    )
}

export default SidebarItem
