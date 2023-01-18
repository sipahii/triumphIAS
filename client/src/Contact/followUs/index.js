import React from 'react'
import Styles from "./index.module.scss"
const FollowUs = (props) => {
    return (
        <>
            <li className={Styles.followUs}>
                <h3>{props.name}</h3>
                <ul className={Styles.followUs__social}>
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-pinterest-p"></i></li>
                    <li><i className="fa-solid fa-rss"></i></li>
                    <li><i className="fa-brands fa-google-plus-g"></i></li>
                </ul>
            </li>
        </>
    )
}

export default FollowUs