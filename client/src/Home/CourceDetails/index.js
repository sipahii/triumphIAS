import React, { useState } from "react";
import Styles from './index.module.scss'
import Container from "../../component/Container";
import Image from '../../../src/Assets/graphic.jpg'
import CommonLacture from "../CommmanLacturers";
import Image1 from "../../Assets/one.jpg"
import Image2 from "../../Assets/img2.jpg"
import Image3 from "../../Assets/sideBar.jpg"
import CommonTitle from "../CommonTitle";
import CommonReview from "../CommonReview";


const CoursesDetails = () => {
    const [show,setShow]=useState("Features")
    const [active,setActive] = useState("Features")
    const menuChangeHandler=(name)=>{
        setShow(name)
        setActive(name)
    }
    return (
        <div className={Styles.courcesPage}>
            <Container>
                <div className={Styles.courcesPage__rowflex}>
                    <div className={Styles.courcesPage__rowflex__couresDetails}>
                        <h2>Advance WordPress Development Class</h2>
                        <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime
                            book. It has survived not only five centuries.</p>
                        <img src={Image} alt="" />
                        <div className={Styles.courcesPage__rowflex__couresDetails__tabArea}>
                            <div className={Styles.courcesPage__rowflex__couresDetails__tabArea__wrap}>
                                <ul className={Styles.courcesPage__rowflex__couresDetails__tabArea__wrap__tabNav}>
                                    <li className={`${Styles.list} ${ active === "Features" ? Styles.active : ""}`} onClick={()=>menuChangeHandler("Features")}>Features </li>
                                    <li className={`${Styles.list} ${ active === "Lecturers" ? Styles.active : ""}`} onClick={()=>menuChangeHandler("Lecturers")}>Lecturers</li>
                                    <li className={`${Styles.list} ${ active === "Reviews" ? Styles.active : ""}`} onClick={()=>menuChangeHandler("Reviews")}>Reviews</li>
                                </ul>
                            </div>
                        </div>
                        <div className={Styles.courcesPage__rowflex__couresDetails__tabContant}>
                            {show === "Features" && <div className={Styles.courcesPage__rowflex__couresDetails__tabContant__item1}>
                                <ul className={Styles.courcesPage__rowflex__couresDetails__tabContant__item1__courceFeatures}>
                                    <li>Start: 01 January, 2017</li>
                                    <li>Total Credits: 150</li>
                                    <li>Total Classes : 100</li>
                                    <li>Class: Sunday - Monday</li>
                                    <li>Course Duration: 3 Month</li>
                                    <li>Seats Available: 200</li>
                                    <li>Lecturer: 03</li>
                                    <li>Class Time: 10 am - 11.00 am</li>
                                </ul>
                            </div>}
                            {show === "Lecturers" && <div className={Styles.courcesPage__rowflex__couresDetails__tabContant__item2}>
                                <CommonLacture
                                    image={Image1}
                                    name=" Kazi Fahim"
                                    profession="Senior UI Designer"
                                    day="Wed Day"
                                    time="9 am - 11 am"
                                />
                                <CommonLacture
                                    image={Image2}
                                    name=" Kazi Fahim"
                                    profession="Senior UI Designer"
                                    day="Sun Day"
                                    time="08 pm-10 pm"
                                />
                                <CommonLacture
                                    image={Image1}
                                    name=" Kazi Fahim"
                                    profession="Senior UI Designer"
                                    day="Mon Day"
                                    time="04 pm-11 pm"
                                />

                            </div>}
                            {show === "Reviews" && <div className={Styles.courcesPage__rowflex__couresDetails__tabContant__item3}>
                                <div className={Styles.courcesPage__rowflex__couresDetails__tabContant__item3__review}>
                                    <CommonTitle head="Student Reviews" />
                                    <CommonReview
                                        img={Image2}
                                        name="Greg Christman"
                                    />
                                    <CommonReview
                                        img={Image2}
                                        name="Greg Christman"
                                    />
                                </div>
                            </div>}
                        </div>
                        <div className={Styles.courcesPage__rowflex__crousalArea}>
                            <h3>Related Courses</h3>
                        </div>
                    </div>
                    <div className={Styles.courcesPage__rowflex__sidebar}>
                        <div className={Styles.courcesPage__rowflex__sidebar__Box}>
                            <div className={Styles.courcesPage__rowflex__sidebar__Box__inner}>
                                <CommonTitle head="Course Price" />
                                <div className={Styles.courcesPage__rowflex__sidebar__Box__inner__courcePrice}>
                                    <span>$800.00</span>
                                    <button className={Styles.courcesPage__rowflex__sidebar__Box__inner__courcePrice__enrollBtn}>Enroll THis Course</button>
                                    <button className={Styles.courcesPage__rowflex__sidebar__Box__inner__courcePrice__pdf}>DOWNLOAD PDF</button>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.courcesPage__rowflex__sidebar__rating}>
                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner}>
                                <CommonTitle
                                    head="Course Reviews"
                                />
                                <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review}>
                                    <h4>
                                        Average Rating <span>4.8</span>
                                    </h4>
                                    <ul>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-regular fa-star-half-stroke"></i></li>
                                    </ul>
                                    <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea}>
                                        <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress}>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__lead}>
                                                5 Stars
                                            </div>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__baar}>
                                            </div>
                                            <span>10</span>
                                        </div>

                                        <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress}>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__lead}>
                                                4 Stars
                                            </div>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__baar2}>
                                            </div>
                                            <span>6</span>
                                        </div>

                                        <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress}>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__lead}>
                                                3 Stars
                                            </div>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__baar3}>
                                            </div>
                                            <span>3</span>
                                        </div>

                                        <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress}>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__lead}>
                                                2 Stars
                                            </div>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__baar4}>
                                            </div>
                                            <span>0</span>
                                        </div>

                                        <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress}>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__lead}>
                                                1 Stars
                                            </div>
                                            <div className={Styles.courcesPage__rowflex__sidebar__rating__inner__review__skillArea__progress__baar5}>
                                            </div>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={Styles.courcesPage__rowflex__sidebar__askQuestoin}>
                            <CommonTitle
                                head="Asked Any Question?"
                            />
                            <div className={Styles.courcesPage__rowflex__sidebar__askQuestoin__form}>
                                <form>
                                    <input type="text" name="arshad" placeholder="Name*" />
                                    <input type="text" name="arshad" placeholder="Email*" />
                                    <textarea>Messege*</textarea>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                        <div className={Styles.courcesPage__rowflex__sidebar__sideBarBox}>
                            <div className={Styles.courcesPage__rowflex__sidebar__sideBarBox__image}>
                                <img src={Image3} alt="nature image" />
                                <span>Apply Now</span>
                            </div>
                        </div>
                    </div>

                </div>


            </Container >
        </div >
    )
}
export default CoursesDetails;
