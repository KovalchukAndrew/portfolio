import React from 'react';
import style from './Skill.module.css'

function Skill(props) {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>
                icon
            </div>
            <h3>{props.title}</h3>
            <span className={style.discription}>
                {props.discription}
            </span>

        </div>
    );
}

export default Skill;
