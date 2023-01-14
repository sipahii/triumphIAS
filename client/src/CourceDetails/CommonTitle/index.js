import React from "react";
import Styles from './index.module.scss'
const CommonTitle = (props) => {
    return (
        <div className={Styles.commonTitle}>
            <h3 className={Styles.commonTitle__heading}>{props.head}</h3>
        </div>

    )
}
export default CommonTitle;