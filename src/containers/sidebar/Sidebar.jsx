import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.scss'

import SidebarItem from '../../components/sidebarItem'

import Logo from '../../assets/images/icons/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Sidebar() {
    return (
        <div className='sidebar'>
            <NavLink className="sidebar-top" to='/'>
                <img src={Logo} alt="" className="sidebar-top__logo" />
            </NavLink>

            <div className="sidebar-bottom">
                <SidebarItem
                    title='Buyurtmalar'
                    img={<HomeIcon/>}
                    link='/'
                />
                <SidebarItem
                    title='Сustomers'
                    img={<PersonIcon/>}
                    link='/customers'
                />
                <SidebarItem
                    title='Toifalar'
                    img={<LeaderboardIcon/>}
                    link='/categories'
                />
                <SidebarItem
                    title='Mahsulotlar'
                    img={<ShoppingCartIcon/>}
                    link='/products'
                />
                <SidebarItem
                    title='Texnologiyalar'
                    img={<SettingsSuggestIcon/>}
                    link='/settings'
                />
                <SidebarItem
                    title='Manzil'
                    img={<LocationOnIcon/>}
                    link='/location'
                />
            </div>
        </div>
    )
}

export default Sidebar
