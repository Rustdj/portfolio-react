import React from 'react'
import './aboutMe.modules.css';
import hels from './hels.JPG';



const AboutMe = () => {
    
    return (
        <div className='aboutContent'>
                <div className='aboutWrapper'>
                    <div className='aboutImg'>
                        <img src={hels}></img>
                    </div>
                    <div className='about'>
                    <strong>&#9989; <u>Опыт работы</u></strong> <br/>
                        На текущий момент работаю Html верстальщиком в web-студии.
                        Выполняю задания следующего характера:
                        
                        Верстка макетов из Figma, работа с добавлением интерактивностей в верстку, 
                        на чистом javaScript. В зависимости от проекта добавляем библиотеку bootstrap.
                        Работа с проектами различной сложности, многое приходиться осваивать в процессе.<br/><br/>  
                        
                        <strong>&#9989; <u>Oбразование</u></strong><br/>
                        &#128104;&#8205;&#127891; Окончил Санкт-Петербургский Государственный Морской Технический Университет (Корабелка)
                            специальность экономист-менеджер, факультет экономики, специализация - экономика и управления
                            на предприятии машиностроения. Последние 5 лет работал в Финляндии, имею двойное гражданство &#x1F1EB;&#x1F1EE;/&#x1F1F7;&#x1F1FA;.<br/><br/>
                        
                        
                        <strong>&#9989; <u>Цели и задачи</u></strong>
                        &#128640;<br/> Моей целью является стать полноценным Фронтенд разработчиком, для этого я интенсивно обучаюсь. 
                                    Прохожу различные онлайн курсы, стараюсь быть в теме актуального в it.
                                    На данный момент ищу работу связанную с разработкой SPA приложений.  
                        
                            
                    </div>
                </div>
        </div>
        
    )
}

export default AboutMe;
