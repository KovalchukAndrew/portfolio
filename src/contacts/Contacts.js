import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/style/Container.module.css";


const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.container}`}>

            <div className={style.formBlock}>
                <h1 className={style.title}>Contacts</h1>
                <form >
                    <input type="text" name="firstName"/><br/>
                    <input type="text" name="lastName"/><br/>
                    <textarea name="text"/><br/>
                </form>
                <input type="submit" value="Send"/>
            </div>

        </div>
    </div>
}

export default Contacts