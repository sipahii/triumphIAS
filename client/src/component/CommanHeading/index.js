import React from 'react'
import Styles from "./index.module.scss"

const CommanHeading = (props) => {
    return (
        <div className={Styles.features}>
            <h3>{props.heading}</h3>
        </div>
    )
}

export default CommanHeading;