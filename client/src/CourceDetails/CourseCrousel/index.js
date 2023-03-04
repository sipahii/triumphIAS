import React from "react";
import ReactOwlCrousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import PagesItem from "../../CoursePage/CoursesSection/coursePagess";
import Styles from "./index.module.scss";

const CourseCrousel = () => {
  const navigate = useNavigate();
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
      180: {
        items: 1,
      },
      320: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1025: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  };

  const goToSocioOnline = () => {
    navigate("/sociology-online");
  };

  const goToEssayFoundation = () => {
    navigate("/course-details-essay-foundation-plus-test-2019");
  };

  const goToEssayTestSeries = () => {
    navigate("/essay-test-series");
  };

  const goToSocioTestStudy = () => {
    navigate("/sociology-test-plus-study");
  };

  const goToSocioTestSeries = () => {
    navigate("/course-details-sociology-freshers-test");
  };

  return (
    <div className={Styles.crousal}>
      <ReactOwlCrousel className="owl-crousel" {...options}>
        <div className="item">
          <PagesItem onClick={goToSocioOnline} imageSrc="/images/course1.png" subjectName="Sociology" month="7 Months" courses="Course" desc="With Daily Answer Writing Focused On Applied Sociology" classDay="30" classes="Classes" time="10 pm - 11 pm" />
        </div>
        <div className="item">
          <PagesItem onClick={goToEssayFoundation} imageSrc="/images/course2.jpg" subjectName="Essay" desc="With Essay Foundation And Test (Online)" month="3 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
        </div>
        <div className="item">
          <PagesItem onClick={goToEssayTestSeries} imageSrc="/images/course3.jpg" subjectName="Essay Test" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="1 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
        </div>
        <div className="item">
          <PagesItem onClick={goToSocioTestStudy} imageSrc="/images/course4.jpg" subjectName="Sociology Test + Study" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="2 Month" courses="Course" classDay="30" classes="Classes" time="02 pm - 04 pm" />
        </div>
        <div className="item">
          <PagesItem onClick={goToSocioTestSeries} imageSrc="/images/course5.png" subjectName="Sociology Test" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="4 Months" courses="Course" classDay="30" classes="Classes" time="08 pm - 10 pm" />
        </div>
      </ReactOwlCrousel>
    </div>
  );
};

export default CourseCrousel;
