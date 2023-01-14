import React from 'react'
import Styles from "./index.module.scss"

const CommonInfoLi = (props) => {
    return (
        <li className={Styles.contactLi}>
            <i className={props.icon}></i>
            <h3>{props.name}</h3>
            <p>{props.para}</p>
        </li>
    )
}

export default CommonInfoLi
