import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/style/Container.module.css";

const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.container}`}>
            <footer className={style.footer}>
                <span className={style.name}>Andrew Kovalchuk</span>
                <div className={style.linksBlock}>
                    <div className={style.link}>icon</div>
                    <div className={style.link}>icon</div>
                    <div className={style.link}>icon</div>
                    <div className={style.link}>icon</div>
                </div>
                <span className={style.end}>
                    My portfile
                </span>

            </footer>
        </div>
    </div>
}

export default Footer;