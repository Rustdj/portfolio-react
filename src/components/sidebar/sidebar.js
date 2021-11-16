import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import AboutMe from '../aboutMe/aboutMe';

const Sidebar = (props) => {
    return (
        <nav className='nav'>
            <div className='item'>
                <NavLink to='/about'>AboutMe</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/expirience'>Expirience</NavLink>
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
