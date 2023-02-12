import React from 'react'
import Styles from './index.module.scss'

const CommanData = (props) => {
    return (

        <tr className={Styles.tr}>
            <td className={Styles.tr__class}>{props.data1}</td>
            <td className={Styles.tr__bookTitle}>{props.data2}</td>
            <td className={Styles.tr__link}><a href={props.data3} target="_blank" rel="noreferrer">English</a></td>
        </tr>

    )
}

export default CommanData