import React from "react";
import CommonTitle from "../CommonTitle";
import Styles from "./index.module.scss"

const CourseReview = () => {
    return (
        <div className={Styles.courcesPage}>
            <div className={Styles.courcesPage__inner}>
                <CommonTitle head="Course Reviews" />
                <div className={Styles.courcesPage__inner__review}>
                    <h4>
                        Average Rating <span>4.8</span>
                    </h4>
                    <ul>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-regular fa-star-half-stroke"></i>

                        </li>
                    </ul>
                    <div className={Styles.courcesPage__inner__review__skillArea}>
                        <div className={Styles.courcesPage__inner__review__skillArea__progress}>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__lead}>
                                5 Stars
                            </div>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__baar}></div>
                            <span>10</span>
                        </div>

                        <div className={Styles.courcesPage__inner__review__skillArea__progress}>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__lead}>
                                4 Stars
                            </div>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__baar2}></div>
                            <span>6</span>
                        </div>

                        <div className={Styles.courcesPage__inner__review__skillArea__progress}>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__lead}>
                                3 Stars
                            </div>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__baar3}></div>
                            <span>3</span>
                        </div>

                        <div className={Styles.courcesPage__inner__review__skillArea__progress}>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__lead}>
                                2 Stars
                            </div>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__baar4}></div>
                            <span>0</span>
                        </div>
                        <div className={Styles.courcesPage__inner__review__skillArea__progress}>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__lead}>
                                1 Stars
                            </div>
                            <div className={Styles.courcesPage__inner__review__skillArea__progress__baar5}></div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CourseReview