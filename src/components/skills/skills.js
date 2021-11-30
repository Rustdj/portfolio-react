import React from 'react'
import './skills.modules.css';
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


const Skills = () => {
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
                        <div className='header'>Bootstrap</div>
                        <div className='descr'>
                        Это открытый и бесплатный HTML, CSS и 
                        JS фреймворк, который используется 
                        веб-разработчиками для быстрой вёрстки
                        адаптивных дизайнов сайтов и веб-приложений
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={css} alt='css'/>
                        </div>
                        <div className='header'>CSS</div>
                        <div className='descr'>
                        Этот язык стилей позволяет мне 
                        создавать абсолютно любой внешний
                        вид вашего сайта или приложения.
                        Все ограничивается только вашей
                        фантазией!

                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={figma} alt='figma'/>
                        </div>
                        <div className='header'>Figma</div>
                        <div className='descr'>
                            Это графический редактор с помощью
                            которого я создаю прототипы дизайна 
                            будущего вэб приложения, а так же
                            логотипа или графического компонента.
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={git} alt='git'/>
                        </div>
                        <div className='header'>Git</div>
                        <div className='descr'>
                        Cистема управления проектами и 
                        версиями кода, а также платформа 
                        социальных сетей, созданная для 
                        разработчиков.
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={gulp} alt='gulp'/>
                        </div>
                        <div className='header'>Gulp</div>
                        <div className='descr'>
                        Инструмент фронтенд-разработчика, 
                        который автоматизирует большинство 
                        рутинных задач.
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
                        <div className='header'>jQuery</div>
                        <div className='descr'>
                        Библиотека Jquery позволит ускорить 
                        разработку. Без необходимости интегрировать 
                        в проект мы её не будем, но навык работы 
                        с ней присутствует
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={js} alt='js'/>
                        </div>
                        <div className='header'>JavaScript</div>
                        <div className='descr'>
                        Этот язык программирования позволяет 
                        оживить все что угодно: слайдеры, окна, 
                        подсказки, вкладки, получение данных от 
                        сервера и многое другое
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={react} alt='react'/>
                        </div>
                        <div className='header'>React</div>
                        <div className='descr'>
                        Эта библиотека позволяет создавать 
                        web-приложения. Мы можем создать 
                        максимально интерактивный продукт 
                        именно под ваши цели
                        </div>
                    </div>
                    <div className='skills__wrapper'>
                        <div className='skills__icon'>
                            <img src={sass} alt='sass'/>
                        </div>
                        <div className='header'>Sass/Scss</div>
                        <div className='descr'>
                        Это один из самых развитых, стабильных 
                        и многофункциональных препроцессоров
                        </div>
                    </div>
            </div>
            
            
            
        </div>
    )
}

export default Skills;
