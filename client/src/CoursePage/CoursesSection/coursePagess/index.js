import React from "react";
import Styles from "./index.module.scss";

const PagesItem = (props) => {
  return (
    <>
      <div className={Styles.coursepageArea}>
        <div className={Styles.coursepageArea__coursespage}>
          <div className={Styles.coursepageArea__coursespage__courseImage}>
            <img src={props.imageSrc} alt="error"></img>
            <div
              className={
                Styles.coursepageArea__coursespage__courseImage__imageLayer
              }
            >
              <span>
                <i className="fa-solid fa-link"></i>
              </span>
            </div>
          </div>
          <div className={Styles.coursepageArea__coursespage__courseDetail}>
            <h3>{props.subjectName}</h3>
            <p>Rmply dummy text printing setting industry it’s free demo.</p>
            <ul>
              <li>
                <h5>{props.month}</h5>
                <span>{props.courses}</span>
              </li>
              <li>
                <h5>{props.classDay}</h5>
                <span>{props.classes}</span>
              </li>
              <li>
                <h5>{props.time}</h5>
                <span>Classes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PagesItem;
