import React from 'react'
import Styles from './index.module.scss'

const CommonNcert = (props) => {
    return (
        <div className={Styles.ncertTextBook}>
            <h3>{props.head}</h3>
            <table className={Styles.ncertTextBook__table}>

                <tr className={Styles.ncertTextBook__table__tr}>
                    <th className={Styles.ncertTextBook__table__tr__class}>Class</th>
                    <th className={Styles.ncertTextBook__table__tr__bookTitle}>Book Title</th>
                    <th className={Styles.ncertTextBook__table__tr__link}>Link</th>
                </tr>

                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export default CommonNcert