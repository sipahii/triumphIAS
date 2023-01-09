import React from "react";
import CommonTitle from "../CommonTitle";
import Styles from "./index.module.scss";

const CommonReview = (props) => {
    return (
        <div className={Styles.reviewArea}>
            <div className={Styles.reviewArea__media}>
                <div className={Styles.reviewArea__media__image}>
                    <img src={props.img} alt="hai yah" />
                </div>
                <div className={Styles.reviewArea__media__body}>
                    <h3>{props.name}
                        <br />
                        <h4>Excellent course!</h4>
                    </h3>
                    <p>Rimply dummy text of the printinwhen an unknown printer took eype and scramb relofeletog and typesetting industry. Lorem </p>
                    <div className={Styles.reviewArea__media__body__replyArea}>
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommonReview
