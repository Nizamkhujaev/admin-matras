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
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import EqualizerIcon from '@mui/icons-material/Equalizer';


import Language from '../../lang/index'
import {useLang} from '../../context/LanguageProvider'

function Sidebar() {
    
    const [lang] = useLang()

    return (
        <div className='sidebar'>
            <NavLink className="sidebar-top" to='/'>
                <img src={Logo} alt="" className="sidebar-top__logo" />
            </NavLink>

            <div className="sidebar-bottom">
                <SidebarItem
                    title={Language[lang].sidebar.orders}
                    img={<HomeIcon/>}
                    link='/'
                />
                <SidebarItem
                    title={Language[lang].sidebar.customers}
                    img={<PersonIcon/>}
                    link='/customers'
                />
                <SidebarItem
                    title={Language[lang].sidebar.category}
                    img={<LeaderboardIcon/>}
                    link='/categories'
                />
                <SidebarItem
                    title={Language[lang].sidebar.product}
                    img={<ShoppingCartIcon/>}
                    link='/products'
                />
                <SidebarItem
                    title={Language[lang].sidebar.tech}
                    img={<SettingsSuggestIcon/>}
                    link='/settings'
                />
                <SidebarItem
                    title={Language[lang].sidebar.location}
                    img={<LocationOnIcon/>}
                    link='/location'
                />
                <SidebarItem
                    title={Language[lang].sidebar.slider}
                    img={<PhotoSizeSelectActualIcon/>}
                    link='/slider'
                />
                <SidebarItem
                    title={Language[lang].sidebar.static}
                    img={<EqualizerIcon/>}
                    link='/results'
                />
            </div>
        </div>
    )
}

export default Sidebar
