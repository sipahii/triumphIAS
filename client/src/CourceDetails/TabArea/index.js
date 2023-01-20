import React, { useState } from "react";
import Styles from './index.module.scss'
import Image1 from "../../Assets/one.jpg";
import Image2 from "../../Assets/img2.jpg";
import CommonTitle from "../CommonTitle";
import CommonReview from "../CommonReview";
import CommonLactures from "../CommmanLacturers";
import FeaturesArea from "../CommanFeatures";

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
                            <FeaturesArea
                                heading="Course Features"
                                para="Daily 2 hours Classes. At the End of the Lecture Assignment related to the Topic is given based on Previous Year Question."
                                para1="Daily After Attending the Online Lec. do Telephonic Doubt discussion with Vikash Sir."
                                para2="Duration of the Class is Four months but Your Direct Contact with Sir and Mentorship of Vikash Sir will remain till your Final Success."
                                para3="Classn begins with Basics & Equal Focus on Fundamentals & #Applied #Sociology along with Coverage of CURRENT Sociology. APPLIED UNDERSTANDING OF SYLLABUS help you retain the Concepts and Theories"
                                para4="Previous Years Questions are well Integrated in Foundation Course itself."
                                para5="15 Quick Revision & CONTEMPORARY/ CURRENT ISSUES UPDATION CLASS After Your Prelims Test. In this class We do INTELLIGENT GUESSWORK for CSE Mains of that Particular Year. (Exclusively for Triumph IAS Students)"

                            />
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