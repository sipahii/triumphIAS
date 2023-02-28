import React from 'react'
import Styles from "./index.module.scss"

const TopperImg = (props) => {
    return (
        <div className={Styles.toppers}>
            <img src={props.url} alt="Toppers AnswerSheet" />
        </div>
    )
}

export default TopperImg