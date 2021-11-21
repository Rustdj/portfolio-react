import React from 'react';
import './sidebar.modules.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className='nav'>
            <div className='item'>
                <NavLink to='/about'>AboutMe</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/experience'>Experience</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/skills'>Skills</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/contacts'>Contacts</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;
