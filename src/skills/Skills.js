import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/style/Container.module.css";
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title="JS"
                           discription="Hard skills are usually teachable while soft skills are much harder to develop."/>
                    <Skill title="React"
                           discription="In most cases, your soft skills can enhance your hard skills."/>
                    <Skill title="HTML/CSS"
                           discription="they are typically personality traits and, therefore, extremely valuable to employers"/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
