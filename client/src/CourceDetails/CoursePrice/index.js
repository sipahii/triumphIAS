import React from "react";
import CommonTitle from "../CommonTitle";
import Styles from "./index.module.scss";
const CourcePrice = (props) => {
  return (
    <div className={Styles.courcesPage}>
      <div className={Styles.courcesPage__Box}>
        <div className={Styles.courcesPage__Box__inner}>
          <CommonTitle head="Course Price" />
          <div className={Styles.courcesPage__Box__inner__courcePrice}>
            <span>₹ {props.price}</span>
            <button onClick={() => props.onClick(props.courseName, props.price)} className={Styles.courcesPage__Box__inner__courcePrice__enrollBtn}>
              Enroll THis Course
            </button>
            <button className={Styles.courcesPage__Box__inner__courcePrice__pdf}>DOWNLOAD PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourcePrice;
