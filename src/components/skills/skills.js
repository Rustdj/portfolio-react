import React from 'react'
import './skills.module.css';
import bootstrap from './skills/bootstrap.svg';
import css from './skills/css3.svg';
import figma from './skills/figma.svg';
import git from './skills/git.svg';
import gulp from './skills/git.svg';
import html from './skills/html5.svg';
import jquery from './skills/jquery.svg';
import js from './skills/js.svg';
import react from './skills/react.svg';
import sass from './skills/sass.svg';


const Skills =() => {
    return (
        <div className='skills'>
            <div className='skills__name'>
                <h3>Навыки</h3>
            </div>
            <div className='skills__header'>
                <h1>Что я использую в работе</h1>
            </div>
            <div className='skills__items'>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={bootstrap} alt='bootstrap'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={css} alt='css'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={figma} alt='figma'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={git} alt='git'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={gulp} alt='gulp'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={html} alt='html'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={jquery} alt='jquery'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={js} alt='js'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={react} alt='react'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={sass} alt='sass'/>
                        </div>
                        <div className='header'>HTML5</div>
                        <div className='descr'>
                            Именно он создает каркас вашего 
                            сайта или приложения, а пятая 
                            версия позволит мне создавать 
                            более SEO-оптимизированную структуру
                            вашего продукта
                        </div>
                    </div>
            </div>
            
            
            
        </div>
    )
}

export default Skills;
