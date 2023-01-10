import React from "react";
import CommonTitle from "../../CommonTitle";
import Styles from './index.module.scss'
const AskQuestion = () => {
    return (
        <div className={Styles.courcesPage}>
            <div className={Styles.courcesPage__askQuestoin}>
                <CommonTitle head="Asked Any Question?" />
                <div className={Styles.courcesPage__askQuestoin__form}>
                    <input type="text" name="arshad" placeholder="Name*" />
                    <input type="text" name="arshad" placeholder="Email*" />
                    <textarea>Messege*</textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>

    )
}
export default AskQuestion