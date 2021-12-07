import React from 'react';
import style from './Project.module.css'

function Project(props) {
    return (
        <div className={style.projectBlock}>
            <div className={style.project}>
                <div className={style.projectImage}>TodoList</div>
                <button>Open project</button>
            </div>
            <div className={style.discriptionBlock}>
                <h3 className={style.projectName}>{props.projectName}</h3>
                <span className={style.projectDiscription}>{props.projectDiscription}</span>
            </div>


        </div>
    );
}

export default Project;
