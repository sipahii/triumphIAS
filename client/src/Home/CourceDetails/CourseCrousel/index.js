import React from 'react'
import ReactOwlCrousel from "react-owl-carousel"
import PagesItem from '../../../CoursePage/CoursesSection/coursePagess'
import Styles from "./index.module.scss"

const CourseCrousel = () => {
    const options = {
        margin: 30,
        nav: false,
        dots: false,
        loop: true,
        fade: 100,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 3,
            },
            180: {
                items: 2,
            },
            280: {
                items: 2,
            },
            380: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div className={Styles.crousal}>
            <ReactOwlCrousel className='owl-crousel' {...options}>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
                <div className='item'>
                    <PagesItem
                        imageSrc="course1.jpg"
                        subjectName="Basic Philosopphy"
                        month="7 Months"
                        courses="Course"
                        classDay="30"
                        classes="Classes"
                        time="10 pm - 11 pm"
                    />
                </div>
            </ReactOwlCrousel>
        </div>
    )
}

export default CourseCrousel
