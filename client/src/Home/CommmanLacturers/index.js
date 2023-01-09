import React from "react";
import Styles from "./index.module.scss"
const CommonLacture = (props) => {
    return (
        <div className={Styles.lacturers}>
            <ul className={Styles.lacturers__line}>
                <li className={Styles.lacturers__line__wrap}>
                    <div className={Styles.lacturers__line__wrap__image}>
                        <img src={props.image} alt="haiyaha " />
                    </div>
                    <div className={Styles.lacturers__line__wrap__contact}>
                        <h4>{props.name}</h4>
                        <p>{props.profession}</p>
                    </div>
                    <div className={Styles.lacturers__line__wrap__shedule}>
                        <ul className={Styles.lacturers__line__wrap__shedule__flex}>
                            <li className={Styles.lacturers__line__wrap__shedule__flex__day}>
                                <h4>Day</h4>
                                <p>{props.day}</p>
                            </li>
                            <li className={Styles.lacturers__line__wrap__shedule__flex__time}>
                                <h4>Time</h4>
                                <p>{props.time}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.lacturers__line__wrap__details}>
                        <button>DETAILS</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default CommonLacture;