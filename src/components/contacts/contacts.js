import React from 'react';
import './contacts.modules.css';
//import {FaFacebook} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Component } from 'react';

import { NavLink } from 'react-router-dom';


export default class Contacts extends Component {
    render() {
        return (
            <div className='contact'>
                    <div className='contact__name'>
                        <h3>Контакты</h3>
                    </div>
                    <div className='contact__title'>
                        <h1>Свяжитесь со мной</h1>
                    </div>
                    <div className='contact__social'>в социальных сетях</div>
                    <div className='contact__icons'>
                        <FaFacebook/>
                        <BsTelegram/>
                        
                        <BsInstagram/>
                    </div>
                    <div className='contact__subtitle'>
                        Или оставьте ваши данные и я сам вам напишу:
                    </div>

                    <div className='contact__form'>
                        <div className='contact__input'>
                            <input placeholder='Ваше имя' type='text'/>
                            <input placeholder='Ваш телефон' type='phone'/>
                        </div>
                        <div className='contact__textarea'>
                            <textarea placeholder='Ваше сообщение' type='text'/>
                        </div>
                        <div className='contact__btn'>
                            <button>Отправить сообщение</button>
                        </div>
                    </div>
            </div>
        )
    }
}


