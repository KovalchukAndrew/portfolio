import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/style/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.greetingText}>
                    <span>Hi there!</span>
                    <h1>I am Andrew Kovalchuk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;
