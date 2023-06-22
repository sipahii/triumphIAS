import React from "react";
import CourseCard from "./CourseCard";
import style from "./index.module.scss";
import ReactOwlCrousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const CourseCrousel = () => {
  const options = {
    margin: 30,
    loop: true,
    nav: true,
    dots: false,
    fade: 100,
    smartSpeed: 1500,
    center: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      479: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className={style.arrowFlex}>
      <div className={style.courseCrousel}>
        <ReactOwlCrousel className="owl-theme slider" {...options}>
          <div className="item">
            <CourseCard first="Essay" last="Writing" backgroundcolor="#4cb5f5" color="#fff" />
          </div>
          <div className="item">
            <CourseCard first="Sociology" width="300px" backgroundcolor="#f0810f" height="260px" color="#000" last="Optional" padding="40px 30px" />
          </div>
          <div className="item">
            <CourseCard first="General" last="Studies" backgroundcolor="#fa6775" color="#fff" />
          </div>
        </ReactOwlCrousel>
      </div>
    </div>
  );
};

export default CourseCrousel;
