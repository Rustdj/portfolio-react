import React from 'react';
import './header.modules.css';
import  logo  from './logo.jpeg';
import { NavLink } from 'react-router-dom';
import react from '../skills/skills/react.png';
import js from '../skills/skills/js.png';
import css from '../skills/skills/css.png';
import html from '../skills/skills/html.png';




const Header = () => {
    return (
        <div className='headerTop'>  
            <NavLink to='/home'><img src={logo}/></NavLink>
            <img src={react}/>
            <img src={js}/>
            <img src={css}/>
            <img src={html}/>
        </div>
    )
}

export default Header;