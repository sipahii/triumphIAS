import React from "react";
import Styles from './index.module.scss'
const CommonContact = (props) => {
    return (
        <div className={Styles.service__box}>
            <div className={Styles.service__box__icon}>
                <i className={props.icons}></i>
            </div>
            <span>{props.about}</span>
            <p>Dorem Ipsum has been the industry's standard dummy text ever since the en an unknown printer galley dear.</p>
        </div>
    )
}
export default CommonContact