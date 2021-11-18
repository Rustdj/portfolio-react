import React from 'react'
import './aboutMe.modules.css';
import paper from './paper.jpeg';


const AboutMe = () => {
    
    return (
        <div className='about'>
            <img src={paper}></img>
            <h1>AboutMe</h1> 
        </div>
    )
}

export default AboutMe;
