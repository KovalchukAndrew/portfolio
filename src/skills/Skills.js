import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/style/Container.module.css";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>My skills</h2>
            </div>

        </div>
    );
}

export default Skills;
