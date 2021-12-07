import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/style/Container.module.css";
import Project from "./Project/Project";



function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>
                    My projects
                </h2>
                <div className={style.projects}>
                    <Project projectName="TodoList"
                             projectDiscription="Let's say that we’ve been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them."
                    />
                    <Project projectName="TodoList"
                             projectDiscription="Let's say that we’ve been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them."
                    />

                </div>

            </div>
        </div>
    );
}

export default Projects;
