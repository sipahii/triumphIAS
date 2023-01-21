import React, { useState } from "react";
import Styles from './index.module.scss'
import Image1 from "../../Assets/one.jpg";
import Image2 from "../../Assets/img2.jpg";
import CommonTitle from "../CommonTitle";
import CommonReview from "../CommonReview";
import CommonLactures from "../CommmanLacturers";

const TabArea = () => {
    const [show, setShow] = useState("Features");
    const [active, setActive] = useState("Features");
    const menuChangeHandler = (name) => {
        setShow(name);
        setActive(name);
    };
    return (
        <>
            <div className={Styles.courcesPage}>
                <div className={Styles.courcesPage__tabArea}>
                    <div className={Styles.courcesPage__tabArea__wrap}>
                        <ul className={Styles.courcesPage__tabArea__wrap__tabNav}>
                            <li
                                className={`${Styles.list} ${active === "Features" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Features")}
                            >
                                Features{" "}
                            </li>
                            <li
                                className={`${Styles.list} ${active === "Lecturers" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Lecturers")}
                            >
                                Lecturers
                            </li>
                            <li
                                className={`${Styles.list} ${active === "Reviews" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Reviews")}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.courcesPage__tabContant}>
                    {show === "Features" && (
                        <div className={Styles.courcesPage__tabContant__item1}>
                            <ul className={Styles.courcesPage__tabContant__item1__courceFeatures}>
                                <li>Start: 01 January, 2017</li>
                                <li>Total Classes : 100</li>
                                <li>Class: Sunday - Monday</li>
                                <li>Total Credits: 150</li>
                                <li>Course Duration: 3 Month</li>
                                <li>Seats Available: 200</li>
                                <li>Lecturer: 03</li>
                                <li>Class Time: 10 am - 11.00 am</li>
                            </ul>
                        </div>
                    )}
                    {show === "Lecturers" && (
                        <div className={Styles.courcesPage__tabContant__item2}>
                            <CommonLactures
                                image={Image1}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Wed Day"
                                time="9 am - 11 am"
                            />
                            <CommonLactures
                                image={Image2}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Sun Day"
                                time="08 pm-10 pm"
                            />
                            <CommonLactures
                                image={Image1}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Mon Day"
                                time="04 pm-11 pm"
                            />
                        </div>
                    )}
                    {show === "Reviews" && (
                        <div className={Styles.courcesPage__tabContant__item3}>
                            <div className={Styles.courcesPage__tabContant__item3__review}>
                                <CommonTitle head="Student Reviews" />
                                <CommonReview img={Image2} name="Greg Christman" />
                                <CommonReview img={Image2} name="Greg Christman" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    )

}
export default TabArea