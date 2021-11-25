import React from 'react'
import './portfolio.modules.css';
import one from './photo/one.png';
import two from './photo/two.png';
import three from './photo/three.png';
import four from './photo/four.png';
import five from './photo/five.png';
import six from './photo/six.png';
import { NavLink } from 'react-router-dom';




const Portfolio = () => {
    return (
        <div className='portfolio'>
                <div className='portfolio__name'>
                    <h3>Портфолио</h3>
                </div>
                <div className='portfolio__header'>
                    <h1>Мои работы</h1>
                </div>
                <div className='portfolio__items'>
                    <div className='portfolio__wrapper'>
                            <NavLink to='/asdasd'><img src={one}  alt='work'/></NavLink>
                    </div>
                        <div className='portfolio__wrapper'>
                                <a href='#'><img src={two}  alt='work'/></a>
                        </div>
                            <div className='portfolio__wrapper'>
                                    <a href='#'><img src={three}  alt='work'/></a>
                            </div>
                                <div className='portfolio__wrapper'>
                                        <a href='#'><img src={four}  alt='work'/></a>
                                </div>
                            <div className='portfolio__wrapper'>
                                    <a href='#'><img src={five}  alt='work'/></a>
                            </div>
                        <div className='portfolio__wrapper'>
                                <a href='#'><img src={six}  alt='work'/></a>
                        </div>
                </div>
        </div>
    )
}

export default Portfolio;
