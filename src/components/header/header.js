import React from 'react';
import './header.modules.css';
import  logo  from './logo.jpeg';
import { NavLink } from 'react-router-dom';




const Header = () => {
    return (
        <div className='headerTop'>  
            <NavLink to='/home'><img src={logo}/></NavLink>
        </div>
    )
}

export default Header;