import React from 'react'
import './experience.modules.css';
import developer from './developer.svg';
import diplomi from './diplomi.png';
import courses from './courses.svg';
import sertiudemy from './sertiudemy.png';
import university from './university.svg';

const Experience = () => {
    return (
        <div className='experience'>
                <h1 className="experience__title">Опыт</h1>
                <div className="experience__subtitle">Чем я буду полезен</div>
                <div className="divider"></div>
                        <div className="experience__wrapper">
                            <div className="experience__column">
                                <h3 className="experience__column-title">Образование</h3>
                                <ul>
                                    <li>
                                        <div className="experience__item">
                                            <div className="experience__item-head">
                                                <div className="experience__item-icon">
                                                    <img src={university} alt="university"/>
                                                </div>
                                                <h4 className="experience_fz14">СПбГМТУ (Корабелка)</h4>
                                                <a src={diplomi} target="_blank"><div class="resume__item-location">Диплом специалитет | СПб (2014)</div></a>
                                            </div>
                                            <div className="experience-body">
                                                специальность экономист-менеджер, специализация
                                                - экономика и управления
                                                на предприятии машиностроения.
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience__item">
                                            <div className="experience__item-head">
                                                <div className="experience__item-icon">
                                                    <img src={courses} alt="courses"/>
                                                </div>
                                                <h4 className="experience_fz14">Udemy</h4>
                                                <a src={sertiudemy} target="_blank"><div class="resume__item-location">Курсы по Web-разработке</div></a>
                                            </div>
                                            <div className="experience__item-body">
                                                Online Курс Web-разработчик Udemy <br/><br/>
                                                Online Курс JavaScript  React Udemy
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__column">
                                <h3 className="experience__column-title">Опыт работы</h3>
                                <ul>
                                    <li>
                                        <div className="experience__item">
                                            <div className="experience__item-head">
                                                <div className="experience__item-icon">
                                                    <img src={developer} alt="developer"/>
                                                </div>
                                                <h4 className="experience_fz14">Front-End Developer</h4>
                                                <div className="experience__item-location">Web-разработка</div>
                                            </div>
                                            <div className="experience__item-body">
                                            На текущий момент работаю Html верстальщиком в web-студии.
                                            Выполняю задания следующего характера:
                                            Верстка макетов из Figma, работа с добавлением интерактивностей в верстку, 
                                            на чистом javaScript. В зависимости от проекта добавляем библиотеку bootstrap.
                                            Работа с проектами различной сложности, многое приходиться осваивать в процессе.  
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    )
}

export default Experience